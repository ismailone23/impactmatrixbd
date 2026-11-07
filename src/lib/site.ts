// Set NEXT_PUBLIC_SITE_URL to the live address (no trailing slash) so canonical links, the sitemap and share cards point at it.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.impactmatrixbd.org"
).replace(/\/$/, "");
export const siteName = "Impact Matrix";
export const siteDescription =
  "Impact Matrix is a platform that helps projects across six domains of social responsibility in Bangladesh, from education and health to climate and disaster response, find support and show their results.";
