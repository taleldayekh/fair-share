import { join, basename } from 'path';
import { readdirSync, readFileSync } from 'fs';

const baseDir = __dirname.split(/(?<=server\/)/)[0];
const env = process.env.NODE_ENV;

export default (): void => {
  const dotEnvFiles = readdirSync(baseDir)
    .filter((dotEnvFile) => dotEnvFile.match(/.env.*/))
    .map((dotEnvFile) => join(baseDir, dotEnvFile));

  const _parseEnvVariables = (lines: string[]): void => {
    lines.forEach((line) => {
      if (line.match(/^\s*$/)) return;

      const key = line.match(/^.*(?==)/);
      const value = line.match(/(?<==).*/);

      if (!key || !value) return;

      process.env[key[0]] = value[0];
    });
  };

  dotEnvFiles.map((envFile) => {
    if (basename(envFile) === `.env.${env}`) {
      const envFileContent = readFileSync(envFile, 'utf8');
      const lines = envFileContent.split(/\n/);
      _parseEnvVariables(lines);
    }
  });
};
