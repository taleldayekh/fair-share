import { GraphQLRequest } from '../../utils';
import { testData } from '../../../../testing/test-data';

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
});
