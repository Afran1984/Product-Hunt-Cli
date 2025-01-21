import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Ferchered.css";

const Fetchered = () => {
  const [products, setProducts] = useState([]);
  const [loggedInUserId, setLoggedInUserId] = useState(1); // Mock logged-in user ID
  const navigate = useNavigate(); // React Router hook for navigation

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleUpvote = (productId) => {
    if (!loggedInUserId) {
      alert("Please log in to upvote!");
      return;
    }

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product._id === productId
          ? { ...product, upvotes: product.upvotes + 1 }
          : product
      )
    );
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <img
            src={product.product_image}
            alt={product.product_name}
            className="product-image"
          />
          <h3
            className="product-name"
            onClick={() => handleProductClick(product._id)}
          >
            {product.product_name}
          </h3>
          <button
            className="upvote-button"
            onClick={() => handleUpvote(product._id)}
            disabled={loggedInUserId === product.ownerId}
          >
            <i className="vote-icon">👍</i> {product.upvotes}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Fetchered;
