import React from "react";
import Delete from "../../../assets/icons/delete";
import Edit from "../../../assets/icons/edit";
import { useNavigate } from "react-router-dom";
import NavigationAdmin from "../../../components/NavigationAdmin";

export default function AdminBerita() {
  const navigate = useNavigate();

  const handleButtonAddClick = () => {
    navigate(`/admin/berita/tambah-berita`);
  };

  const handleButtonEditClick = () => {
    navigate("/admin/berita/edit-berita");
  };

  return (
    <>
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
            <div className="flex justify-between items-center rounded-lg outline outline-yellow-primary outline-2 px-5 py-5">
              <img
                src="/images/masjid-raya.png"
                className="rounded-lg"
                width={150}
                height={150}
                alt="Destinasi Wisata Aceh"
              />
              <p>Masjid Raya</p>
              <p>Kota Banda Aceh</p>
              <p>Kota Banda Aceh</p>
              <p>Masjid</p>
              <p>Gratis</p>
              <div className="flex gap-2">
                <button onClick={handleButtonEditClick}>
                  <Edit />
                </button>
                <button>
                  <Delete />
                </button>
              </div>
            </div>
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
