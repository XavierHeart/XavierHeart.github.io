import { copyFile, cp, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");
const defaultLocaleDir = join(outDir, "en");

await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, ".nojekyll"), "");

await cp(defaultLocaleDir, outDir, {
  recursive: true,
  force: true,
});

await copyFile(join(outDir, "index.html"), join(outDir, "404.html"));
