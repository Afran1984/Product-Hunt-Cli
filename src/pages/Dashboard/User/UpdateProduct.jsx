import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/product/${id}`
        );
        setData(res.data);
      } catch (err) {
        toast.error(err?.message);
      }
    };
    fetchData();
  }, [id]);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const product_name = form.product_name.value;
    const product_image = form.product_image.value;
    const product_desc = form.product_desc.value;
    const owner_name = form.owner_name.value;
    const owner_email = form.owner_email.value;
    const owner_photo = form.owner_photo.value;
    const ownerInfo = [owner_name, owner_email, owner_photo];
    const productInfo = {
      product_name,
      product_image,
      product_desc,
      ownerInfo,
      status: "pending",
    };
    try {
      // write post api here
      await axios.put(
        `${import.meta.env.VITE_API_URL}/product/${id}`,
        productInfo
      );
      toast.success("Product is updated!");
      navigate("/dashboard/my-product");
    } catch (err) {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div>
      <div>
        Update Product
        <form onSubmit={handleAddProduct}>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="">Product Name</label>
              <input
                name="product_name"
                type="text"
                value={data?.product_name || ""}
                onChange={(e) =>
                  setData({ ...data, product_name: e.target.value })
                }
                placeholder="Enter Product Name"
                className="block mt-1 px-4 py-2 rounded-sm border w-full"
              />
            </div>
            <div>
              <label htmlFor="">Product Image</label>
              <input
                name="product_image"
                type="text"
                value={data?.product_image || ""}
                onChange={(e) =>
                  setData({ ...data, product_image: e.target.value })
                }
                placeholder="Enter Product Image Link"
                className="block mt-1 px-4 py-2 rounded-sm border w-full"
              />
            </div>
            <div>
              <label htmlFor="">Product Description</label>
              <textarea
                name="product_desc"
                rows="4"
                value={data?.product_desc || ""}
                onChange={(e) =>
                  setData({ ...data, product_desc: e.target.value })
                }
                placeholder="Enter Product Description"
                className="block mt-1 px-4 py-2 rounded-sm border w-full"
              />
            </div>
            <div>
              <label htmlFor="">Owner Name</label>
              <input
                name="owner_name"
                type="text"
                value={data?.ownerInfo?.[0] || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    ownerInfo: [
                      e.target.value,
                      data?.ownerInfo?.[1],
                      data?.ownerInfo?.[2],
                    ],
                  })
                }
                placeholder="Owner Name"
                className="block mt-1 px-4 py-2 rounded-sm border w-full"
              />
            </div>
            <div>
              <label htmlFor="">Owner Email</label>
              <input
                name="owner_email"
                type="text"
                value={data?.ownerInfo?.[1] || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    ownerInfo: [
                      data?.ownerInfo?.[0],
                      e.target.value,
                      data?.ownerInfo?.[2],
                    ],
                  })
                }
                placeholder="Owner Email"
                className="block mt-1 px-4 py-2 rounded-sm border w-full"
              />
            </div>
            <div>
              <label htmlFor="">Owner Image</label>
              <input
                name="owner_photo"
                type="text"
                value={data?.ownerInfo?.[2] || ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    ownerInfo: [
                      data?.ownerInfo?.[0],
                      data?.ownerInfo?.[1],
                      e.target.value,
                    ],
                  })
                }
                placeholder="Owner Image"
                className="block mt-1 px-4 py-2 rounded-sm border w-full"
              />
            </div>
          </div>
          <button className="px-4 py-2 mt-2 bg-black text-white rounded-sm">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
