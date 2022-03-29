const express = require('express');
require("dotenv").config();
const path = require('path');
//import apollo server
const { ApolloServer } = require('apollo-server-express');
// import typeDefs and resolvers
const { typeDefs, resolvers} = require('./schemas');
const {authMiddleware} = require('./utils/auth');

//db connection
const db = require('./config/connection');

// const routes = require('./routes');

//express server
const app = express();
const PORT = process.env.PORT || 3001;


// for apollo server 3.0 new syntax
let apolloServer = null;
async function startServer () {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
    
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app });
}



//apply apollo server with express app
startServer();

//middleware parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);

//get all
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`);
  });
});
