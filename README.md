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
   A set of resolver functions which define how to create, update or delete data.

3. **queries**  
   A set of resolver functions which define how data for a field is being fetched.

4. **types**  
   _*Add description*_

5. **schema.ts**  
   _*Add description*_

6. **server.ts**  
   Runs the server.
