/*
 * Helper function for converting database
 * field names to resolver field names.
 */

export const normalizeFields = () => {}








// /*
//  * Helper function for converting database
//  * field names to resolver field names.
//  */

// export const normalizeFields = (dbTable: {}): {} => {
//   const normalizedFields = Object.entries(dbTable)
//     .map((dbRow) => {
//       if (dbRow[0].includes('_')) {
//         const snakeCaseLettersRegEx = /(?<=_).{1}/g;
//         const snakeCaseLetters = dbRow[0].match(snakeCaseLettersRegEx);
//         const resolverFieldNames = dbRow[0]
//           .replace(snakeCaseLettersRegEx, () =>
//             snakeCaseLetters!.shift()!.toUpperCase(),
//           )
//           .replace(/_/g, '');

//         dbRow[0] = resolverFieldNames;
//       }



//       if (dbRow[1] instanceof Array) {
//         const normalizedFields = dbRow[1].map((field) => {
//           if (typeof field !== 'object') {
//             // console.log(field);
//             return field;
//           }

//           // !!
//           if (field instanceof Array) {
//             const normalizedFields = field.map((bla) => {
//               if (typeof bla !== 'object') {
//                 return bla
//               }

//               return normalizeFields(bla)
//             })
//             return normalizedFields
//           }
//           // !!

//           return normalizeFields(field);
//         });
//         console.log(normalizedFields)
//         dbRow[1] = normalizedFields;
//       }

//       return dbRow;
//     })
//     .reduce((normalizedDBFields, dbFields) => {
//       return {
//         ...normalizedDBFields,
//         [dbFields[0]]: dbFields[1],
//       };
//     }, {});

//   return normalizedFields;
// };