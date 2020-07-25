import { db } from '../db';
import { IDBSpendingGroup } from '../interfaces/types';
import { RDatum } from 'rethinkdb-ts';

type NewSpendingGroup = {
  userId: string;
  name: string;
};

type CreateSpendingGroupArgs = NewSpendingGroup;

const createSpendingGroup = async (
  userId: string,
  name: string,
): Promise<IDBSpendingGroup> => {
  return await db
    .table('spending_groups')
    .insert({ owner_id: userId, name })
    .do((res: RDatum) => {
      return db.table('spending_groups').get(res('generated_keys').nth(0));
    })
    .run();
};

export { CreateSpendingGroupArgs, createSpendingGroup };
