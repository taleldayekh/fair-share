# Backend API: [_*src/server/src/api*_](https://github.com/taleldayekh/fair-share/tree/master/src/server/src/api)

Pure [Node.js](https://nodejs.org/api/https.html) web server with an API based on [GraphQL.js](https://graphql.org/graphql-js/).

## Folder Structure

```
  api/
1 |-- models
2 |-- mutations
3 |-- queries
4 |-- tests
5 |-- types
6 |-- schema.ts
7 |-- server.ts
```

1. **models**  
   A set of functions for each resource which are used to query or mutate the database data.

2. **mutations**  
   A set of resolver functions which define how data for a field is created, updated or deleted.

3. **queries**  
   A set of resolver functions which define how data for a field is fetched.

4. **tests**  
   Unit tests for queries and mutations.

5. **types**  
   The GraphQL schema divided into parts and specified using the GraphQL SDL (schema definition language) together with the type definitions that describe which fields can be queried and mutated and the relationship between them.

6. **schema.ts**  
   Generates one schema by combining all schema parts.

7. **server.ts**  
   Runs the server.

## <img src='https://render.githubusercontent.com/render/math?math=\Large n%2B1'> Problem