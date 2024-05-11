import React from "react";
import Festival from "../../assets/icons/festival";
import Mountain from "../../assets/icons/mountain";
import News from "../../assets/icons/news";

export default function SecondNavigation() {
  return (
    <>
      <div className="px-20 flex">
        <div className="flex justify-start items-center gap-5">
          <div className="bg-white h-20 w-20 rounded-full flex justify-center items-center shadow-base">
            <Mountain />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-yellow-primary text-lg font-semibold">
              Destinasi wisata Aceh
            </p>
            <p className="text-gray-400 w-72 text-sm">
              Beragam destinasi wisata Aceh yang wajib dikunjungi untuk berlibur
              anda.
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-5">
          <div className="bg-white h-20 w-20 rounded-full flex justify-center items-center shadow-base">
            <Festival />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-yellow-primary text-lg font-semibold">
              Festival Aceh
            </p>
            <p className="text-gray-400 w-72 text-sm">
              Beragam Festival di Aceh yang menarik di setiap tahunnya.
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-5">
          <div className="bg-white h-20 w-20 rounded-full flex justify-center items-center shadow-base">
            <News />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-yellow-primary text-lg font-semibold">
              Seputar Aceh
            </p>
            <p className="text-gray-400 w-72 text-sm">
              Dapatkan berita lengkap mengenai wisata tentang Aceh.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
