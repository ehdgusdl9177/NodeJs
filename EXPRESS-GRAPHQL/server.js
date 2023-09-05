const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const path = require("path");
const app = express();

const loadedTypes = loadFilesSync("**/*", {
  extensions: ["graphql"],
});

const loadedResolvers = loadFilesSync(
  path.join(__dirname, "**/*.resolvers.js")
);

const schema = makeExecutableSchema({
  typeDefs: loadedTypes,
  resolvers: loadedResolvers,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

const port = 4000;
app.listen(port, () => {
  console.log(
    `Running a GraphQL API server at http://localshot:${port}/graphql`
  );
});
