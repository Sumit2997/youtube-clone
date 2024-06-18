import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 cursor-pointer">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8"
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/large_2x/hamburger-menu-line-icon-free-vector.jpg"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg"
            alt="youtube-logo"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200">
          🔍
        </button>
      </div>
      <div>
        <img
          className="h-8 col-span-1"
          src="https://sdfn.us/wp-content/uploads/2022/05/avatar.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
