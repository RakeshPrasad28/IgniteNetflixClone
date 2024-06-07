import React, { useState } from "react";
import Register from "./Register";
import Accordion from "./Accordion";
import data from "./data.js";
import { Link } from "react-router-dom";
import Info from "./Info.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  document.title="Netflix India - Watch TV shows"
  const [items, setItems] = useState(data);
  return (
    <div className="bg-black/85">
      <div
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.4),rgba(0,0,0,0.8)),url(https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-screen"
      >
        <nav className="flex justify-between items-center mx-[10%]">
          <h1 className="font-bold text-red-600 text-[6.5vh] tracking-tighter">
            NETFLIX
          </h1>
          <div className="flex justify-between items-center gap-8">
            <div>
              <select className="bg-transparent cursor-pointer text-white border-[1px] px-4 py-1 border-gray-400 font-semibold">
                <option className="text-black">English</option>
                <option className="text-black">Hindi</option>
              </select>
            </div>
            <Link
              to="/login"
              className="text-white bg-red-600 px-3 py-1 hover:bg-red-400 font-semibold rounded "
            >
              Sign In
            </Link>
          </div>
        </nav>
        <div className="flex flex-col justify-center items-center mt-[15%]">
          <h1 className="text-white text-[8vh] font-bold">
            Unlimited movies, TV shows and more
          </h1>
          <h1 className="text-white text-[4vh] tracking-tighter">
            Watch anywhere. Cancel anytime.
          </h1>
          <Register />
        </div>
      </div>
      <Info />
      <div className="bg-black text-white my-3 pt-20">
        <div>
          <h1 className="text-center text-5xl font-black mb-10">Frequently Asked Questions</h1>
          {items.map((item, index) => {
            return <Accordion key={index} item={item} />;
          })}
        </div>
        <div className="mt-[8vh] flex justify-center pb-[8vh]">
          <Register />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
