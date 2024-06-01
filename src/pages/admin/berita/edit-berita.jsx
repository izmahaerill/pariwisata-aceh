import React, { useEffect, useState } from "react";
import InputAdmin from "../../../components/micro/InputAdmin";
import TextareaAdmin from "../../../components/micro/TextareaAdmin";
import Dnd from "../../../components/micro/Dnd";
import NavigationAdmin from "../../../components/NavigationAdmin";
import HeadingAdmin from "../../../components/micro/HeadingAdmin";
import axios from "axios";
import useSnackbar from "../../../hooks/useSnackbar";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

import {
  convertInputDateToIsoString,
  formatToDateInput,
} from "../../../utils/date.utils";

export default function EditBerita() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [dataBeforeUpdate, setDataBeforeUpdate] = useState(null);
  const navigate = useNavigate();
  const { showSnackbar, Snackbar } = useSnackbar();
  const id = useParams().id;

  const handleEditTouristDestination = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataJson = Object.fromEntries(formData.entries());

    const dateRelease = convertInputDateToIsoString(formDataJson.dateRelease);

    formDataJson.dateRelease = dateRelease;
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
        `https://be-pariwisata-aceh.vercel.app/news/${id}`,
        formDataJson,
        config
      );
      showSnackbar(true, data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
        navigate("/admin/berita");
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
        `https://be-pariwisata-aceh.vercel.app/news/${id}`
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
  useEffect(() => {
    const accessToken = Cookies.get("admin-access-token");
    if (!accessToken) navigate("/admin/login");
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
              name="tagLine"
              type="text"
              defaultValue={dataBeforeUpdate && dataBeforeUpdate.tagLine}
              placeholder="Tag Line"
            />
            <InputAdmin
              name="dateRelease"
              type="date"
              defaultValue={
                dataBeforeUpdate &&
                formatToDateInput(dataBeforeUpdate.dateRelease)
              }
              placeholder="mm-dd-yy"
            />
            <InputAdmin
              name="desc"
              type="text"
              placeholder="Deskripsi"
              defaultValue={dataBeforeUpdate && dataBeforeUpdate.desc}
            />
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
