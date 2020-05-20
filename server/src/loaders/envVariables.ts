import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';

const baseDir = __dirname.split(/(?<=server\/)/)[0];

((): void => {
  const dotEnvFiles = readdirSync(baseDir)
    .filter((dotEnvFile) => dotEnvFile.match(/.env.*/))
    .map((dotEnvFile) => join(baseDir, dotEnvFile));

  const _parseEnvVariables = (envLine): void => {};
})();
