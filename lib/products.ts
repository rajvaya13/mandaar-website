export type Product = {
  id: string;
  name: string;
  origin: string;
  category: string;
  price: number;
  mrp: number;
  badge?: string;
  bowlBg: string;
  description?: string;
};

// Reusable nut/date "bowl" CSS gradient generator parts
const dateBowl = `
  radial-gradient(ellipse 22% 18% at 30% 28%, #8b5a2b 0%, #5c2e0b 60%, transparent 75%),
  radial-gradient(ellipse 7% 6% at 28% 24%, rgba(255, 220, 180, 0.5) 0%, transparent 100%),
  radial-gradient(ellipse 20% 16% at 60% 32%, #6b3818 0%, #4a240a 60%, transparent 75%),
  radial-gradient(ellipse 6% 5% at 58% 28%, rgba(255, 220, 180, 0.5) 0%, transparent 100%),
  radial-gradient(ellipse 24% 20% at 45% 58%, #8b4513 0%, #5c2e0b 60%, transparent 75%),
  radial-gradient(ellipse 7% 6% at 43% 54%, rgba(255, 220, 180, 0.5) 0%, transparent 100%),
  radial-gradient(ellipse 20% 17% at 70% 65%, #6b3818 0%, #4a240a 60%, transparent 75%),
  radial-gradient(ellipse 6% 5% at 68% 61%, rgba(255, 220, 180, 0.5) 0%, transparent 100%),
  radial-gradient(ellipse 18% 15% at 25% 75%, #5c2e0b 0%, #3d1f06 60%, transparent 75%),
  radial-gradient(ellipse 5% 4% at 23% 71%, rgba(255, 220, 180, 0.5) 0%, transparent 100%),
  radial-gradient(circle at 50% 50%, #3d2818 0%, #2a1808 80%, #1a1004 100%)
`;

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
  radial-gradient(ellipse 6% 4% at 23% 71%, rgba(255, 245, 220, 0.65) 0%, transparent 100%),
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
  radial-gradient(ellipse 5% 8% at 68% 60%, rgba(255, 220, 180, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 12% 20% at 25% 78%, #b8632e 0%, #6b300d 70%, transparent 80%),
  radial-gradient(ellipse 4% 7% at 23% 73%, rgba(255, 220, 180, 0.55) 0%, transparent 100%),
  radial-gradient(circle at 50% 50%, #6b3818 0%, #4a240a 80%, #2a1404 100%)
`;

const pistachioBowl = `
  radial-gradient(ellipse 16% 16% at 30% 30%, #b0c068 0%, #6b7d30 70%, transparent 80%),
  radial-gradient(ellipse 5% 6% at 28% 26%, rgba(220, 240, 180, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 15% 15% at 60% 32%, #a0b05a 0%, #5c6b30 70%, transparent 80%),
  radial-gradient(ellipse 5% 5% at 58% 28%, rgba(220, 240, 180, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 17% 17% at 45% 60%, #b0c068 0%, #6b7d30 70%, transparent 80%),
  radial-gradient(ellipse 6% 6% at 43% 56%, rgba(220, 240, 180, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 15% 15% at 70% 65%, #a0b05a 0%, #5c6b30 70%, transparent 80%),
  radial-gradient(ellipse 5% 5% at 68% 61%, rgba(220, 240, 180, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 14% 14% at 25% 78%, #94a64a 0%, #4a5520 70%, transparent 80%),
  radial-gradient(ellipse 4% 4% at 23% 74%, rgba(220, 240, 180, 0.55) 0%, transparent 100%),
  radial-gradient(circle at 50% 50%, #4a5520 0%, #3d4520 80%, #2a3015 100%)
`;

const raisinBowl = `
  radial-gradient(ellipse 11% 12% at 30% 28%, #e8b840 0%, #8b6914 70%, transparent 80%),
  radial-gradient(ellipse 3% 4% at 28% 25%, rgba(255, 240, 180, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 10% 11% at 55% 32%, #d4a017 0%, #7a5510 70%, transparent 80%),
  radial-gradient(ellipse 3% 3% at 53% 29%, rgba(255, 240, 180, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 12% 13% at 42% 50%, #e8b840 0%, #8b6914 70%, transparent 80%),
  radial-gradient(ellipse 3% 4% at 40% 47%, rgba(255, 240, 180, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 10% 11% at 65% 55%, #d4a017 0%, #7a5510 70%, transparent 80%),
  radial-gradient(ellipse 3% 3% at 63% 52%, rgba(255, 240, 180, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 11% 12% at 30% 72%, #e8b840 0%, #8b6914 70%, transparent 80%),
  radial-gradient(ellipse 3% 4% at 28% 69%, rgba(255, 240, 180, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 10% 11% at 70% 78%, #c89010 0%, #6b4d10 70%, transparent 80%),
  radial-gradient(circle at 50% 50%, #6b4d10 0%, #4a3510 80%, #2a200a 100%)
`;

const walnutBowl = `
  radial-gradient(ellipse 22% 20% at 30% 30%, #a87850 0%, #6b4828 70%, transparent 80%),
  radial-gradient(ellipse 6% 6% at 28% 26%, rgba(255, 230, 200, 0.45) 0%, transparent 100%),
  radial-gradient(ellipse 20% 18% at 65% 35%, #8b6240 0%, #5c3e22 70%, transparent 80%),
  radial-gradient(ellipse 6% 5% at 63% 31%, rgba(255, 230, 200, 0.45) 0%, transparent 100%),
  radial-gradient(ellipse 24% 22% at 40% 65%, #a87850 0%, #6b4828 70%, transparent 80%),
  radial-gradient(ellipse 7% 6% at 38% 60%, rgba(255, 230, 200, 0.45) 0%, transparent 100%),
  radial-gradient(ellipse 20% 18% at 70% 72%, #8b6240 0%, #5c3e22 70%, transparent 80%),
  radial-gradient(ellipse 6% 5% at 68% 67%, rgba(255, 230, 200, 0.45) 0%, transparent 100%),
  radial-gradient(circle at 50% 50%, #4a3220 0%, #3d2814 80%, #2a1c0a 100%)
`;

const apricotBowl = `
  radial-gradient(ellipse 22% 20% at 30% 30%, #f0a050 0%, #b8632e 70%, transparent 80%),
  radial-gradient(ellipse 6% 6% at 28% 26%, rgba(255, 240, 200, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 20% 18% at 65% 35%, #e89a3a 0%, #a85420 70%, transparent 80%),
  radial-gradient(ellipse 6% 5% at 63% 31%, rgba(255, 240, 200, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 24% 22% at 40% 65%, #f0a050 0%, #b8632e 70%, transparent 80%),
  radial-gradient(ellipse 7% 6% at 38% 60%, rgba(255, 240, 200, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 20% 18% at 70% 72%, #e89a3a 0%, #a85420 70%, transparent 80%),
  radial-gradient(ellipse 6% 5% at 68% 67%, rgba(255, 240, 200, 0.55) 0%, transparent 100%),
  radial-gradient(circle at 50% 50%, #8b4d22 0%, #6b3818 80%, #4a2810 100%)
`;

const figBowl = `
  radial-gradient(ellipse 22% 20% at 30% 30%, #c4956b 0%, #7a4d2a 70%, transparent 80%),
  radial-gradient(ellipse 7% 6% at 28% 26%, rgba(255, 240, 220, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 20% 18% at 65% 35%, #b88556 0%, #6b3a18 70%, transparent 80%),
  radial-gradient(ellipse 6% 5% at 63% 31%, rgba(255, 240, 220, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 24% 22% at 40% 65%, #c4956b 0%, #7a4d2a 70%, transparent 80%),
  radial-gradient(ellipse 7% 6% at 38% 60%, rgba(255, 240, 220, 0.55) 0%, transparent 100%),
  radial-gradient(ellipse 20% 18% at 70% 72%, #b88556 0%, #6b3a18 70%, transparent 80%),
  radial-gradient(ellipse 6% 5% at 68% 67%, rgba(255, 240, 220, 0.55) 0%, transparent 100%),
  radial-gradient(circle at 50% 50%, #5c3818 0%, #4a2810 80%, #2a1808 100%)
`;

export const products: Product[] = [
  {
    id: "medjoul-dates",
    name: "Medjoul Premium Dates",
    origin: "Jordan · Hand-picked",
    category: "dates",
    price: 1355,
    mrp: 1600,
    bowlBg: dateBowl,
    description: "The king of dates. Plump, caramel-sweet, and grown in Jordan Valley's mineral-rich soil.",
  },
  {
    id: "jumbo-cashews",
    name: "Jumbo Cashews W210",
    origin: "Goa · Premium grade",
    category: "cashews",
    price: 1195,
    mrp: 1400,
    badge: "15% OFF",
    bowlBg: cashewBowl,
    description: "W210 grade — the largest and creamiest of Indian cashews, sourced from Goan estates.",
  },
  {
    id: "california-almonds",
    name: "California Almonds",
    origin: "USA · Mamra special",
    category: "almonds",
    price: 985,
    mrp: 1200,
    badge: "BESTSELLER",
    bowlBg: almondBowl,
    description: "Mamra-grade almonds from California's central valley. Slightly oilier, richer in taste.",
  },
  {
    id: "iranian-pistachios",
    name: "Iranian Pistachios",
    origin: "Iran · Lightly salted",
    category: "pistachios",
    price: 1650,
    mrp: 1900,
    bowlBg: pistachioBowl,
    description: "From Kerman province. Roasted in-house with a whisper of pink Himalayan salt.",
  },
  {
    id: "golden-raisins",
    name: "Golden Raisins",
    origin: "Afghanistan · Seedless",
    category: "raisins",
    price: 485,
    mrp: 560,
    badge: "NEW",
    bowlBg: raisinBowl,
    description: "Sun-dried under the Afghan sky. Naturally sweet, no sulphur, no added sugar.",
  },
  {
    id: "kashmiri-walnuts",
    name: "Kashmiri Walnuts",
    origin: "Kashmir · Light halves",
    category: "walnuts",
    price: 1295,
    mrp: 1500,
    bowlBg: walnutBowl,
    description: "Hand-cracked from Pampore orchards. Distinctively light-coloured halves, mild-sweet bite.",
  },
  {
    id: "turkish-apricots",
    name: "Turkish Apricots",
    origin: "Turkey · Sun-dried",
    category: "apricots",
    price: 695,
    mrp: 820,
    badge: "10% OFF",
    bowlBg: apricotBowl,
    description: "Whole, plump Malatya apricots. Honeyed, chewy, and unsulphured.",
  },
  {
    id: "dried-figs",
    name: "Anjeer (Dried Figs)",
    origin: "Afghanistan · Jumbo",
    category: "figs",
    price: 1150,
    mrp: 1350,
    bowlBg: figBowl,
    description: "Jumbo-grade Afghan figs. Naturally sweet with a tender, jammy interior.",
  },
  {
    id: "ajwa-dates",
    name: "Ajwa Dates Premium",
    origin: "Saudi Arabia · Medina",
    category: "dates",
    price: 2495,
    mrp: 2900,
    badge: "PREMIUM",
    bowlBg: dateBowl,
    description: "Soft, dry-skinned dates from Medina with a fine fruity-prune flavour. Considered sacred.",
  },
  {
    id: "salted-pistachios",
    name: "Roasted Salted Pistachios",
    origin: "California · Salted",
    category: "pistachios",
    price: 1395,
    mrp: 1600,
    bowlBg: pistachioBowl,
    description: "Slow-roasted with sea salt. The perfect movie-night snack.",
  },
  {
    id: "black-raisins",
    name: "Black Currants",
    origin: "India · Seedless",
    category: "raisins",
    price: 395,
    mrp: 450,
    bowlBg: raisinBowl,
    description: "Tiny, intensely sweet seedless currants — perfect in cakes, kheer, and trail mixes.",
  },
  {
    id: "salted-cashews",
    name: "Salted Cashew Halves",
    origin: "Goa · Lightly salted",
    category: "cashews",
    price: 895,
    mrp: 1050,
    badge: "10% OFF",
    bowlBg: cashewBowl,
    description: "Crisp, lightly salted halves. Great for cooking and snacking alike.",
  },
];

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

// Get the 8 featured products for the homepage
export function getFeaturedProducts() {
  return products.slice(0, 8);
}
