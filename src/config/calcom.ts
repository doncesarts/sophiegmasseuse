// Centralized Cal.com configuration.
// Keep the booking URL in siteConfig so the site's public configuration has one
// source of truth.
import { siteConfig } from "./site";

/**
 * The Cal.com booking page URL, e.g. `https://cal.com/your-handle/session`.
 * Keep this export separate so the booking provider can be swapped without
 * changing the components that render the booking embed.
 */
export const CALCOM_URL: string = siteConfig.bookingUrl;

/**
 * The Cal.com "link" (path only, e.g. `your-handle`) used by the embed.js
 * inline embed, derived from CALCOM_URL so there's a single source of truth.
 */
export const CALCOM_LINK: string = new URL(CALCOM_URL).pathname.replace(
  /^\/+/,
  "",
);
