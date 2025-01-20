import React from "react";
import useAuth from "../../../hooks/useAuth";

const AddProduct = () => {
    const {user} = useAuth()
    return <div>AddProduct
      
        <form action="#">
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <label htmlFor="">Product Name</label>
                    <input type="text" placeholder="Enter Product Name" className="block mt-1 px-4 py-2 rounded-sm border w-full" />
                </div>
                <div>
                    <label htmlFor="">Product Image</label>
                    <input type="text" placeholder="Enter Product Image Link" className="block mt-1 px-4 py-2 rounded-sm border w-full" />
                </div>
                <div>
                    <label htmlFor="">Product Description</label>
                    <textarea row="4" cols="4" type="text" placeholder="Enter Product Description" className="block mt-1 px-4 py-2 rounded-sm border w-full" />
                </div>
                <div>
                    <label htmlFor="">Owner Name</label>
                    <input type="text" placeholder="Owner Name" value={user?.displayName} className="block mt-1 px-4 py-2 rounded-sm border w-full" />
                </div>
                <div>
                    <label htmlFor="">Owner Email</label>
                    <input type="text" value={user?.email} placeholder="Owner Email" className="block mt-1 px-4 py-2 rounded-sm border w-full" />
                </div>
                <div>
                    <label htmlFor="">Owner Image</label>
                    <input type="text" value={user?.photoURL} placeholder="Owner Email" className="block mt-1 px-4 py-2 rounded-sm border w-full" />
                </div>
            </div>
            <button className="px-4 py-2 mt-2 bg-black text-white rounded-sm">Submit</button>
        </form>
  </div>;
};

export default AddProduct;
