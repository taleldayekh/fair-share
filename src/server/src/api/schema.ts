import { RootQueryType } from './types/RootQuery';
import { SpendingGroupType } from './types/SpendingGroup';
import { UserType } from './types/User';

export default [RootQueryType, SpendingGroupType, UserType].join('\n\n');
