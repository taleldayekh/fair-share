export const RootQueryType = /* GraphQL */ `
  type Query {
    userByEmail(email: String!): User
  }
`;

export const RootMutationType = /* GraphQL */ `
  type Mutation {
    createUser(name: String!, email: String!): User
  }
`;
