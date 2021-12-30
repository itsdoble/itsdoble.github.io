import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectTile = (props) => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate(`/projects/${props.url}`);
  };
  return (
    <button
      className="w-4/5 h-1/6 bg-gray-600 flex justify-start items-center p-2 text-lg m-1"
      onClick={goTo}
    >
      <img src={props.thumb} className="w-1/5 max-w-[95px] h-auto ml-2 mr-4" />
      <h4>{props.category}</h4>
      <span className="ml-1">→</span>
    </button>
  );
};

export default ProjectTile;
