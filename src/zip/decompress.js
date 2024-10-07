import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";

const decompress = async () => {
  const archiveName = "archive.gz";
  const fileName = "fileToCompress.txt";
  const folder = "files";

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const archivePath = path.join(__dirname, folder, archiveName);
  const filePath = path.join(__dirname, folder, fileName);

  const readStream = fs.createReadStream(archivePath);
  const writeStream = fs.createWriteStream(filePath);
  const gunzip = zlib.createGunzip();

  await pipeline(readStream, gunzip, writeStream);
};

await decompress();
