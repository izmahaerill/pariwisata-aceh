import React from "react";
import seputarAceh from "../../data-json/seputar-aceh";

export default function HomeCard() {
  return (
    <>
      <div className="flex justify-center items-center gap-10">
        {seputarAceh.map((item) => (
          <div
            key={item.id}
            className="px-5 py-5 border-2 border-yellow-primary rounded-2xl flex flex-col gap-6 w-[400px] h-[500px] cursor-pointer"
          >
            <img
              className="rounded-2xl w-full h-full bg-contain"
              src={item.url}
              width={500}
              height={500}
              layout="fixed"
              alt="seputar aceh"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold">{item.tittle}</h3>
              <h4 className="text-sm">{item.desc}</h4>
            </div>
            <p className="text-xs">{item.timePost}</p>
          </div>
        ))}
      </div>
    </>
  );
}
