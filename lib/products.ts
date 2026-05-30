// =====================================================
// MANDAAR REAL PRODUCT CATALOG
// Data sourced directly from the shop's product listing (May 2026)
// 25 products across 10 categories
// =====================================================

export type WeightOption = {
  weight: string; // "250g", "500g", "750g", "1kg"
  price: number;
};

export type Product = {
  id: string;
  name: string;
  category: string; // slug for filtering: "cashews", "mamra", etc
  categoryLabel: string; // display label: "Cashews", "Mamra Almonds"
  grade?: string; // "W320", "A5", "AB Gold" — shown on card under name
  pricePerKg?: number; // shown as reference if available
  weights: WeightOption[];
  description: string;
  bowlBg: string;
  badge?: string; // "PREMIUM", "MANDAAR SP.", "BESTSELLER"
};

// =====================================================
// BOWL VISUAL GRADIENTS (CSS-only, no images)
// =====================================================

const cashewBowl = `
  radial-gradient(ellipse 22% 16% at 30% 28%, #f0d4a0 0%, #c4a47a 70%, transparent 80%),
  radial-gradient(ellipse 8% 5% at 28% 24%, rgba(255, 245, 220, 0.65) 0%, transparent 100%),
  radial-gradient(ellipse 20% 15% at 60% 32%, #e8c89e 0%, #b89678 70%, transparent 80%),
  radial-gradient(ellipse 7% 5% at 58% 28%, rgba(255, 245, 220, 0.65) 0%, transparent 100%),
  radial-gradient(ellipse 24% 18% at 45% 58%, #f0d4a0 0%, #c4a47a 70%, transparent 80%),
  radial-gradient(ellipse 8% 5% at 43% 54%, rgba(255, 245, 220, 0.65) 0%, transparent 100%),
  radial-gradient(ellipse 21% 16% at 70% 65%, #e8c89e 0%, #b89678 70%, transparent 80%),
  radial-gradient(ellipse 7% 5% at 68% 61%, rgba(255, 245, 220, 0.65) 0%, transparent 100%),
  radial-gradient(ellipse 19% 14% at 25% 75%, #d4b896 0%, #a88860 70%, transparent 80%),
  radial-gradient(circle at 50% 50%, #8b7050 0%, #6b5435 80%, #4a3a20 100%)
`;

const almondBowl = `
  radial-gradient(ellipse 14% 22% at 30% 30%, #d4854a 0%, #8b4513 70%, transparent 80%),
  radial-gradient(ellipse 5% 9% at 28% 25%, rgba(255, 220, 180, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 13% 21% at 60% 32%, #c4733a 0%, #7a3d10 70%, transparent 80%),
  radial-gradient(ellipse 5% 8% at 58% 28%, rgba(255, 220, 180, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 15% 23% at 45% 60%, #d4854a 0%, #8b4513 70%, transparent 80%),
  radial-gradient(ellipse 5% 9% at 43% 55%, rgba(255, 220, 180, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 13% 21% at 70% 65%, #c4733a 0%, #7a3d10 70%, transparent 80%),
  radial-gradient(circle at 50% 50%, #6b3818 0%, #4a240a 80%, #2a1404 100%)
`;

// Mamra is darker, oilier, more red-brown than regular almonds
const mamraBowl = `
  radial-gradient(ellipse 13% 20% at 30% 30%, #9a4a20 0%, #5c2008 70%, transparent 80%),
  radial-gradient(ellipse 4% 8% at 28% 25%, rgba(255, 200, 150, 0.4) 0%, transparent 100%),
  radial-gradient(ellipse 12% 19% at 58% 32%, #8b3d18 0%, #4a1808 70%, transparent 80%),
  radial-gradient(ellipse 4% 7% at 56% 28%, rgba(255, 200, 150, 0.4) 0%, transparent 100%),
  radial-gradient(ellipse 14% 22% at 45% 60%, #9a4a20 0%, #5c2008 70%, transparent 80%),
  radial-gradient(ellipse 4% 8% at 43% 55%, rgba(255, 200, 150, 0.4) 0%, transparent 100%),
  radial-gradient(ellipse 12% 19% at 70% 65%, #8b3d18 0%, #4a1808 70%, transparent 80%),
  radial-gradient(ellipse 11% 18% at 25% 78%, #7a3514 0%, #3d1404 70%, transparent 80%),
  radial-gradient(circle at 50% 50%, #4a1808 0%, #2a0f04 80%, #1a0802 100%)
`;

