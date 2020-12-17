import "./FeaturedProducts.css";

const FeaturedProducts = ({ products, setIsFeaturedDisplayed }) => {
  const hideFeaturedProducts = () => setIsFeaturedDisplayed(false);

  return (
    <div className="featuredProducts">
      <button data-testid="close-button" onClick={hideFeaturedProducts}>
        <ion-icon name="close"></ion-icon>
      </button>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.images} alt={product.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedProducts;
