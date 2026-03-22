import { put, list } from "@vercel/blob";
import { readFileSync, readdirSync } from "fs";
import { join, basename } from "path";
import { config } from "dotenv";

config({ path: ".env.local" });

const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;
if (!BLOB_TOKEN) {
  console.error("Missing BLOB_READ_WRITE_TOKEN in .env.local");
  process.exit(1);
}

async function uploadDir(localDir, blobPrefix) {
  const files = readdirSync(localDir).filter(
    (f) => f.endsWith(".jpg") || f.endsWith(".jpeg") || f.endsWith(".png")
  );
  console.log(`Uploading ${files.length} files from ${localDir} → ${blobPrefix}/`);

  const urls = {};
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = join(localDir, file);
    const blobPath = `${blobPrefix}/${file}`;
    const data = readFileSync(filePath);

    const { url } = await put(blobPath, data, {
      access: "public",
      token: BLOB_TOKEN,
      addRandomSuffix: false,
    });

    urls[file] = url;
    if ((i + 1) % 50 === 0 || i === files.length - 1) {
      console.log(`  ${i + 1}/${files.length} uploaded`);
    }
  }
  return urls;
}

async function main() {
  console.log("=== Uploading to Vercel Blob ===\n");

  // 1. Hero frames
  const frameUrls = await uploadDir("public/frames", "frames");

  // 2. Staff photos
  const staffUrls = await uploadDir("public/staff", "staff");

  // 3. Therapy images
  const imageUrls = await uploadDir("public/images", "images");

  // 4. Logo
  const logoData = readFileSync("public/logo-transparent.png");
  const { url: logoUrl } = await put("logo-transparent.png", logoData, {
    access: "public",
    token: BLOB_TOKEN,
    addRandomSuffix: false,
  });

  // Output the base URL (all files share the same blob store prefix)
  const sampleUrl = Object.values(frameUrls)[0];
  const baseUrl = sampleUrl.substring(0, sampleUrl.lastIndexOf("/frames/"));

  console.log("\n=== Done ===");
  console.log(`Base URL: ${baseUrl}`);
  console.log(`Logo: ${logoUrl}`);
  console.log(`Frames: ${Object.keys(frameUrls).length} files`);
  console.log(`Staff: ${Object.keys(staffUrls).length} files`);
  console.log(`Images: ${Object.keys(imageUrls).length} files`);
  console.log(`\nAdd this to your .env.local and Vercel env vars:`);
  console.log(`NEXT_PUBLIC_BLOB_URL=${baseUrl}`);
}

main().catch(console.error);
