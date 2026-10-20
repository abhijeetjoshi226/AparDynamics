import type { ImageAsset } from "./services";

export type PortaProduct = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  intro: string;
  image: ImageAsset;
  gallery: ImageAsset[];
  features: string[];
  idealFor: string[];
  options: string[];
  seoTitle: string;
  seoDescription: string;
};

const photo = (name: string, alt: string): ImageAsset => ({ src: `/images/just-porta/${name}.webp`, alt, fit: "cover" });

export const justPorta = {
  name: "Just Porta",
  tagline: "Perfectly portable",
  slogan: "Your portable space partner",
  logo: "/images/brand/just-porta-logo.png",
  intro:
    "Just Porta is the portable structures brand of Apar Dynamics — strong, durable and flexible cabins built for your space and designed for your needs.",
  commonFeatures: [
    { title: "Strong steel structure", text: "Durable steel construction built to last." },
    { title: "Quick installation", text: "Ready-to-use solutions that save time on site." },
    { title: "Weather resistant", text: "Designed for outdoor and remote locations." },
    { title: "Customizable", text: "Sizes and layouts tailored to your requirement." },
    { title: "Cost effective", text: "A practical alternative to conventional construction." },
  ],
};

export const portaProducts: PortaProduct[] = [
  {
    slug: "security-cabins",
    title: "Security Cabins",
    tagline: "Safe · Strong · Smart",
    summary: "Portable guard rooms and security cabins for entry points, gated communities and industrial sites.",
    intro:
      "Durable and reliable security cabins for every environment. Easy to transport and relocate, with a strong steel structure and a secure, comfortable workspace for your guard or operator.",
    image: photo("security-1", "White and navy portable security cabin with barred window"),
    gallery: [
      photo("security-2", "Portable security cabin with grilled windows"),
      photo("security-3", "Portable security cabin with open doorway and timber-finish floor"),
      photo("security-4", "Portable security cabin with large glazed windows and canopy"),
      photo("security-green", "Green and white portable security cabin with door and window"),
    ],
    features: [
      "Easy to transport and relocate",
      "Strong and durable steel structure",
      "Quick installation — ready to use",
      "Weather-resistant design",
      "Secure and comfortable workspace",
      "Customizable size and layout",
      "Cost-effective solution",
    ],
    idealFor: [
      "Security at entry points",
      "Residential and gated communities",
      "Industrial and warehouse sites",
      "Parking and traffic management",
      "Events, malls and commercial lots",
      "Construction and remote sites",
      "Toll booths and highway projects",
    ],
    options: ["Windows with protective grills", "Door and locking arrangement", "Canopy / sunshade", "Colour and finish"],
    seoTitle: "Portable Security Cabins in Pune",
    seoDescription:
      "Portable security cabins and guard rooms by Just Porta (Apar Dynamics): strong steel structure, quick installation, custom sizes. Pune.",
  },
  {
    slug: "site-offices",
    title: "Site Offices & Control Rooms",
    tagline: "Ideal for construction sites and industrial projects",
    summary: "Portable site office cabins for construction sites, industrial projects and remote locations.",
    intro:
      "Site office cabins ideal for construction sites, industrial projects and remote locations — a ready workspace delivered where you need it, with customizable sizes and layouts.",
    image: photo("site-office", "White portable site office cabin with red base and barred windows"),
    gallery: [photo("modular-cabin", "Portable cabin with large windows used as an office")],
    features: [
      "Strong steel structure",
      "Quick installation",
      "Weather-resistant",
      "Customizable sizes and layouts",
      "Cost-effective solution",
    ],
    idealFor: ["Construction sites", "Industrial areas", "Highway projects", "Remote locations"],
    options: ["Window and door configuration", "Partitions and layout", "Colour and finish"],
    seoTitle: "Portable Site Office Cabins in Pune",
    seoDescription:
      "Portable site office cabins for construction sites, industrial projects and remote locations. Customizable steel cabins by Just Porta, Pune.",
  },
  {
    slug: "toilet-cabins",
    title: "Toilet Cabins",
    tagline: "Hygienic & durable",
    summary: "Hygienic and durable portable toilet cabins for all locations.",
    intro:
      "Hygienic, durable toilet cabin solutions for construction sites, industrial areas, events and other locations where permanent facilities are not available.",
    image: photo("toilet-cabin", "Blue and white portable toilet cabin with four doors"),
    gallery: [],
    features: ["Hygienic and durable", "Strong steel structure", "Quick installation", "Weather resistant", "Customizable layouts"],
    idealFor: ["Construction sites", "Industrial areas", "Highway projects", "Events & exhibitions", "Farm lands"],
    options: ["Number of units", "Layout and fittings", "Colour and finish"],
    seoTitle: "Portable Toilet Cabins in Pune",
    seoDescription:
      "Hygienic, durable portable toilet cabins by Just Porta for construction sites, industrial areas, events and highway projects. Pune.",
  },
  {
    slug: "shop-and-canteen-cabins",
    title: "Shop & Canteen Cabins",
    tagline: "For retail, kiosks, food stalls and catering",
    summary: "Portable shop cabins, kiosks and food / canteen cabins for retail, catering and events.",
    intro:
      "Shop cabins are perfect for retail shops, kiosks, small businesses and events. Food and canteen cabins serve food stalls, canteens and catering services. Both are customizable to your layout.",
    image: photo("shop-cabin", "Blue portable shop cabin with open serving window"),
    gallery: [photo("canteen-cabin", "White and orange portable canteen cabin with roller shutter")],
    features: ["Serving window or roller shutter options", "Strong steel structure", "Quick installation", "Weather resistant", "Customizable"],
    idealFor: ["Shops and retail outlets", "Kiosks and small businesses", "Food stalls and canteens", "Catering services", "Events & exhibitions"],
    options: ["Counter and window arrangement", "Roller shutter", "Branding colours", "Interior fittings on request"],
    seoTitle: "Shop & Canteen Cabins in Pune",
    seoDescription:
      "Portable shop cabins, kiosks and food or canteen cabins by Just Porta (Apar Dynamics) — customizable steel cabins for retail and catering.",
  },
  {
    slug: "modular-cabins",
    title: "Modular & Custom Cabins",
    tagline: "Tailored to your exact requirements",
    summary: "Modular and fully custom cabins sized and laid out to your requirement.",
    intro:
      "When a standard cabin does not fit, we build modular and custom cabins tailored to your exact requirements — layout, openings, finish and size.",
    image: photo("modular-cabin", "White portable modular cabin with large glazed openings"),
    gallery: [],
    features: ["Tailored sizes and layouts", "Strong steel structure", "Quick installation", "Weather resistant", "Cost-effective"],
    idealFor: ["Offices and control rooms", "Retail and hospitality", "Industrial facilities", "Remote locations"],
    options: ["Glazed openings", "Layout and partitions", "Colour and finish"],
    seoTitle: "Modular & Custom Cabins in Pune",
    seoDescription:
      "Modular and custom portable cabins tailored to your exact requirements. Steel construction, quick installation. Just Porta, Pune.",
  },
  {
    slug: "premium-cottages",
    title: "Premium Portable Cottages",
    tagline: "Modern · Stylish · Ready-to-use living spaces",
    summary: "Premium portable cottages and modular living spaces designed for comfort, mobility and elegance.",
    intro:
      "Premium portable cottages designed for comfort, mobility and elegance — modern design with large glass facades, durable steel structure and customizable layouts and finishes.",
    image: photo("cottage-main", "Modern white capsule-style portable cottage with large glass facade"),
    gallery: [
      photo("cottage-capsule", "Capsule home portable cottage"),
      photo("cottage-glass", "Luxury glass cottage"),
      photo("cottage-wood", "Compact wooden cabin with pitched roof"),
      photo("cottage-studio", "Modular studio unit"),
    ],
    features: [
      "Premium modern design with large glass facades",
      "Fully portable and quick installation",
      "Durable steel structure",
      "Customizable layouts and finishes",
      "Energy-efficient and weather-resistant",
      "Spacious interiors with natural lighting",
      "Plug-and-play electrical setup",
      "Optional furniture and interiors",
    ],
    idealFor: ["Farmhouses", "Resorts & homestays", "Site offices", "Guest houses", "Weekend homes"],
    options: ["Capsule homes", "Luxury glass cottages", "Compact wooden cabins", "Modular studio units"],
    seoTitle: "Premium Portable Cottages in Pune",
    seoDescription:
      "Premium portable cottages by Just Porta: capsule homes, glass cottages, wooden cabins and modular studios — ready-to-use living spaces.",
  },
];

export function getPortaProduct(slug: string) {
  return portaProducts.find((p) => p.slug === slug);
}
