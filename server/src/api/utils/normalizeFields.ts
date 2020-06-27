// TODO: Remove import
const util = require('util');

/*
 * Helper function for converting database
 * field names to resolver field names.
 */

const normalizeFields = (dbRows: {}): {} => {
  const dbRowsNormalized = Object.entries(dbRows)
    .map((dbRow) => {
      if (dbRow[0].includes('_')) {
        const snakeCaseLettersRegEx = /(?<=_).{1}/g;
        const snakeCaseLetters = dbRow[0].match(snakeCaseLettersRegEx);
        const resolverFieldName = dbRow[0]
          .replace(snakeCaseLettersRegEx, () =>
            snakeCaseLetters!.shift()!.toUpperCase(),
          )
          .replace(/_/g, '');

        dbRow[0] = resolverFieldName;
      }

      if (dbRow[1] instanceof Array) {
        // !!
        const bla = dbRow[1].map((row) => {
          if (typeof row === 'object') {
            return normalizeFields(row);
          } else {
            return row;
          }
        });

        console.log(bla);
        dbRow[1] = bla;
        // !!
      }
      // !!
      // returns array with key in one end and value in the other
      // check if the key has an underscore
      // Assign the key to a new variable, remove underscore and add uppercase letters
      // Assign the new variable back to dbrow
      return dbRow;
    })
    .reduce((dbRowsNormalized, dbRows) => {
      return {
        ...dbRowsNormalized,
        [dbRows[0]]: dbRows[1],
      };
    }, {});

  return dbRowsNormalized;
};

const testDBRows = {
  id: '1',
  owner_id: '2',
  name: 'Groceries',
  spending_amount_field: [
    'First random string',
    { id: 1, total_spending: 100 },
    { id: 2, total_spending: 200 },
    {
      id: 3,
      spending_amount: [
        'Second random string',
        { id: 1, total_spending: 300 },
        { id: 2, total_spending: 400 },
      ],
    },
  ],
};

const normalizeTestDBRows = normalizeFields(testDBRows);
console.log(util.inspect(normalizeTestDBRows, false, null, true));
