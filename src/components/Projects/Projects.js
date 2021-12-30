import React, { useState } from "react";
import ProjectTile from "./ProjectTile";
import { useLongPress } from "use-long-press";
import ProjectForm from "./ProjectForm";

const Projects = (props) => {
  const [add, setAdd] = useState("hidden");
  const bind = useLongPress(
    () => {
      setAdd("flex");
    },
    { threshold: 5000 }
  );
  return (
    <>
      <ProjectForm classs={add} setAdd={setAdd} data={props.data} />
      <div className="w-screen max-w-3xl m-auto h-[calc(100vh_-_3rem)] flex flex-col justify-center items-center">
        <h3 {...bind} className="text-2xl underline underline-offset-2 mb-4">
          Projects
        </h3>
        <ProjectTile
          thumb={process.env.PUBLIC_URL + "/media/react.png"}
          category="Web Apps"
          url="web"
        />
        <ProjectTile
          thumb={process.env.PUBLIC_URL + "/media/camera.png"}
          category="Photos"
          url="pics"
        />
        <ProjectTile
          thumb={process.env.PUBLIC_URL + "/media/poems.png"}
          category="Poems/Rants"
          url="lit"
        />
      </div>
    </>
  );
};

export default Projects;
