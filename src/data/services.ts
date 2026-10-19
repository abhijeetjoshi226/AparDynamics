export type ImageAsset = {
  src: string;
  alt: string;
  /** `contain` for product cut-outs and CAD renders on white, `cover` for photographs. */
  fit: "cover" | "contain";
  /** Optional CSS object-position for cropped photographs, e.g. "center 40%". */
  position?: string;
};

export type Service = {
  slug: string;
  title: string;
  /** Short label used in cards and the quote form */
  shortTitle: string;
  summary: string;
  intro: string;
  image: ImageAsset;
  gallery: ImageAsset[];
  /** Capabilities / offerings taken from the company profile */
  offerings: string[];
  benefits: { title: string; text: string }[];
  industries: string[];
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
};

const img = (name: string, alt: string): ImageAsset => ({
  src: `/images/solutions/${name}.webp`,
  alt,
  fit: "contain",
});

const prod = (name: string, alt: string, fit: "cover" | "contain" = "cover", position?: string): ImageAsset => ({
  src: `/images/products/${name}.webp`,
  alt,
  fit,
  position,
});

export const services: Service[] = [
  {
    slug: "material-handling",
    title: "Material Handling Solutions",
    shortTitle: "Material Handling",
    summary: "Trolleys, carts and handling equipment built around your parts, loads and shop-floor layout.",
    intro:
      "We design and manufacture material handling trolleys and equipment that move components safely and efficiently through your plant. Each unit is engineered around the part, the load and the way your operators work.",
    image: prod("trolley-1", "White four-shelf order-picking trolley with red castor wheels", "cover", "center 60%"),
    gallery: [
      prod("trolley-2", "White tiered storage trolley with pegs on castors"),
      prod("trolley-3", "White multi-tier roller trolley for long components"),
      prod("trolley-4", "Blue steel rack trolley with mesh base"),
      prod("trolley-5", "Black mesh cage trolley with towbar"),
      prod("trolley-6", "Blue stackable component rack on castors"),
    ],
    offerings: [
      "Material handling trolleys",
      "Material handling equipment",
      "Transferring and palletising aids",
      "Sorting, packaging and labelling support equipment",
      "MS and SS construction to suit the environment",
    ],
    benefits: [
      { title: "Built around your part", text: "Trolley geometry, racking and load points are designed to your components and process." },
      { title: "MS or SS construction", text: "Choose mild steel for general plant use or stainless steel for clean and washdown areas." },
      { title: "Custom 3D CAD design", text: "Designs are modelled in 3D CAD before fabrication begins." },
    ],
    industries: ["Automotive", "Engineering & Manufacturing", "Pharmaceutical", "Food Processing"],
    featured: true,
    seoTitle: "Material Handling Trolleys & Equipment in Pune",
    seoDescription:
      "Custom material handling trolleys and equipment in MS and SS, designed and fabricated by Apar Dynamics, Dehu Road, Pune.",
  },
  {
    slug: "assembly-fixtures-and-lines",
    title: "Assembly Fixtures & Lines",
    shortTitle: "Assembly Fixtures & Lines",
    summary: "Fixtures, workstations and complete assembly solutions for accurate, repeatable operations.",
    intro:
      "From a single assembly fixture to an end-to-end assembly line, we engineer solutions that help operators and machines position, insert, screw and mount components accurately and repeatably.",
    image: prod("ergonomic-workstation", "Ergonomic assembly workstation with roller conveyor and bin rack", "contain"),
    gallery: [
      prod("welding-fixture-table", "Welding fixture table with clamps and tube fixtures", "contain"),
      prod("spm-assembly-machine", "Blue assembly machine with feeder bowl and press unit", "contain"),
      img("cad-6", "CAD render of a multi-operator assembly workstation"),
      img("cad-4", "CAD render of a semi-automatic assembly station with operator"),
    ],
    offerings: [
      "Assembly fixtures",
      "Assembly solutions and workstations",
      "Assembly lines",
      "Inserting, screwing, positioning and mounting operations",
      "Ergonomic operator stations",
    ],
    benefits: [
      { title: "Repeatable accuracy", text: "Fixtures designed to hold and locate parts the same way every cycle." },
      { title: "Scalable", text: "Start with a single fixture and extend to a full line as volumes grow." },
      { title: "Operator-friendly", text: "Station layouts consider reach, posture and safe operation." },
    ],
    industries: ["Automotive", "Engineering & Manufacturing", "Electrical & Electronics", "Consumer Goods"],
    featured: true,
    seoTitle: "Assembly Fixtures & Assembly Lines in Pune",
    seoDescription:
      "Custom assembly fixtures, assembly solutions and production lines engineered and manufactured by Apar Dynamics in Pune.",
  },
  {
    slug: "robotic-automation",
    title: "Robotic Automation & Welding",
    shortTitle: "Robotic Automation",
    summary: "Robotic work cells, automated operations and robotic welding to improve consistency and throughput.",
    intro:
      "We provide robotic solutions that improve consistency and throughput, including robotic welding supported by our in-house robotic welding units. Our scope also covers machine tending and automated material handling tasks.",
    image: img("cad-4", "CAD render of a semi-automatic assembly station with operator"),
    gallery: [
      img("cad-1", "CAD render of a guarded automated work cell"),
      img("cad-2", "CAD render of a pneumatic clamping fixture on a base plate"),
      prod("welding-fixture-table", "Welding fixture table with clamps and tube fixtures", "contain"),
    ],
    offerings: [
      "Robotic welding — spot, arc and TIG",
      "Robotic solutions and work cells",
      "Machine tending — CNC, press and injection moulding machines",
      "Material addition — painting and dispensing",
      "Material removal — polishing, deburring, drilling and sanding",
    ],
    benefits: [
      { title: "In-house robotic welding", text: "Robotic welding capacity is part of our own 10,000 sq ft facility." },
      { title: "Consistent results", text: "Automation reduces variation between parts and between shifts." },
      { title: "Application-led", text: "We start from your part and process, then choose the right level of automation." },
    ],
    industries: ["Automotive", "Engineering & Manufacturing", "Electrical & Electronics"],
    featured: true,
    seoTitle: "Robotic Welding & Industrial Automation in Pune",
    seoDescription:
      "Robotic welding, robotic solutions and machine tending from Apar Dynamics, Dehu Road, Pune. Request a quote for your application.",
  },
  {
    slug: "testing-and-inspection",
    title: "Testing & Inspection Fixtures",
    shortTitle: "Testing & Inspection",
    summary: "Checking fixtures and testing fixtures that support product quality and compliance.",
    intro:
      "Reliable checking and testing fixtures help you verify product quality and conformity to specification. We design and build fixtures for automotive and other industries, tailored to the part being checked.",
    image: prod("profile-test-station", "Aluminium-profile test station with touch screen and clamping unit", "contain"),
    gallery: [
      img("cad-5", "CAD render of a testing station with display and signal tower"),
      img("cad-1", "CAD render of a guarded testing cell"),
      img("cad-2", "CAD render of a pneumatic checking fixture"),
    ],
    offerings: [
      "Checking fixtures",
      "Testing fixtures",
      "Inspection fixtures for automobile and other industries",
      "Measuring and inspecting stations",
    ],
    benefits: [
      { title: "Quality built in", text: "Fixtures designed to verify the features and tolerances that matter to your product." },
      { title: "Custom engineered", text: "Every fixture is specific to your part, drawing and inspection method." },
      { title: "Ready for integration", text: "Can be combined with vision systems and assembly stations." },
    ],
    industries: ["Automotive", "Engineering & Manufacturing", "Electrical & Electronics"],
    featured: true,
    seoTitle: "Testing, Checking & Inspection Fixtures in Pune",
    seoDescription:
      "Custom checking, testing and inspection fixtures for automotive and industrial applications, engineered by Apar Dynamics, Pune.",
  },
  {
    slug: "ms-ss-fabrication",
    title: "MS & SS Fabrication",
    shortTitle: "MS & SS Fabrication",
    summary: "End-to-end mild steel and stainless steel fabrication, from industrial tables to pharma and food-handling equipment.",
    intro:
      "We offer a wide range of end-to-end MS and SS fabrication services, supported by an extensive range of machinery including tube laser cutting, laser cutting and CNC machining, to meet varied fabrication requirements.",
    image: prod("laser-cutting-machine", "Sheet laser cutting machine inside a workshop"),
    gallery: [
      img("ss-1", "Stainless steel mobile hopper for pharmaceutical handling"),
      img("ss-4", "Stainless steel three-bay sink table"),
      img("ss-5", "Stainless steel industrial worktable with sink"),
      img("ss-6", "Stainless steel tilting bin on castors"),
      img("ss-7", "Stainless steel hospital bed"),
      prod("press-brake", "Blue press brake with foot pedals and control box"),
    ],
    offerings: [
      "Pharma handling equipment",
      "Medical beds and tables",
      "Kitchen counters, tables and trays",
      "Small storage containers and tanks",
      "Industrial tables and counters",
      "Food handling equipment",
      "Custom MS structures, frames and trolleys",
    ],
    benefits: [
      { title: "Complete fabrication packages", text: "3D CAD design, engineering development and manufacture to your process and product requirements." },
      { title: "In-house machinery", text: "Tube laser cutting, laser cutting and CNC machining under one roof." },
      { title: "MS and SS", text: "Mild steel and stainless steel to suit strength, hygiene and finish requirements." },
    ],
    industries: ["Pharmaceutical", "Food Processing", "Healthcare & Medical", "Engineering & Manufacturing"],
    featured: true,
    seoTitle: "MS & SS Fabrication Services in Pune",
    seoDescription:
      "End-to-end MS and SS fabrication in Pune — industrial tables, pharma and food handling equipment, trolleys and custom structures.",
  },
  {
    slug: "vision-systems",
    title: "Vision Systems",
    shortTitle: "Vision Systems",
    summary: "Vision-based inspection integrated with fixtures, assembly stations and automation cells.",
    intro:
      "Vision systems extend checking and testing with automated, camera-based inspection. We integrate them with fixtures, assembly stations and automation cells to suit your inspection requirement.",
    image: img("cad-1", "CAD render of a guarded inspection and automation cell"),
    gallery: [img("cad-5", "CAD render of an inspection station with display and signal tower")],
    offerings: [
      "Vision systems for inspection applications",
      "Integration with testing and checking fixtures",
      "Integration with assembly stations and automation cells",
    ],
    benefits: [
      { title: "Scoped to your need", text: "We confirm the inspection task, part and cycle time before proposing a solution." },
      { title: "Integrated", text: "Mechanical fixture, controls and vision engineered as one system." },
      { title: "Supports quality goals", text: "Helps verify parts consistently as part of your quality process." },
    ],
    industries: ["Automotive", "Electrical & Electronics", "Pharmaceutical", "Consumer Goods"],
    featured: true,
    seoTitle: "Vision Systems for Inspection & Automation",
    seoDescription:
      "Vision systems integrated with checking fixtures, assembly stations and automation cells by Apar Dynamics, Pune.",
  },
  {
    slug: "custom-engineering-and-cad",
    title: "Custom Engineering & 3D CAD Design",
    shortTitle: "Custom Engineering & CAD",
    summary: "Complete packages from 3D CAD design and engineering development through to manufacture.",
    intro:
      "We assist customers with complete fabrication packages that include 3D CAD design, engineering development and manufacture as per process and product requirements — one team from concept to delivery.",
    image: img("cad-3", "CAD render of a rotary assembly fixture on a steel frame"),
    gallery: [
      img("cad-4", "CAD render of a semi-automatic assembly station"),
      img("cad-6", "CAD render of a multi-operator assembly workstation"),
    ],
    offerings: [
      "3D CAD design",
      "Engineering development",
      "Manufacture as per process and product requirements",
      "Continual improvement of methods to offer innovative solutions",
    ],
    benefits: [
      { title: "One team", text: "Design and manufacturing are coordinated, reducing hand-offs." },
      { title: "Requirement-driven", text: "Solutions are developed from your process and product requirements." },
      { title: "Innovative methods", text: "We are constantly applying new methods to improve our services." },
    ],
    industries: ["Automotive", "Engineering & Manufacturing", "Pharmaceutical", "Food Processing"],
    featured: false,
    seoTitle: "Custom Engineering & 3D CAD Design in Pune",
    seoDescription:
      "3D CAD design, engineering development and manufacturing under one roof — Apar Dynamics, Dehu Road, Pune.",
  },
];

export const featuredServices = services.filter((s) => s.featured);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
