import React from "react";
import unggulan from "../../data-json/destinasi-unggulan";
import HeadingSection from "../micro/HeadingSection";
import Arrowright from "../../assets/icons/arrowright";

export default function DestinasiUnggulan() {
  return (
    <>
      <div className="px-20">
        <div className="flex justify-between items-start">
          <HeadingSection>Destinasi Unggulan</HeadingSection>
          <button className="bg-yellow-primary text-white flex justify-center items-center py-1.5 px-4 text-xs gap-1 rounded-xl">
            Lihat Semua <Arrowright />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {unggulan.map((item) => (
            <div key={item.id} className="relative -z-10">
              <img
                className="bg-cover object-contain rounded-2xl"
                src={item.url}
                width={500}
                height={500}
                alt="destinasi unggulan aceh"
              />
              <p className="absolute inset-10 flex justify-center items-end text-center text-white text-2xl">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
