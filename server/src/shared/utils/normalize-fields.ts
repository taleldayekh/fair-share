import { ResolverField, DBField } from '../../interfaces/utils.interface';

/*
Helper functions for converting database
fields to resolver fields and vice versa.
*/

const snakeCaseToCamelCase = (snakeCaseKey: string): string | void => {
  const snakeCaseLettersRegEx = /(?<=_)[^_]{1}/g;
  const matchSnakeCaseLetters = snakeCaseKey.match(snakeCaseLettersRegEx);

  if (!matchSnakeCaseLetters) return;

  const camelCaseKey = snakeCaseKey
    .replace(snakeCaseLettersRegEx, () => {
      // eslint-disable-next-line
      return matchSnakeCaseLetters!.shift()!.toUpperCase();
    })
    .replace(/_/g, '');

  return camelCaseKey;
};

const camelCaseToSnakeCase = () => {};

/* eslint-disable */
/*
ESLint adds additional spaces to ternary
operators which conflicts with Prettier.
*/
export const dbFieldToResolverField = (data: DBField): ResolverField => {
  const resolverFields = Array.isArray(data)
    ? data.map((dbField) => {
        if (typeof dbField !== 'object') return dbField;
        return dbFieldToResolverField(dbField as DBField);
      })
    : Object.entries(data)
        .map((dbField) => {
          if (dbField[0].includes('_')) {
            const resolverField = snakeCaseToCamelCase(dbField[0]);
            dbField[0] = resolverField ? resolverField : dbField[0];
          }

          if (
            Array.isArray(dbField[1]) ||
            (typeof dbField[1] === 'object' && dbField[1] !== null)
          ) {
            dbField[1] = dbFieldToResolverField(dbField[1] as DBField);
          }

          return dbField;
        })
        .reduce(
          (accumulator, dbField) => ({
            ...accumulator,
            [dbField[0]]: dbField[1],
          }),
          {},
        );

  return resolverFields;
};
/* eslint-enable */

export const resolverFieldToDBField = (data: ResolverField): DBField => {
  const dbFields = null;

  return {};
};

// ! ------------------------DELETE---------------------------------
const testDBFields = {};

const mf2 = {
  owner_id: '1',
  name: 'Spending Group',
  test_longer_key_name: 'Test key',
};

const mixedFields = {
  owner_id: '1',
  name: 'Spending Group',
  marshi: { id: 200 },
  test_longer_key_name: 'Test key',
  spending: [
    'Mixed Spending',
    { spending_group_id: '2', amount: [] },
    {
      spending_group_id: '2',
      amount: [{ spending_one: 100, spending_two: 200 }],
    },
  ],
  spenders: [[{ spender_name: 'Talel Dayekh' }], []],
};

console.log(dbFieldToResolverField(mixedFields));
