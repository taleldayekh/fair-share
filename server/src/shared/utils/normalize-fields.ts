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
export const normalizeFields = (
  data: DBField | ResolverField,
): DBField | ResolverField => {
  const normalizedFields = Array.isArray(data)
    ? data.map((field) => {
        if (typeof field !== 'object') return field;
        return normalizeFields(field as DBField | ResolverField);
      })
    : Object.entries(data)
        .map((field) => {
          if (field[0].includes('_')) {
            const resolverField = snakeCaseToCamelCase(field[0]);
            field[0] = resolverField ? resolverField : field[0];
          } else if (field[0].match(/[A-Z]/g)) {
            const dbField = camelCaseToSnakeCase(field[0]);
            field[0] = dbField ? dbField : field[0];
          }

          if (
            Array.isArray(field[1]) ||
            (typeof field[1] === 'object' && field[1] !== null)
          ) {
            field[1] = normalizeFields(field[1] as DBField | ResolverField);
          }

          return field;
        })
        .reduce(
          (accumulator, field) => ({
            ...accumulator,
            [field[0]]: field[1],
          }),
          {},
        );

  return normalizedFields;
};
/* eslint-enable */
