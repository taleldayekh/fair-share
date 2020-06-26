import { RootQueryType, RootMutationType } from './type-defs/Root';
import { UserType } from './type-defs/User';
import { SpendingGroupType, SpendingType } from './type-defs/SpendingGroup';

export default [
  RootQueryType,
  RootMutationType,
  UserType,
  SpendingGroupType,
  SpendingType,
].join('\n\n');
