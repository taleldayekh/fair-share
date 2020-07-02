import { normalizeFields } from '../../utils/normalizeFields';

describe('normalizeFields', () => {
  const mixedFields = {
    owner_id: '1',
    name: 'Spending Group',
    spending: [
      'Mixed Spending',
      { spending_group_id: '2', amount: [] },
      {
        spending_group_id: '2',
        amount: [{ spending_one: 100, spending_two: 200 }],
      },
    ],
    spenders: [[{ spender_name: 'Talel Dayekh' }], []],
  };

  test('normalizes fields', () => {
    const normalizedFields = normalizeFields(mixedFields);
    expect(normalizedFields).toEqual({
      ownerId: '1',
      name: 'Spending Group',
      spending: [
        'Mixed Spending',
        { spendingGroupId: '2', amount: [] },
        {
          spendingGroupId: '2',
          amount: [{ spendingOne: 100, spendingTwo: 200 }],
        },
      ],
      spenders: [[{ spenderName: 'Talel Dayekh' }], []],
    });
  });
});
