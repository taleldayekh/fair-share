![CI](https://github.com/taleldayekh/fair-share/workflows/CI/badge.svg) [![codecov](https://codecov.io/gh/taleldayekh/fair-share/branch/master/graph/badge.svg)](https://codecov.io/gh/taleldayekh/fair-share)

## Table of Contents

- [Architectures](#architectures)
  - [Server Architecture Layers](#server-architecture-layers)
      - [Data Access Layer](#data-access-layer)
      - [Persistence Layer](#persistence-layer)
- [API](#api)
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

Both the GraphQL engine and the web server have been implemented with a minimal dependency on third party libraries. Usually, a pattern often used in similar projects is to run GraphQL over an [Express](https://expressjs.com) web server or to incorporate various parts of the [Apollo GraphQL](https://www.apollographql.com/docs/) tooling.

While such libraries provide a rich ecosystem of pre-built modules which are well tested and widely used, the main reasons for overlooking them in this project are purely academic.

The lessons learned and skills gained are more important than the outcome of this project as a product. Even though it is impossible to understand everything one should push oneself to understand the systems at play. A bare-bones web server, for instance, is fairly easy to write and does not require too many lines of code.

### GraphQL Server Folder Structure

```
   └── api/
1.     └── app-.../
2.     ╵   └── use-cases/
2.a.   ╵   ╵   └── mutations/
2.b.   ╵   ╵   └── queries/
3.     ╵   └── domainObjectType.ts 
4.     └── schema/
4.a.   ╵   └── types/
4.b.   ╵   └── index.ts
5.     └── tests/
6.     └── root.ts
7.     └── server.ts
```

1. **app...**  
   Application domains separated into `app` prefixed modules, e.g. _*app-user*_, _*app-spending-group*_.

2. **use-cases**  
   Use case specific mutations and queries for a particular domain.

	 - 2.a. **mutations**  
	   A set of resolver functions which defines how data for a field is created, updated or deleted.

	 - 2.b. **queries**  
	   A set of resolver functions which defines how data for a field is fetched.

3. **domainObjectType.ts**  
   GraphQL type for a domain which returns an object with complex behavior implemented using factory functions.

4. **schema**  
   TXT

   - 4.a. **types**  
     TXT

   - 4.b. **index.ts**  
     TXT

5. **tests**  
   TXT

6. **root.ts**  
   TXT

7. **server.ts**  
   Runs the API server by creating a web server

	 




<!-- ! CONTINUE FROM HERE ! -->

<!-- ### Folder Structure



4. **tests**  
   The API test suite is separated into:

   - Integration tests where queries and mutations containing test data are made to a dedicated test database.
   - Unit tests.

1. **mutations**  

   > The mutation resolvers provides a mapping to the models and should be kept thin with the least amount of business logic possible.


1. **queries**  

   > The query resolvers provides a mapping to the models and should be kept thin with the least amount of business logic possible.

1. **type-defs**  
   All the different types that make up our GraphQL schema. The schema is divided into parts and specified using GraphQL SDL (Schema Definition Language). Each field needs to have a corresponding resolver function with the same name that returns what we want.

1. **schema.ts**  
   Generates our GraphQL schema by combining all schema parts in the `type-defs` directory.