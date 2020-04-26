import { User } from '../types/User';
import { db } from '../tests/db';

export default (participants: number[]): User[] => {
  const spendingGroupParticipants = db.users
    .filter((user) => participants.includes(user.id))
    .map((user) => new User(user));
  return spendingGroupParticipants;
};
