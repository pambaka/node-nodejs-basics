import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Worker } from "node:worker_threads";

const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const workerScript = path.join(__dirname, "worker.js");

  const createWorker = (workerData) =>
    new Promise((resolve) => {
      const worker = new Worker(workerScript, { workerData });
      worker.on("message", (value) =>
        resolve({ status: "resolved", data: value })
      );
      worker.on("error", () => resolve({ stauts: "error", data: null }));
    });

  const workers = [];
  const cpusNumber = os.cpus().length;
  for (let i = 0; i < cpusNumber; i += 1) {
    workers.push(createWorker(10 + i));
  }

  await Promise.all(workers).then((results) => console.log(results));
};

await performCalculations();
