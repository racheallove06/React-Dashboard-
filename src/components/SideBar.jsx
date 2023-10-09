import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopify } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
export default function SideBar() {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();
  //special function
  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700  dark:hover:bg-[#20232A] m-2 hover:bg-light-gray ";
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-[#d9f2ff] dark:bg-[#33373E] dark:text-black dark:hover:text-black">
      {" "}
      {activeMenu && (
        <>
          {" "}
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center gap-3 mt-4 tracking-tight ml-3 text-xl font-extrabold dark:text-black text-slate-900 "
            >
              {" "}
              <SiShopify className="text-[#4f7097] dark:text-white" />{" "}
              <span className="text-[#4f7097] dark:text-white">VeggieDash</span>
            </Link>
            <TooltipComponent content="Menu" position="TopRight">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className="text-xl rounded-full p-3  dark:hover:bg-black mt-4 block md:hidden"
              >
                {" "}
                <MdOutlineCancel className="text-[#f76b8a]" />
              </button>
            </TooltipComponent>{" "}
          </div>
          <div className="mt-10">
            {" "}
            {links.map((item) => (
              <div key="item.title">
                <p className="text-[#4f7097] dark:text-[#fff] ">
                  {" "}
                  {item.title}{" "}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSidebar} //to close the sidebar when clicked
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <span className=" text-[#152744] dark:text-[#fff]">
                      {link.icon}
                    </span>
                    <span className=" text-[#152744]  capitalize dark:text-[#fff] ">
                      {link.name}
                    </span>{" "}
                  </NavLink>
                ))}
              </div>
            ))}
          </div>{" "}
        </>
      )}
    </div>
  );
}
