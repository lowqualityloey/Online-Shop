import "./FeaturedProducts.css";

const FeaturedProducts = ({ products, setIsFeaturedDisplayed }) => {
  return (
    <div className="featuredProducts">
      <button data-testid="close-button">
        <ion-icon name="close"></ion-icon>
      </button>
    </div>
  );
};

export default FeaturedProducts;
