import { db } from '../db';
import { DBSpending } from '../interfaces/models.interface';
import { RDatum } from 'rethinkdb-ts';

const newSpending = async (
  userId: string,
  spendingGroupId: string,
  label: string,
  amount: number,
): Promise<DBSpending> => {
  return await db
    .table('spending')
    .insert({
      user_id: userId,
      spending_group_id: spendingGroupId,
      label,
      amount,
    })
    .do((res: RDatum) => {
      return db.table('spending').get(res('generated_keys').nth(0));
    })
    .run();
};

export { newSpending };
