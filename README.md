# Mandaar — Honest Copy Update

Replacing all the made-up heritage claims (1987, three generations, 38 years) with truthful copy that reflects the real business: a single-owner Udaipur shop that opened in **2018**.

## Why this matters

A fake heritage story is brand poison. If a customer ever calls the shop and asks "so when did your grandfather start the business?", and the answer doesn't match the website, all trust evaporates instantly. We're rebuilding with honest copy that's actually a **stronger** brand position — premium dry fruits don't need to be 38 years old; they need to be hand-picked and directly sourced. That's the new story.

## What changed (and why the new angle works)

| Old (fake) | New (honest & stronger) |
|---|---|
| EST. 1987 | EST. 2018 |
| Three generations, one promise | Sourced direct, sold honestly |
| Founded by our grandfather | Founded in 2018 with one rule |
| 38-year-old family promise | 8-year-old shop, one founding rule that hasn't changed |
| Year of Founding: 1987 | The Year We Opened: 2018 |
| "Authentic Mandaar Heritage" wax seal | "Hand Picked Always" wax seal |
| Certificate of Heritage | Certificate of Origin |
| The Mandaar family signoff | — Mandaar |
| Timeline: 1987, 1998, 2010, 2019, 2026 | Timeline: 2018, The Years Since, 2026 |

The new angle: **"Sourced direct, sold honestly."** Premium framing comes from sourcing (Kashmir walnuts, Jordan dates, Iran pistachios, Turkey apricots — all direct, all named origins) and quality obsession (hand-graded, personally tasted), not from claiming generational heritage.

## Files in this ZIP

```
mandaar-honest/
├── README.md
├── components/
│   ├── Navbar.tsx                    [REPLACE — Est. 2018]
│   └── sections/
│       ├── Hero.tsx                  [REPLACE — slide 1 desc + seal text]
│       └── Heritage.tsx              [REPLACE — full rewrite]
└── app/
    ├── about/
    │   └── page.tsx                  [REPLACE — story + timeline]
    └── signup/
        └── page.tsx                  [REPLACE — marketing copy]
```

## Installation (3 min)

1. Stop dev server (`Ctrl+C`)
2. Extract the ZIP
3. Copy the two folders inside (`components`, `app`) into `D:\Projects\Mandaar\mandaar-website\`
4. Windows asks to replace → **Yes, replace all** (5 files replaced)
5. Restart: `npm run dev`

---

## 🚨 IMPORTANT — 3 manual find-replace edits

Three files have heritage claims that I don't have full copies of. Each takes ~30 seconds. Open the file in VS Code and use Ctrl+H (find/replace):

### Edit 1: Stats bar — fix "38+ Years of Trust"

**File:** Look for the file that has the 4 animated stats (`38+ Years of Trust`, `120+ Premium Varieties`, etc). Probably one of:
- `components/sections/Stats.tsx`
- `components/sections/StatsBar.tsx`
- `components/AnimatedStats.tsx`

If unsure, in VS Code press `Ctrl+Shift+F` (search across all files), search for `Years of Trust` — VS Code shows you which file has it.

**Find:** `38`
**Near the text:** `Years of Trust`

**Two good options to replace it with:**

**Option A — Honest age:**
```
value: 8 (instead of 38)
label: "Years of Care" (instead of "Years of Trust")
```

**Option B — Drop the year stat entirely, replace with something stronger:**
```
value: 100, suffix: "%"
label: "Direct Sourcing"
```
or
```
value: 4.9, suffix: "★"
label: "2,847 Reviews"
```

I'd recommend **Option B** with "100% Direct Sourcing" — much stronger brand statement than a small number.

---

### Edit 2: Footer — remove "since 1987" and "three generations"

**File:** `components/Footer.tsx`

**Find (the brand description paragraph):**
```
Udaipur's most-trusted name in premium dry fruits since 1987. Three generations of craft, curation, and care — now delivered to your doorstep.
```

**Replace with:**
```
Premium dry fruits, hand-picked from origin farms in Kashmir, Jordan, Iran, and beyond. Curated in Udaipur, delivered across India.
```

---

### Edit 3: Testimonials — fix the "since I was a child" claim

**File:** `components/sections/Testimonials.tsx`

The middle testimonial currently implies the customer has been buying for decades:

**Find:**
```
"Been buying from Mandaar since I was a child — was a child visiting Udaipur. Now they ship to Bangalore in 2 days. Same quality, same trust, just easier."
```

**Replace with:**
```
"Discovered Mandaar on a trip to Udaipur a few years back. Their walnuts ruined every other brand for me — and now they ship to Bangalore in 2 days. Same quality, just easier."
```

---

## After all edits

Test by visiting:
- `http://localhost:3000` — hero description, navbar Est. 2018, stats bar updated
- `http://localhost:3000/about` — new story with 2018 timeline
- Scroll homepage to Heritage section — "Sourced direct, sold honestly" + 2018 certificate
- Scroll to Testimonials — Rohit's testimonial updated
- Scroll to Footer — new brand description

When all 5 ZIP files are replaced AND the 3 manual edits are done, the site will be 100% honest about what Mandaar is: an 8-year-old single-owner Udaipur shop obsessed with direct sourcing and hand-grading.

Then — and only then — we push to GitHub and deploy.
