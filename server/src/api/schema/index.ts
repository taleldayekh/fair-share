import { RootQueryType, RootMutationType } from './types/Root';
import { UserType } from './types/User';
import { SpendingGroupType } from './types/SpendingGroup';
import { SpendingType } from './types/Spending';

export default [
  RootQueryType,
  RootMutationType,
  UserType,
  SpendingGroupType,
  SpendingType,
].join('\n\n');
