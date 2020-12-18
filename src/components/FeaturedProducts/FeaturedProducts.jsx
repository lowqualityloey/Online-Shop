import "./FeaturedProducts.css";

const FeaturedProducts = ({ products, setIsFeaturedDisplayed }) => {
  const hideFeaturedProducts = () => setIsFeaturedDisplayed(false);

  return (
    <div className="featured-container">
      <div className="featuredProducts">
        <button data-testid="close-button" onClick={hideFeaturedProducts}>
          <ion-icon name="close"></ion-icon>
        </button>
        <ul className="featured-grid">
          {products.map((product) => (
            <li key={product.id} className="featured-grid-item">
              <h3>{product.name}</h3>
              <img src={product.images} alt={product.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturedProducts;
