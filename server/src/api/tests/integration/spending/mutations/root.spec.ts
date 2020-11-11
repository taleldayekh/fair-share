import axios from 'axios';
import { graphQLRequestConfig } from '../../../utils';

// TODO: Pass arguments to the GraphQL request instead of using hardcoded values
// https://graphql.org/graphql-js/passing-arguments/

describe('spending root mutations', () => {
  test('can add new spending with integer amount', async () => {
    const newSpendingMutation = /* GraphQL */ `
      mutation {
        newSpending(
          userId: "1"
          spendingGroupId: "1"
          label: "Lidl"
          amount: 66
        ) {
          label
          amount
        }
      }
    `;

    const res = await axios(graphQLRequestConfig(newSpendingMutation));
    expect(res.data).toMatchObject({
      data: { newSpending: { label: 'Lidl', amount: 66 } },
    });
  });

  test('can add new spending with float amount', async () => {
    const newSpendingMutation = /* GraphQL */ `
      mutation {
        newSpending(
          userId: "1"
          spendingGroupId: "1"
          label: "Rewe"
          amount: 19.86
        ) {
          label
          amount
        }
      }
    `;

    const res = await axios(graphQLRequestConfig(newSpendingMutation));
    expect(res.data).toMatchObject({
      data: { newSpending: { label: 'Rewe', amount: 19.86 } },
    });
  });
});
