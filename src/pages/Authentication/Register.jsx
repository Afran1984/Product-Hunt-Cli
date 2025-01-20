import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return <div>
      
      <div>
      <div className="h-full md:h-[550px] flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-center">
         
          <div className="w-full  lg:max-w-lg  border rounded-md px-4 py-6">
            <div className="flex flex-col justify-center items-center mb-2">
              <h1 className="text-textsecondary font-semibold text-2xl">
                Register
              </h1>
              <p className="italic">Enter your information to register</p>
            </div>
            <form className="w-full">
              <div className="flex gap-2">
                <div className="w-1/2">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered w-full"
                    name="name"
                  />
                </div>
                <div className="w-1/2">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter photo url"
                    className="input input-bordered w-full"
                    name="photo"
                  />
                </div>
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  name="email"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  name="password"
                />
              </div>
              <div className="form-control mt-6">
                                <button className=" bg-red-400
                 text-black font-semibold p-3 rounded-md">
                  Register
                </button>
              </div>
            </form>
            <div className="flex justify-between my-2">
              <h3>Already have an account? </h3>
              <Link to="/login" className="font-semibold hover:underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Register;
