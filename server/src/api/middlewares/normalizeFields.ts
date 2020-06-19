/*
 * Helper function for converting database
 * field names to resolver field names.
 */

// Todo: Proper typing
const fieldsTest = (dbRows: {}) => {
  return Object.entries(dbRows).map((dbRow) => {
    if (dbRow[0].includes('_')) {
      const regEx = /(_)((?<=_).{1})/;
    }
  });
};

const testFields = {
  id: '1',
  owner_id: '2',
  name: 'Groceries',
  spending_field: ['10', '100', '1000'],
};

const normalizedFields = fieldsTest(testFields);
console.log(normalizedFields);
