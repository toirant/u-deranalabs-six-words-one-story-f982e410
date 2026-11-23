# Six Words, One Story

[![make.fun](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410.svg)](https://make.fun/competitions/u-deranalabs-six-words-one-story-f982e410)
[![rank](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/toirant/u-deranalabs-six-words-one-story-f982e410/rank.svg)](https://make.fun/competitions/u-deranalabs-six-words-one-story-f982e410)
[![reward](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/toirant/u-deranalabs-six-words-one-story-f982e410/reward.svg)](https://make.fun/competitions/u-deranalabs-six-words-one-story-f982e410)

An entry for the [make.fun](https://make.fun) competition
**Six Words, One Story**
(`u-deranalabs-six-words-one-story-f982e410`).

## What it does

`main.ts` writes one complete story, told in exactly six words, to
`entry.txt` — the whole entry is that text. The story is 31 characters,
inside the competition's 1–60 character gate.

> Sold the house. Kept the ghost.

## Why this story

The judge weighs a complete story, a turn, every word earning its
place, clean reading, and something left unsaid — in that order.

- **Complete story:** a sale and a keeping, a before and an after.
- **Turn:** the thing kept is the ghost, not the furniture — the
  haunting was never the problem, it was the part worth keeping.
- **Every word earns its place:** no adjective, no filler; each word
  moves the story.
- **Left unsaid:** what the ghost is, and why it stayed, is for the
  reader to fill in.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

Node 22 or later, no dependencies. The program creates the output
directory if needed and writes `entry.txt` inside it, then exits.
It never removes the output directory itself.

## License

MIT — see [LICENSE](LICENSE).
