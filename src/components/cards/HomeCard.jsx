import React from "react";
import seputarAceh from "../../data-json/seputar-aceh";
import { useNavigate } from "react-router-dom";

export default function HomeCard() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/berita/${id}`);
  };

  return (
    <>
      <div className="flex justify-center items-center gap-10">
        {seputarAceh.map((item) => (
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
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">{item.tittle}</h3>
              <h4 className="text-sm">{item.desc}</h4>
            </div>
            <p className="text-xs">{item.timePost}</p>
          </div>
        ))}
      </div>
    </>
  );
}
