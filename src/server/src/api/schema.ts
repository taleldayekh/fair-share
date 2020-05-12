import { RootQueryType, RootMutationType } from '@/api//types/Root';
import { SpendingGroupType } from '@/api/types/SpendingGroup';
import { UserType } from '@/api/types/User';

export default [
  RootQueryType,
  RootMutationType,
  SpendingGroupType,
  UserType,
].join('\n\n');
