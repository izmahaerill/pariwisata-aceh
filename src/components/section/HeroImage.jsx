import React from "react";
import ArrowBase from "../../assets/icons/arrow-base";

export default function HeroImage() {
  return (
    <>
      <div className="mt-[65px] -z-10 bg-gradient-to-b from-black to-[#162b4c]">
        <img
          className="w-full h-[50vh] object-fill"
          src="/images/bg-heroimage.png"
          alt="festival aceh"
          width={500}
          height={500}
        />
        <div className="inset-24 absolute  text-white flex flex-col justify-center gap-5 w-52 h-auto mt-5">
          <h1 className="text-4xl font-semibold w-[40rem] leading-tight ">
            Beragam Destinasi Wisata Aceh yang Wajib Anda Kunjungi
          </h1>
          <div className="cursor-pointer">
            <a
              href="/destinasi-wisata"
              className="bg-yellow-primary text-base py-1 rounded-lg flex justify-center items-center gap-1 cursor-pointer"
            >
              Jelajahi Aceh <ArrowBase />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
