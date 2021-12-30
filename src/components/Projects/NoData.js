import React from "react";

const NoData = () => {
  return (
    <div className="w-4/5 h-32 p-2 bg-gray-200 text-black rounded-lg mt-4 text-left flex justify-center items-center col-span-2">
      <p>
        (<span className="line-through">No Data</span>){"  "}No Data Yet
      </p>
    </div>
  );
};

export default NoData;
