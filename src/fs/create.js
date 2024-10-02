import path from "path";
import fs from "fs/promises";
import getDirname from "./getDirname.js";
import { errorMessage, folderName } from "./const.js";

const create = async () => {
  const fileName = "fresh.txt";
  const fileContent = "I am fresh and young";

  const __dirname = getDirname();
  const filePath = path.join(__dirname, folderName, fileName);

  fs.writeFile(filePath, fileContent, { flag: "wx+" }).catch(() => {
    throw new Error(errorMessage);
  });
};

await create();
