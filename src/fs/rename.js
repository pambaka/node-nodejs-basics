import path from "path";
import fs from "fs/promises";
import getDirname from "./getDirname.js";
import { errorMessage, folderName } from "./const.js";

const rename = async () => {
  const fileName = "wrongFilename.txt";
  const newFileName = "properFilename.md";

  const __dirname = getDirname();

  const filePath = path.join(__dirname, folderName, fileName);
  fs.access(filePath).catch(() => {
    throw new Error(errorMessage);
  });

  const newFilePath = path.join(__dirname, folderName, newFileName);
  fs.access(newFilePath).then(
    () => {
      throw new Error(errorMessage);
    },
    () => {
      fs.rename(filePath, newFilePath);
    }
  );
};

await rename();
