import fs from "node:fs/promises";
import path from "node:path";
import getDirname from "./getDirname.js";
import { errorMessage, folderName } from "./const.js";

const list = async () => {
  const __dirname = getDirname();
  const folderPath = path.join(__dirname, folderName);

  await fs
    .readdir(folderPath)
    .then((files) => console.log(files))
    .catch(() => {
      throw new Error(errorMessage);
    });
};

await list();
