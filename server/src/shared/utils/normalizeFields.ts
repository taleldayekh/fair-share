/*
 * Helper functions for converting database field
 * names to resolver field names and vice versa.
 */

interface Data {
  [key: string]: any;
}

// TODO: Proper types
const normalizeResolverFieldNames = (data: Data): any => {
  const normalizedResolverFieldNames =
    data instanceof Array
      ? Object.values(data).map((value) => {
          if (typeof value !== 'object') return value;
          return normalizeResolverFieldNames(value);
        })
      : Object.entries(data)
          .map((snakeCaseFields) => {
            if (snakeCaseFields[0].includes('_')) {
              const snakeCaseLettersRegEx = /(?<=_).{1}/g;
              const snakeCaseLetters = snakeCaseFields[0].match(
                snakeCaseLettersRegEx,
              );
              const camelCaseFields = snakeCaseFields[0]
                .replace(snakeCaseLettersRegEx, () =>
                  snakeCaseLetters!.shift()!.toUpperCase(),
                )
                .replace(/_/g, '');

              snakeCaseFields[0] = camelCaseFields;
            }

            if (
              snakeCaseFields[1] instanceof Array ||
              typeof snakeCaseFields[1] === 'object'
            ) {
              snakeCaseFields[1] = normalizeResolverFieldNames(
                snakeCaseFields[1],
              );
            }

            return snakeCaseFields;
          })
          .reduce((normalizedResolverFieldNames, camelCaseFields) => {
            return {
              ...normalizedResolverFieldNames,
              [camelCaseFields[0]]: camelCaseFields[1],
            };
          }, {});

  return normalizedResolverFieldNames;
};

const normalizeDBFieldNames = (data: Data): any => {
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

export { normalizeResolverFieldNames, normalizeDBFieldNames };
