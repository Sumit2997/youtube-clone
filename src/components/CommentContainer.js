import React from "react";

const commentsData = [
  {
    name: "sumit",
    text: "hello",
    replies: [
      {
        name: "sumit",
        text: "hello",
      },
    ],
  },
  {
    name: "sumit",
    text: "hello",
    replies: [
      {
        name: "sumit",
        text: "hello",
        replies: [
          {
            name: "sumit",
            text: "hello",
            replies: [
              {
                name: "sumit",
                text: "hello",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "sumit",
    text: "hello",
    replies: [
      {
        name: "sumit",
        text: "hello",
        replies: [
          {
            name: "sumit",
            text: "hello",
            replies: [
              {
                name: "sumit",
                text: "hello",
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-200 rounded-lg my-2">
      <img
        className="w-12 h-12"
        src="https://sdfn.us/wp-content/uploads/2022/05/avatar.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments?.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
