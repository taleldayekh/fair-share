export const SpendingGroupType = /* GraphQL */ `
  type SpendingGroup {
    id: ID!
    ownerId: String!
    name: String!
    spending: [Spending]
  }
`;

export const SpendingType = /* GraphQL */ `
  type Spending {
    id: ID!
    ownerId: String!
    spendingGroupId: String!
    label: String!
    amount: Float
  }
`;
