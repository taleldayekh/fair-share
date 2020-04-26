export const db = {
  users: [
    {
      id: 1,
      name: 'Talel Dayekh',
      email: 'talel@test.example',
      createdAt: new Date(),
      spendingGroups: [1, 2],
      participatingSpendingGroups: [1, 2, 3],
    },
    {
      id: 2,
      name: 'Bianca Basan',
      email: 'bianca@test.example',
      createdAt: new Date(),
      spendingGroups: [3],
      participatingSpendingGroups: [1, 3],
    },
  ],
  spendingGroups: [
    {
      id: 1,
      owner: 1,
      name: 'Groceries',
      createdAt: new Date(),
      participants: [1, 2],
    },
    {
      id: 2,
      owner: 1,
      name: 'Stockholm Trip',
      createdAt: new Date(),
      participants: [1],
    },
    {
      id: 3,
      owner: 2,
      name: 'Midsummer Party',
      createdAt: new Date(),
      participants: [1, 2],
    },
  ],
};
