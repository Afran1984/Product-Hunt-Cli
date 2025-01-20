import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


const Login = () => {

const { signInWithGoogle, user, signIn, setLoading, resetPassword } = useAuth();

  const navigate = useNavigate();
  
const handleLogin = async (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;

  try {
    await signIn(email, password);
    navigate("/");
    toast.success("Logged in successfully");
  } catch (err) {
    toast.error(err?.message);
  }
};

const handleGoogleSignIn = async () => {
  try {
    const result = await signInWithGoogle();
    // const user = result.user;

    // let existingUser;
    // try {
    //   const res = await axios.get(
    //     `${import.meta.env.VITE_API_URL}/user/${user.email}`
    //   );
    //   existingUser = res.data;
    // } catch (err) {
    //   if (err.response?.status === 404) {
    //     existingUser = null;
    //   } else {
    //     throw err;
    //   }
    // }

    // if (!existingUser) {
    //   const newUserInfo = {
    //     email: user.email,
    //     name: user.displayName,
    //     profilePhoto: user.photoURL,
    //     role: "User",
    //     status: "Verified",
    //   };

    //   await axios.put(`${import.meta.env.VITE_API_URL}/user`, newUserInfo);
    // }

    navigate("/");
    toast.success("Logged in successfully");
  } catch (err) {
    console.error("Google sign-in failed:", err?.message);
    toast.error("Google sign-in failed. Please try again.");
  }
};

  
  
    return <div>
      
      <div className="h-full md:h-[550px]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 lg:max-w-lg  border rounded-md px-4 py-6">
            <div className="text-center flex items-center flex-col gap-2 ">
              <h2 className="font-semibold text-2xl text-textsecondary">
                You must sign in to join
              </h2>
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline w-fit btn-sm"
              >
                <FaGoogle /> Sign in with Google
              </button>
             
              <p>___________________or___________________</p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
              </div>
              <div className="form-control mt-6">
                <button className=" bg-green-400 text-black font-semibold p-3 rounded-md">
                  Login
                </button>
              </div>
            </form>
            <div className="flex justify-between my-2">
              <h3>Don't have an account? </h3>
                        <Link
                            to="/register" className="font-semibold hover:underline">
                Register
              </Link>
            </div>
          </div>
        
        </div>
      </div>
  </div>;
};


export default Login