import InputAdmin from "../../../components/micro/InputAdmin";
import TextareaAdmin from "../../../components/micro/TextareaAdmin";
import Dnd from "../../../components/micro/Dnd";
import NavigationAdmin from "../../../components/NavigationAdmin";
import HeadingAdmin from "../../../components/micro/HeadingAdmin";
import { useState } from "react";
import axios from "axios";
import useSnackbar from "../../../hooks/useSnackbar";

export default function TambahDestinasi() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { showSnackbar, Snackbar } = useSnackbar();
  const handleAddDestination = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataJson = Object.fromEntries(formData.entries());
    if (!formDataJson.file.size) {
      showSnackbar(true, "Anda Belum memilih gambar!");
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
      return;
    }
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    showSnackbar(true, "Loading...");
    try {
      const { data } = await axios.post(
        `https://be-pariwisata-aceh.vercel.app/tourist-destination/add`,
        formDataJson,
        config
      );
      showSnackbar(true, data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    } catch (error) {
      showSnackbar(true, error.response.data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    }
  };

  const onHandleInputFileChange = (event) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      showSnackbar(true, "kamu belum memilih gambar!");
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    }
  };

  return (
    <>
      <Snackbar />
      <NavigationAdmin>
        <form onSubmit={handleAddDestination} className="pt-28 px-20 ">
          <HeadingAdmin text="Tambah Destinasi Wisata" />
          <Dnd
            onHandleInputFileChange={onHandleInputFileChange}
            selectedImage={selectedImage}
          />
          <div className="flex flex-col gap-2">
            <InputAdmin name="title" type="text" placeholder="Nama Wisata" />
            <InputAdmin
              name="locate"
              type="text"
              placeholder="Deksripsi Lokasi"
            />
            <InputAdmin name="lat" type="number" placeholder="Lokasi Lat" />
            <InputAdmin name="lng" type="number" placeholder="Lokasi Long" />
            <TextareaAdmin id={1} name="desc" placeholder="Deskripsi" />
            <InputAdmin
              name="typeLocation"
              type="text"
              placeholder="Kategori"
            />
            <InputAdmin
              name="typeSellTicket"
              type="text"
              placeholder="Tipe Penjualan tiket"
            />
            {/* <InputAdmin name="input" type="text" placeholder="Fasilitas" />
            <InputAdmin
              name="input"
              type="text"
              placeholder="Jam Operasional"
            />
            <InputAdmin name="input" type="text" placeholder="Detail Biaya" />
            <TextareaAdmin
              id={2}
              name="textarea"
              placeholder="Tips Berkunjung"
            /> */}
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
