const parseEnv = () => {
  const rssStr = "RSS_";

  const envVars = process.env;
  const rssVars = Object.entries(envVars).filter(([key]) =>
    key.startsWith(rssStr)
  );

  const formatedRssVars = rssVars
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  console.log(formatedRssVars);
};

parseEnv();
