const { graphql } = require("graphql");

const { schema } = require("./");

test("should fetch products", async () => {
  const result = await graphql({
    schema,
    source: /* GraphQL */ `
      {
        products {
          name
          price
        }
      }
    `,
  });

  expect(result.data.products).toBeDefined();
  expect(result.data.products.length).toBe(10);
});

test("should fetch reviews", async () => {
  const result = await graphql({
    schema,
    source: /* GraphQL */ `
      {
        reviews {
          message
          author
        }
      }
    `,
  });

  expect(result.data.reviews).toBeDefined();
  expect(result.data.reviews.length).toBe(5);
});
