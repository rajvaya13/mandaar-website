# Mandaar — Real Product Catalog Integration

Replacing the placeholder product data with the **actual 25 products from your shop**, with real Indian dry-fruit grading (W320, A5 Mamra, AB Gold etc.) and multi-weight pricing.

## What changed

### The data
**25 real products** across **10 categories**, replacing the previous 12 generic placeholder products. Every name, grade, and price is from your PDF.

| Category | Products | Notes |
|---|---|---|
| Mamra Almonds | 4 (A5, A4, A3, ES) | Featured as premium hero — ₹4,099–₹5,199/kg |
| Cashews | 3 (W320, W240, MSK) | |
| Almonds | 3 (A Gold, Bold, MSB) | |
| Pistachios | 3 (Grade A, Bold, MSP) | |
| Figs (Anjeer) | 2 (Bold, AB Gold) | |
| Raisins (Kishmish) | 2 (A Gold, AB Gold) | |
| Walnuts (Akhrot) | 3 (In-shell, Kernels, MSA) | |
| Munakka | 2 (NB1, NB2) | |
| Fox Nuts (Makhana) | 1 (A+) | |
| Exotic Nuts | 2 (Macadamia, Pecan) | |

### The product card — new design
- **Weight selector pills** (250g / 500g / 750g / 1kg) — click to switch
- **Price updates dynamically** based on selected weight
- **₹/kg reference** shown small underneath for value comparison
- **Real grade displayed** ("Cashews · W320", "Mamra Almonds · A5")
- **"MANDAAR SP." badge** on your premium house variants
- **"FINEST GRADE" badge** on the Mamra A5
- Products with only one weight (e.g. Fox Nuts) show just the price, no selector

### The categories section
- **Mamra Almonds is the new hero category** (top-left, "FINEST" badge)
- 7 cards on homepage: Mamra, Cashews, Pistachios, Walnuts, Figs, Raisins, Gift Hampers
- Each clicks through to `/shop?cat=mamra` etc. — filtered view

### The shop page
- All 10 categories as filter pills + "All Products"
- Each pill shows product count
- Picks up `?cat=` from URL automatically (so clicking a category card lands on the right filter)
- Sort by Featured / Price low-high / Price high-low / Name

### The search modal
- Searches across name, category, **grade** (e.g. searching "A5" finds Mamra A5), and description
- Placeholder updated: "Search kaju, badam, mamra, akhrot..."

## Files in this ZIP

```
mandaar-real-products/
├── README.md
├── lib/
│   └── products.ts                       [REWRITE — 25 real products]
├── components/
│   ├── ProductCard.tsx                   [REWRITE — weight selector]
│   ├── SearchModal.tsx                   [REPLACE — new schema]
│   └── sections/
│       ├── Categories.tsx                [REPLACE — new categories]
│       └── FeaturedProducts.tsx          [REPLACE — uses new schema]
└── app/
    └── shop/
        └── page.tsx                      [REPLACE — dynamic categories, URL params]
```

## Installation (5 min)

1. Stop dev server (`Ctrl+C`)
2. Extract this ZIP
3. Open `mandaar-real-products/` — you'll see three folders: `lib`, `components`, `app`
4. Copy all three into `D:\Projects\Mandaar\mandaar-website\`
5. Windows asks to replace → **Yes, replace all** (6 files updated/replaced)
6. Restart: `npm run dev`

## Test in browser

- `http://localhost:3000` — homepage with new Mamra-led categories, featured products
- Try the **weight selector** on any product card (click 250g / 500g / 750g / 1kg)
- `/shop` — all 25 products, try category filter pills
- Click "Mamra Almonds" tile on homepage → lands on `/shop?cat=mamra` showing only those 4
- Search (🔍 icon) — try typing "mamra", "kaju", "W320", "akhrot"

## Deploy to live site

Since you're already on Vercel + GitHub, the deploy flow is now **just three commands**:

```powershell
cd D:\Projects\Mandaar\mandaar-website
git add .
git commit -m "Add real product catalog: 25 products across 10 categories with weight-based pricing"
git push
```

After `git push`, Vercel auto-detects the change and rebuilds in ~90 seconds. Your live URL updates automatically. No manual deploy needed.

## Notes & known limitations

- **No product detail pages yet** — clicking a product card will 404. That's Phase 2.
- **Cart doesn't persist yet** — the "Add to Cart" button is visual-only. Phase 4.
- **Some products only have 250g pricing** (Munakka, Macadamia, Pecan, Fox Nuts, Akhrot Kernels). They show just that one option, no selector.
- **Akhrot in Shell** is sold by the kg only (no 250g option), so it shows ₹1,050/1kg as the only choice.

If any product pricing changes at the shop, **the only file to edit is `lib/products.ts`** — clean separation, easy maintenance.

Once installed and tested, push to GitHub and your live site will show the real catalog within 2 minutes.
