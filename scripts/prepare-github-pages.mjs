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

// Keep existing Chinese bookmarks working without publishing a Chinese version.
for (const path of ["", "blog", "privacy-policy", "terms-of-service"]) {
  const destination = path ? `/${path}/` : "/";
  const legacyDir = join(outDir, "zh", path);
  await mkdir(legacyDir, { recursive: true });
  await writeFile(
    join(legacyDir, "index.html"),
    `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="robots" content="noindex">
  <meta http-equiv="refresh" content="0;url=${destination}">
  <title>Redirecting</title>
</head>
<body><a href="${destination}">Continue to the English site</a></body>
</html>
`,
  );
}
