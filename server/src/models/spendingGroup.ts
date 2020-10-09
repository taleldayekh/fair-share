import { db } from '../db';
import { DBSpendingGroup } from '../interfaces/models.interface';
import { RDatum } from 'rethinkdb-ts';

const createSpendingGroup = async (
  userId: string,
  name: string,
): Promise<DBSpendingGroup> => {
  return await db
    .table('spending_groups')
    .insert({ owner_id: userId, name })
    .do((res: RDatum) => {
      return db.table('spending_groups').get(res('generated_keys').nth(0));
    })
    .run();
};

export { createSpendingGroup };
