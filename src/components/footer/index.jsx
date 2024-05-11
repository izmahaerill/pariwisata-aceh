import React from "react";

export default function page() {
  const currentYears = new Date().getFullYear();

  return (
    <footer>
      <div className="flex justify-center items-center gap-10 bg-[#F2F2F2] h-56 mt-24">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-24 h-24 object-contain"
            src={"/images/home-logo.png"}
            width={100}
            height={100}
            alt="logo footer wisata aceh"
          />
          <p className="text-yellow-primary font-bold font text-xl -mt-2.5">
            Wisata Aceh
          </p>
        </div>
        <p className="w-[25rem] text-sm">
          Wisata Aceh merupakan platform daring yang didedikasikan untuk
          mempromosikan pariwisata Provinsi Aceh secara menyeluruh. Melalui
          website ini, pengunjung dapat menjelajahi berbagai destinasi wisata
          yang menarik di Aceh,
        </p>
      </div>
      <p className="flex justify-center items-center -mt-10 text-sm text-black">
        &copy; Copyright {currentYears}
      </p>
    </footer>
  );
}
