import {
  TALEL_ID,
  BIANCA_ID,
  SPENDING_GROUP_GROCERIES_ID,
  SPENDING_GROUP_MIDSUMMER_ID,
} from './constants';

export const spendingGroups = [
  {
    id: SPENDING_GROUP_GROCERIES_ID,
    ownerId: TALEL_ID,
    name: 'Groceries',
    spending: [],
  },
  {
    id: SPENDING_GROUP_MIDSUMMER_ID,
    ownerId: BIANCA_ID,
    name: 'Midsummer Party',
    spending: [],
  },
];
