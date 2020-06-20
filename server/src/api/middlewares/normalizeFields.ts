/*
 * Helper function for converting database
 * field names to resolver field names.
 */

// Todo: Proper typing
const fieldsTest = (dbRows: {}) => {
  return Object.entries(dbRows)
    .map((dbRow) => {
      if (dbRow[0].includes('_')) {
        const regEx = /(?<=_).{1}/g;
        const snakeCase = dbRow[0].match(regEx);

        if (!snakeCase) return;

        dbRow[0].replace('_', '');
        dbRow[0].replace(regEx, () => snakeCase.shift()!.toUpperCase());
      }
      console.log(dbRow);
      return dbRow;
    })
    .reduce((dbRows, dbRow) => {
      // Todo: Check for undefined
      return {
        ...dbRows,
        [dbRow![0]]: dbRow![1],
      };
    }, {});
};

const testFields = {
  id: '1',
  owner_id: '2',
  name_ttalel_dayekh: 'Groceries',
  spending_field: ['10', '100', '1000'],
};

const normalizedFields = fieldsTest(testFields);
console.log(normalizedFields);
