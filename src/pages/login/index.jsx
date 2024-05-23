import React from "react";
import { Link } from "react-router-dom";
import LOGO from "/images/Logo.png";
import GOOGLE_ICON from "/images/Icon_Google.svg";
import FACEBOOK_ICON from "/images/Icon_FB.svg";
import APPLE_ICON from "/images/Icon_Apple.svg";

export default function Register() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full flex flex-col items-center justify-center bg-white">
        <img src={LOGO} alt="Logo" className="mx-2 my-4" />
      </div>

      <div className="w-1/2 h-full flex flex-col items-center justify-center bg-yellow-primary">
        <h1 className="text-2xl text-[#ffffff] font-semibold my-6">MASUK</h1>

        <div className="w-full flex items-center justify-center my-4">
          <input
            type="email"
            placeholder="Masukkan email atau username"
            className="w-3/4 text-yellow-primary my-2 bg-[#ffffff] rounded-xl p-3 text-sm focus:outline-yellow-primary focus:ring-2 px-5"
          />
        </div>

        <div className="w-full flex items-center justify-center my-2">
          <input
            type="password"
            placeholder="Masukkan kata sandi"
            className="w-3/4 text-yellow-primary my-2 bg-[#ffffff] rounded-xl p-3 text-sm focus:outline-yellow-primary focus:ring-2 px-5"
          />
        </div>

        <div className="w-3/4 flex justify-end m-2">
          <p className="text-sm font-normal text-white whitespace-nowrap cursor-pointer underline underline-offset-2 text-right hover:text-gray-secondary">
            Lupa Kata Sandi?
          </p>
        </div>

        <div className="w-full flex justify-center my-4">
          <button className="w-1/4 text-yellow-primary my-2 bg-[#ffffff] rounded-xl p-2 text-center hover:bg-gray-secondary">
            Masuk
          </button>
        </div>

        <div className="w-full flex items-center justify-center my-2">
          <p className="text-sm font-normal text-[#000000]">
            Belum Punya Akun?{" "}
            <Link
              to="/register"
              className="font-semibold underline underline-offset-2 cursor-pointer text-white hover:text-gray-secondary"
            >
              Daftar
            </Link>
          </p>
        </div>

        <div className="w-full flex items-center justify-center relative py-2">
          <div className="w-3/4 h-[1px] bg-black"></div>
          <p className="text-md absolute font-normal text-white bg-yellow-primary px-2">
            Masuk Dengan
          </p>
        </div>

        <div className="w-full flex items-center justify-center my-4">
          <img
            src={GOOGLE_ICON}
            alt="Google_Icon"
            className="h-8 mr-6 cursor-pointer hover:"
          />
          <img
            src={FACEBOOK_ICON}
            alt="Facebook_Icon"
            className="h-8 mr-6 cursor-pointer"
          />
          <img
            src={APPLE_ICON}
            alt="Apple_Icon"
            className="h-8 mr-6 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
