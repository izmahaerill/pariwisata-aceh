import React from "react";
import Edit from "../../../assets/icons/edit";
import Delete from "../../../assets/icons/delete";

export default function AdminDestinasi() {
  return (
    <>
      <div className="px-20 mt-20">
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
              <Edit />
              <Delete />
            </div>
          </div>
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
              <Edit />
              <Delete />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center my-10">
          <button
            className="bg-yellow-primary text-white py-2 px-4 rounded-lg"
            name="button"
            type="button"
            // onClick={onClick}
          >
            Tambah
          </button>
        </div>
      </div>
    </>
  );
}
