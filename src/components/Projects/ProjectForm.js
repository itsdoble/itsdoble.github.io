import React, { useRef } from "react";
import { supabase } from "../../supabase";

const ProjectForm = (props) => {
  const type = useRef();
  const title = useRef();
  const turl = useRef();
  const aurl = useRef();
  const body = useRef();
  const cancel = () => {
    props.setAdd("hidden");
  };
  const addProjectData = (e) => {
    e.preventDefault();
    let id;

    const date = new Date();

    switch (type.current.value) {
      case "web":
        id = props.data[0].length + 1 + "WEB";
        break;
      case "photo":
        id = props.data[1].length + 1 + "PHOTO";
        break;
      case "prant":
        id = props.data[2].length + 1 + "PRANT";
        break;
    }

    const projectData = {
      id: id,
      type: type.current.value,
      title: title.current.value,
      thumb: turl.current.value,
      url: aurl.current.value,
      body: body.current.value,
      time: date.toDateString(),
    };

    addData(projectData);
  };
  const addData = async (dataa) => {
    try {
      const { data, error } = await supabase.from("projects").upsert(dataa);
    } catch (e) {
      console.log(e);
    } finally {
      window.location.reload();
    }
  };
  return (
    <div
      className={
        props.classs +
        " w-screen max-w-3xl m-auto min-h-[calc(100vh_-_6rem)] justify-center items-center pt-12"
      }
    >
      <form
        className="w-full max-w-[90vw] m-auto flex flex-col gap-4 p-8 bg-blue-900 rounded-lg "
        onSubmit={addProjectData}
      >
        <h4 className="text-2xl text-center border-b pb-2">Add a Project</h4>
        <label htmlFor="">Type</label>
        <select name="" className="h-8 text-black" ref={type}>
          <option value="web">Web</option>
          <option value="photo">Photo</option>
          <option value="prant">PRant</option>
        </select>
        <label htmlFor="">Title</label>
        <input type="text" className="h-8 indent-1 text-black " ref={title} />
        <label htmlFor="">Thumbnail Url</label>
        <input type="text" className="h-8 indent-1 text-black " ref={turl} />
        <label htmlFor="">Actual Url</label>
        <input type="text" className="h-8 indent-1 text-black " ref={aurl} />
        <label htmlFor="">Body</label>
        <textarea type="textarea" className="indent-1 text-black " ref={body} />
        <button className="bg-blue-500 h-8">Add</button>
        <button type="button" onClick={cancel} className="bg-red-500 h-8">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
