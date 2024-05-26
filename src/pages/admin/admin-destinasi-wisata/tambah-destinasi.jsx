import React from "react";
import ButtonAdmin from "../../../components/micro/ButtonAdmin";
import InputAdmin from "../../../components/micro/InputAdmin";
import TextareaAdmin from "../../../components/micro/TextareaAdmin";
import Dnd from "../../../components/micro/Dnd";

export default function tambahDestinasi() {
  return (
    <>
      <div className="mt-20 px-20 ">
        <h3 className="text-2xl text-black mb-3">Tambah Destinasi Wisata</h3>
        <Dnd />
        <div className="flex flex-col gap-2">
          <InputAdmin name="input" type="text" placeholder="masjid raya" />
          <InputAdmin name="input" type="text" placeholder="Nama Wisata" />
          <InputAdmin name="input" type="text" placeholder="Lokasi" />
          <InputAdmin name="input" type="text" placeholder="Kategori" />
          <InputAdmin name="input" type="text" placeholder="Tiket" />
          <TextareaAdmin id={1} name="textarea" placeholder="Deskripsi" />
          <InputAdmin name="input" type="text" placeholder="Maps" />
          <InputAdmin name="input" type="text" placeholder="Fasilitas" />
          <InputAdmin name="input" type="text" placeholder="Jam Operasional" />
          <InputAdmin name="input" type="text" placeholder="Detail Biaya" />
          <TextareaAdmin id={2} name="textarea" placeholder="Tips Berkunjung" />
        </div>
        <ButtonAdmin value="Simpan" type="submit" name="button-simpan" />
      </div>
    </>
  );
}
