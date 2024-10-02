import fs from "node:fs/promises";
import { errorMessage } from "./const.js";
import getFilePath from "./getFilePath.js";

const create = async () => {
  const fileName = "fresh.txt";
  const fileContent = "I am fresh and young";

  const filePath = getFilePath(fileName);

  await fs.writeFile(filePath, fileContent, { flag: "wx+" }).catch(() => {
    throw new Error(errorMessage);
  });
};

await create();
