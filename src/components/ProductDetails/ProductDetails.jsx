// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import "./ProductDetails.css"; // Create this CSS file for styling

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch("/Product.json")
//       .then((response) => response.json())
//       .then((data) => {
//         const productDetails = data.find((item) => item.id === parseInt(id));
//         setProduct(productDetails);
//       })
//       .catch((error) => console.error("Error loading product details:", error));
//   }, [id]);

//   if (!product) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="product-details">
//       <img src={product.productImage} alt={product.productName} className="product-image" />
//       <h1 className="product-title">{product.productName}</h1>
//       <div className="product-tags">
//         {product.tags.map((tag, index) => (
//           <span key={index} className="tag">
//             #{tag}
//           </span>
//         ))}
//       </div>
//       <p className="product-upvotes">Upvotes: {product.upvotes}</p>
//       <button className="buy-button">Buy Now</button>
//       <div className="reviews-section">
//         <h2>Reviews</h2>
//         <p>Coming soon...</p>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <img
        src={product.product_image}
        alt={product.product_name}
        className="product-image"
      />
      <h1>{product.product_name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Upvotes: {product.upvotes}</p>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default ProductDetails;
