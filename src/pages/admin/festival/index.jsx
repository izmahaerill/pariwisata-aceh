import React from "react";
import Delete from "../../../assets/icons/delete";
import Edit from "../../../assets/icons/edit";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavigationAdmin from "../../../components/NavigationAdmin";
import useSnackbar from "../../../hooks/useSnackbar";
import axios from "axios";
import { formatDateFromIsoString } from "../../../utils/date.utils";
import Cookies from "js-cookie";

export default function AdminFestival() {
  const [festival, setFestival] = useState([]);
  const { Snackbar, showSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleButtonAddClick = () => {
    navigate(`/admin/festival/tambah-festival`);
  };

  const handleButtonEditClick = (id) => {
    navigate(`/admin/festival/edit-festival/${id}`);
  };

  const handleButtonDeleteClick = async (id, title) => {
    const isContinue = window.confirm(
      "Anda yakin ingin menghapus data festival dengan title : " + title + " ?"
    );

    if (!isContinue) return;
    showSnackbar(true, "menghapus data..");
    try {
      const { data } = await axios.delete(
        `https://be-pariwisata-aceh.vercel.app/festival/${id}`
      );
      showSnackbar(true, data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
      }, 1300);
      const updateFestival = festival.filter(
        (item) => item.id !== data.data.id
      );
      setFestival(updateFestival);
    } catch (error) {
      showSnackbar(true, error.response.data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    }
  };

  const getFestivalFromApi = async () => {
    showSnackbar(true, "get data...");
    try {
      const { data } = await axios.get(
        `https://be-pariwisata-aceh.vercel.app/festival/all`
      );
      showSnackbar(false, null);
      setFestival(data.data);
    } catch (error) {
      showSnackbar(true, error.response.data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    }
  };

  useEffect(() => {
    getFestivalFromApi();
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
            <p>Nama Festival</p>
            <p>Deskripsi</p>
            <p>Lokasi</p>
            <p>Tanggal Mulai</p>
            <p>Tanggal Berakhir</p>
            <p>Aksi</p>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            {festival.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center rounded-lg outline outline-yellow-primary outline-2 px-5 py-5"
              >
                <p>{item.title}</p>
                <p>{item.desc}</p>
                <p>{item.locate}</p>
                <p>{formatDateFromIsoString(item.startDate)}</p>
                <p>{formatDateFromIsoString(item.endDate)}</p>
                <div className="flex gap-2">
                  <button onClick={() => handleButtonEditClick(item.id)}>
                    <Edit />
                  </button>
                  <button
                    onClick={() => handleButtonDeleteClick(item.id, item.title)}
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
