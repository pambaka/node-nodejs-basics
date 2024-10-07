import fs from "node:fs/promises";
import getFilePath from "./getFilePath.js";
import { errorMessage } from "./const.js";

const read = async () => {
  const fileName = "fileToRead.txt";
  const filePath = getFilePath(fileName);

  await fs
    .readFile(filePath, { encoding: "utf8" })
    .then((content) => console.log(content))
    .catch(() => {
      throw new Error(errorMessage);
    });
};

await read();
