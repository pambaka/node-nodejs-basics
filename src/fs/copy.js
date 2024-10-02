import fs from "node:fs/promises";
import path from "node:path";
import getDirname from "./getDirname.js";
import { errorMessage, folderName } from "./const.js";

const copy = async () => {
  const newFolderName = "files_copy";

  const __dirname = getDirname();
  const srcFolder = path.join(__dirname, folderName);
  const destFolder = path.join(__dirname, newFolderName);

  await fs
    .cp(srcFolder, destFolder, {
      force: false,
      errorOnExist: true,
      recursive: true,
    })
    .catch(() => {
      throw new Error(errorMessage);
    });
};

await copy();
