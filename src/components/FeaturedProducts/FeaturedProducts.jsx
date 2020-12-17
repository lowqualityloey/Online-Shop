import "./FeaturedProducts.css";

const FeaturedProducts = ({ products, setIsFeaturedDisplayed }) => {
  return (
    <div className="featuredProducts">
      <button data-testid="close-button">
        <ion-icon name="close"></ion-icon>
      </button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.images} alt={product.name} />
            <h3>{product.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedProducts;
