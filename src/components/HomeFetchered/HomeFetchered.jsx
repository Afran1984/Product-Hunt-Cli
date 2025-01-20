// import { useEffect, useState } from "react";
// import "./HomeFetchered.css";

// const HomeFetchered = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("./Product.json")
//       .then((response) => response.json())
//       .then((data) => {
//         // Filter featured products
//         const featuredProducts = data
//           .filter((product) => product.isFeatured)
//           .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

//         // Ensure at least 4 cards are displayed
//         if (featuredProducts.length < 4) {
//           while (featuredProducts.length < 4) {
//             featuredProducts.push({
//               id: `placeholder-${featuredProducts.length}`,
//               productImage: "https://via.placeholder.com/300",
//               productName: "Coming Soon",
//               tags: ["Placeholder"],
//               upvotes: 0,
//               ownerId: null,
//               timestamp: null
//             });
//           }
//         }

//         setProducts(featuredProducts);
//       })
//       .catch((error) => console.error("Error loading data:", error));
//   }, []);

//   return (
//     <div className="product-container">
//       {products.map((product) => (
//         <div key={product.id} className="product-card">
//           <img
//             src={product.productImage}
//             alt={product.productName}
//             className="product-image"
//           />
//           <h3 className="product-name">
//             {product.productName}
//           </h3>
//           <div className="product-tags">
//             {product.tags.map((tag, index) => (
//               <span key={index} className="tag">
//                 #{tag}
//               </span>
//             ))}
//           </div>
//           <button className="upvote-button" disabled={!product.ownerId}>
//             <i className="vote-icon">👍</i> {product.upvotes}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HomeFetchered;

import { useEffect, useState } from "react";
import "./HomeFetchered.css";

const HomeFetchered = () => {
  const [products, setProducts] = useState([]);
  const [loggedInUserId, setLoggedInUserId] = useState(1); // Example logged-in user ID

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("./Product.json")
      .then((response) => response.json())
      .then((data) => {
        // Sort products by timestamp (latest first)
        const sortedData = data.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        // Slice the first 4 latest products
        setProducts(sortedData.slice(0, 4)); // Only the latest 4 products
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  const handleUpvote = (productId) => {
    if (!loggedInUserId) {
      alert("Please log in to upvote!");
      // Redirect to login page
      window.location.href = "/login";
      return;
    }

    // Simulate upvote
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, upvotes: product.upvotes + 1 }
          : product
      )
    );
  };

  return (
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
            disabled={loggedInUserId === product.ownerId}
          >
            <i className="vote-icon">👍</i> {product.upvotes}
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomeFetchered;
