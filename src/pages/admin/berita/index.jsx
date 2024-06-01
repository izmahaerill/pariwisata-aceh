import React, { useEffect, useState } from "react";
import Delete from "../../../assets/icons/delete";
import Edit from "../../../assets/icons/edit";
import { useNavigate } from "react-router-dom";
import NavigationAdmin from "../../../components/NavigationAdmin";
import useSnackbar from "../../../hooks/useSnackbar";
import axios from "axios";
import { formatDateFromIsoString } from "../../../utils/date.utils";
import Cookies from "js-cookie";

export default function AdminBerita() {
  const [news, setNews] = useState([]);
  const { Snackbar, showSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleButtonAddClick = () => {
    navigate(`/admin/berita/tambah-berita`);
  };

  const handleButtonEditClick = (id) => {
    navigate(`/admin/berita/edit-berita/${id}`);
  };

  const handleButtonDeleteClick = async (id, tagLine) => {
    const isContinue = window.confirm(
      "Anda yakin ingin menghapus data dengan tagline : " + tagLine + " ?"
    );

    if (!isContinue) return;
    showSnackbar(true, "menghapus data..");
    try {
      const { data } = await axios.delete(
        `https://be-pariwisata-aceh.vercel.app/news/${id}`
      );
      showSnackbar(true, data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
      }, 1300);
      const updateNews = news.filter((item) => item.id !== data.data.id);
      setNews(updateNews);
    } catch (error) {
      showSnackbar(true, error.response.data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    }
  };

  const getNewsFromApi = async () => {
    showSnackbar(true, "mendapatkan data...");
    try {
      const { data } = await axios.get(
        `https://be-pariwisata-aceh.vercel.app/news/all`
      );
      showSnackbar(false, null);
      setNews(data.data);
    } catch (error) {
      showSnackbar(true, error.response.data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    }
  };

  useEffect(() => {
    getNewsFromApi();
  }, []);

  useEffect(() => {
    const accessToken = Cookies.get("admin-access-token");
    if (!accessToken) navigate("/admin/login");
  }, []);

  return (
    <>
      <Snackbar />
      <NavigationAdmin>
        <div className="px-20 pt-28">
          <div className="flex justify-between px-16 bg-yellow-primary py-3 text-white rounded-lg">
            <p>Foto</p>
            <p>Tag Line</p>
            <p>Tanggal Rilis</p>
            <p>Deskripsi</p>
            <p>Aksi</p>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            {news.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center rounded-lg outline outline-yellow-primary outline-2 px-5 py-5"
              >
                <img
                  src={item.url}
                  className="rounded-lg"
                  width={150}
                  height={150}
                  alt="Destinasi Wisata Aceh"
                />
                <p>{item.tagLine}</p>
                <p>{formatDateFromIsoString(item.dateRelease)}</p>
                <p>{item.desc}</p>
                <div className="flex gap-2">
                  <button onClick={() => handleButtonEditClick(item.id)}>
                    <Edit />
                  </button>
                  <button
                    onClick={() =>
                      handleButtonDeleteClick(item.id, item.tagLine)
                    }
                  >
                    <Delete />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center my-10">
            <button
              className="bg-yellow-primary text-white py-2 px-4 rounded-lg"
              name="button"
              type="button"
              onClick={handleButtonAddClick}
            >
              Tambah
            </button>
          </div>
        </div>
      </NavigationAdmin>
    </>
  );
}
