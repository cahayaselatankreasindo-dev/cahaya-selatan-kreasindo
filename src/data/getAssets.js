import fs from "node:fs";
import path from "node:path";

const assetsRoot = path.resolve("public/assets");

function getFiles(folder) {
  const folderPath = path.join(assetsRoot, folder);

  if (!fs.existsSync(folderPath)) {
    return [];
  }

  return fs
    .readdirSync(folderPath, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => `/assets/${folder}/${entry.name}`);
}

export function getCategoryAssets(category) {
  if (!category) return [];

  const folders = category.folders ?? [category.folder];

  return folders
    .filter(Boolean)
    .flatMap((folder) => getFiles(folder));
}
