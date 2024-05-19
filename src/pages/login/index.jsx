import React from "react";
import LOGO from '/images/Logo.png';

export default function Login() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full flex flex-col bg-white">
        <img src={LOGO} alt="Logo" className="mx-2 my-4 p-60"/>
      </div>

      <div className="w-1/2 h-full flex flex-col items-center justify-center bg-yellow-primary">
        <h1 className="text-2xl text-[#ffffff] font-semibold my-6">MASUK</h1>

        <div className="w-full flex items-center justify-center my-4">
          <input 
            type="email" 
            placeholder="Masukkan email atau username" 
            className="w-3/4 text-yellow-primary my-2 bg-[#ffffff] rounded-lg p-2"
          />
        </div>

        <div className="w-full flex items-center justify-center my-2">
          <input 
            type="password" 
            placeholder="Masukkan kata sandi" 
            className="w-3/4 text-yellow-primary my-2 bg-[#ffffff] rounded-lg p-2"
          />
        </div>
        
        <div className="w-3/4 flex justify-end m-2">
          <p className="text-sm font-normal text-gray-secondary whitespace-nowrap cursor-pointer underline underline-offset-2 text-right">
            Lupa Kata Sandi ?
          </p>
        </div>

        <div className="w-full flex justify-center my-4">
          <button className="w-1/4 text-yellow-primary my-2 bg-[#ffffff] rounded-lg p-2 text-center">
            Masuk
          </button>
        </div>

        <div className="w-full flex items-center justify-center my-2">
          <p className="text-sm font-normal text-[#000000]">
            Belum Punya Akun? <span className="font-semibold underline underline-offset-2 cursor-pointer text-[#ffffff]">Daftar</span>
          </p>
        </div>

        <div className="w-full flex items-center justify-center relative py-2">
          <div className="w-3/4 h-[1px] bg-black"></div>
          <p className="text-md absolute font-normal text-[#00000022] bg-yellow-primary px-2">Masuk Dengan</p>
        </div>
      </div>
    </div>
  );
}
