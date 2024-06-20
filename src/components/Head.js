import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searhQuery, setSearchQuery] = useState();
  const [suggestioons, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(searhQuery);
    //make an api call after every key press
    //but if diff. btw two api calls is <200ms
    //decline the api call

    const timer = setTimeout(() => {
      if (searchCache[searhQuery]) {
        setSuggestions(searchCache[searhQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => clearTimeout(timer); //this is important dont forget this
    //this will be called when the component is rerendered (for every time)
  }, [searhQuery]);

  const getSearchSuggestions = async () => {
    console.log(searhQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searhQuery);
    const json = await data.json();
    // console.log(json[0]);
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searhQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div
      className="grid grid-flow-col p-5 m-2 shadow-lg"
      onScroll={() => setShowSuggestions(false)}
    >
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
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            onChange={(e) => e.target.value && setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-200">
            <ul>
              {suggestioons.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-200">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
