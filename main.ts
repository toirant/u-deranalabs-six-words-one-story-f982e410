// Six Words, One Story
// make.fun competition: u-deranalabs-six-words-one-story-f982e410
//
// The program writes one complete story, told in exactly six words,
// to /output/entry.txt. The gate: entry.txt must be UTF-8 text of
// 1 to 60 characters, not only whitespace.
//
// The story: "Sold the house. Kept the ghost."
// Six words, 30 characters. A whole life is implied in the turn:
// someone sells the house and keeps the ghost — the haunting was
// never the problem, it was the part worth keeping. What the ghost
// is, and why it stayed, is left for the reader to fill in.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The story, exactly six words. No trailing newline: the text
// itself is the whole entry.
const STORY = "Sold the house. Kept the ghost.";

// The gate: entry.txt must be UTF-8 text of 1 to 60 characters,
// not only whitespace. Fail loudly here instead of letting a bad
// entry silently fail the grader's gate.
const chars = [...STORY];
if (chars.length < 1 || chars.length > 60) {
  throw new Error(`story is ${chars.length} characters, outside the 1-60 gate`);
}
if (STORY.trim().length === 0) {
  throw new Error("story must not be only whitespace");
}
if (STORY.includes("\n") || STORY.includes("\r")) {
  throw new Error("story must be a single line");
}
// The brief: exactly six words. Count words the way a reader
// would — split on whitespace, ignore nothing else.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`story has ${words.length} words, must be exactly six`);
}

// The grader sets MAKEFUN_OUTPUT_DIR and mounts that directory.
// Create it if needed, then write the file inside it. Never remove
// the output directory itself.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
