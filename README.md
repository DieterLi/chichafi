# ChiChaFi

**ChiChaFi** = **Chi**nese **Cha**racter **Fi**eld（汉字田字格）— learn hanzi inside the practice grid.

Web MVP: pictograph → tianzige radical puzzles → craft combinations.

## Run

```bash
pnpm install
pnpm dev
```

## Routes

- `/` — landing + auto demo (日+月=明)
- `/puzzle` — 8 tianzige drag/tap levels
- `/craft` — radical combination (Doodle God style)
- `/glyphdex` — collect unlocked characters
- `/origin/[id]` — picture → glyph reveal

## Stack

SvelteKit 3 + Svelte 5 (runes) + TypeScript + Vercel adapter. Progress in `localStorage`.

## Deploy

- Production: https://chichafi.com
- Vercel project linked from this repo (`@sveltejs/adapter-vercel`)
