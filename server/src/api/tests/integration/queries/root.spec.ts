import { GraphQLRequest } from '../../utils';
import { testData } from '../../../../shared/testing/test-data';

describe('root queries', () => {
  const request = new GraphQLRequest();

  test('can get user by email', async () => {
    const query = `
        query {
            userByEmail(email: "mail@talel.se") {
                id
                name
                email
            }
        }
      `;
    const userTalel = testData.users[0];
    const res = await request.query(query);

    expect(res).toMatchObject({ data: { userByEmail: userTalel } });
  });

  test('cannot get user by nonexistent email', async () => {
    const query = `
      query {
        userByEmail(email: "nonexistent@talel.se") {
          id
          name
          email
        }
      }
    `;
    const res = await request.query(query);
    const errorMessage = Object.values(res)[0][0].message;

    expect(errorMessage).toEqual('User does not exist');
  });
});
