import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProductDetails.css"; // Create this CSS file for styling

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/Product.json")
      .then((response) => response.json())
      .then((data) => {
        const productDetails = data.find((item) => item.id === parseInt(id));
        setProduct(productDetails);
      })
      .catch((error) => console.error("Error loading product details:", error));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-details">
      <img src={product.productImage} alt={product.productName} className="product-image" />
      <h1 className="product-title">{product.productName}</h1>
      <div className="product-tags">
        {product.tags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}
          </span>
        ))}
      </div>
      <p className="product-upvotes">Upvotes: {product.upvotes}</p>
      <button className="buy-button">Buy Now</button>
      <div className="reviews-section">
        <h2>Reviews</h2>
        <p>Coming soon...</p>
      </div>
    </div>
  );
};

export default ProductDetails;
