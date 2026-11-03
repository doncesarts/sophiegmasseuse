// Centralized Cal.com configuration.
// Keep the booking URL in siteConfig so the site's public configuration has one
// source of truth.
import { siteConfig } from "./site";

/**
 * The Felizzio page URL, e.g. `https://www.felizzio.com/SHOP_ID`.
 * Keep this export separate so the booking provider can be swapped without
 * changing the components that render the booking embed.
 */
export const FELIZZIO_URL: string = siteConfig.giftsUrl ?? "";

/**
 * The Felizzio.com "link" (path only, e.g. `your-handle`) used by the embed.js
 * inline embed, derived from FELIZZIO_URL so there's a single source of truth.
 */
export const FELIZZIO_LINK = (local: string) =>
  FELIZZIO_URL.replace(
    "https://www.felizzio.com/",
    `https://www.felizzio.com/${local}/`,
  );
