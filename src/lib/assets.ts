const BLOB_URL = process.env.NEXT_PUBLIC_BLOB_URL || "";

/** Resolve an asset path — uses Vercel Blob in production, local /public in dev */
export function asset(path: string): string {
  // If blob URL is configured, prefix all asset paths with it
  if (BLOB_URL) {
    // Strip leading slash if present
    const clean = path.startsWith("/") ? path.slice(1) : path;
    return `${BLOB_URL}/${clean}`;
  }
  // Fallback to local public directory
  return path;
}
