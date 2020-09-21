import axios from 'axios';
import { GRAPHQL_ENDPOINT } from '../../../constants';
import {
  SPENDING_GROUP_GROCERIES_ID,
  TALEL_ID,
} from '../../../../../shared/testing/test-data/constants';

describe('spending root mutation', () => {
  test('new spending', async () => {
    const userId = TALEL_ID;
    const spendingGroupId = SPENDING_GROUP_GROCERIES_ID;
    const label = 'Lidl';
    const amount = 39;

    const newSpendingMutation = /* GraphQL */ `
      mutation {
        newSpending(userId: ${userId}, spendingGroupId: ${spendingGroupId}, label: ${label}, amount: ${amount}) {
          userId
          spendingGroupId
          label
          amount
        }
      }
    `;

    // const res = await axios.post(GRAPHQL_ENDPOINT,
    //   {query: JSON.stringify(newSpendingMutation)}
    // );

    // console.log(res.data);

    const res = await axios({
      url: GRAPHQL_ENDPOINT,
      method: 'post',
      data: {
        query: JSON.stringify(newSpendingMutation),
      },
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    console.log(res.data);
  });
});
