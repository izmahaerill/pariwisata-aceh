import React from "react";
import seputarAceh from "../../data-json/seputar-aceh";
import Dates from "../../assets/icons/dates";
import ArrowwhiterightRegular from "../../assets/icons/arrowwhiteright-regular";
import Navigation from "../../components/Navigation";
import { useNavigate } from "react-router-dom";

export default function index() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/berita/${id}`);
  };

  return (
    <>
      <Navigation>
        <div className="px-20">
          <h1 className="flex justify-center text-3xl font-medium text-yellow-primary pt-24 pb-10">
            Berita Seputar Aceh
          </h1>
          {seputarAceh.map((item) => (
            <div
              key={item.id}
              className="px-5 py-5 shadow-base rounded-2xl flex gap-6 w-full h-full cursor-pointer mb-10"
            >
              <img
                src={item.url}
                width={300}
                height={300}
                className="rounded-2xl"
                alt="wisata"
              />
              <div className="flex flex-col justify-around">
                <p className="text-2xl text-yellow-primary font-medium w-[40rem] mb-5 ">
                  {item.tittle}
                </p>
                <p className="">{item.desc[0]}...</p>
                <div className="flex justify-between items-center mt-14 ">
                  <div className="flex items-center gap-2 text-sm">
                    <Dates />
                    <p>{item.timePost}</p>
                  </div>
                  <p
                    className="flex text-sm"
                    onClick={() => handleCardClick(item.id)}
                  >
                    Read More <ArrowwhiterightRegular />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Navigation>
    </>
  );
}
