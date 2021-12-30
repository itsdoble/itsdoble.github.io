import React, { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Menu = (props) => {
  const { pathname } = useLocation();
  const split = pathname.split("/");
  return (
    <Fragment>
      <div
        className={
          "hidden md:flex absolute outline-2 outline-gray-500 right-1 top-0 w-full h-full justify-end items-center text-gray-300  pr-4 text-2xl gap-6"
        }
      >
        <NavLink to="/">
          <h3
            onClick={props.showMenu}
            className={
              "hover:text-white " +
              (split[1] === ""
                ? "text-white border-b-2 translate-y-[1px]"
                : null)
            }
          >
            Hello!
          </h3>
        </NavLink>
        <NavLink to="/projects">
          <h3
            onClick={props.showMenu}
            className={
              "hover:text-white " +
              (split[1] === "projects"
                ? "text-white border-b-2 translate-y-[1px]"
                : null)
            }
          >
            Projects
          </h3>
        </NavLink>
        <NavLink to="/contact">
          <h3
            onClick={props.showMenu}
            className={
              "hover:text-white " +
              (split[1] === "contact"
                ? "text-white border-b-2 translate-y-[1px]"
                : null)
            }
          >
            Contact
          </h3>
        </NavLink>
      </div>
      <div
        className={
          props.visible +
          " absolute outline-2 outline-gray-500 right-1 top-[52px] w-2/4 h-[60vh] bg-blue-900 justify-start items-center text-gray-300 flex-col pt-8 text-2xl gap-2 max-w-[280px] md:hidden"
        }
      >
        <NavLink to="/">
          <h3
            onClick={props.showMenu}
            className={
              "hover:text-white " + (split[1] === "" ? "text-white" : null)
            }
          >
            Hello!
          </h3>
        </NavLink>
        <NavLink to="/projects">
          <h3
            onClick={props.showMenu}
            className={
              "hover:text-white " +
              (split[1] === "projects" ? "text-white" : null)
            }
          >
            Projects
          </h3>
        </NavLink>
        <NavLink to="/contact">
          <h3
            onClick={props.showMenu}
            className={
              "hover:text-white " +
              (split[1] === "contact" ? "text-white" : null)
            }
          >
            Contact
          </h3>
        </NavLink>
        <p className="absolute bottom-0 w-full text-center text-[14px] text-gray-400">
          © Darrion Nongbet
        </p>
      </div>
    </Fragment>
  );
};

export default Menu;
