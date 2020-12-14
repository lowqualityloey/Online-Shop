import { getProductsBySearch } from "../getProductsBySearch";

const products = [{ name: "abc" }, { name: "xyz" }, { name: "lmn" }];

describe("getProductsBySearch", () => {
  it("should return products that include the search term", () => {
    const result = getProductsBySearch(products, "abc");
    expect(result).toEqual([products[0]]);
  });

  it("should return all the products if the search term is an empty string", () => {
    const result = getProductsBySearch(products, "");
    expect(result).toEqual(products);
  });
});
