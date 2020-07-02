/*
 * Helper function for converting database
 * field names to resolver field names.
 */

// TODO: Proper types
export const normalizeFields = (dbFields: any): any => {
  const normalizedFields =
    dbFields instanceof Array
      ? Object.values(dbFields).map((dbField) => {
          if (typeof dbField !== 'object') return dbField;
          return normalizeFields(dbField);
        })
      : Object.entries(dbFields)
          .map((dbField) => {
            if (dbField[0].includes('_')) {
              const snakeCaseLettersRegEx = /(?<=_).{1}/g;
              const snakeCaseLetters = dbField[0].match(snakeCaseLettersRegEx);
              const resolverField = dbField[0]
                .replace(snakeCaseLettersRegEx, () =>
                  snakeCaseLetters!.shift()!.toUpperCase(),
                )
                .replace(/_/g, '');

              dbField[0] = resolverField;
            }

            if (dbField[1] instanceof Array || typeof dbField[1] === 'object') {
              dbField[1] = normalizeFields(dbField[1]!);
            }

            return dbField;
          })
          .reduce((normalizedFields, dbFields) => {
            return {
              ...normalizedFields,
              [dbFields[0]]: dbFields[1],
            };
          }, {});

  return normalizedFields;
};
