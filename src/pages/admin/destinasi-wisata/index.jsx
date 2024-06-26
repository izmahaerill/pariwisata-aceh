import React, { useEffect, useState } from "react";
import Delete from "../../../assets/icons/delete";
import Edit from "../../../assets/icons/edit";
import { useNavigate } from "react-router-dom";
import NavigationAdmin from "../../../components/NavigationAdmin";
import axios from "axios";
import useSnackbar from "../../../hooks/useSnackbar";
import Cookies from "js-cookie";

export default function AdminDestinasi() {
  const [touristDestinations, setTouristDestinations] = useState([]);
  const { Snackbar, showSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleButtonAddClick = () => {
    navigate(`/admin/destinasi-wisata/tambah-destinasi`);
  };

  const handleButtonEditClick = (id) => {
    navigate(`/admin/destinasi-wisata/edit-destinasi/${id}`);
  };

  const handleButtonDeleteClick = async (id, title) => {
    const isContinue = window.confirm(
      "Anda yakin ingin menghapus data dengan nama wisata : " + title + " ?"
    );

    if (!isContinue) return;
    showSnackbar(true, "menghapus data..");
    try {
      const { data } = await axios.delete(
        `https://be-pariwisata-aceh.vercel.app/tourist-destination/${id}`
      );
      showSnackbar(true, data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
      }, 1300);
      const updateTouristDestinations = touristDestinations.filter(
        (item) => item.id !== data.data.id
      );
      setTouristDestinations(updateTouristDestinations);
    } catch (error) {
      showSnackbar(true, error.response.data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    }
  };

  const getTouristDestinationsFromApi = async () => {
    showSnackbar(true, "get data...");
    try {
      const { data } = await axios.get(
        `https://be-pariwisata-aceh.vercel.app/tourist-destination/all`
      );
      showSnackbar(false, null);
      setTouristDestinations(data.data);
    } catch (error) {
      showSnackbar(true, error.response.data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    }
  };

  useEffect(() => {
    getTouristDestinationsFromApi();
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
            <p>Nama Wisata</p>
            <p>Lokasi</p>
            <p>Kategori</p>
            <p>Tiket</p>
            <p>Aksi</p>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            {touristDestinations.map((item) => (
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
                <p>{item.title}</p>
                <p>{item.locate}</p>
                <p>{item.typeLocation}</p>
                <p>{item.typeSellTicket}</p>
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
