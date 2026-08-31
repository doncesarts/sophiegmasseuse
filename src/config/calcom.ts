// Centralized Cal.com configuration.
// Replace the value in your `.env` file (see `.env.example`) — never hardcode
// the booking URL anywhere else in the codebase.
import { siteConfig } from "./site";

/**
 * The Cal.com booking page URL, e.g. `https://cal.com/your-handle/session`.
 * Read from the `PUBLIC_CALCOM_URL` environment variable so it can be changed
 * per-deployment without touching code. Falls back to `siteConfig.bookingUrl`
 * (a clearly-marked placeholder) if not set.
 */
export const CALCOM_URL: string =
  import.meta.env.PUBLIC_CALCOM_URL || siteConfig.bookingUrl;
