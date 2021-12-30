import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Menu from "./Menu";

const Header = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState("hidden");
  const goHome = () => {
    navigate("/");
  };
  const showMenu = () => {
    if (visible === "hidden") {
      setVisible("flex");
    } else {
      setVisible("hidden");
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full h-12 pl-2 pr-2 bg-blue-900 flex justify-between items-center z-50">
      <h1 onClick={goHome} className="text-3xl text-gray-100">
        Doble
      </h1>
      <div
        className={"group w-8 h-8 flex flex-col justify-center gap-2 md:hidden"}
        onClick={showMenu}
      >
        <div className="group-active:bg-blue-500 bg-gray-100 w-full h-1"></div>
        <div className="group-active:bg-blue-500 bg-gray-100 w-full h-1"></div>
        <div className="group-active:bg-blue-500 bg-gray-100 w-full h-1"></div>
      </div>
      <Menu visible={visible} showMenu={showMenu} />
    </div>
  );
};

export default Header;
