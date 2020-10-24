import {
  dbFieldsToResolverFields,
  resolverFieldsToDBFields,
} from '../../utils/normalize-fields';

const mixedDBFields = {
  owner_id: '1',
  name: 'Spending Group Name',
  spending: [
    'Mixed Spending',
    { spending_group_id: '2', amount: [] },
    {
      spending_group_id: '3',
      amount: [{ spending_one: 100, spending_two: 200 }],
    },
  ],
  spenders: [[{ spender_name: 'Talel Dayekh' }], []],
};

describe('normalize-fields', () => {
  test('can normalize db fields to resolver fields', () => {
    const resolverFields = dbFieldsToResolverFields(mixedDBFields);

    expect(resolverFields).toStrictEqual({
      ownerId: '1',
      name: 'Spending Group Name',
      spending: [
        'Mixed Spending',
        { spendingGroupId: '2', amount: [] },
        {
          spendingGroupId: '3',
          amount: [{ spendingOne: 100, spendingTwo: 200 }],
        },
      ],
      spenders: [[{ spenderName: 'Talel Dayekh' }], []],
    });
  });

  test('can normalize resolver fields to db fields', () => {
    const resolverFields = dbFieldsToResolverFields(mixedDBFields);
    const dbFields = resolverFieldsToDBFields(resolverFields);

    expect(dbFields).toStrictEqual(mixedDBFields);
  });
});
