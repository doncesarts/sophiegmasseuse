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
  /** Building name or specific location within the address. */
  building?: string;
  city: string;
  /** Human readable service area, e.g. "Zurich and surrounding area". */
  serviceArea: string;
  /** Public booking URL used by the booking embed and fallback link. */
  bookingUrl: string;
  instagramUrl?: string;
  facebookUrl?: string;
  /** Google Business Profile / Maps listing URL, used for JSON-LD `hasMap` and NAP consistency. */
  googleMapsUrl?: string;
  /** Latitude/longitude of the studio, used for JSON-LD `geo` (improves Maps/local pack accuracy). */
  geo?: { latitude: number; longitude: number };
  /** schema.org priceRange, e.g. "CHF 50-100". */
  priceRange: string;
  /** schema.org openingHoursSpecification strings, e.g. "Mo-Fr 09:00-19:00". */
  openingHours: string[];
  /**
   * Google reviews social proof. Kept disabled until the Google Business Profile
   * is claimed and verified — flip `enabled` to true and fill in the fields to
   * surface the rating badge and `aggregateRating` JSON-LD across the site.
   */
  reviews: {
    enabled: boolean;
    rating?: number;
    count?: number;
    /** Link to the public Google reviews page for this business. */
    url?: string;
  };
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
  name: "Sophie Massage",
  therapistName: "Sophie Goupil",
  tagline: "Massage & wellbeing",
  description:
    "Independent massage practice in Zurich offering calm and attentive wellbeing treatments. A journey for the senses.",
  email: "sophie.g.massage@gmail.com",
  phone: "+41 77 804 44 52",
  address: "Glattwiesenstrasse 213, 8051 Zurich",
  building: "Gemeinschaftsräume Glattwiesen",
  city: "Switzerland",
  serviceArea: "Zurich 11",
  bookingUrl: "https://cal.com/sophiegmassage",
  instagramUrl: "",
  facebookUrl: "https://facebook.com/SophieMassageZurich",
  googleMapsUrl: "https://maps.app.goo.gl/mPGLm1mTLfZudURg8",
  geo: { latitude: 47.4042, longitude: 8.5833 },
  priceRange: "CHF 60-130",
  openingHours: ["Wed-Thur 09:00-21:00"],
  // TODO: set enabled: true and fill in real values once the Google Business Profile is verified.
  reviews: {
    enabled: false,
    rating: undefined,
    count: undefined,
    url: "",
  },
  colors: {
    primary: "#5B7A63",
    secondary: "#B9713F",
    accent: "#D8B36B",
  },
  socialImage: "/images/og-image.svg",
  logo: "/images/logo.svg",
  favicon: "/favicon/favicon.svg",
  seo: {
    defaultTitle: "Sophie Massage — Independent Massage Therapy in Zurich",
    defaultDescription:
      "Calm and attentive massage treatments, an invitation to travel. Book your session with Sophie Goupil in Zurich.",
  },
};
