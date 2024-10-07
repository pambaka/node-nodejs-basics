const parseArgs = () => {
  const startChars = "--";

  const args = process.argv;
  const argPairs = [];

  for (let i = 0; i < args.length; i += 1) {
    if (args[i].startsWith(startChars))
      argPairs.push(`${args[i].replace(startChars, "")} is ${args[i + 1]}`);
    i += 1;
  }

  console.log(argPairs.join(", "));
};

parseArgs();
