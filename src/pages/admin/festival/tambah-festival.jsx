import React from "react";
import TextareaAdmin from "../../../components/micro/TextareaAdmin";
import NavigationAdmin from "../../../components/NavigationAdmin";
import InputAdmin from "../../../components/micro/InputAdmin";
import HeadingAdmin from "../../../components/micro/HeadingAdmin";

export default function TambahFestival() {
  return (
    <>
      <NavigationAdmin>
        <form className="pt-28 px-20 ">
          <HeadingAdmin text="Tambah Festival" />
          <div className="flex flex-col gap-2">
            <InputAdmin name="title" type="text" placeholder="Judul" />
            <InputAdmin name="locate" type="text" placeholder="Lokasi" />
            <InputAdmin
              name="startDate"
              type="datetime-local"
              placeholder="Tanggal festival"
            />
            <InputAdmin
              name="endDate"
              type="datetime-local"
              placeholder="Tanggal Upload"
            />
            <TextareaAdmin id={1} name="date" placeholder="Deskripsi" />
          </div>
          <div className="flex justify-center items-center my-10">
            <button
              className="bg-yellow-primary text-white py-2 px-4 rounded-lg"
              name="button"
              type="submit"
            >
              Simpan
            </button>
          </div>
        </form>
      </NavigationAdmin>
    </>
  );
}
