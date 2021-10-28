var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');

// const express = require("express");
// const {graphqlHTTP} = require("express-graphql");

// const schema  = require("./schema/schema");

// const app = express();

// app.use('/graphql', graphqlHTTP({schema,graphiql:true}));


// app.listen("4000", () => {
//     console.log("listerning at 4000")
// })