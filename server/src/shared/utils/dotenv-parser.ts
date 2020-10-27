import { readdirSync, readFileSync } from 'fs';
import { join, basename } from 'path';

// !
process.env.NODE_ENV = 'development';
// !

const serverBaseDir = __dirname.split(/(?<=server\/)/)[0];
const envMode = process.env.NODE_ENV;

const parseEnvVariables = (dotenvFileContent: string[]) => {
  if (dotenvFileContent.includes('')) return;
};

export const test = (): void => {
  const dotenvFileRegEx = /^.env.*/;
  const dotenvFilePaths: string[] = readdirSync(serverBaseDir)
    .filter((dotenvFile) => dotenvFile.match(dotenvFileRegEx))
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

// !
test();
// !
