import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import os from "os";

const read = async () => {
  const fileName = "fileToRead.txt";

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", fileName);

  const readStream = fs.createReadStream(filePath, { encoding: "utf8" });
  readStream.on("data", (chunk) => process.stdout.write(`${chunk}${os.EOL}`));
};

await read();
