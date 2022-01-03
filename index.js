const path = require("path");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { mergeResolvers } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");

// const productsResolver = require("./resolvers/products.resolver");
// const reviewsResolver = require("./resolvers/reviews.resolver");
// const resolverFiles = loadFilesSync(path.join(__dirname, "resolvers"));
const resolverFiles = loadFilesSync(path.join(__dirname, "./**/*.resolver.*"));

const typeDefs = /* GraphQL */ `
  type Query {
    products: [Product!]!
    reviews: [Review!]!
  }

  type Product {
    name: String!
    price: Int!
  }

  type Review {
    message: String!
    author: String!
  }
`;

// const resolvers = mergeResolvers([productsResolver, reviewsResolver]);
const resolvers = mergeResolvers(resolverFiles);

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = {
  schema,
};
