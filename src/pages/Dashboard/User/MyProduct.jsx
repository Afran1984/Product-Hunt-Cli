import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const MyProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProduct();
  }, [products]);

  const getProduct = async () => {
    const res = await axios(`${import.meta.env.VITE_API_URL}/products`);
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/product/${id}`
      );
      if (response.status === 200) {
        toast.success("Product Deleted Successfully");
      }
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "Something went wrong"
      );
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Votes</th>
              <th>Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((pr) => (
              <tr key={pr._id}>
                <td>{pr.product_name}</td>
                <td>Votes</td>
                <td className="text-red-600">{pr.status}</td>
                <td>Update</td>
                <td onClick={() => handleDelete(pr._id)}>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
