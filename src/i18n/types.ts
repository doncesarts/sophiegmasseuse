// Shared shape for every locale's translation file. Keep components
// language-agnostic by having them consume this interface instead of
// hardcoded strings.

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface Translations {
  nav: {
    home: string;
    services: string;
    about: string;
    faq: string;
    contact: string;
    book: string;
  };
  common: {
    bookNow: string;
    discoverTreatments: string;
    learnMore: string;
    readMore: string;
    viewService: string;
    backToServices: string;
    relatedServices: string;
    minutesShort: string;
    from: string;
    skipToContent: string;
    languageLabel: string;
    specialOfferBadge: string;
    specialOfferNotice: string;
  };
  seo: {
    home: { title: string; description: string };
    services: { title: string; description: string };
    about: { title: string; description: string };
    faq: { title: string; description: string };
    contact: { title: string; description: string };
    book: { title: string; description: string };
    privacy: { title: string; description: string };
    legal: { title: string; description: string };
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
  };
  intro: {
    title: string;
    body: string;
    cta: string;
  };
  featuredServices: {
    title: string;
    subtitle: string;
    cta: string;
  };
  benefits: {
    title: string;
    subtitle: string;
    items: BenefitItem[];
  };
  philosophy: {
    title: string;
    body: string;
    quote: string;
    quoteAuthor: string;
  };
  testimonialsSection: {
    title: string;
    subtitle: string;
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  locationSection: {
    title: string;
    body: string;
    cta: string;
  };
  bookingCta: {
    title: string;
    subtitle: string;
    cta: string;
  };
  servicesPage: {
    title: string;
    intro: string;
  };
  serviceDetail: {
    optionsTitle: string;
    specialOfferNotice: string;
    suitableForTitle: string;
    whatToExpectTitle: string;
    relatedTitle: string;
    ctaTitle: string;
    ctaBody: string;
  };
  about: {
    title: string;
    intro: string;
    biographyTitle: string;
    biography: string[];
    philosophyTitle: string;
    philosophyBody: string;
    qualificationsTitle: string;
    qualificationsNote: string;
    qualifications: string[];
    approachTitle: string;
    approachBody: string;
    cta: string;
  };
  faqPage: {
    title: string;
    intro: string;
    items: FaqItem[];
  };
  contactPage: {
    title: string;
    intro: string;
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
    areaLabel: string;
    socialLabel: string;
    bookAlternative: string;
  };
  bookPage: {
    title: string;
    intro: string;
    fallbackText: string;
    fallbackCta: string;
    contactAlternative: string;
  };
  footer: {
    description: string;
    navTitle: string;
    contactTitle: string;
    followTitle: string;
    languageTitle: string;
    rightsReserved: string;
    privacy: string;
    legal: string;
  };
  legalPage: { title: string; body: string[] };
  privacyPage: { title: string; body: string[] };
  notFound: { title: string; body: string; cta: string };
  serverError: { title: string; body: string; cta: string };
}
