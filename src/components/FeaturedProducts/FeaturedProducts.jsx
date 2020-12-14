import "./FeaturedProducts.css";

const FeaturedProducts = ({ products, setIsFeaturedDisplayed }) => {
  return (
    <div className="featuredProducts">
      <button data-testid="close-button">Close</button>
    </div>
  );
};

export default FeaturedProducts;