const pistachioBowl = `
  radial-gradient(ellipse 16% 16% at 30% 30%, #b0c068 0%, #6b7d30 70%, transparent 80%),
  radial-gradient(ellipse 5% 6% at 28% 26%, rgba(220, 240, 180, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 15% 15% at 60% 32%, #a0b05a 0%, #5c6b30 70%, transparent 80%),
  radial-gradient(ellipse 5% 5% at 58% 28%, rgba(220, 240, 180, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 17% 17% at 45% 60%, #b0c068 0%, #6b7d30 70%, transparent 80%),
  radial-gradient(ellipse 6% 6% at 43% 56%, rgba(220, 240, 180, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 15% 15% at 70% 65%, #a0b05a 0%, #5c6b30 70%, transparent 80%),
  radial-gradient(ellipse 14% 14% at 25% 78%, #94a64a 0%, #4a5520 70%, transparent 80%),
  radial-gradient(circle at 50% 50%, #4a5520 0%, #3d4520 80%, #2a3015 100%)
`;

const figBowl = `
  radial-gradient(ellipse 22% 20% at 30% 30%, #c4956b 0%, #7a4d2a 70%, transparent 80%),
  radial-gradient(ellipse 7% 6% at 28% 26%, rgba(255, 240, 220, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 20% 18% at 65% 35%, #b88556 0%, #6b3a18 70%, transparent 80%),
  radial-gradient(ellipse 6% 5% at 63% 31%, rgba(255, 240, 220, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 24% 22% at 40% 65%, #c4956b 0%, #7a4d2a 70%, transparent 80%),
  radial-gradient(ellipse 7% 6% at 38% 60%, rgba(255, 240, 220, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 20% 18% at 70% 72%, #b88556 0%, #6b3a18 70%, transparent 80%),
  radial-gradient(circle at 50% 50%, #5c3818 0%, #4a2810 80%, #2a1808 100%)
`;

const raisinBowl = `
  radial-gradient(ellipse 11% 12% at 30% 28%, #e8b840 0%, #8b6914 70%, transparent 80%),
  radial-gradient(ellipse 3% 4% at 28% 25%, rgba(255, 240, 180, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 10% 11% at 55% 32%, #d4a017 0%, #7a5510 70%, transparent 80%),
  radial-gradient(ellipse 12% 13% at 42% 50%, #e8b840 0%, #8b6914 70%, transparent 80%),
  radial-gradient(ellipse 10% 11% at 65% 55%, #d4a017 0%, #7a5510 70%, transparent 80%),
  radial-gradient(ellipse 11% 12% at 30% 72%, #e8b840 0%, #8b6914 70%, transparent 80%),
  radial-gradient(ellipse 10% 11% at 70% 78%, #c89010 0%, #6b4d10 70%, transparent 80%),
  radial-gradient(circle at 50% 50%, #6b4d10 0%, #4a3510 80%, #2a200a 100%)
`;

// Munakka - larger, darker raisins (with seeds traditionally)
const munakkaBowl = `
  radial-gradient(ellipse 16% 18% at 30% 28%, #6b3818 0%, #3d1f06 70%, transparent 80%),
  radial-gradient(ellipse 4% 5% at 28% 25%, rgba(180, 130, 80, 0.4) 0%, transparent 100%),
  radial-gradient(ellipse 15% 17% at 60% 32%, #5c2e10 0%, #2a1404 70%, transparent 80%),
  radial-gradient(ellipse 17% 19% at 42% 60%, #6b3818 0%, #3d1f06 70%, transparent 80%),
  radial-gradient(ellipse 15% 17% at 70% 68%, #5c2e10 0%, #2a1404 70%, transparent 80%),
  radial-gradient(ellipse 14% 16% at 25% 78%, #5c2e10 0%, #2a1404 70%, transparent 80%),
  radial-gradient(circle at 50% 50%, #3d1f06 0%, #2a1404 80%, #1a0a02 100%)
`;

