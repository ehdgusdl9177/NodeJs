const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const app = express();

const schema = buildSchema(`
type Query {
  description: String
}`);

const root = {
  description: "hello world",
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphql: true,
  })
);

const port = 4000;
app.listen(port, () => {
  console.log(
    `Running a GraphQL API server at http://localshot:${port}/graphql`
  );
});
