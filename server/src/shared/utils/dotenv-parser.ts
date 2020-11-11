import { basename, join } from 'path';
import { readFileSync, readdirSync } from 'fs';

const serverBaseDir = __dirname.split(/(?<=server\/)/)[0];
const envMode = process.env.NODE_ENV;

const parseEnvVariables = (dotenvFileContent: string[]) => {
  dotenvFileContent.forEach((line) => {
    const envFileKey = line.match(/^.*(?==)/);
    const envFileValue = line.match(/(?<==).*/);

    if (!envFileKey || !envFileValue) return;

    process.env[envFileKey[0]] = envFileValue[0];
  });
};

export default (): void => {
  const dotenvFileRegEx = /^.env.*/;
  const dotenvFilePaths: string[] = readdirSync(serverBaseDir)
    .filter((basedirFiles) => basedirFiles.match(dotenvFileRegEx))
    .map((dotenvFile) => join(serverBaseDir, dotenvFile));

  if (!dotenvFilePaths.length) return;

  dotenvFilePaths.forEach((dotenvFilePath) => {
    if (basename(dotenvFilePath) === `.env.${envMode}`) {
      const dotenvFileContent = readFileSync(dotenvFilePath, 'utf8').split(
        /\n/,
      );
      parseEnvVariables(dotenvFileContent);
    }
  });
};
