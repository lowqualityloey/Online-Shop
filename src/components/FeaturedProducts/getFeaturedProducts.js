// complete the function inside getFeaturedProducts
// return an array that only includes the products that are featured.

const getFeaturedProducts = (products) => {
  let featuredProducts = products.filter(
    (product) => product.metadata.featured === "yes"
  );

  return featuredProducts;
};

export { getFeaturedProducts };

// map.array?

// for of loop.?
// return a boolean not metadata
// inside it theres theres a condition of featured=yes or??

// const getFeaturedProducts = (products) => {
//   const featuredProducts = [];

//   for (const product of products) {
//     let featured = product.metadata.featured;

//     if (featured.includes("yes")) {
//       // return featured;
//       featuredProducts.push(featured);
//     }
//   }

//   return featuredProducts;
// };

// export { getFeaturedProducts };

// return products.filter((product) => {
//   if (filterBy === "all") {
//     return true;
//   }
//   return filterBy === product.metadata.category;
// });

// const getFeaturedProducts = (products) => {
//   let featuredProducts = products.filter(
//     (product) => product.metadata.featured === "yes"
//   );
//   return featuredProducts;
// };
