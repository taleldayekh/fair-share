import { RootQueryType, RootMutationType } from './type-defs/Root';
import { UserType } from './type-defs/User';

export default [RootQueryType, RootMutationType, UserType].join('\n\n');
