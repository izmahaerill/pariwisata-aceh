import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function HomeCard() {
  const navigate = useNavigate();

  const [touristDestinations, setTouristDestinations] = useState([]);

  const handleCardClick = (id) => {
    navigate(`/destinasi-wisata/${id}`);
  };
  const getTouristDestinationsFromApi = async () => {
    try {
      const { data } = await axios.get(
        `https://be-pariwisata-aceh.vercel.app/tourist-destination/all`
      );
      setTouristDestinations(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTouristDestinationsFromApi();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center gap-10">
        {touristDestinations
          .filter((_, index) => index <= 2)
          .map((item) => (
            <div
              key={item.id}
              className="px-5 py-5 border-2 border-yellow-primary rounded-2xl flex flex-col gap-6 w-[23rem] h-[30rem] cursor-pointer"
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
              <div className="flex flex-col gap-2 ">
                <div className="overflow-hidden">
                  <h3 className="text-xl font-semibold h-14 overflow-hidden">
                    {item.title}
                  </h3>
                </div>
                <div className="overflow-hidden h-14">
                  <h4 className="text-sm">{item.desc}</h4>
                </div>
              </div>
              <p className="text-xs">{item.locate}</p>
            </div>
          ))}
      </div>
    </>
  );
}
