import React from "react";

const PListItem = (props) => {
  return (
    <div className="w-4/5 min-h-32 p-2 pl-8 bg-gray-200 text-black rounded-lg mt-4 text-left">
      <h4 className="font-semibold text-lg">{props.data.title}</h4>
      <p>{props.data.body}</p>
      <p className="text-sm text-gray-400 italic text-right">
        {props.data.time}
      </p>
    </div>
  );
};

export default PListItem;
