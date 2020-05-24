import * as userModels from '../../../../../models/user';
import { testData } from '../../../../../shared/testing/test-data';
import getUserByEmail from '../../../../queries/user/getUserByEmail';

describe('getUserByEmail resolver', () => {
  const mockedGetUserByEmailModel = jest.spyOn(userModels, 'getUserByEmail');

  afterAll(() => {
    mockedGetUserByEmailModel.mockRestore();
  });

  test('getUserByEmail returns a new user', async () => {
    const userTalel = testData.users[0];
    mockedGetUserByEmailModel.mockResolvedValue(userTalel);
    const user = await getUserByEmail('mail@talel.se');

    expect(user).toMatchObject(userTalel);
  });

  test('getUserByEmail throws an error if a user is not returned', async () => {
    mockedGetUserByEmailModel.mockResolvedValue(undefined);
    await expect(() => getUserByEmail('nonexistent@talel.se')).rejects.toThrow(
      'User does not exist',
    );
  });
});
