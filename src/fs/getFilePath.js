import path from "node:path";
import getDirname from "./getDirname.js";
import { folderName } from "./const.js";

const getFilePath = (fileName) => {
  const __dirname = getDirname();
  const filePath = path.join(__dirname, folderName, fileName);

  return filePath;
};

export default getFilePath;
