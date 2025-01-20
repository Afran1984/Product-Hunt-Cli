import { useEffect, useState } from "react";
import "./TrandingFetchers.css"; // Assuming you will create a separate CSS file for this section

const TrandingFetchers = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // Fetch data from the JSON file
    fetch("./Product.json")
      .then((response) => response.json())
      .then((data) => {
        // Sort products by upvotes in descending order
        const sortedData = data.sort((a, b) => b.upvotes - a.upvotes);
        // Get the top 6 products
        const trendingProducts = sortedData.slice(0, 6);
        setProducts(trendingProducts);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  const handleUpvote = (productId) => {
    // Handle upvote functionality (similar to the Featured Product section)
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, upvotes: product.upvotes + 1 }
          : product
      )
    );
  };

  return (
    <div className="trending-container">
      <h2 className="trending-title">Trending Products</h2>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.productImage}
              alt={product.productName}
              className="product-image"
            />
            <h3
              className="product-name"
              onClick={() => (window.location.href = `/product/${product.id}`)}
            >
              {product.productName}
            </h3>
            <div className="product-tags">
              {product.tags.map((tag, index) => (
                <span key={index} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
            <button
              className="upvote-button"
              onClick={() => handleUpvote(product.id)}
            >
              <i className="vote-icon">👍</i> {product.upvotes}
            </button>
          </div>
        ))}
      </div>
      <button
        className="show-all-button"
        onClick={() => (window.location.href = "/allproduct")}
      >
        Show All Products
      </button>
    </div>
  );
};

export default TrandingFetchers;
