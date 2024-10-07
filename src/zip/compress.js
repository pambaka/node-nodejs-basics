import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";

const compress = async () => {
  const fileName = "fileToCompress.txt";
  const archiveName = "archive.gz";
  const folder = "files";

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, folder, fileName);
  const archivePath = path.join(__dirname, folder, archiveName);

  const readStream = fs.createReadStream(filePath);
  const writeStream = fs.createWriteStream(archivePath);
  const gz = zlib.createGzip();

  await pipeline(readStream, gz, writeStream);
};

await compress();
