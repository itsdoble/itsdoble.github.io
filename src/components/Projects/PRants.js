import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PRantsItems from "./PRantsItems";
import NoData from "./NoData";
import AuthContext from "../../auth-context";

const PRants = (props) => {
  const ctx = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  setTimeout(() => {
    setLoading(false);
  }, 1500);
  if (loading) {
    return (
      <div className="w-full h-[calc(100vh_-_3rem)] flex justify-center items-center">
        <img
          src={process.env.PUBLIC_URL + "/media/loading.gif"}
          alt="loading"
        />
      </div>
    );
  } else {
    return (
      <div className="w-full max-w-3xl m-auto min-h-[calc(100vh_-_3rem)] flex flex-col justify-start items-center pt-12 pb-4">
        <h3 className="relative col-span-2 border-b w-4/5 text-xl md:text-3xl">
          {props.cat}
          <button
            className="absolute top-[-10px] right-0 text-base font-semibold text-black p-1 pl-3 pr-3  bg-gray-100 rounded-lg"
            onClick={goBack}
          >
            ← Back
          </button>
          <button
            className="absolute top-[-10px] right-20 text-base font-normal text-gray-100 p-1 pl-3 pr-3 bg-green-500 rounded-lg"
            onClick={ctx.refresh}
          >
            Refresh
          </button>
        </h3>
        {props.data.length === 0 ? (
          <NoData />
        ) : (
          props.data.map((entry) => {
            return <PRantsItems data={entry} key={entry.id} />;
          })
        )}
      </div>
    );
  }
};

export default PRants;
