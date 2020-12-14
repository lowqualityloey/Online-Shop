import { getPaginatedProducts } from "../getPaginatedProducts";

describe("getPaginatedProducts", () => {
  it("should paginate products correctly", () => {
    const products1 = [1, 2, 3, 4, 5];
    const result1 = getPaginatedProducts(products1, 2, 2);
    expect(result1).toEqual([3, 4]);

    const products2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result2 = getPaginatedProducts(products2, 3, 4);
    expect(result2).toEqual([10]);

    const products3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result3 = getPaginatedProducts(products3, 4, 1);
    expect(result3).toEqual([1, 2, 3, 4]);

    const products4 = [1];
    const result4 = getPaginatedProducts(products4, 4, 1);
    expect(result4).toEqual([1]);
  });
});
