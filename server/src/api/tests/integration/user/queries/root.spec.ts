import axios from 'axios';
import { graphQLRequestConfig } from '../../../utils';

// TODO: Pass arguments to the GraphQL request instead of using hardcoded values
// https://graphql.org/graphql-js/passing-arguments/

describe('user root queries', () => {
  test('can get user by email', async () => {
    const userByEmailQuery = /* GraphQL */ `
      query {
        userByEmail(email: "mail@talel.se") {
          name
        }
      }
    `;

    const res = await axios(graphQLRequestConfig(userByEmailQuery));
    expect(res.data).toMatchObject({
      data: { userByEmail: { name: 'Talel Dayekh' } },
    });
  });

  test('cannot get user by nonexistent email', async () => {
    const userByEmailQuery = /* GraphQL */ `
      query {
        userByEmail(email: "nonexistent@talel.se") {
          name
        }
      }
    `;

    const res = await axios(graphQLRequestConfig(userByEmailQuery));
    expect(res.data.errors[0].message).toEqual('User does not exist');
  });
});
