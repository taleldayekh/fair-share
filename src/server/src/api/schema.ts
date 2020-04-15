import { RootQueryType, RootMutationType } from './types/Root';
import { SpendingGroupType } from './types/SpendingGroup';
import { UserType } from './types/User';

export default [
  RootQueryType,
  RootMutationType,
  SpendingGroupType,
  UserType,
].join('\n\n');
