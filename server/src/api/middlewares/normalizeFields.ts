const util = require('util');
// @ts-ignore
const dbFieldsNormalizer = (dbRows) => {
  const bla = Object.entries(dbRows)
    .map((row) => {
      if (row[0].includes('_')) {
        row[0] = row[0].replace('_', '$$$');
      }

      if (Array.isArray(row[1])) {
        console.log(row[1]);
        row[1] = row[1].map((row) => {
          if (typeof row === 'object') {
            const bla = dbFieldsNormalizer(row);
            return bla;
          }
        });
      }
      return row;
    })
    .reduce((dbRows, dbRow) => {
      // Todo: Check for undefined
      return {
        ...dbRows,
        [dbRow![0]]: dbRow![1],
      };
    }, {});

  return Object.assign({}, bla);
};

const testFields = {
  id: '1',
  owner_id: '2',
  name: 'Groceries',
  spending_field: [
    { id: 1, spending_amount: 100 },
    { id: 2, spending_amount: 200 },
    {
      id: 2,
      spending_amount: [
        'talel',
        { id: 1, talel_dayekh: 100 },
        { id: 2, bianca_basan: 200 },
      ],
    },
  ],
};

const blaha = dbFieldsNormalizer(testFields);
//@ts-ignore
const talel = blaha['spending$$field'][2];
console.log(talel);
console.log(util.inspect(blaha, false, null, true /* enable colors */));
