import * as spendingGroupModels from '../../../../../models/spendingGroup';
import { testData } from '../../../../../shared/testing/test-data';
import createSpendingGroup from '../../../../app-spending-group/use-cases/mutations/createSpendingGroup';

describe('createSpendingGroup resolver', () => {
  const mockedCreateSpendingGroupModel = jest.spyOn(
    spendingGroupModels,
    'createSpendingGroup',
  );

  afterAll(() => {
    mockedCreateSpendingGroupModel.mockRestore();
  });

  test('createSpendingGroup returns a new spending group', async () => {
    const groceriesSpendingGroup = testData.spendingGroups[0];
    mockedCreateSpendingGroupModel.mockResolvedValue(groceriesSpendingGroup);
    const spendingGroup = await createSpendingGroup(
      testData.users[0].id,
      'Groceries',
    );

    expect(spendingGroup).toMatchObject(groceriesSpendingGroup);
  });
});
