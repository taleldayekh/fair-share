import { GraphQLRequest } from '../../utils';

describe('root mutations', () => {
  const request = new GraphQLRequest();

  test('can create user', async () => {
    const mutation = `
      mutation {
        createUser(name: "Ines Dayekh", email: "mail@ines.se") {
          name
          email
        }
      }
    `;
    const res = await request.mutation(mutation);

    expect(res).toMatchObject({
      data: { createUser: { name: 'Ines Dayekh', email: 'mail@ines.se' } },
    });
  });

  test('cannot create user if email for the new user already exists', async () => {
    const mutation = `
      mutation {
        createUser(name: "Talel Dayekh", email: "mail@talel.se") {
          name
          email
        }
      }
    `;
    const res = await request.mutation(mutation);
    const errorMessage = Object.values(res)[0][0].message;

    expect(errorMessage).toEqual(
      'User with email mail@talel.se already exists',
    );
  });
});
