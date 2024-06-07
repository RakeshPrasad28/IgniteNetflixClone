import React, { useState } from "react";

const Accordion = ({ item }) => {
  const { title, content } = item;
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="px-[10%]  mt-3">
      <div className="bg-[#2d2d2d] px-5 py-3 text-2xl ">
        <div
          onClick={() => handleClick()}
          className="flex justify-between items-center cursor-pointer"
        >
          <p className="py-5">{title}</p>
          {show ? <span>✖️</span> : <span>➕</span>}
        </div>
        <p
          className={`${
            show ? "block" : "hidden"
          } transition-all ease-in-out duration-700 py-4 border-t-[1px] border-black`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
