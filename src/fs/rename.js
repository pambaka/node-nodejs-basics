import fs from "node:fs/promises";
import { errorMessage } from "./const.js";
import getFilePath from "./getFilePath.js";

const rename = async () => {
  const fileName = "wrongFilename.txt";
  const newFileName = "properFilename.md";

  const filePath = getFilePath(fileName);
  await fs.access(filePath).catch(() => {
    throw new Error(errorMessage);
  });

  const newFilePath = getFilePath(newFileName);
  await fs.access(newFilePath).then(
    () => {
      throw new Error(errorMessage);
    },
    async () => {
      await fs.rename(filePath, newFilePath);
    }
  );
};

await rename();
