const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        hi: String
    }
`

const resolvers = {
    Query: {
        hi() {
            return 'Hello, GraphQL!';
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({ url }) => {
    console.log(`Server running... ${url}`);
})
