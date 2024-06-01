import React, { useEffect, useState } from "react";
import seputarAceh from "../../data-json/seputar-aceh";
import Dates from "../../assets/icons/dates";
import ArrowwhiterightRegular from "../../assets/icons/arrowwhiteright-regular";
import Navigation from "../../components/Navigation";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useSnackbar from "../../hooks/useSnackbar";
import { formatDateFromIsoString } from "../../utils/date.utils";

export default function Index() {
  const [news, setNews] = useState([]);
  const { Snackbar, showSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/berita/${id}`);
  };
  const getNewsFromApi = async () => {
    showSnackbar(true, "get data...");
    try {
      const { data } = await axios.get(
        `https://be-pariwisata-aceh.vercel.app/news/all`
      );
      showSnackbar(false, null);
      setNews(data.data);
    } catch (error) {
      console.log(error);
      showSnackbar(true, error.response.data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    }
  };

  useEffect(() => {
    getNewsFromApi();
  }, []);

  return (
    <>
      <Snackbar />
      <Navigation>
        <div className="px-20">
          <h1 className="flex justify-center text-3xl font-medium text-yellow-primary pt-24 pb-10">
            Berita Seputar Aceh
          </h1>
          {news.map((item) => (
            <div
              key={item.id}
              className="px-5 py-5 shadow-base rounded-2xl flex gap-6 w-full mb-10"
            >
              <img
                src={item.url}
                width={300}
                height={300}
                className="rounded-2xl "
                alt="wisata"
              />
              <div className="flex flex-col justify-around w-full">
                <p className="text-2xl text-yellow-primary font-medium w-[40rem] mb-5 ">
                  {item.title}
                </p>
                <p className="min-w-full">{item.desc}...</p>
                <div className="flex justify-between items-center mt-14 ">
                  <div className="flex items-center gap-2 text-sm">
                    <Dates />
                    <p>{formatDateFromIsoString(item.dateRelease)}</p>
                  </div>
                  <p
                    className="flex text-sm cursor-pointer"
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
