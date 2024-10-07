import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";
import { Writable } from "node:stream";

const calculateHash = async () => {
  const fileName = "fileToCalculateHashFor.txt";

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", fileName);

  const readStream = fs.createReadStream(filePath);

  const hash = createHash("sha256").setEncoding("hex");

  const writeStream = new Writable({
    write(chunk, encoding, cb) {
      process.stdout.write(`${chunk}${os.EOL}`);
      cb();
    },
  });

  await pipeline(readStream, hash, writeStream);
};

await calculateHash();
