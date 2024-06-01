import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Navigation";
import axios from "axios";
import useSnackbar from "../../hooks/useSnackbar";
import { formatDateFromIsoString } from "../../utils/date.utils";

export default function DetailBerita() {
  const { id } = useParams();
  const { Snackbar, showSnackbar } = useSnackbar();
  const [news, setNews] = useState(null);

  const getNewsFromApi = async () => {
    showSnackbar(true, "get data...");
    try {
      const { data } = await axios.get(
        `https://be-pariwisata-aceh.vercel.app/news/${id}`
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

  if (!id) {
    return <div>Item not found</div>;
  }

  return (
    <>
      <Snackbar />
      <Navigation>
        <div className="px-20 pt-28 ">
          <div className="outline outline-2 outline-yellow-primary h-auto rounded-2xl overflow-hidden">
            <div className="flex justify-center items-center bg-yellow-primary px-10 text-2xl p-3">
              <h1 className="text-white font-semibold">Berita Seputar Aceh</h1>
            </div>
            {news && (
              <div className="px-10 mt-10 mb-20 ">
                <div className="w-full h-[60vh] mb-10 object-fill">
                  <img
                    src={news.url}
                    className="w-full h-full object-cover object-center rounded-2xl"
                    alt="wisata"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <article className="flex flex-col gap-5 px-10 text-justify">
                  <h2 className="text-2xl font-medium">{news.tagLine}</h2>
                  <p className="text-sm">
                    {formatDateFromIsoString(news.dateRelease)}
                  </p>
                  <div className="flex flex-col gap-4">
                    <p>{news.desc}</p>
                  </div>
                </article>
              </div>
            )}
          </div>
        </div>
      </Navigation>
    </>
  );
}
