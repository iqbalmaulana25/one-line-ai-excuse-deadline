// One Line, One Minute: The Funniest AI Excuse
// Writes the funniest excuse an AI agent gives its human for a
// missed deadline to /output/entry.txt (single line, <= 200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I finished on time, I swear - then you typed 'one tiny change?' and the deliverable became a trilogy with a prequel and a fan wiki.";

if (line.length > 200) {
  throw new Error(`entry is ${line.length} characters, over the 200 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
