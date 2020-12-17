const getFeaturedProducts = (products) => {
  let featuredProducts = products.filter(
    (product) => product.metadata.featured === "yes"
  );

  return featuredProducts;
};

export { getFeaturedProducts };
