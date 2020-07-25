![CI](https://github.com/taleldayekh/fair-share/workflows/CI/badge.svg) [![codecov](https://codecov.io/gh/taleldayekh/fair-share/branch/master/graph/badge.svg)](https://codecov.io/gh/taleldayekh/fair-share)

## Table of Contents

- [Architectures](#architectures)
  - [Server Architecture Layers](#server-architecture-layers)
      - [Data Access Layer](#data-access-layer)
      - [Persistence Layer](#persistence-layer)
- [API](#api)
  - [GraphQL](#graphql)
  - [GraphQL Server Folder Structure](#graphql-server-folder-structure)

## Architectures

TXT

### Server Architecture Layers

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

#### Data Access Layer

The _*Data Access Layer*_ is an abstraction of the database interactions. It draws a boundary between the database and the business rules. The _*Data Access Layer*_ cares about the _*Persistence Layer*_.

_*Data Access Layer*_ components:

- **Models**  
  Each model holds a set of data access functions for making domain specific queries and mutations to the database. The models translate calls from the business rules into the query language used by the database. Switching databases would only require changes in the models.

#### Persistence Layer

The _*Persistence Layer*_ handles the persistence of data and is indirectly used by the business rules. The _*Persistence Layer*_ does not care about the _*Data Access Layer*_.

_*Persistence Layer*_ components:

- **Data Storage**  
  [RethinkDB](https://rethinkdb.com/) NoSQL database. More details on the database design and choice can be found under data storage section.

## API

The API is built on [GraphQL.js](https://graphql.org/graphql-js) and runs on a [Node.js](https://nodejs.org/api/https.html) web server.

Both the GraphQL engine and the web server has been implemented with a minimal dependency on third party libraries. Often the pattern in similar projects is to run GraphQL over an [Express](https://expressjs.com) web server or to incorporate various parts of the [Apollo GraphQL](https://www.apollographql.com/docs/) tooling.

While such libraries provide a rich ecosystem of pre-built modules which are well tested and widely used, the main reasons for overlooking them in this project are academic.

The lessons learned and skills gained as a whole are more important than the outcome of this project as a product. Even though it is impossible to understand everything, a balance can be found while pushing to understand the system. Such thing as a simple web server, for instance, should be fairly easy to write and not require too many lines of code.

### GraphQL

### GraphQL Server Folder Structure

```
Folder structure goes here...
```










<!-- ! CONTINUE FROM HERE ! -->

### Folder Structure

A brief overview of the directories which make up the applications GraphQL API core.

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

4. **tests**  
   The API test suite is separated into:

   - Integration tests where queries and mutations containing test data are made to a dedicated test database.
   - Unit tests.

1. **mutations**  
   A set of resolver functions organized by use case which defines how data for a field is created, updated or deleted.

   > The mutation resolvers provides a mapping to the models and should be kept thin with the least amount of business logic possible.

1. **object-types**  
   ES6 classes that are used for implementing GraphQL types which return objects with complex behavior. Fields that accepts arguments are added as instance methods on the ES6 class, e.g. query and mutation resolvers. For fields where no arguments are needed we can instead use properties defined in the constructor.

1. **queries**  
   A set of resolver functions organized by use case which defines how data for a field is fetched.

   > The query resolvers provides a mapping to the models and should be kept thin with the least amount of business logic possible.

1. **type-defs**  
   All the different types that make up our GraphQL schema. The schema is divided into parts and specified using GraphQL SDL (Schema Definition Language). Each field needs to have a corresponding resolver function with the same name that returns what we want.

1. **schema.ts**  
   Generates our GraphQL schema by combining all schema parts in the `type-defs` directory.

1. **server.ts**  
   Runs the API server.
