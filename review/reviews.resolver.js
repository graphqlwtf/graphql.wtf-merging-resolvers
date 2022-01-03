const faker = require("faker");

module.exports = {
  Query: {
    reviews: (parent, args, context, info) =>
      Array.from({ length: 5 }, () => ({
        message: faker.lorem.sentence(),
        author: faker.name.findName(),
      })),
  },
};
