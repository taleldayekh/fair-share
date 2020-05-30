import { IDBSpendingGroup } from '../../interfaces/types';

const SpendingGroupType = /* GraphQL */ `
  type SpendingGroup {
    id: ID!
    ownerId: String!
    name: String!
  }
`;

class SpendingGroup {}

export { SpendingGroupType, SpendingGroup };
