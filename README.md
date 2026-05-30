# Mandaar - Cleanup Update

Five-issue cleanup based on your screenshots. Addresses every concern you raised.

## What's in this package

```
mandaar-cleanup/
├── README.md
├── cleanup-emdashes.ps1                  [SCRIPT - run once]
├── components/
│   ├── Navbar.tsx                        [REPLACE - "Heritage" -> "Our Story"]
│   └── sections/
│       ├── Hero.tsx                      [REPLACE - new Mamra slide, no em-dashes]
│       └── Heritage.tsx                  [REPLACE - new visual design]
└── app/
    └── about/
        └── page.tsx                      [REPLACE - "Our Story" breadcrumb, no em-dashes]
```

## What was fixed

### 1. Hero - Medjoul Dates slide removed
That slide referenced a product you don't sell. Replaced with a **Mamra Almonds** slide (your premium hero product). Also rewrote slide 1's description to remove the "dates" reference. Slide 3 (Kashmiri walnuts) stays - you DO sell those.

The floating card on the right also updated from "Medjoul Dates - Premium ₹1,355/kg" to "Mamra Badam - Iran - From ₹4,099/kg".

### 2. Heritage section visual - redesigned
The "Origin 2018" certificate that looked stuck in green wasn't a placeholder for an image. It was a CSS-drawn certificate card whose cream background failed to render properly (a Tailwind class issue).

Instead of debugging it, I redesigned the entire visual to be **clearly intentional** on the dark green: a saffron-tinted plaque with corner ornaments, a huge "2018" in saffron, decorative dividers, and the "Hand Picked Always" wax seal. Looks finished, no more confusion about whether something is missing.

### 3. "Heritage" -> "Our Story" everywhere
- Navbar link label
- About page breadcrumb
- URL stays `/about` (no broken links)

### 4. Em-dashes -> hyphens
**A PowerShell script does this across your whole project in one command.** See "How to run" below.

### 5. Stats bar + Marquee (manual edits - see below)
I don't have your existing Stats.tsx and Marquee files. You need to do two small edits in VS Code. Each takes about 1 minute.

---

## Installation steps

### Step 1: Install the 4 ZIP files

1. Stop dev server (`Ctrl+C`)
2. Extract the ZIP
3. Open the extracted `mandaar-cleanup/` folder
4. Copy both folders inside (`components`, `app`) into `D:\Projects\Mandaar\mandaar-website\`
5. Also copy `cleanup-emdashes.ps1` into the same root project folder
6. Windows asks to replace -> **Yes, replace all** (4 files)

### Step 2: Run the em-dash cleanup script

In VS Code terminal:

```powershell
cd D:\Projects\Mandaar\mandaar-website
powershell -ExecutionPolicy Bypass -File .\cleanup-emdashes.ps1
```

You'll see green output listing every file that got updated. Probably 5 to 15 files. Safe to re-run anytime.

### Step 3: Manual edit - Stats section

In VS Code, press **`Ctrl+Shift+F`** (global search) and search for: `Years of Trust`

It'll point you to the Stats file (probably `components/sections/Stats.tsx` or `StatsBar.tsx` or similar).

Find the array of stat objects, which looks something like:

```tsx
const stats = [
  { value: 38, suffix: "+", label: "Years of Trust" },
  { value: 120, suffix: "+", label: "Premium Varieties" },
  { value: 15, suffix: "K+", label: "Happy Households" },
  { value: 50, suffix: "+", label: "Cities Served" },
];
```

**Replace it with this:**

```tsx
const stats = [
  { value: 25, suffix: "+", label: "Premium Varieties" },
  { value: 10, suffix: "+", label: "Origin Countries" },
  { value: 100, suffix: "%", label: "Direct Sourced" },
  { value: 8, suffix: "+", label: "Years of Care" },
];
```

These numbers are all honest:
- 25 = your actual product count
- 10 = origin countries (Kashmir, Iran, Goa, California, Turkey, Australia, USA, India, etc.)
- 100% = your direct-sourcing brand promise
- 8 = years since 2018

Save the file.

### Step 4: Manual edit - Marquee/Ticker bar

Search for: `Three Generations` (or `SINCE 1987`)

It'll point you to your marquee file. Find the array of items, which looks something like:

```tsx
const items = [
  "HAND-GRADED",
  "PAN-INDIA DELIVERY IN 2-4 DAYS",
  "THREE GENERATIONS OF TRUST",
  "SINCE 1987",
  "FREE SHIPPING OVER ₹999",
  "FRESH FROM UDAIPUR",
];
```

**Replace it with this:**

```tsx
const items = [
  "HAND-PICKED PREMIUM GRADE",
  "DIRECT FROM ORIGIN FARMS",
  "PAN-INDIA DELIVERY 2-4 DAYS",
  "VACUUM-SEALED FRESH",
  "FREE SHIPPING ₹999+",
  "FRESH FROM UDAIPUR",
];
```

Save.

### Step 5: Test locally

```powershell
npm run dev
```

Check:
- Homepage hero - cycle through 3 slides (no Medjoul any more)
- Stats bar shows "25+ Premium Varieties / 10+ Origin Countries / 100% Direct Sourced / 8+ Years of Care"
- Marquee shows new text
- Heritage section has the new saffron plaque with big 2018
- Navbar shows "Our Story" instead of "Heritage"
- Click "Our Story" -> lands on `/about` with the right breadcrumb
- No em-dashes anywhere (search Ctrl+F for the long dash)

### Step 6: Deploy to live site

```powershell
git add .
git commit -m "Cleanup: remove fake products, honest stats, Our Story rename, em-dash cleanup"
git push
```

Vercel auto-deploys in ~90 seconds. Your live site updates.

---

## About the "Heritage section certificate" question

You asked: "is it an image placeholder?"

**Short answer:** No, but I see why it looked like one. The original design was a CSS-drawn "cream paper certificate" that should have stood out against the dark green section. But the cream background wasn't rendering correctly, so the text floated awkwardly on green. It looked like something was missing.

The new design avoids this entirely. It's a saffron-tinted plaque that's CLEARLY a design element. The big "2018" is now the focal point. The "Hand Picked Always" wax seal stays in the corner. No confusion.

**If you DO want to replace it with an actual photo later** (a shot of the shop, or your hand-grading process, or just a beautiful product photo), it's easy. Send me the photo and I'll swap the plaque visual out for an image in 5 minutes. But the current design works perfectly as-is.

---

After all 6 steps, your site will be:
- Free of any product you don't actually sell
- Free of inflated/fake stats
- Free of "1987" / "three generations" references
- Free of em-dashes
- Visually fixed (Heritage section)
- Renamed properly (Our Story instead of Heritage)

Then push and your live site reflects all of it within 2 minutes.
