import { GraphQLRequest } from '../../../utils';

describe('user root mutations', () => {
  const request = new GraphQLRequest();

  test('create user', async () => {
    const createUserMutation = /* GraphQL */ `
      mutation {
        createUser(name: "Ines Dayekh", email: "mail@ines.se") {
          name
          email
        }
      }
    `;
    const res = await request.mutation(createUserMutation);

    expect(res).toMatchObject({
      data: { createUser: { name: 'Ines Dayekh', email: 'mail@ines.se' } },
    });
  });

  test('cannot create user if email for the new user already exists', async () => {
    const createUserMutation = /* GraphQL */ `
      mutation {
        createUser(name: "Talel Dayekh", email: "mail@talel.se") {
          name
          email
        }
      }
    `;
    const res = await request.mutation(createUserMutation);
    const errorMessage = Object.values(res)[0][0].message;

    expect(errorMessage).toEqual(
      'User with email mail@talel.se already exists',
    );
  });
});
