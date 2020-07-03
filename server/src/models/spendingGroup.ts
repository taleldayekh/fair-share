import { db } from '../db';
import { IDBSpendingGroup, IDBSpending } from '../interfaces/types';
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
    .insert({ owner_id: userId, name: name })
    .do((res: RDatum) => {
      return db.table('spending_groups').get(res('generated_keys').nth(0));
    })
    .run();
};

type NewSpending = {
  userId: string;
  spendingGroupId: string;
  label: string;
  amount: number;
};

type NewSpendingArgs = NewSpending;

const newSpending = async (
  userId: string,
  spendingGroupId: string,
  label: string,
  amount: number,
): Promise<IDBSpending> => {};

export {
  CreateSpendingGroupArgs,
  createSpendingGroup,
  NewSpendingArgs,
  newSpending,
};
