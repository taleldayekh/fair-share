import { ResolverField, DBField } from '../../interfaces/utils.interface';

/*
Helper functions for converting database
fields to resolver fields and vice versa.
*/

const snakeCaseToCamelCase = (snakeCaseKey: string): string | void => {
  const snakeCaseLettersRegEx = /(?<=_)[^_]{1}/;
  const matchSnakeCaseLetters = snakeCaseKey.match(snakeCaseLettersRegEx);





  // !
  // type ReplacerFn = () => string;
  // type Replacer = string | ReplacerFn;
  
  // const replacer = (x: string[]): Replacer => x.shift()?.toUpperCase();

  // if (typeof replacer === 'string') {
  //   return snakeCaseKey.replace(snakeCaseLettersRegEx, replacer);
  // }
  // else {
  //   return;
  // }










  if (matchSnakeCaseLetters) {
    const camelCaseKey = snakeCaseKey.replace(snakeCaseLettersRegEx, function() 
    { 
      console.log(arguments);

      matchSnakeCaseLetters.forEach(key => console.log(key));
      return 'bla';
      // return matchSnakeCaseLetters!.shift()?.toUpperCase();
    }
    );
  }

  
  // const camelCaseKey = snakeCaseKey.replace(snakeCaseLettersRegEx, () => {

  //   console.log('bla');
  //   console.log(`This is it ${matchSnakeCaseLetters}`);
  //   // if (matchSnakeCaseLetters) {
  //   //   console.log(matchSnakeCaseLetters.shift());
  //   // }

  // });
};

const normalizeResolverFields = (data: DBField): ResolverField => {
  const normalizedResolverFields = Object.entries(data).map((resolverField) => {
    if (resolverField[0].includes('_')) {
      const camelCasedResolverField = snakeCaseToCamelCase(resolverField[0]);
    }
  });

  // Returns an array of arrays with key value pairs. The key first the value second in the array
  // console.log(normalizedResolverFields);
  return {};
};

// !
const mf2 = {
  owner_id: '1',
  name: 'Spending Group',
  test_longer_key_name: 'Test key',
};

const mixedFields = {
  owner_id: '1',
  name: 'Spending Group',
  spending: [
    'Mixed Spending',
    { spending_group_id: '2', amount: [] },
    {
      spending_group_id: '2',
      amount: [{ spending_one: 100, spending_two: 200 }],
    },
  ],
  spenders: [[{ spender_name: 'Talel Dayekh' }], []],
};

console.log(normalizeResolverFields(mf2));
