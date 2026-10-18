/**
 * Central company configuration.
 * Every fact below comes from the supplied company profile or marketing material.
 * Update values here once and they flow through the whole site.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.apardynamics.com").replace(/\/$/, "");

export const company = {
  name: "Apar Dynamics",
  legalName: "Apar Dynamics",
  tagline: "Engineering without limits",
  description:
    "Apar Dynamics is a Pune-based engineering and manufacturing company specialising in material handling, assembly solutions, robotic automation, testing and inspection fixtures, and MS & SS fabrication.",
  email: "info@apardynamics.com",
  phoneDisplay: "+91 75073 61156",
  phoneTel: "+917507361156",
  whatsappNumber: "917507361156",
  website: "www.apardynamics.com",
  address: {
    /** Full postal address as printed on the company profile (Location slide). */
    lines: ["Shed no. D2, Sr. No. 8, Hissa no. 3A", "Vitthal Nagar, Dehu Road, Dehugoan"],
    streetAddress: "Shed no. D2, Sr. No. 8, Hissa no. 3A, Vitthal Nagar, Dehu Road",
    locality: "Dehugoan, Pune",
    region: "Maharashtra",
    postalCode: "412114",
    country: "India",
    countryCode: "IN",
  },
  /**
   * ISO certificate details. The profile states "ISO certified company" without a standard
   * or certificate number. Fill `standard` (e.g. "ISO 9001:2015") only once verified.
   */
  iso: { certified: true, standard: "" as string },
} as const;

export const fullAddress = `${company.address.lines.join(", ")}, ${company.address.locality} – ${company.address.postalCode}, ${company.address.region}, ${company.address.country}`;

export const isoLabel = company.iso.standard ? `${company.iso.standard} certified` : "ISO certified company";

export function whatsappLink(message = "Hello Apar Dynamics, I would like to discuss an enquiry.") {
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type Stat = {
  value: string;
  label: string;
  detail: string;
  /** Only `true` when the figure is stated in the supplied company profile. */
  verified: boolean;
};

/** Homepage highlights. Edit here to update every place stats appear. */
export const stats: Stat[] = [
  { value: "20+", label: "Years of experience", detail: "Professional experience in manufacturing & assembly solutions", verified: true },
  { value: "10,000", label: "Sq ft facility", detail: "Manufacturing set-up established in 2024", verified: true },
  { value: "ISO", label: "Certified company", detail: "As stated in our company profile", verified: true },
  { value: "3D CAD", label: "To manufacture", detail: "Design, engineering development and fabrication", verified: true },
  { value: "2", label: "Robotic welding cells", detail: "Plus an in-house tube laser cutting machine", verified: true },
];

/** Verified machinery from the "Unit Set Up" slide. */
export const machinery = [
  { name: "Robotic welding", detail: "2 robotic welding units" },
  { name: "Tube laser cutting", detail: "1 machine — 6,500 mm length, 150 mm diameter, 1.5 kW" },
  { name: "Laser cutting", detail: "Laser cutting machines for sheet processing" },
  { name: "CNC machining", detail: "Vertical machining centre" },
] as const;

export const vision =
  "To be the premier engineering partner in manufacturing, delivering innovative solutions and exceptional quality that empower our clients to achieve their goals.";

export const mission =
  "To deliver exceptional engineering products and services with integrity and excellence, transforming challenges into opportunities for our clients and communities as well.";

export const values = [
  { title: "Safety", text: "Prioritising the health and safety of workers and the environment." },
  { title: "Sustainability", text: "Implementing eco-friendly practices and materials." },
  { title: "Collaboration", text: "Fostering teamwork and communication for better outcomes." },
  { title: "Quality assurance", text: "Ensuring products meet required specifications and performance criteria." },
  { title: "Cost-effectiveness", text: "Maintaining profitability while delivering value." },
  { title: "Flexibility", text: "Adapting to changing market demands and customising products as needed." },
  { title: "Reliability", text: "Consistently supporting customers with products that meet their expectations." },
] as const;

/** Capability matrix from the "Our Capabilities" slide. */
export const capabilities = [
  { title: "Material handling", items: ["Transferring", "Palletising", "Sorting", "Packaging", "Labelling"] },
  { title: "Assembly", items: ["Inserting", "Screwing", "Positioning", "Mounting"] },
  { title: "Material removal", items: ["Polishing", "Deburring", "Drilling", "Sanding"] },
  { title: "Quality", items: ["Inspecting", "Measuring", "Testing"] },
  { title: "Machine tending", items: ["CNC", "Press", "IMM"] },
  { title: "Material addition", items: ["Painting", "Dispensing"] },
  { title: "Welding", items: ["Spot welding", "Arc welding", "TIG welding", "Soldering"] },
] as const;

/** Social profiles confirmed in supplied material. Both belong to the Just Porta brand. */
export const socials = {
  justPortaYoutube: "https://www.youtube.com/@JustPorta",
  justPortaInstagram: "https://www.instagram.com/share/1CosoWzmy/",
  justPortaWebsite: "https://www.justporta.com",
} as const;
