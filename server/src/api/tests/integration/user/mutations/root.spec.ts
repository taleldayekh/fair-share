import axios from 'axios';
import { graphQLRequestConfig } from '../../../utils';

// TODO: Pass arguments to the GraphQL request instead of using hardcoded values
// https://graphql.org/graphql-js/passing-arguments/

describe('user root mutations', () => {
  test('can create user', async () => {
    const createUserMutation = /* GraphQL */ `
      mutation {
        createUser(name: "Ines Dayekh", email: "mail@ines.se") {
          name
          email
        }
      }
    `;

    const res = await axios(graphQLRequestConfig(createUserMutation));
    expect(res.data).toMatchObject({
      data: { createUser: { name: 'Ines Dayekh', email: 'mail@ines.se' } },
    });
  });

  test('cannot create user if new user email already exists', async () => {
    const createUserMutation = /* GraphQL */ `
      mutation {
        createUser(name: "Talel Dayekh", email: "mail@talel.se") {
          name
          email
        }
      }
    `;

    const res = await axios(graphQLRequestConfig(createUserMutation));
    expect(res.data.errors[0].message).toEqual(
      'User with email mail@talel.se already exists',
    );
  });
});
