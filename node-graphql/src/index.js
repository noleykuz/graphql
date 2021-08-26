const {gql, ApolloServer} = require('apollo-server')
const {typeDefs} = require('./schema')
const {resolvers } = require('./resolvers')

const port = process.env.PORT || 9090;

const server = new ApolloServer({resolvers, typeDefs});

server.listen({port}, () => console.log(`server run at: http://localhost:${port}`));