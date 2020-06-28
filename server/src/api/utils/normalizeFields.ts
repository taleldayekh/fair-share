/*
 * Helper function for converting database
 * field names to resolver field names.
 */

export const normalizeFields = (dbFields: {}): {} => {
  // if (dbFields instanceof Array) return dbFields;
  // console.log(dbFields instanceof Array);
  const normalizedDBFields = Object.entries(dbFields)
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

      if (dbField[1] instanceof Array) {
        const normalizedDBFields = dbField[1].map((dbField) => {
          if (typeof dbField !== 'object' || dbField instanceof Array)
            return dbField;
          return normalizeFields(dbField);
        });

        dbField[1] = normalizedDBFields;
      }

      return dbField;
    })
    .reduce((normalizedDBFields, dbFields) => {
      return {
        ...normalizedDBFields,
        [dbFields[0]]: dbFields[1],
      };
    }, {});

  return normalizedDBFields;
};