// Light Kashmiri walnut halves
const walnutBowl = `
  radial-gradient(ellipse 22% 20% at 30% 30%, #c89770 0%, #8b6240 70%, transparent 80%),
  radial-gradient(ellipse 6% 6% at 28% 26%, rgba(255, 230, 200, 0.45) 0%, transparent 100%),
  radial-gradient(ellipse 20% 18% at 65% 35%, #b48058 0%, #7a4d28 70%, transparent 80%),
  radial-gradient(ellipse 24% 22% at 40% 65%, #c89770 0%, #8b6240 70%, transparent 80%),
  radial-gradient(ellipse 20% 18% at 70% 72%, #b48058 0%, #7a4d28 70%, transparent 80%),
  radial-gradient(circle at 50% 50%, #6b4828 0%, #4a3220 80%, #2a1c0a 100%)
`;

// Whole walnuts in shell - round, brown, rough
const akhrotShellBowl = `
  radial-gradient(ellipse 28% 28% at 30% 30%, #a8703a 0%, #6b4020 70%, transparent 80%),
  radial-gradient(ellipse 8% 8% at 28% 26%, rgba(255, 220, 180, 0.3) 0%, transparent 100%),
  radial-gradient(ellipse 26% 26% at 68% 35%, #94632e 0%, #5c3818 70%, transparent 80%),
  radial-gradient(ellipse 30% 30% at 42% 68%, #a8703a 0%, #6b4020 70%, transparent 80%),
  radial-gradient(ellipse 26% 26% at 70% 75%, #94632e 0%, #5c3818 70%, transparent 80%),
  radial-gradient(circle at 50% 50%, #5c3818 0%, #3d240a 80%, #1a1004 100%)
`;

// Fox nuts (makhana) - white, puffy, round
const foxNutBowl = `
  radial-gradient(ellipse 18% 18% at 30% 30%, #faf4e4 0%, #d4c4a0 70%, transparent 80%),
  radial-gradient(ellipse 6% 6% at 28% 26%, rgba(255, 255, 255, 0.85) 0%, transparent 100%),
  radial-gradient(ellipse 17% 17% at 60% 32%, #f5edd8 0%, #c4b48c 70%, transparent 80%),
  radial-gradient(ellipse 5% 5% at 58% 28%, rgba(255, 255, 255, 0.85) 0%, transparent 100%),
  radial-gradient(ellipse 19% 19% at 45% 60%, #faf4e4 0%, #d4c4a0 70%, transparent 80%),
  radial-gradient(ellipse 6% 6% at 43% 56%, rgba(255, 255, 255, 0.85) 0%, transparent 100%),
  radial-gradient(ellipse 17% 17% at 70% 65%, #f5edd8 0%, #c4b48c 70%, transparent 80%),
  radial-gradient(ellipse 16% 16% at 25% 78%, #e8dcc0 0%, #b8a878 70%, transparent 80%),
  radial-gradient(circle at 50% 50%, #8b7a5a 0%, #6b5a3a 80%, #4a3a20 100%)
`;

const macadamiaBowl = `
  radial-gradient(ellipse 17% 16% at 30% 30%, #f5e5c0 0%, #c4a874 70%, transparent 80%),
  radial-gradient(ellipse 6% 5% at 28% 26%, rgba(255, 250, 220, 0.7) 0%, transparent 100%),
  radial-gradient(ellipse 16% 15% at 60% 32%, #e8d8b0 0%, #b8985c 70%, transparent 80%),
  radial-gradient(ellipse 18% 17% at 45% 60%, #f5e5c0 0%, #c4a874 70%, transparent 80%),
  radial-gradient(ellipse 16% 15% at 70% 65%, #e8d8b0 0%, #b8985c 70%, transparent 80%),
  radial-gradient(ellipse 15% 14% at 25% 78%, #d4b890 0%, #8b7050 70%, transparent 80%),
  radial-gradient(circle at 50% 50%, #6b5535 0%, #4a3a20 80%, #2a200a 100%)
`;

