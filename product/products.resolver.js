const faker = require("faker");

module.exports = {
  Query: {
    products: (parent, args, context, info) =>
      Array.from({ length: 10 }, (_, i) => ({
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
      })),
  },
};
