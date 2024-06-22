import React from "react";

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center shadow-lg p-2">
      <img
        className="h-8 col-span-1"
        src="https://sdfn.us/wp-content/uploads/2022/05/avatar.png"
        alt="user-icon"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
