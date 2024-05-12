import React from "react";
import festival from "../../data-json/card-festival";

export default function Festival() {
  return (
    <>
      <div className="flex justify-center items-center gap-10 px-10">
        {festival.map((item) => (
          <div
            key={item.id}
            className="px-3 py-3 shadow-base rounded-2xl flex flex-col gap-6 w-auto h-auto cursor-pointer"
          >
            <img
              className="rounded-2xl w-full"
              src={item.url}
              width={500}
              height={500}
              layout="fixed"
              alt="festival aceh"
            />
            <div className="flex flex-col text-center -mt-2 mb-2">
              <h3 className="text-md ">{item.tittle}</h3>
              <h4 className="text-2xl font-medium">{item.location}</h4>
              <p className="text-md">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
