import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Services are organised by locale sub-folder (services/en, services/fr, services/de).
// The slug (filename) is kept identical across locales so the language switcher
// can map a service detail page to its translation by simply swapping the
// locale segment of the URL.
const serviceOption = z.object({
  description: z.string(),
  duration: z.number().describe("Duration in minutes"),
  price: z.number().describe("Regular price in local currency"),
  /** Optional discount applied to `price`; omit to show the regular price with no offer. */
  discountPercent: z.number().min(0).max(100).optional(),
  /** Optional Cal.com event link (e.g. "handle/event-slug") to embed an inline booking calendar for this option. */
  calLink: z.string().optional(),
});

const services = defineCollection({
  loader: glob({ base: "./src/content/services", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    lang: z.enum(["en", "fr", "de"]),
    title: z.string(),
    shortDescription: z.string().optional(),
    duration: z.number().describe("Duration in minutes").optional(),
    price: z
      .number()
      .describe("Regular price in the local currency")
      .optional(),
    /** Optional discount applied to `price`; omit to show the regular price with no offer. */
    discountPercent: z.number().min(0).max(100).optional(),
    currency: z.string().default("CHF"),
    options: z.array(serviceOption).default([]),
    /** Path to an image under /public, kept as a plain string to avoid requiring real photography. */
    image: z.string(),
    imageAlt: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    suitableFor: z.array(z.string()).default([]),
    whatToExpect: z.array(z.string()).default([]),
  }),
});

// Testimonials are similarly organised by locale so quotes read naturally in
// each language rather than being machine translated at render time.
const testimonials = defineCollection({
  loader: glob({
    base: "./src/content/testimonials",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    lang: z.enum(["en", "fr", "de"]),
    name: z.string(),
    location: z.string().optional(),
    quote: z.string(),
    rating: z.number().min(1).max(5).default(5),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = {
  services,
  testimonials,
};
