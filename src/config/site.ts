// Central brand/business configuration.
// Update this file to rebrand the entire site — components should never
// hardcode business information; they should read it from here instead.

export interface SiteConfig {
  /** Business / practice name shown in the header, footer and metadata. */
  name: string;
  /** The therapist's own name, used on the About page and JSON-LD. */
  therapistName: string;
  /** Short marketing tagline shown in the hero and footer. */
  tagline: string;
  /** Default description used for SEO and JSON-LD. */
  description: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  /** Human readable service area, e.g. "Zurich and surrounding area". */
  serviceArea: string;
  /** External booking URL fallback (the actual embed uses PUBLIC_CALCOM_URL). */
  bookingUrl: string;
  instagramUrl?: string;
  facebookUrl?: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  /** Path (under /public) to the default social sharing image. */
  socialImage: string;
  /** Path (under /public) to the site logo. */
  logo: string;
  favicon: string;
  seo: {
    defaultTitle: string;
    defaultDescription: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Voyage Sensoriel",
  therapistName: "Sophie Goupil",
  tagline: "Massage & wellbeing, thoughtfully personal.",
  description:
    "An independent massage practice in Zurich offering calm, attentive, and personalised wellbeing treatments.",
  email: "sophie.g.massage@gmail.com",
  phone: "+41 00 000 00 00",
  address: "Glattwiesenstr. 213, 8051 Zürich",
  city: "Zürich, Switzerland",
  serviceArea: "Zürich and the surrounding area",
  bookingUrl: "https://cal.com/example",
  instagramUrl: "",
  facebookUrl: "https://facebook.com/SophieMassageZurich",
  colors: {
    primary: "#5B7A63",
    secondary: "#B9713F",
    accent: "#D8B36B",
  },
  socialImage: "/images/placeholders/og-image.svg",
  logo: "/images/placeholders/logo.svg",
  favicon: "/favicon/favicon.svg",
  seo: {
    defaultTitle: "Voyage Sensoriel — Independent Massage Therapy in Zurich",
    defaultDescription:
      "Calm, warm and attentive massage treatments tailored to you. Book your session with Sophie Goupil in Zurich.",
  },
};
