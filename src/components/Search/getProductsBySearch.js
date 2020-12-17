const getProductsBySearch = (products, searchPrefix) => {
  let searchProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchPrefix.toLowerCase())
  );
  return searchProducts;
};

export { getProductsBySearch };
