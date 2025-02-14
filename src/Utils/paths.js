import path from "path";
import { fileURLToPath } from "url";

export function getPaths(metaUrl) {
  const __filename = fileURLToPath(metaUrl);
  const __dirname = path.dirname(__filename);
  return { __filename, __dirname };
}
const __parseFilename = fileURLToPath(import.meta.url);
const __parseDirname = path.dirname(__parseFilename);
export const parseScriptPath = path.join(__parseDirname, "../parse/parseRSS.js"); // Caminho do script de parse
export const jsonFilePath = path.join(__parseDirname, "../parse/feed.json");   // Caminho do JSON gerado