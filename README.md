![CI](https://github.com/taleldayekh/fair-share/workflows/CI/badge.svg) [![codecov](https://codecov.io/gh/taleldayekh/fair-share/branch/master/graph/badge.svg)](https://codecov.io/gh/taleldayekh/fair-share)

## Table of Contents

- [Architecture](#architecture)
  - [Server Side Layers Overview](#server-side-layers-overview)
  - [Data Access Layer](#data-access-layer)
  - [Persistence Layer](#persistence-layer)
- [API](#api)
  - [Folder Structure](#folder-structure)
  - [GraphQL Graph](#graphql-graph)
  - [<img src='https://render.githubusercontent.com/render/math?math=n%2B1'> Problem](#-problem)
- [Data Storage](#data-storage)

## Architecture

TXT

### Server Side Layers Overview

```
╭──── Controller Layer ─────╮
│                           │
│            API            │
│                           │
╰───────────────────────────╯



╭──── Data Access Layer ────╮            ╭ ─ ─ Persistence Layer ─ ─ ╮
│                           │            ∣                           ∣
│          Models           │ ─────────► ∣        Data Storage       ∣
│                           │            ∣                           ∣
╰───────────────────────────╯            ╰ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ╯
```

### Data Access Layer

The _*Data Access Layer*_ is an abstraction of the database interactions. It draws a boundary between the database and the business rules. The _*Data Access Layer*_ cares about the _*Persistence Layer*_.

_*Data Access Layer*_ components:

- **Models**  
  Each model holds a set of data access functions for making domain specific queries and mutations to the database. The models translate calls from the business rules into the query language used by the database. Switching databases would only require changes in the models.

### Persistence Layer

The _*Persistence Layer*_ handles the persistence of data and is indirectly used by the business rules. The _*Persistence Layer*_ does not care about the _*Data Access Layer*_.

_*Persistence Layer*_ components:

- **Data Storage**  
  [RethinkDB](https://rethinkdb.com/) NoSQL database. More details on the database design and choice can be found under data storage section.

## API

#### [_*server/src/api*_](https://github.com/taleldayekh/fair-share/tree/master/server/src/api)

Pure [Node.js](https://nodejs.org/api/https.html) web server with an API based on [GraphQL.js](https://graphql.org/graphql-js/).

### Folder Structure

```sh
  api/
1 ├── mutations
2 ├── object-types
3 ├── queries
4 ├── tests
5 ├── type-defs
6 ├── schema.ts
7 ├── server.ts
```

1. **mutations**  
   A set of resolver functions organized by use case which defines how data for a field is created, updated or deleted.

   > The mutation resolvers provides a mapping to the models and should be kept thin with the least amount of business logic possible.

2. **object-types**  
   ES6 classes are used for implementing GraphQL types which return objects with complex behavior. Fields that accepts arguments are added as instance methods on the ES6 class, e.g. query and mutation resolvers. For fields where no arguments are needed we can instead use properties defined in the constructor.

3. **queries**  
   A set of resolver functions organized by use case which defines how data for a field is fetched.

   > The query resolvers provides a mapping to the models and should be kept thin with the least amount of business logic possible.

4. **tests**  
   Integration and unit tests.

5. **type-defs**  
   All the different types that make up our GraphQL schema. The schema is divided into parts and specified using GraphQL SDL (Schema Definition Language). Each field needs to have a corresponding resolver function with the same name that returns what we want.

6. **schema.ts**  
   Generates our schema by combining all schema parts in _*type-defs*_.

7. **server.ts**  
   Runs the API server.

### GraphQL Graph

### <img src='https://render.githubusercontent.com/render/math?math=\large n%2B1'> Problem

## Data Storage
