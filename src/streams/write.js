import fs from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { fileURLToPath } from "node:url";

const write = async () => {
  const fileName = "fileToWrite.txt";

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, "files", fileName);

  const writeStream = fs.createWriteStream(filePath);

  await pipeline(process.stdin, writeStream);
};

await write();
