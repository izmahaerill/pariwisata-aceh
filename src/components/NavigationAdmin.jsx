import React from "react";
import { useLocation } from "react-router-dom";
import navAdmin from "../data-json/navigationForAdmin";
export default function NavigationAdmin({ children }) {
  let { pathname } = useLocation();

  return (
    <>
      <header className="bg-white shadow-md py-3 px-20 fixed w-full z-50">
        <nav className="flex justify-between h-10 ">
          <img
            src={"/images/home-logo.png"}
            width={50}
            height={50}
            alt="Home Logo"
          ></img>
          <div className="flex justify-center items-center gap-7">
            {navAdmin.map((item, index) => (
              <a
                key={index}
                href={item.route}
                className={`text-black hover:text-yellow-primary ${
                  pathname === item.route && "text-yellow-primary"
                } duration-150 ease-in-out`}
              >
                {item.desc}
              </a>
            ))}
            <div>
              <button
                // onClick={handleToLogin}
                className="outline outline-1 outline-yellow-primary py-[2px] px-5 rounded-md hover:bg-yellow-primary hover:text-white duration-150 ease-in-out"
              >
                Login
              </button>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
