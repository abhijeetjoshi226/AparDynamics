export type GalleryCategory = "facility" | "automation" | "engineering" | "fabrication" | "cabins";

/**
 * How an image should be described to visitors.
 * Never label a render or catalogue image as a completed customer project.
 */
export type GalleryKind = "Facility photo" | "CAD render" | "Product range" | "Just Porta cabin";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  kind: GalleryKind;
  src: string;
  alt: string;
  fit: "cover" | "contain";
};

export const galleryCategories: { id: "all" | GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "facility", label: "Facility & machinery" },
  { id: "automation", label: "Automation & welding" },
  { id: "engineering", label: "Fixtures & assembly" },
  { id: "fabrication", label: "SS & MS fabrication" },
  { id: "cabins", label: "Portable cabins" },
];

const f = (id: string, title: string, category: GalleryCategory, file: string, alt: string): GalleryItem => ({
  id, title, category, kind: "Facility photo", src: `/images/facility/${file}.webp`, alt, fit: "cover",
});
const c = (id: string, title: string, file: string, alt: string): GalleryItem => ({
  id, title, category: "engineering", kind: "CAD render", src: `/images/solutions/${file}.webp`, alt, fit: "contain",
});
const s = (id: string, title: string, file: string, alt: string): GalleryItem => ({
  id, title, category: "fabrication", kind: "Product range", src: `/images/solutions/${file}.webp`, alt, fit: "contain",
});
const p = (id: string, title: string, file: string, alt: string): GalleryItem => ({
  id, title, category: "cabins", kind: "Just Porta cabin", src: `/images/just-porta/${file}.webp`, alt, fit: "cover",
});

export const galleryItems: GalleryItem[] = [
  f("laser", "Tube laser cutting machine", "facility", "tube-laser-cutter", "Tube laser cutting machine installed on the Apar Dynamics shop floor"),
  f("welding", "Robotic welding", "automation", "robotic-welding", "Industrial robot arm welding a cylindrical component"),
  f("cnc", "CNC machining centre", "facility", "cnc-machining-centre", "Vertical CNC machining centre with red enclosure"),
  f("floor", "10,000 sq ft manufacturing unit", "facility", "factory-floor", "Interior of the Apar Dynamics manufacturing shed with steel roof trusses"),

  c("cad-cell", "Guarded automated work cell", "cad-1", "CAD render of a guarded automated work cell on a steel stand"),
  c("cad-clamp", "Pneumatic clamping fixture", "cad-2", "CAD render of a pneumatic clamping fixture on a base plate"),
  c("cad-rotary", "Rotary assembly station", "cad-3", "CAD render of a rotary fixture assembly station"),
  c("cad-semi", "Semi-automatic assembly station", "cad-4", "CAD render of a semi-automatic assembly station with an operator"),
  c("cad-test", "Testing station", "cad-5", "CAD render of a testing station with display and signal tower"),
  c("cad-line", "Multi-operator assembly workstation", "cad-6", "CAD render of a multi-operator assembly workstation"),

  s("ss-hopper", "Mobile hopper — pharma handling", "ss-1", "Stainless steel mobile hopper for pharmaceutical handling"),
  s("ss-cage", "Cage trolley with pallet", "ss-2", "Stainless steel cage trolley with pallet"),
  s("ss-containers", "Container trolley", "ss-3", "Stainless steel trolley carrying four lidded containers"),
  s("ss-sink", "Three-bay sink table", "ss-4", "Stainless steel three-bay sink table"),
  s("ss-table", "Industrial worktable", "ss-5", "Stainless steel industrial worktable with sink"),
  s("ss-bin", "Tilting bin", "ss-6", "Stainless steel tilting bin on castors"),
  s("ss-bed", "Hospital bed", "ss-7", "Stainless steel hospital bed"),
  s("ss-tier", "Three-tier trolley", "ss-8", "Stainless steel three-tier trolley on castors"),
  s("ss-drawer", "Trolley with drawers", "ss-9", "Stainless steel trolley with drawers"),

  p("jp-security", "Security cabin", "security-1", "Portable security cabin in white and navy"),
  p("jp-security-2", "Security cabin with grilled windows", "security-2", "Portable security cabin with grilled windows"),
  p("jp-site-office", "Site office cabin", "site-office", "White portable site office cabin with red base"),
  p("jp-shop", "Shop cabin", "shop-cabin", "Blue portable shop cabin with serving window"),
  p("jp-toilet", "Toilet cabin", "toilet-cabin", "Blue and white portable toilet cabin"),
  p("jp-canteen", "Food / canteen cabin", "canteen-cabin", "Portable canteen cabin with roller shutter"),
  p("jp-modular", "Modular cabin", "modular-cabin", "Modular portable cabin with glazed openings"),
  p("jp-cottage", "Premium portable cottage", "cottage-main", "Premium capsule-style portable cottage with glass facade"),
];
