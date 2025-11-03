import { readFileSync } from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function readFileBuffer(filePath: string): ArrayBuffer {
  const b = readFileSync(path.join(__dirname, "../../", filePath));

  return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
}
