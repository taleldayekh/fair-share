import { GraphQLRequest } from '../../../utils';
import { testData } from '../../../../../shared/testing/test-data';

describe('user root queries', () => {
  const request = new GraphQLRequest();

  test('get user by email', async () => {
    const getUserByEmailQuery = /* GraphQL */ `
      query {
        userByEmail(email: "mail@talel.se") {
          id
          name
          email
        }
      }
    `;
    const userTalel = testData.users[0];
    const res = await request.query(getUserByEmailQuery);

    expect(res).toMatchObject({ data: { userByEmail: userTalel } });
  });

  test('cannot get user by nonexistent email', async () => {
    const getUserByEmailQuery = /* GraphQL */ `
      query {
        userByEmail(email: "nonexistent@talel.se") {
          id
          name
          email
        }
      }
    `;
    const res = await request.query(getUserByEmailQuery);
    const errorMessage = Object.values(res)[0][0].message;

    expect(errorMessage).toEqual('User does not exist');
  });
});
