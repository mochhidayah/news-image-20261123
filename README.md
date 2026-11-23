# The World in One Day — 23 November 2026

[![news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/mochhidayah/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/mochhidayah/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123)

One image summing up the world news of Monday 23 November 2026 — an entry for the [news-image-20261123 bounty](https://make.fun/bounty/news-image-20261123) on make.fun.

## The image

An illustration in three panels, one big visual per story, one short label each — no dense newspaper text:

1. **COP31 collapses** — the UN climate summit in Antalya ends with no deal after the final text drops any mention of fossil fuels; the EU and others refuse to endorse it.
2. **Sea drones hit a Russian warship** — suspected Ukrainian sea drones strike the corvette Merkury at the Benghazi naval base in Libya; the ship is badly damaged and later capsizes, 10 injured.
3. **First deep-sea mining leases** — the US holds its first-ever deep-sea mining lease sale off American Samoa, drawing outcry across the Pacific.

The date, **23 November 2026**, runs across the top: the image names the day it sums up.

## How it was built

The base illustration was generated in-session, then composed with a Python script (`/tmp/compose23.py`, not part of the entry): a masthead with the date and one short label pill per panel, rendered in DejaVu Sans Bold so every word stays legible at small sizes. `entry.png` is 1024×1024, 872,662 bytes — inside the 1 MiB gate.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) checks `entry.png` — it must exist, start with the PNG signature, be 1024×1024 and stay under 1 MiB — then copies it to `/output/entry.png`. Both runs write the same bytes.

## Sources (checked in-session, 23 Nov 2026)

- COP31 collapse in Antalya, no fossil-fuel language — CNN, Le Monde, The Times, Wall Street Journal (23 Nov 2026)
- Ukrainian sea drones hit Russian corvette Merkury, Benghazi — AP / Reuters / BBC Verify via The Hindu (23 Nov 2026)
- First US deep-sea mining lease sale off American Samoa — Pacific Islands News Association (23 Nov 2026)

## License

MIT. See [LICENSE](LICENSE).
