# `backend api`: _*src/server/src/api*_

Pure [Node.js](https://nodejs.org/api/https.html) web server with a [GraphQL](https://graphql.org/graphql-js/) based API.

## Folder Structure

```
  api/
1 |-- models
2 |-- mutations
3 |-- queries
4 |-- types
5 |-- schema.ts
6 |-- server.ts
```

1. **models**  
   A set of functions for each resource which are used to query or mutate the database data.

2. **mutations**  
   A set of resolver functions which define how data for a field is created, updated or deleted.

3. **queries**  
   A set of resolver functions which define how data for a field is fetched.

4. **types**  
   GraphQL type definitions describing the fields that can be queried and mutated and the relationship between them.

5. **schema.ts**  
   Generates the schema from the Query and Mutation types.

6. **server.ts**  
   Runs the server.
