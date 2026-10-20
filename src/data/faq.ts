import { company, fullAddress } from "./site";

export type Faq = { q: string; a: string };

/** Answers use only facts from the company profile, brochures and the quote form itself. */
export const generalFaqs: Faq[] = [
  {
    q: "Where is Apar Dynamics located?",
    a: `Our manufacturing unit is at ${fullAddress}. You can call ${company.phoneDisplay} or email ${company.email}.`,
  },
  {
    q: "What does Apar Dynamics make?",
    a: "We design and manufacture material handling trolleys and equipment, assembly fixtures and lines, robotic automation and welding solutions, testing and inspection fixtures, vision systems, and MS and SS fabrication including industrial tables, pharma and food-handling equipment.",
  },
  {
    q: "Can you build to my drawing or from a requirement?",
    a: "Yes. We offer complete fabrication packages that include 3D CAD design, engineering development and manufacture as per your process and product requirements. You can attach drawings or specifications (PDF, images, DWG, DXF, STEP, Office files or ZIP, up to 4 MB) to the quote form.",
  },
  {
    q: "Which industries do you work with?",
    a: "Automotive, engineering and manufacturing, electrical and electronics, pharmaceutical, food processing, healthcare and medical equipment, and consumer goods.",
  },
  {
    q: "How do I request a quote?",
    a: `Use the Request a Quote form on this website, call ${company.phoneDisplay}, message us on WhatsApp, or email ${company.email} with your requirement.`,
  },
];

export const portaFaqs: Faq[] = [
  {
    q: "What is Just Porta?",
    a: "Just Porta is the portable structures brand of Apar Dynamics, offering customized portable cabins and modular structures.",
  },
  {
    q: "What types of portable cabins do you offer?",
    a: "Security cabins and guard rooms, site offices and control rooms, toilet cabins, shop and canteen cabins, modular and custom cabins, and premium portable cottages.",
  },
  {
    q: "Can cabin size and layout be customized?",
    a: "Yes. Just Porta cabins are customizable in size and layout, and specifications, dimensions and finishes are confirmed in your quotation.",
  },
  {
    q: "Where are Just Porta cabins used?",
    a: "Typical uses include construction sites, industrial areas, highway projects, farm lands, shops and retail outlets, events and exhibitions, gated communities, parking and toll booths, and remote locations.",
  },
  {
    q: "How do I enquire about a portable cabin?",
    a: `Use the Request a Quote form, WhatsApp us, call ${company.phoneDisplay}, or email ${company.email}.`,
  },
];
