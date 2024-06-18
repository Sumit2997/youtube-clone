import React from "react";
import Button from "./Button";

const list = ["All", "Gaming", "Music", "Movies", "News", "Live"];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((li) => (
        <Button name={li} />
      ))}
    </div>
  );
};

export default ButtonList;
