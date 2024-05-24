import React, { useState } from "react";
import Footer from "./footer";
import nav from "./../data-json/navigation";
import { useLocation } from "react-router-dom";
export default function Navigation({ children }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

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
            {nav.map((item, index) => (
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

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-black focus:outline-none"
              >
                Bahasa
              </button>
              {isDropdownVisible && (
                <div className="absolute  left-0 mt-2 py-1 px-2 bg-white rounded-md shadow-base flex flex-col outline outline-1 outline-yellow-primary">
                  <a
                    href="#"
                    className="block hover:text-yellow-primary border-b border-yellow-primary duration-150 ease-in-out "
                    onClick={toggleDropdown}
                  >
                    Indonesia
                  </a>
                  <a
                    href="#"
                    className="block hover:text-yellow-primary duration-150 ease-in-out"
                    onClick={toggleDropdown}
                  >
                    English
                  </a>
                </div>
              )}
            </div>
            <a href="/login">
              <button className="outline outline-1 outline-yellow-primary py-[2px] px-5 rounded-md hover:bg-yellow-primary hover:text-white duration-150 ease-in-out">
                Login
              </button>
            </a>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
