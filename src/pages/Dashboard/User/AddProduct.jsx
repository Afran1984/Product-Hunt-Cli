import React from "react";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const AddProduct = () => {
    const { user } = useAuth()
    const handleAddProduct = async (e) => {
        e.preventDefault();
        const form = e.target();
        const product_name = form.product_name.value()
        const product_image = form.product_image.value()
        const product_desc = form.product_desc.value();
        const owner_name = form.owner_name.value();
        const owner_email = form.owner_name.value();
        const owner_photo = form.owner_name.value();
        const ownerInfo = [
            owner_name,
            owner_email,
            owner_photo
        ]
        const productInfo = {
            product_name, product_image, product_desc, ownerInfo
        };
        try {
            // write post api here
        }
        catch (err) {
            toast.error('Something Went Wrong')
        }
    }
    return <div>AddProduct
      
        <form action="#">
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <label htmlFor="">Product Name</label>
                    <input name="product_name" type="text" placeholder="Enter Product Name" className="block mt-1 px-4 py-2 rounded-sm border w-full" />
                </div>
                <div>
                    <label htmlFor="">Product Image</label>
                    <input name="product_image" type="text" placeholder="Enter Product Image Link" className="block mt-1 px-4 py-2 rounded-sm border w-full" />
                </div>
                <div>
                    <label htmlFor="">Product Description</label>
                    <textarea name="product_desc" row="4" cols="4" type="text" placeholder="Enter Product Description" className="block mt-1 px-4 py-2 rounded-sm border w-full" />
                </div>
                <div>
                    <label htmlFor="">Owner Name</label>
                    <input name="owner_name" disabled="true" type="text" placeholder="Owner Name" value={user?.displayName} className="block mt-1 px-4 py-2 rounded-sm border w-full" />
                </div>
                <div>
                    <label htmlFor="">Owner Email</label>
                    <input name="owner_email" disabled="true" type="text" value={user?.email} placeholder="Owner Email" className="block mt-1 px-4 py-2 rounded-sm border w-full" />
                </div>
                <div>
                    <label htmlFor="">Owner Image</label>
                    <input name="owner_photo" disabled="true" type="text" value={user?.photoURL} placeholder="Owner Email" className="block mt-1 px-4 py-2 rounded-sm border w-full" />
                </div>
            </div>
            <button className="px-4 py-2 mt-2 bg-black text-white rounded-sm">Submit</button>
        </form>
  </div>;
};

export default AddProduct;
