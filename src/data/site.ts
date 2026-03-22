export interface Address {
  suite: string;
  street: string;
  city: string;
  province: string;
  postalCode: string;
}

export interface BusinessHours {
  weekdays: string;
  note: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: Address;
  fullAddress: string;
  hours: BusinessHours;
  social: SocialLinks;
  acceptingClients: string;
  locationNote: string;
}

export const siteConfig = {
  name: "Achieve Therapy Centre",
  tagline:
    "A client-centered approach to Speech-Language Pathology and Occupational Therapy",
  phone: "613-680-1780",
  email: "info@achievetherapycentre.com",
  address: {
    suite: "Suite 310",
    street: "1 Centrepointe Dr",
    city: "Ottawa",
    province: "ON",
    postalCode: "K2G 6E2",
  },
  fullAddress: "Suite 310, 1 Centrepointe Dr, Ottawa, ON K2G 6E2",
  hours: {
    weekdays: "Monday \u2013 Friday: 9:00 am to 5:00 pm",
    note: "Therapy sessions may take place outside these hours.",
  },
  social: {
    facebook: "https://www.facebook.com/achievetherapycentre",
    instagram: "https://www.instagram.com/achievetherapycentre",
  },
  acceptingClients: "We are currently accepting new clients!",
  locationNote: "New location as of July 2, 2024",
} as const satisfies SiteConfig;
