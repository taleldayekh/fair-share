// TODO: Remove import
const util = require('util');

/*
 * Helper function for converting database
 * field names to resolver field names.
 */

const normalizeFields = (dbRows: {}): {} => {
  const dbRowsNormalized = Object.entries(dbRows).map((dbRow) => {
    console.log(dbRow);
  });
  return dbRows;
};

const testDBRows = {
  id: '1',
  owner_id: '2',
  name: 'Groceries',
  spending_field: [
    { id: 1, total_spending: 100 },
    { id: 2, total_spending: 200 },
    {
      id: 3,
      spending_amount: [
        'Random string',
        { id: 1, total_spending: 300 },
        { id: 2, total_spending: 400 },
      ],
    },
  ],
};

const normalizeTestDBRows = normalizeFields(testDBRows);
console.log(util.inspect(normalizeTestDBRows, false, null, true));
