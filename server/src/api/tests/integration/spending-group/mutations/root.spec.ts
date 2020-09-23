import axios from 'axios';
import { graphQLRequestConfig } from '../../../utils';

describe('spending group root mutations', () => {
  test('createSpendingGroup', async () => {

    const createSpendingGroupMutation = /* GraphQL */ `
      mutation createSpendingGroup($userId: String!, $name: String!) {
        createSpendingGroup(userId: $userId, name: $name) {
          ownerId
          name
        }
      }
    `;

    const res = await axios(graphQLRequestConfig(createSpendingGroupMutation));

    console.log(res.data);
  });
});
