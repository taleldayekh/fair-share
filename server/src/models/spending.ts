import { db } from '../db';
import { IDBSpending } from '../interfaces/types';
import { RDatum } from 'rethinkdb-ts';

type NewSpending = {
  userId: string;
  spendingGroupId: string;
  label: string;
  amount: number;
};

type SpendingArgs = NewSpending;

const newSpending = async (
  userId: string,
  spendingGroupId: string,
  label: string,
  amount: number,
): Promise<IDBSpending> => {
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

export { SpendingArgs, newSpending };
