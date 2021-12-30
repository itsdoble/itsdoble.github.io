import React from "react";

const WebTiles = (props) => {
  return (
    <div className="w-4/5">
      <div className="relative aspect-square outline">
        <a href={props.data.url} target="_blank">
          <img
            src={props.data.thumb}
            alt={props.data.title}
            className="w-full h-full object-cover"
          />
        </a>
        <p className="w-full text-center absolute translate-y-1 underline underline-offset-2">
          {props.data.title}
        </p>
      </div>
    </div>
  );
};

export default WebTiles;
