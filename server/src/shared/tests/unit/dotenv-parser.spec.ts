import { SERVER_BASE_DIR } from '../../testing/test-data/constants';
import { unlinkSync, writeFileSync } from 'fs';

const testDotenvFile = '.env.testing';

beforeAll(() => {
  const testDotenvData = 'DEVELOPER_NAME=TALEL\nDEVELOPER_AGE=34';
  writeFileSync(`${SERVER_BASE_DIR}/${testDotenvFile}`, testDotenvData);
});

afterAll(() => {
  unlinkSync(`${SERVER_BASE_DIR}/${testDotenvFile}`);
});

describe('dotenv-parser', () => {
  test('', () => {
  });
});
