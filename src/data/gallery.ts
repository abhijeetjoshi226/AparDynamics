export type GalleryCategory = "facility" | "machines" | "engineering" | "fabrication" | "cabins";

/**
 * How an image should be described to visitors.
 * Never label a render or catalogue image as a completed customer project.
 */
export type GalleryKind =
  | "Facility photo"
  | "Machine"
  | "CAD render"
  | "Assembly & test equipment"
  | "Fabricated equipment"
  | "Product range"
  | "Just Porta cabin";

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
  { id: "facility", label: "Facility" },
  { id: "machines", label: "Machines available" },
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
const eq = (id: string, title: string, file: string, alt: string, fit: "cover" | "contain" = "contain"): GalleryItem => ({
  id, title, category: "engineering", kind: "Assembly & test equipment", src: `/images/products/${file}.webp`, alt, fit,
});
const tr = (id: string, title: string, file: string, alt: string): GalleryItem => ({
  id, title, category: "fabrication", kind: "Fabricated equipment", src: `/images/products/${file}.webp`, alt, fit: "cover",
});
const mc = (id: string, title: string, file: string, alt: string, fit: "cover" | "contain" = "contain"): GalleryItem => ({
  id, title, category: "machines", kind: "Machine", src: `/images/products/${file}.webp`, alt, fit,
});
const p = (id: string, title: string, file: string, alt: string): GalleryItem => ({
  id, title, category: "cabins", kind: "Just Porta cabin", src: `/images/just-porta/${file}.webp`, alt, fit: "cover",
});

export const galleryItems: GalleryItem[] = [
  f("floor", "10,000 sq ft manufacturing unit", "facility", "factory-floor", "Interior of the Apar Dynamics manufacturing shed with steel roof trusses"),

  mc("m-laser", "Laser cutting machine", "laser-cutting-machine", "Sheet laser cutting machine inside a workshop", "cover"),
  mc("m-press-brake", "Press brake", "press-brake", "Blue press brake with foot pedals and control box", "cover"),
  mc("m-mig", "MIG welding machine", "mig-welding-machine", "Yellow MIG 250 welding machine with wire feeder"),
  mc("m-drill", "Bench drilling machine", "bench-drilling-machine", "Orange bench drilling machine"),
  mc("m-saw", "Metal cut-off saw", "cut-off-saw", "Yellow metal cut-off saw with abrasive wheel"),
  mc("m-screw-press", "Screw press", "screw-press", "Hand-operated screw press with flywheel"),

  eq("eq-weld-table", "Welding fixture table", "welding-fixture-table", "Welding fixture table with clamps and tube fixtures"),
  eq("eq-workstation", "Ergonomic assembly workstation", "ergonomic-workstation", "Ergonomic assembly workstation with roller conveyor and bin rack"),
  eq("eq-spm-blue", "Assembly machine with feeder", "spm-assembly-machine", "Blue assembly machine with feeder bowl and press unit"),
  eq("eq-spm-press", "Special purpose assembly machine (SPM)", "spm-press-station", "Pneumatic special purpose assembly machine in an aluminium-profile frame with safety guards", "cover"),
  eq("eq-test-station", "Aluminium-profile test station", "profile-test-station", "Aluminium-profile test station with touch screen and clamping unit"),

  tr("tr-1", "Order-picking trolley", "trolley-1", "White four-shelf order-picking trolley with red castor wheels"),
  tr("tr-2", "Tiered storage trolley", "trolley-2", "White tiered storage trolley with pegs on castors"),
  tr("tr-3", "Roller trolley for long parts", "trolley-3", "White multi-tier roller trolley for long components"),
  tr("tr-4", "Mesh-base rack trolley", "trolley-4", "Blue steel rack trolley with mesh base"),
  tr("tr-5", "Mesh cage trolley", "trolley-5", "Black mesh cage trolley with towbar"),
  tr("tr-6", "Stackable component rack", "trolley-6", "Blue stackable component rack on castors"),

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
