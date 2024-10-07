import os from "node:os";
import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      const str = chunk.toString();

      let reversedStr = "";
      for (let i = str.length - 1; i >= 0; i -= 1) {
        reversedStr += str[i];
      }

      this.push(`${reversedStr}${os.EOL}`);

      callback();
    },
  });

  await pipeline(process.stdin, reverse, process.stdout);
};

await transform();
