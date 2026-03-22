const BLOB_URL = process.env.NEXT_PUBLIC_BLOB_URL || "";

/**
 * Resolve an asset path.
 * - Production: routes through /blob/ proxy for Vercel edge caching
 * - Dev with BLOB_URL: hits blob directly
 * - Dev without BLOB_URL: falls back to local /public
 */
export function asset(path: string): string {
  const clean = path.startsWith("/") ? path.slice(1) : path;

  if (BLOB_URL) {
    // In production, use /blob/ proxy to leverage edge caching + CDN-Cache-Control
    if (typeof window !== "undefined" && window.location.hostname !== "localhost") {
      return `/blob/${clean}`;
    }
    // In dev, hit blob directly (proxy may not be running)
    return `${BLOB_URL}/${clean}`;
  }

  // No blob URL — serve from local /public
  return `/${clean}`;
}
