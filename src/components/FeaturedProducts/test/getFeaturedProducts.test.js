import { getFeaturedProducts } from "../getFeaturedProducts";

const products = [
  {
    id: 1,
    metadata: {
      featured: "yes",
    },
  },
  {
    id: 2,
    metadata: {
      featured: "yes",
    },
  },
  {
    id: 3,
    metadata: {
      featured: "no",
    },
  },
  {
    id: 4,
    metadata: {},
  },
];

describe("getFeaturedProducts", () => {
  it("should filter products who have the featured metadata", () => {
    const result = getFeaturedProducts(products);

    expect(result).toEqual([products[0], products[1]]);
  });
});
