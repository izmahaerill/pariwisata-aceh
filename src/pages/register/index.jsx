import React from "react";
import { Link } from "react-router-dom";
import LOGO from "/images/Logo.png";
import GOOGLE_ICON from "/images/Icon_Google.svg"; 
import FACEBOOK_ICON from "/images/Icon_FB.svg"; 
import APPLE_ICON from "/images/Icon_Apple.svg"; 

export default function Register() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full flex flex-col items-center justify-center bg-yellow-primary">
        <h1 className="text-2xl text-[#ffffff] font-semibold my-6">DAFTAR</h1>

        <div className="w-full flex items-center justify-center my-4">
          <input
            type="email"
            placeholder="Masukkan email atau username"
            className="w-3/4 text-yellow-primary my-2 bg-[#ffffff] rounded-full p-2"
          />
        </div>

        <div className="w-full flex items-center justify-center my-2">
          <input
            type="password"
            placeholder="Masukkan kata sandi"
            className="w-3/4 text-yellow-primary my-2 bg-[#ffffff] rounded-full p-2"
          />
        </div>

        <div className="w-full flex items-center justify-center my-2">
          <input
            type="password"
            placeholder="Masukkan ulang kata sandi"
            className="w-3/4 text-yellow-primary my-2 bg-[#ffffff] rounded-full p-2"
          />
        </div>

        <div className="w-full flex justify-center my-4">
          <button className="w-1/4 text-yellow-primary my-2 bg-[#ffffff] rounded-full p-2 text-center">
            Daftar
          </button>
        </div>

        <div className="w-full flex items-center justify-center my-2">
          <p className="text-sm font-normal text-[#000000]">
            Sudah Punya Akun?{" "}
            <Link to="/login" className="font-semibold underline underline-offset-2 cursor-pointer text-[#ffffff]">
              Masuk
            </Link>
          </p>
        </div>

        <div className="w-full flex items-center justify-center relative py-2">
          <div className="w-3/4 h-[1px] bg-black"></div>
          <p className="text-md absolute font-normal text-[#00000022] bg-yellow-primary px-2">
            Daftar Dengan
          </p>
        </div>
        <div className="w-full flex items-center justify-center my-4">
          <img src={GOOGLE_ICON} alt="Google_Icon" className="h-8 mr-6" />
          <img src={FACEBOOK_ICON} alt="Facebook_Icon" className="h-8 mr-6" />
          <img src={APPLE_ICON} alt="Apple_Icon" className="h-8 mr-6" />
        </div>
      </div>

      <div className="w-1/2 h-full flex flex-col items-center justify-center bg-white">
        <img src={LOGO} alt="Logo" className="mx-2 my-4" />
      </div>
    </div>
  );
}
