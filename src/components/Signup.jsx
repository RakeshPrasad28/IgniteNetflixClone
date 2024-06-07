import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  document.title="Netflix"
  return (
    <div
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.4),rgba(0,0,0,0.8)),url(https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_small.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-screen h-screen"
    >
      <Link to="/">
        <h1 className="font-bold text-red-600 text-[6.5vh] tracking-tight px-20 py-5">
          NETFLIX 
        </h1>
      </Link>
      <div className="flex justify-center items-center">
        <div
          style={{
            background: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.8))",
          }}
          className="w-[30%]"
        >
          <div className="py-[5vh] flex flex-col items-center justify-center px-5 gap-3">
            <h1 className="text-white text-3xl text-start">Register</h1>
            <input
              placeholder="Email"
              className="bg-transparent border-gray-500 text-white border-[1px] w-[20vw] py-4 px-2 rounded"
            />
            <input
              placeholder="Mobile"
              className="bg-transparent border-gray-500 text-white border-[1px] w-[20vw] py-4 px-2 rounded"
            />
            <input
              placeholder="Password"
              className="bg-transparent border-gray-500 text-white border-[1px] w-[20vw] py-4 px-2 rounded"
            />
            <button className="bg-[#e50914] hover:bg-red-800 text-white text-xl py-2 rounded w-[20vw]">
              Sign Up
            </button>
            <h1 className="text-white text-xl">existing user?<Link to="/login" className="ml-2 hover:text-blue-600">Sign In</Link></h1>
                    
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
};

export default Signup;
