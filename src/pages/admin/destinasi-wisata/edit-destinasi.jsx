import React, { useEffect, useState } from "react";
import InputAdmin from "../../../components/micro/InputAdmin";
import TextareaAdmin from "../../../components/micro/TextareaAdmin";
import Dnd from "../../../components/micro/Dnd";
import NavigationAdmin from "../../../components/NavigationAdmin";
import HeadingAdmin from "../../../components/micro/HeadingAdmin";
import { useNavigate, useParams } from "react-router-dom";
import useSnackbar from "../../../hooks/useSnackbar";
import axios from "axios";

export default function EditDestinasi() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [dataBeforeUpdate, setDataBeforeUpdate] = useState(null);
  const navigate = useNavigate();
  const { showSnackbar, Snackbar } = useSnackbar();
  const id = useParams().id;

  const handleEditTouristDestination = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataJson = Object.fromEntries(formData.entries());
    if (!formDataJson.file.size) {
      formDataJson.file = null;
    }
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    showSnackbar(true, "Loading...");
    try {
      const { data } = await axios.put(
        `https://be-pariwisata-aceh.vercel.app/tourist-destination/${id}`,
        formDataJson,
        config
      );
      showSnackbar(true, data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
        navigate("/admin/destinasi-wisata");
      }, 1000);
    } catch (error) {
      console.log(error);
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

  const getTouristDestinationFromApi = async () => {
    showSnackbar(true, "get data...");
    try {
      const { data } = await axios.get(
        `https://be-pariwisata-aceh.vercel.app/tourist-destination/${id}`
      );
      showSnackbar(false, null);
      setDataBeforeUpdate(data.data);
      setSelectedImage(data.data.url);
    } catch (error) {
      showSnackbar(true, error.response.data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    }
  };

  useEffect(() => {
    getTouristDestinationFromApi();
  }, []);

  return (
    <>
      <Snackbar />
      <NavigationAdmin>
        <form onSubmit={handleEditTouristDestination} className="pt-28 px-20 ">
          <HeadingAdmin text="Tambah Destinasi Wisata" />
          <Dnd
            onHandleInputFileChange={onHandleInputFileChange}
            selectedImage={selectedImage}
          />
          <div className="flex flex-col gap-2">
            <InputAdmin
              name="title"
              type="text"
              placeholder="Nama Wisata"
              defaultValue={dataBeforeUpdate?.title}
            />
            <InputAdmin
              name="locate"
              type="text"
              placeholder=" Lokasi"
              defaultValue={dataBeforeUpdate?.locate}
            />
            <InputAdmin
              name="lat"
              type="text"
              placeholder="Lokasi Lat"
              defaultValue={dataBeforeUpdate?.location.lat}
            />
            <InputAdmin
              name="lng"
              type="text"
              placeholder="Lokasi Long"
              defaultValue={dataBeforeUpdate?.location.lng}
            />
            <TextareaAdmin
              id={1}
              name="desc"
              placeholder="Deskripsi"
              defaultValue={dataBeforeUpdate?.desc}
            />
            <InputAdmin
              name="typeLocation"
              type="text"
              placeholder="Kategori"
              defaultValue={dataBeforeUpdate?.typeLocation}
            />
            <InputAdmin
              name="typeSellTicket"
              type="text"
              placeholder="Tipe Penjualan tiket"
              defaultValue={dataBeforeUpdate?.typeSellTicket}
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
              Update
            </button>
          </div>
        </form>
      </NavigationAdmin>
    </>
  );
}
