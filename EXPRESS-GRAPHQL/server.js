const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const app = express();

const loadedTypes = loadFilesSync("**/*", {
  extensions: ["graphql"],
});

const schema = makeExecutableSchema({
  typeDefs: [loadedTypes],
  resolvers: {
    Query: {
      posts: (parent, args, context, info) => {
        return parent.posts;
      },
    },
  },
});

const root = {
  posts: require("./posts/posts.model"),
  comments: require("./comments/comments.model"),
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

const port = 4000;
app.listen(port, () => {
  console.log(
    `Running a GraphQL API server at http://localshot:${port}/graphql`
  );
});
