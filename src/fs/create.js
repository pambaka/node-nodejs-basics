import { fileURLToPath } from "url";
import path from "path";
import fs from "fs/promises";

const create = async () => {
  const fileName = "fresh.txt";
  const fileContent = "I am fresh and young";

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.join(__dirname, "files", fileName);

  fs.writeFile(filePath, fileContent, { flag: "wx+" }).catch(() => {
    throw new Error("FS operation failed");
  });
};

await create();
