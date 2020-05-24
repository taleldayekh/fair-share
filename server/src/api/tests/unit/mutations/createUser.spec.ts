import * as userModels from '../../../../models/user';
import { testData } from '../../../../shared/testing/test-data';
import createUser from '../../../mutations/user/createUser';

describe('createUser resolver', () => {
  const mockedCreateUserModel = jest.spyOn(userModels, 'createUser');

  afterAll(() => {
    mockedCreateUserModel.mockRestore();
  });

  test('createUser returns a newly created user', async () => {
    const userTalel = testData.users[0];
    mockedCreateUserModel.mockResolvedValue(userTalel);
    const newUser = await createUser('Talel Dayekh', 'mail@talel.se');

    expect(newUser).toMatchObject(userTalel);
  });

  test('createUser throws an error if a newly created user is not returned', async () => {
    mockedCreateUserModel.mockResolvedValue(undefined);
    await expect(() =>
      createUser('Talel Dayekh', 'mail@talel.se'),
    ).rejects.toThrow('User with email mail@talel.se already exists');
  });
});
