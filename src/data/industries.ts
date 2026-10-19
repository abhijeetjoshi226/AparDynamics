import type { ImageAsset } from "./services";

export type Industry = {
  slug: string;
  name: string;
  description: string;
  /** What we make for this industry, drawn from the company profile. */
  products: string[];
  image: ImageAsset;
  /** `profile` = named directly in company material. `inferred` = follows from a listed product. */
  basis: "profile" | "inferred";
};

const product = (name: string, alt: string): ImageAsset => ({ src: `/images/products/${name}.webp`, alt, fit: "cover" });
const solution = (name: string, alt: string): ImageAsset => ({ src: `/images/solutions/${name}.webp`, alt, fit: "contain" });

export const industries: Industry[] = [
  {
    slug: "automotive",
    name: "Automotive",
    description: "Testing and inspection fixtures, assembly fixtures and robotic welding for automobile applications.",
    products: ["Testing & inspection fixtures", "Assembly fixtures & lines", "Robotic welding", "Material handling trolleys"],
    image: product("trolley-4", "Blue steel rack trolley with mesh base for component handling"),
    basis: "profile",
  },
  {
    slug: "engineering-manufacturing",
    name: "Engineering & Manufacturing",
    description: "Fixtures, automation and fabrication for general engineering and manufacturing plants.",
    products: ["Custom fixtures", "Fabricated frames and structures", "Machine tending", "Material handling equipment"],
    image: product("press-brake", "Blue press brake used for sheet metal bending"),
    basis: "profile",
  },
  {
    slug: "electrical-electronics",
    name: "Electrical & Electronics",
    description: "Assembly stations and test fixtures for electrical and electronic products.",
    products: ["Assembly workstations", "Testing fixtures", "Vision systems"],
    image: solution("cad-6", "CAD render of a multi-operator assembly workstation"),
    basis: "profile",
  },
  {
    slug: "pharmaceutical",
    name: "Pharmaceutical",
    description: "Stainless steel pharma handling equipment and hygienic fabrication.",
    products: ["Pharma handling equipment", "SS hoppers and containers", "SS tables and trolleys"],
    image: solution("ss-1", "Stainless steel mobile hopper for pharmaceutical handling"),
    basis: "profile",
  },
  {
    slug: "food-processing",
    name: "Food Processing",
    description: "Food handling equipment, kitchen counters, tables and trays in stainless steel.",
    products: ["Food handling equipment", "Kitchen counters, tables & trays", "SS storage containers & tanks"],
    image: solution("ss-4", "Stainless steel three-bay sink table for food preparation"),
    basis: "profile",
  },
  {
    slug: "healthcare-medical",
    name: "Healthcare & Medical",
    description: "Stainless steel medical beds and tables.",
    products: ["Medical beds & tables", "SS trolleys"],
    image: solution("ss-7", "Stainless steel hospital bed"),
    basis: "inferred",
  },
  {
    slug: "consumer-goods",
    name: "Consumer Goods",
    description: "Assembly and handling solutions for consumer product manufacturing.",
    products: ["Assembly solutions", "Material handling"],
    image: solution("cad-3", "CAD render of a rotary fixture assembly station"),
    basis: "profile",
  },
];

/** Homepage subset */
export const homeIndustries = industries.filter((i) =>
  ["automotive", "engineering-manufacturing", "pharmaceutical", "food-processing", "electrical-electronics", "healthcare-medical"].includes(i.slug),
);

/** Just Porta application areas listed in the supplied Just Porta brochures. */
export const portaApplications = [
  "Construction sites",
  "Industrial areas",
  "Highway projects",
  "Farm lands",
  "Shops & retail outlets",
  "Events & exhibitions",
  "Remote locations",
  "Gated communities",
  "Parking & traffic management",
  "Toll booths",
] as const;
