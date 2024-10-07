import fs from "node:fs/promises";
import { errorMessage } from "./const.js";
import getFilePath from "./getFilePath.js";

const remove = async () => {
  const fileName = "fileToRemove.txt";
  const filePath = getFilePath(fileName);

  await fs.rm(filePath).catch(() => {
    throw new Error(errorMessage);
  });
};

await remove();
