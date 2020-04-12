const SpendingGroup = `
  type SpendingGroup {
    id: ID!
    name: String!
    users: [User]!
  }
`;

module.exports = SpendingGroup;
