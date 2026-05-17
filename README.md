# Mandaar — Search/Cart + Blank Sections Fix

Four fixes in one package, addressing what your screenshots revealed:

## What this fixes

### 1. Search button now works ✅
Click the magnifying glass in the navbar — it opens a search modal with:
- Live filtering of all 12 products as you type
- Filters by name, origin (Kashmir, Jordan, etc.) and category
- Click any result to go to its product page (placeholder for now)
- Press ESC or click outside to close
- "Popular Products" shown by default when no search

### 2. Cart button now works ✅
Click the bag icon — it now links to `/cart`. (Once Phase 4 adds real cart functionality, the icon will also show a badge with item count.)

### 3. Blank sections fixed ✅
**Why they were blank:** my `Reveal` component sets new content to `opacity: 0` and only fades it in when scrolled into view using IntersectionObserver. On full-page screenshots, that "scroll into view" never happens, so content stays invisible forever.

**Fix:** Added a 1.2-second failsafe — if IntersectionObserver hasn't triggered by then, content reveals anyway. Also lowered the trigger threshold so it fires earlier.

This fixes:
- Gift page "Perfect For" occasions section
- Gift page "Bulk Orders" CTA
- Mobile homepage looking mostly empty
- Any other section that was blank in screenshots

### 4. About page Timeline rewritten ✅
The previous version used a confused `[direction:rtl]`/`[direction:ltr]` hack with conditional rendering that didn't actually work. Rewrote it as a clean alternating left/right grid with a center vertical line. Now the 5 milestones (1987 → 2026) render properly on both desktop and mobile.

## Files in this ZIP

```
mandaar-fixes/
├── README.md
├── components/
│   ├── Navbar.tsx        [REPLACE — working search & cart]
│   ├── SearchModal.tsx   [NEW — search overlay]
│   └── Reveal.tsx        [REPLACE — failsafe for blank sections]
└── app/
    └── about/
        └── page.tsx      [REPLACE — fixed timeline]
```

## Installation

1. Stop dev server (`Ctrl+C`)
2. Extract ZIP
3. Open the extracted `mandaar-fixes/` folder
4. Copy both folders inside (`components`, `app`) into `D:\Projects\Mandaar\mandaar-website\`
5. Windows asks to replace → **Yes, replace all** (3 files will be replaced, 1 new file added)
6. Restart: `npm run dev`

## How to test

After install, on `http://localhost:3000`:

- **Search:** Click the 🔍 in the top right → modal opens → type "dates" → see filtered results → press ESC to close
- **Cart:** Click the 🛒 → goes to `/cart` (empty state page)
- **About:** Visit `/about` → scroll down → see the timeline render with all 5 milestones alternating left/right
- **Gift:** Visit `/gift` → scroll down → see the "Perfect For" occasions and "Bulk Orders" CTA fill in (no more blank sections)
- **Mobile:** Resize browser narrow → hamburger menu works → no blank sections

That's it. After this, the site should feel solid and ready to deploy.
