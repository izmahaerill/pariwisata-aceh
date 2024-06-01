import { React, useState } from "react";
import Location from "../../assets/icons/location";
import Dates from "../../assets/icons/dates";
import { formatDateFromIsoString } from "../../utils/date.utils";

export default function Festival({ dataFestival, index, setIndex, month }) {
  return (
    <>
      <div className="px-10">
        {dataFestival.map((item) => (
          <div
            key={item.id}
            className="px-3 py-3 shadow-base rounded-2xl flex flex-col gap-6 w-auto h-auto cursor-pointer mb-7"
          >
            <div className="flex flex-col gap-3 px-4">
              <h3 className="text-2xl text-yellow-primary font-medium ">
                {item.title}
              </h3>
              <article>{item.desc}</article>
              <div className="flex gap-2">
                <div className="flex flex-col items-center gap-2">
                  <Location width="1.7rem" height="1.7rem" fill="black" />
                  <Dates />
                </div>
                <div className="flex flex-col justify-center gap-2 mb-3">
                  <h4 className="text-lg">{item.locate}</h4>
                  <p className="text-lg">
                    {formatDateFromIsoString(item.startDate)} -{" "}
                    {formatDateFromIsoString(item.endDate)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
