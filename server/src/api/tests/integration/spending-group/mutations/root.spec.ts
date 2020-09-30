import axios from 'axios';
import { graphQLRequestConfig } from '../../../utils';

// TODO: Pass arguments to the GraphQL request instead of using hardcoded values
// https://graphql.org/graphql-js/passing-arguments/

describe('spending group root mutations', () => {
  test('can create spending group', async () => {
    const createSpendingGroupMutation = /* GraphQL */ `
      mutation {
        createSpendingGroup(userId: "1", name: "Retreat") {
          name
        }
      }
    `;

    const res = await axios(graphQLRequestConfig(createSpendingGroupMutation));
    expect(res.data).toMatchObject({
      data: { createSpendingGroup: { name: 'Retreat' } },
    });
  });
});
