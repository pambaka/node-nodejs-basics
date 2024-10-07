import child_process from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const spawnChildProcess = async (args) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const childScriptPath = path.join(__dirname, "files", "script.js");

  const child = child_process.spawn("node", [childScriptPath, ...args]);

  process.stdin.pipe(child.stdin);

  child.stdout.on("data", (data) => process.stdout.write(`${data}`));
};

spawnChildProcess([1, "a", 2, "b"]);
