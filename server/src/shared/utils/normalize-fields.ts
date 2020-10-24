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

const camelCaseToSnakeCase = (camelCaseKey: string): string | void => {
  const upperCaseLettersRegEx = /[A-Z]/g;
  const matchCamelCaseLetters = camelCaseKey.match(upperCaseLettersRegEx);

  if (!matchCamelCaseLetters) return;

  const snakeCaseKey = camelCaseKey.replace(
    upperCaseLettersRegEx,
    (upperCaseLetter) => {
      // eslint-disable-next-line
      return matchCamelCaseLetters!
        .shift()!
        .replace(upperCaseLetter, `_${upperCaseLetter.toLowerCase()}`);
    },
  );

  return snakeCaseKey;
};

/* eslint-disable */
/*
ESLint adds additional spaces to ternary
operators which conflicts with Prettier.
*/
export const dbFieldsToResolverFields = (data: DBField): ResolverField => {
  const resolverFields = Array.isArray(data)
    ? data.map((dbField) => {
        if (typeof dbField !== 'object') return dbField;
        return dbFieldsToResolverFields(dbField as DBField);
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
            dbField[1] = dbFieldsToResolverFields(dbField[1] as DBField);
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

export const resolverFieldsToDBFields = (data: ResolverField): DBField => {
  const dbFields = Array.isArray(data)
    ? data.map((resolverField) => {
        if (typeof resolverField !== 'object') return resolverField;
        return resolverFieldsToDBFields(resolverField as ResolverField);
      })
    : Object.entries(data)
        .map((resolverField) => {
          const upperCaseLettersRegEx = /[A-Z]/g;

          if (resolverField[0].match(upperCaseLettersRegEx)) {
            const dbField = camelCaseToSnakeCase(resolverField[0]);
            resolverField[0] = dbField ? dbField : resolverField[0];
          }

          if (
            Array.isArray(resolverField[1]) ||
            (typeof resolverField[1] === 'object' && resolverField[1] !== null)
          ) {
            resolverField[1] = resolverFieldsToDBFields(
              resolverField[1] as ResolverField,
            );
          }

          return resolverField;
        })
        .reduce(
          (accumulator, resolverField) => ({
            ...accumulator,
            [resolverField[0]]: resolverField[1],
          }),
          {},
        );

  return dbFields;
};
/* eslint-enable */
