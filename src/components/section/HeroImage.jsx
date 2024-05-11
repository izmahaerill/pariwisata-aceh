import React from "react";
import ArrowBase from "../../assets/icons/arrow-base";

export default function HeroImage() {
  return (
    <>
      <div className="mt-16 -z-10">
        <img
          className="w-full h-screen"
          src="/images/bg-heroimage.png"
          alt="festival aceh"
          width={500}
          height={500}
        />
        <div className="inset-24 absolute  text-white flex flex-col justify-center gap-10 w-52">
          <h1 className="text-5xl font-semibold w-[40rem] leading-tight">
            Beragam Destinasi Wisata Aceh yang Wajib Anda Kunjungi
          </h1>
          <button className="bg-yellow-primary text-base py-1 px-5 rounded-lg flex justify-center items-center gap-2">
            Jelajahi Aceh <ArrowBase />
          </button>
        </div>
      </div>
    </>
  );
}
