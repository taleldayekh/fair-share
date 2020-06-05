export const SpendingGroupType = /* GraphQL */ `
  type SpendingGroup {
    id: ID!
    ownerId: String!
    name: String!
    spending: Spending
  }
`;

export const SpendingType = /* GraphQL */ `
  type SpendingType {
    id: ID!
    ownerId: String!
    spendingGroupId: String!
    amount: Float
  }
`;
