import { SERVER_BASE_DIR } from '../../testing/test-data/constants';
import { writeFileSync } from 'fs';

beforeAll(() => {
  const testDotenvFile = '.env.testing';
  const testDotenvData = 'DEVELOPER_NAME=TALEL\nDEVELOPER_AGE=34';

  writeFileSync(`${SERVER_BASE_DIR}/${testDotenvFile}`, testDotenvData);
});

describe('dotenv-parser', () => {
  test('', () => {
    console.log('Smoke test');
  });
});
