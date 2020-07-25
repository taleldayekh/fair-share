export const SpendingGroupType = /* GraphQL */ `
  type SpendingGroup {
    id: ID!
    ownerId: String!
    name: String!
    spending: [Spending]
  }
`;
