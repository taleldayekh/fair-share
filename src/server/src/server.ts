import { createServer, Server, IncomingMessage, ServerResponse } from 'http';
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

// !! GraphQL
// Dummy data
const users = [
  { id: 1, name: 'Talel Dayekh', spendingGroupId: 1 },
  { id: 2, name: 'Bianca Basan', spendingGroupId: 2 },
];

const spendingGroups = [
  { id: 1, name: 'Groceries' },
  { id: 2, name: 'Stockholm Trip' },
];
// Dummy data

const UserType: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  description: 'Single user',
  fields: () => {
    return {
      id: {
        type: GraphQLNonNull(GraphQLInt),
      },
      name: {
        type: GraphQLNonNull(GraphQLString),
      },
      spendingGroupId: {
        type: GraphQLNonNull(GraphQLInt),
      },
      spendingGroup: {
        type: SpendingGroupType,
        resolve: (user) => {
          return spendingGroups.find(
            (spendingGroup) => spendingGroup.id === user.spendingGroupId,
          );
        },
      },
    };
  },
});

const SpendingGroupType: GraphQLObjectType = new GraphQLObjectType({
  name: 'SpendingGroup',
  description: 'Single spending group',
  fields: () => {
    return {
      id: {
        type: GraphQLNonNull(GraphQLInt),
      },
      name: {
        type: GraphQLNonNull(GraphQLString),
      },
      users: {
        type: new GraphQLList(UserType),
        resolve: (spendingGroup) => {
          return users.filter(
            (user) => user.spendingGroupId === spendingGroup.id,
          );
        },
      },
    };
  },
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Query type for retrieving data',
  fields: () => {
    return {
      users: {
        type: new GraphQLList(UserType),
        description: 'Retrieve all users',
        resolve: () => users,
      },
      user: {
        type: UserType,
        description: 'Retrieve single user',
        args: {
          id: {
            type: GraphQLInt,
          },
        },
        resolve: (parent, args) => users.find((user) => user.id === args.id),
      },
      spendingGroups: {
        type: new GraphQLList(SpendingGroupType),
        description: 'Retrieve all spending groups',
        resolve: () => spendingGroups,
      },
      spendingGroup: {
        type: SpendingGroupType,
        description: 'Retrieve single spending group',
        args: {
          id: {
            type: GraphQLInt,
          },
        },
        resolve: (parent, args) =>
          spendingGroups.find((spendingGroup) => spendingGroup.id === args.id),
      },
    };
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Query type for adding and deleting data',
  fields: () => {
    return {
      addUser: {
        type: UserType,
        description: 'Add new user',
        args: {
          name: {
            type: GraphQLNonNull(GraphQLString),
          },
          spendingGroupId: {
            type: GraphQLNonNull(GraphQLInt),
          },
        },
        resolve: (parent, args) => {
          const user = {
            id: users.length + 1,
            name: args.name,
            spendingGroupId: args.spendingGroupId,
          };
          users.push(user);
          return user;
        },
      },
      addSpendingGroup: {
        type: SpendingGroupType,
        description: 'Add new spending group',
        args: {
          name: {
            type: GraphQLNonNull(GraphQLString),
          },
        },
        resolve: (parent, args) => {
          const spendingGroup = {
            id: spendingGroups.length + 1,
            name: args.name,
          };
          spendingGroups.push(spendingGroup);
          return spendingGroup;
        },
      },
    };
  },
});

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
// !! GraphQL

const port: number = 666;
const server: Server = createServer().listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

server.on('request', (req: IncomingMessage, res: ServerResponse) => {
  switch (req.url) {
    case '/api': {
      if (req.method === 'POST') {
        let query: string;
        req.on('data', (chunk) => {
          query = chunk.toString();
        });
        req.on('end', () => {
          graphql(schema, query).then((data) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(data));
            res.end();
          });
        });
      }
      break;
    }
    default: {
      res.statusCode = 404;
      res.end();
    }
  }
});
