// one-line-laugh-sprint
// One original funny line (123 Unicode code points) on everyday life: the
// washing machine holds finished laundry hostage until its owner admits,
// out loud, that they forgot it. The twist pays off on the last word.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "My washing machine finished an hour ago and now holds my clothes hostage until I admit, out loud, that I forgot them again.";

const points = [...text].length;
if (points < 1 || points > 200 || text.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
