/*
 * Helper function for converting database
 * field names to resolver field names.
 */

// Todo: Replace any type
// Todo: Look up normalizing fields in nested objects
export default (dbField: any) => {
  return Object.entries(dbField);
};

// const dbSpendingGroup = {
//   id: '1',
//   owner_id: '2',
//   name: 'Groceries',
//   spendings_field: ['bla', 'bla', 'bla'],
// };

// let test = Object.entries(dbSpendingGroup)
//   .map((entry) => {
//     if (entry[0] === 'spendings_field') {
//       entry[0] = 'spendingsField';
//     }
//     return entry;
//   })
//   .reduce((newObj, key) => {
//     // @ts-ignore
//     return {
//       ...newObj,
//       [key[0]]: key[1],
//     };
//   }, {});

// console.log(test);