// Pecans - dark brown, elongated, ridged halves
const pecanBowl = `
  radial-gradient(ellipse 13% 22% at 30% 30%, #7a4828 0%, #4a2810 70%, transparent 80%),
  radial-gradient(ellipse 4% 8% at 28% 26%, rgba(200, 150, 100, 0.4) 0%, transparent 100%),
  radial-gradient(ellipse 12% 21% at 58% 32%, #6b3e1c 0%, #3d1f06 70%, transparent 80%),
  radial-gradient(ellipse 14% 23% at 45% 60%, #7a4828 0%, #4a2810 70%, transparent 80%),
  radial-gradient(ellipse 12% 21% at 70% 65%, #6b3e1c 0%, #3d1f06 70%, transparent 80%),
  radial-gradient(ellipse 11% 20% at 25% 78%, #5c351c 0%, #2a1808 70%, transparent 80%),
  radial-gradient(circle at 50% 50%, #3d1f06 0%, #2a1404 80%, #1a0a02 100%)
`;

// =====================================================
// ALL 25 PRODUCTS
// =====================================================

export const products: Product[] = [
  // ===== CASHEWS =====
  {
    id: "kaju-w320",
    name: "Hand-picked Kaju W320",
    category: "cashews",
    categoryLabel: "Cashews",
    grade: "W320",
    pricePerKg: 1249,
    weights: [
      { weight: "250g", price: 340 },
      { weight: "500g", price: 650 },
      { weight: "750g", price: 960 },
      { weight: "1kg", price: 1249 },
    ],
    description: "320 cashews per pound — large, milky-cream, full kernels. Goa-grade, hand-sorted.",
    bowlBg: cashewBowl,
  },
  {
    id: "kaju-w240",
    name: "Hand-picked Kaju W240",
    category: "cashews",
    categoryLabel: "Cashews",
    grade: "W240",
    pricePerKg: 1349,
    weights: [
      { weight: "250g", price: 360 },
      { weight: "500g", price: 690 },
      { weight: "750g", price: 1040 },
      { weight: "1kg", price: 1349 },
    ],
    description: "Even bigger than W320 — 240 to a pound. Our top-grade jumbo cashews.",
    bowlBg: cashewBowl,
  },
  {
    id: "kaju-msk",
    name: "Mandaar Special Kaju",
    category: "cashews",
    categoryLabel: "Cashews",
    grade: "MSK",
    pricePerKg: 1799,
    weights: [
      { weight: "250g", price: 480 },
      { weight: "500g", price: 940 },
      { weight: "750g", price: 1390 },
      { weight: "1kg", price: 1799 },
    ],
    description: "Our finest cashews — hand-graded twice before they reach the shelf. Buttery, snow-white halves.",
    bowlBg: cashewBowl,
    badge: "MANDAAR SP.",
  },

  // ===== ALMONDS =====
  {
    id: "badam-a-gold",
    name: "Badam A Gold",
    category: "almonds",
    categoryLabel: "Almonds",
    grade: "A Gold",
    pricePerKg: 1249,
    weights: [
      { weight: "250g", price: 330 },
      { weight: "500g", price: 640 },
      { weight: "750g", price: 950 },
      { weight: "1kg", price: 1249 },
    ],
    description: "Premium-grade American almonds. Plump, even, sweet. Our most-loved everyday almond.",
    bowlBg: almondBowl,
  },
  {
    id: "badam-bold",
    name: "Badam Bold",
    category: "almonds",
    categoryLabel: "Almonds",
    grade: "Bold",
    pricePerKg: 1149,
    weights: [
      { weight: "250g", price: 320 },
      { weight: "500g", price: 610 },
      { weight: "750g", price: 890 },
      { weight: "1kg", price: 1149 },
    ],
    description: "Bold-size almonds with a robust, slightly oilier profile. Excellent value.",
    bowlBg: almondBowl,
  },
  {
    id: "badam-msb",
    name: "Mandaar Special Badam",
    category: "almonds",
    categoryLabel: "Almonds",
    grade: "MSB",
    pricePerKg: 1449,
    weights: [
      { weight: "250g", price: 380 },
      { weight: "500g", price: 760 },
      { weight: "750g", price: 1110 },
      { weight: "1kg", price: 1449 },
    ],
    description: "Our top selection of American almonds — uniformly large, deep-flavoured, hand-checked.",
    bowlBg: almondBowl,
    badge: "MANDAAR SP.",
  },

  // ===== MAMRA ALMONDS (PREMIUM IRANIAN) =====
  {
    id: "mamra-a5",
    name: "Mandaar Mamra Badam A5",
    category: "mamra",
    categoryLabel: "Mamra Almonds",
    grade: "A5 · Finest grade",
    pricePerKg: 5199,
    weights: [
      { weight: "250g", price: 1380 },
      { weight: "500g", price: 2670 },
      { weight: "750g", price: 3950 },
      { weight: "1kg", price: 5199 },
    ],
    description: "The pinnacle of Iranian Mamra. Densest, oiliest, sweetest. A5 grade is the top-tier classification — rare and revered.",
    bowlBg: mamraBowl,
    badge: "FINEST GRADE",
  },
  {
    id: "mamra-a4",
    name: "Mandaar Mamra Badam A4",
    category: "mamra",
    categoryLabel: "Mamra Almonds",
    grade: "A4",
    pricePerKg: 4799,
    weights: [
      { weight: "250g", price: 1280 },
      { weight: "500g", price: 2460 },
      { weight: "750g", price: 3900 },
      { weight: "1kg", price: 4799 },
    ],
    description: "A4-grade Iranian Mamra — rich, oily, and characteristically darker than American almonds. A connoisseur's choice.",
    bowlBg: mamraBowl,
    badge: "PREMIUM",
  },
  {
    id: "mamra-a3",
    name: "Mandaar Mamra Badam A3",
    category: "mamra",
    categoryLabel: "Mamra Almonds",
    grade: "A3",
    pricePerKg: 4399,
    weights: [
      { weight: "250g", price: 1180 },
      { weight: "500g", price: 2260 },
      { weight: "750g", price: 3380 },
      { weight: "1kg", price: 4399 },
    ],
    description: "A3-grade Mamra. All the depth and oil-content of premium Iranian almonds at a more accessible price.",
    bowlBg: mamraBowl,
  },
  {
    id: "mamra-es",
    name: "Mandaar Mamra Badam ES",
    category: "mamra",
    categoryLabel: "Mamra Almonds",
    grade: "ES",
    pricePerKg: 4099,
    weights: [
      { weight: "250g", price: 1090 },
      { weight: "500g", price: 2090 },
      { weight: "750g", price: 3110 },
      { weight: "1kg", price: 4099 },
    ],
    description: "ES-grade Mamra — our entry-level into the world of authentic Iranian almonds. Distinctly richer than any commercial almond.",
    bowlBg: mamraBowl,
  },

  // ===== PISTACHIOS =====
  {
    id: "pista-grade-a",
    name: "Pista Grade A",
    category: "pistachios",
    categoryLabel: "Pistachios",
    grade: "Grade A",
    pricePerKg: 1749,
    weights: [
      { weight: "250g", price: 460 },
      { weight: "500g", price: 810 },
      { weight: "750g", price: 1320 },
      { weight: "1kg", price: 1749 },
    ],
    description: "Premium-grade pistachios with naturally opened shells. Bright green kernels, lightly roasted with salt.",
    bowlBg: pistachioBowl,
  },
  {
    id: "pista-bold",
    name: "Pista Bold",
    category: "pistachios",
    categoryLabel: "Pistachios",
    grade: "Bold",
    pricePerKg: 1649,
    weights: [
      { weight: "250g", price: 440 },
      { weight: "500g", price: 860 },
      { weight: "750g", price: 1270 },
      { weight: "1kg", price: 1649 },
    ],
    description: "Bold-size pistachios. Larger kernels, naturally split shells, lightly salted.",
    bowlBg: pistachioBowl,
  },
  {
    id: "pista-msp",
    name: "Mandaar Special Pista Handpicked",
    category: "pistachios",
    categoryLabel: "Pistachios",
    grade: "MSP · Handpicked",
    pricePerKg: 1899,
    weights: [
      { weight: "250g", price: 500 },
      { weight: "500g", price: 980 },
      { weight: "750g", price: 1450 },
      { weight: "1kg", price: 1899 },
    ],
    description: "Each pistachio individually sorted by hand. Uniformly large, deepest green kernels — our finest.",
    bowlBg: pistachioBowl,
    badge: "MANDAAR SP.",
  },

  // ===== FIGS (ANJEER) =====
  {
    id: "anjeer-bold",
    name: "Anjeer Bold",
    category: "figs",
    categoryLabel: "Figs (Anjeer)",
    grade: "Bold",
    pricePerKg: 1749,
    weights: [
      { weight: "250g", price: 480 },
      { weight: "500g", price: 920 },
      { weight: "750g", price: 1350 },
      { weight: "1kg", price: 1749 },
    ],
    description: "Largest grade of dried Anjeer. Soft, plump, naturally sweet — no added sugar.",
    bowlBg: figBowl,
  },
  {
    id: "anjeer-ab-gold",
    name: "Anjeer AB Gold",
    category: "figs",
    categoryLabel: "Figs (Anjeer)",
    grade: "AB Gold",
    pricePerKg: 1649,
    weights: [
      { weight: "250g", price: 420 },
      { weight: "500g", price: 860 },
      { weight: "750g", price: 1320 },
      { weight: "1kg", price: 1649 },
    ],
    description: "AB Gold-grade anjeer. Honeyed, chewy, with a jam-like sweet interior.",
    bowlBg: figBowl,
  },

  // ===== RAISINS (KISHMISH) =====
  {
    id: "kishmish-a-gold",
    name: "Kishmish A Gold",
    category: "raisins",
    categoryLabel: "Raisins (Kishmish)",
    grade: "A Gold",
    pricePerKg: 669,
    weights: [
      { weight: "250g", price: 175 },
      { weight: "500g", price: 340 },
      { weight: "750g", price: 510 },
      { weight: "1kg", price: 669 },
    ],
    description: "Premium golden raisins. Sun-dried, seedless, naturally sweet with no added sugar.",
    bowlBg: raisinBowl,
  },
  {
    id: "kishmish-ab-gold",
    name: "Kishmish AB Gold",
    category: "raisins",
    categoryLabel: "Raisins (Kishmish)",
    grade: "AB Gold",
    pricePerKg: 599,
    weights: [
      { weight: "250g", price: 155 },
      { weight: "500g", price: 310 },
      { weight: "750g", price: 460 },
      { weight: "1kg", price: 599 },
    ],
    description: "AB Gold-grade kishmish. Excellent for cooking, baking, and everyday snacking.",
    bowlBg: raisinBowl,
  },

  // ===== FOX NUTS (MAKHANA) =====
  {
    id: "fox-nuts-a-plus",
    name: "Mandaar Special Fox Nuts A+",
    category: "fox-nuts",
    categoryLabel: "Fox Nuts (Makhana)",
    grade: "A+ Grade",
    weights: [
      { weight: "250g", price: 450 },
      { weight: "500g", price: 580 },
    ],
    description: "Premium A+ grade makhana. Large, perfectly puffed, light as air. Roasts beautifully in ghee.",
    bowlBg: foxNutBowl,
    badge: "MANDAAR SP.",
  },

  // ===== MUNAKKA =====
  {
    id: "munakka-nb1",
    name: "Munakka Dakh NB1",
    category: "munakka",
    categoryLabel: "Munakka",
    grade: "NB1 · Premium",
    weights: [
      { weight: "250g", price: 360 },
    ],
    description: "Large, dark munakka with the traditional seeded character. Slow-dried, rich and complex.",
    bowlBg: munakkaBowl,
  },
  {
    id: "munakka-nb2",
    name: "Munakka Dakh NB2",
    category: "munakka",
    categoryLabel: "Munakka",
    grade: "NB2",
    weights: [
      { weight: "250g", price: 260 },
    ],
    description: "NB2-grade munakka. Traditional Indian munakka — perfect for kheer, panjiri, and ayurvedic preparations.",
    bowlBg: munakkaBowl,
  },

  // ===== EXOTIC NUTS =====
  {
    id: "macadamia",
    name: "Macadamia Nuts Kernels",
    category: "exotic",
    categoryLabel: "Exotic Nuts",
    grade: "Whole Kernels",
    weights: [
      { weight: "250g", price: 860 },
    ],
    description: "Buttery, creamy, the world's most luxurious nut. Whole kernels — perfect for baking or snacking neat.",
    bowlBg: macadamiaBowl,
    badge: "EXOTIC",
  },
  {
    id: "pecan",
    name: "Pecan Nuts",
    category: "exotic",
    categoryLabel: "Exotic Nuts",
    grade: "Halves",
    weights: [
      { weight: "250g", price: 750 },
    ],
    description: "Rich, buttery pecan halves. The signature nut of American baking — and a revelation eaten plain.",
    bowlBg: pecanBowl,
    badge: "EXOTIC",
  },

  // ===== WALNUTS (AKHROT) =====
  {
    id: "akhrot-in-shell",
    name: "Akhrot in Shell 36+",
    category: "walnuts",
    categoryLabel: "Walnuts (Akhrot)",
    grade: "36+ Size · In-shell",
    pricePerKg: 1050,
    weights: [
      { weight: "1kg", price: 1050 },
    ],
    description: "Whole Kashmiri walnuts in the shell. 36+ size grade — large, plump, perfect for cracking fresh.",
    bowlBg: akhrotShellBowl,
  },
  {
    id: "akhrot-kernels",
    name: "Akhrot Kernels",
    category: "walnuts",
    categoryLabel: "Walnuts (Akhrot)",
    grade: "Light Halves",
    weights: [
      { weight: "250g", price: 490 },
    ],
    description: "Pre-shelled walnut kernels. Light-coloured halves ready to use in breakfast, baking, and salads.",
    bowlBg: walnutBowl,
  },
  {
    id: "akhrot-msa",
    name: "Mandaar Special Akhrot Kernels",
    category: "walnuts",
    categoryLabel: "Walnuts (Akhrot)",
    grade: "MSA · Handpicked",
    pricePerKg: 2260,
    weights: [
      { weight: "250g", price: 570 },
      { weight: "1kg", price: 2260 },
    ],
    description: "Our finest walnut halves — hand-cracked, hand-sorted to keep only the largest, lightest, intact halves. The walnut connoisseur's choice.",
    bowlBg: walnutBowl,
    badge: "MANDAAR SP.",
  },
];

// =====================================================
// HELPER FUNCTIONS
// =====================================================

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

// Featured products for homepage — curated picks across categories
export function getFeaturedProducts() {
  const featuredIds = [
    "mamra-a5", // Premium showcase
    "kaju-msk", // Mandaar Special
    "badam-msb",
    "pista-msp",
    "anjeer-bold",
    "akhrot-msa",
    "fox-nuts-a-plus",
    "kishmish-a-gold",
  ];
  return featuredIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => p !== undefined);
}

// Get unique categories with metadata
export type CategoryInfo = {
  slug: string;
  label: string;
  count: number;
};

export function getAllCategories(): CategoryInfo[] {
  const map = new Map<string, CategoryInfo>();
  products.forEach((p) => {
    const existing = map.get(p.category);
    if (existing) {
      existing.count++;
    } else {
      map.set(p.category, {
        slug: p.category,
        label: p.categoryLabel,
        count: 1,
      });
    }
  });
  return Array.from(map.values());
}
