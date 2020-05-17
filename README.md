## Table of Contents

- [Architecture](#architecture)
  - [Server Side Layers Overview](#server-side-layers-overview)
  - [Data Access Layer](#data-access-layer)
  - [Persistence Layer](#persistence-layer)
- [API](#api)
  - [Folder Structure](#folder-structure)
  - [GraphQL Graph](#graphql-graph)
  - [<img src='https://render.githubusercontent.com/render/math?math=n%2B1'> Problem](#-problem)

## Architecture

TXT

### Server Side Layers Overview

```
╭──── Data Access Layer ────╮            ╭ ─ ─ Persistence Layer ─ ─ ╮
│                           │            ∣                           ∣
│          Models           │ ─────────► ∣        Data Storage       ∣
│                           │            ∣                           ∣
╰───────────────────────────╯            ╰ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ╯
```

### Data Access Layer

The _*Data Access Layer*_ is an abstraction of the database interactions. It draws a line between the database and the business rules. The _*Data Access Layer*_ knows about the _*Persistence Layer*_.

_*Data Access Layer*_ components:

- **Models**  
  Each model holds a set of data access functions for making domain specific queries and mutations to the database. The models translate calls from the business rules into the query language used by the database. Switching databases would only require changes in the models.

### Persistence Layer

## API

#### [_*src/server/src/api*_](https://github.com/taleldayekh/fair-share/tree/master/src/server/src/api)

Pure [Node.js](https://nodejs.org/api/https.html) web server with an API based on [GraphQL.js](https://graphql.org/graphql-js/).

### Folder Structure

```
  api/
1 ├── mutations
2 ├── queries
3 ├── tests
4 ├── types
5 ├── schema.ts
6 ├── server.ts
```

1. **mutations**  
   A set of resolver functions which define how data for a field is created, updated or deleted.

2. **queries**  
   A set of resolver functions which define how data for a field is fetched.

3. **tests**  
   Unit tests for queries and mutations.

4. **types**  
   The GraphQL schema divided into parts and specified using the GraphQL SDL (schema definition language) together with the type definitions that describe which fields can be queried and mutated and the relationship between them.

5. **schema.ts**  
   Generates one schema by combining all schema parts.

6. **server.ts**  
   Runs the server.

### GraphQL Graph

### <img src='https://render.githubusercontent.com/render/math?math=\large n%2B1'> Problem
