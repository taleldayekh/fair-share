import { GraphQLRequest } from '../../utils';

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

    const res = await request.query(query);
  });
});
