import { GraphQLRequest } from '../../../utils';

describe('spending group root mutations', () => {
  const request = new GraphQLRequest();

  test('create spending group', async () => {
    const createSpendingGroupMutation = /* GraphQL */ `
      mutation {
        createSpendingGroup(userId: "1", name: "Retreat") {
          ownerId
          name
        }
      }
    `;
    const res = await request.mutation(createSpendingGroupMutation);

    expect(res).toMatchObject({
      data: { createSpendingGroup: { ownerId: '1', name: 'Retreat' } },
    });
  });
});
