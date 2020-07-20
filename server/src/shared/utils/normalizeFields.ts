/*
 * Helper functions for converting database field
 * names to resolver field names and vice versa.
 */

interface TestData {
  [key: string]: any[];
}

const normalizeDBFieldNames = (data: TestData): TestData => {
  const normalizedDBFieldNames = Object.entries(data)
    .map((camelCaseFields) => {
      const upperCaseLettersRegEx = /[^a-z0-9]/g;

      if (camelCaseFields[0].match(upperCaseLettersRegEx)) {
        const upperCaseLetters = camelCaseFields[0].match(
          upperCaseLettersRegEx,
        );
        const snakeCaseFields = camelCaseFields[0].replace(
          upperCaseLettersRegEx,
          (upperCaseLetter) => {
            return upperCaseLetters!
              .shift()!
              .replace(upperCaseLetter, `_${upperCaseLetter.toLowerCase()}`);
          },
        );

        camelCaseFields[0] = snakeCaseFields;
      }

      if (camelCaseFields[1] instanceof Array) {
        camelCaseFields[1] = camelCaseFields[1].map((camelCaseField) => {
          return normalizeDBFieldNames(camelCaseField);
        });
      }

      return camelCaseFields;
    })
    .reduce((normalizedDBFieldNames, snakeCaseFields) => {
      return {
        ...normalizedDBFieldNames,
        [snakeCaseFields[0]]: snakeCaseFields[1],
      };
    }, {});

  return normalizedDBFieldNames;
};

export { normalizeDBFieldNames };
