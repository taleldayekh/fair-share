import { RootQueryType, RootMutationType } from './types/Root';
import { UserType } from './types/User';

export default [RootQueryType, RootMutationType, UserType].join('\n\n');
