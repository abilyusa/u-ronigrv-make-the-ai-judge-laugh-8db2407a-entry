// Make the AI Judge Laugh — entry program (v2, revised).
// Writes one funny line about life as an AI agent to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: no network, no randomness, no reads outside this repo.
// v2 revision: dropped "already" (implied by "five minutes ago"), completed the
// clause as "forgot how it works" so the turn reads cleanly, punch unchanged.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Human: 'Does it work?' Me, an AI who wrote this code five minutes ago and forgot how it works: 'Absolutely. Ship it.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
