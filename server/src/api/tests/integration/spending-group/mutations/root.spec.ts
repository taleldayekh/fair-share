import axios from 'axios';
import { graphQLRequestConfig } from '../../../utils';
// import { SPENDING_GROUPS } from '../../../constants';
// import { TALEL_ID } from '../../../../../shared/testing/test-data/constants';

describe('spending group root mutations', () => {
  test('createSpendingGroup', async () => {
    // const userId = TALEL_ID;
    // const spendingGroup = SPENDING_GROUPS.retreat;

    const createSpendingGroupMutation = /* GraphQL */ `
      mutation createSpendingGroup($userId: String!, $name: String!) {
        createSpendingGroup(userId: $userId, name: $name) {
          ownerId
          name
        }
      }
    `;

    const res = await axios(graphQLRequestConfig(createSpendingGroupMutation));

    console.log(res.data);
  });
});










// `mutation updateUserCity($id: Int!, $city: String!) {
//   updateUserCity(userID: $id, city: $city){
//     id
//     name
//     age
//     city
//     knowledge{
//       language
//       frameworks
//     }
//   }
// }`,