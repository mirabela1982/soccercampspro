## Goal

Ensure the search bar is **always** visible above the fold (with breathing room below), and apply the requested copy changes.

## Root cause of the current bug

`Hero` has `min-height: 100svh` **and** `SearchBar` is a separate sibling section pulled up with a negative margin (`-mt-32/-40/-48`). The hero already fills the full viewport, so the search bar is anchored below the fold and only partially pulled into view. On short screens it gets cut.

## Fix: render the SearchBar inside the Hero

Make the Hero a flex column of full viewport height, containing:

1. Header spacer (h-16 / h-20)
2. Hero text block (`flex-1`, centered, absorbs remaining space)
3. SearchBar (fixed, with `pb-6/8` margin below for its shadow)

Because the whole stack sits inside a `min-h-100svh` flex container, the SearchBar is guaranteed to be the last visible element in the fold on any screen. The curve SVG remains absolutely positioned at the bottom and is shrunk slightly (90px / 140px) so it doesn't eat the searchbar area.

Remove the sibling `<SearchBar />` from `src/routes/index.tsx` since it will now be rendered inside `<Hero />`.

## Tightening the hero to fit

- Reduce button gap from `gap-3` → `gap-2` (as requested).
- Slightly smaller button padding (`px-5 py-2.5`) so both CTAs fit comfortably.
- Slightly tighter hero type scale (`text-3xl md:text-5xl lg:text-6xl`) and tighter vertical rhythm (`mt-5/mt-4/mt-6`) to leave room for the search card on laptop screens.
- SearchBar card padding reduced (`p-5 md:p-6`), field height `h-11`, grid gap `gap-3` — keeps all 6 columns in one row on desktop.

## Copy changes

- Hero H1: `Find the Best Youth / Soccer Camps` → `**Find Your Youth / Soccer Camp**`
- Primary CTA: `Explore Camps` → `**Explore Soccer Camps**`
- SearchBar heading: `Find Your Camp` → `**Find Your Soccer Camp**`
- utiliza la tipografía Montserrat para los títulos 

## Files to edit

- `src/components/site/Hero.tsx` — restructure as flex column, import and render `SearchBar` inside, update H1 + CTA text, tighten spacing, reduce button gap.
- `src/components/site/SearchBar.tsx` — remove negative margin (no longer needed), make it a simple in-flow block, update heading text, tighten padding/heights.
- `src/routes/index.tsx` — remove the now-duplicate `<SearchBar />` import and usage from the page (it's inside `<Hero />`).

## Layout diagram

```text
┌─────────────────────────────────────────┐ ← top of viewport
│  [header: transparent, logo + nav]      │
│                                         │
│         Find Your Youth                 │
│         SOCCER CAMP (lime)              │
│         subcopy                         │
│      [Explore Soccer Camps] [View Clubs]│
│                                         │
│  ╱─────── curve ───────╲                │
│  ┌───────────────────────────────────┐  │
│  │ Find Your Soccer Camp             │  │
│  │ [Country][City][Club][Age][Mo][🔍]│  │
│  └───────────────────────────────────┘  │
│              ↕ pb-6/8 shadow margin     │
└─────────────────────────────────────────┘ ← fold (100svh)
```