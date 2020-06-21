// @ts-ignore
const dbFieldsNormalizer = (dbRow) => {
  Object.keys(dbRow).map((key) => {
    if (key.includes('_')) {
      key = key.replace('_', '');
    }
    // console.log(key);
    return key;
  });

  Object.values(dbRow).map((value) => {
    if (Array.isArray(value)) {
      value.map((value) => {
        if (typeof value === 'object') {
          dbFieldsNormalizer(value);
        }
      });
    }
  });
};

const testFields = {
  id: '1',
  owner_id: '2',
  name: 'Groceries',
  spending_field: [
    { id: 1, spending_amount: 100 },
    { id: 2, spending_amount: 200 },
  ],
};

const normalizeTestFields = dbFieldsNormalizer(testFields);
console.log(normalizeTestFields);
