// TODO Remove these imports, and replace them with real fetch requests
// import products from "../data/products.json";
// import prices from "../data/prices.json";

// This function matches the prices with the products because the
// Stripe API provides prices separately from the product info
const getProductsWithPrices = (products, prices) =>
  products.data.map((product) => ({
    prices: prices.data.filter((price) => price.product === product.id),
    ...product,
  }));

const getProducts = async () => {
  // TODO Fetch products and prices from the Stripe API
  // Products URL: `${process.env.REACT_APP_API_URL}/products`
  // Prices URL: `${process.env.REACT_APP_API_URL}/prices`
  const res = await fetch(`${process.env.REACT_APP_API_URL}/products`);
  const products = await res.json();
  const res2 = await fetch(`${process.env.REACT_APP_API_URL}/prices`);
  const prices = await res2.json();

  // console.log(products);
  // console.log(prices);

  return getProductsWithPrices(products, prices);
};

export { getProducts };
