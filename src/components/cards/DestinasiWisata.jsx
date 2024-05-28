/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import Bookmark from "../../assets/icons/bookmark";
import Location from "../../assets/icons/location";
import Category from "../../assets/icons/category";
import Ticked from "../../assets/icons/ticked";
import ArrowwhiterightRegular from "../../assets/icons/arrowwhiteright-regular";

export default function DestinasiWisata({ destinations }) {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/destinasi-wisata/${id}`);
  };

  if (!destinations.length) {
    return <h1>Destinations belum tersedia</h1>;
  }

  return (
    <div className="grid grid-cols-3 gap-10">
      {destinations.map((item) => (
        <div
          key={item.id}
          className="px-5 py-5 border-2 border-yellow-primary rounded-2xl flex flex-col gap-6 w-full h-full cursor-pointer"
          onClick={() => handleCardClick(item.id)}
        >
          <img
            className="rounded-2xl w-auto h-auto bg-contain"
            src={item.url}
            width={500}
            height={500}
            layout="fixed"
            alt="seputar aceh"
          ></img>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between ">
              <h3 className="text-xl font-semibold">{item.tittle}</h3>
              <Bookmark />
            </div>
            <div className="flex justify-start items-center gap-2">
              <div className="flex flex-col gap-2">
                <Location width="1.4rem" height="1.4rem" fill="black" />
                <Category width="1.4rem" height="1.4rem" fill="black" />
                <Ticked />
              </div>
              <div className="flex flex-col text-start gap-2 text-md">
                <h6>{item.locate}</h6>
                <h6>{item.typeLocation}</h6>
                <h6>{item.typeSellTicket}</h6>
              </div>
            </div>
            <h6 className="text-sm flex justify-end items-center ">
              Selengkapnya <ArrowwhiterightRegular />
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
}
