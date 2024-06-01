import React, { useEffect, useState } from "react";
import InputAdmin from "../../../components/micro/InputAdmin";
import TextareaAdmin from "../../../components/micro/TextareaAdmin";
import Dnd from "../../../components/micro/Dnd";
import NavigationAdmin from "../../../components/NavigationAdmin";
import HeadingAdmin from "../../../components/micro/HeadingAdmin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useSnackbar from "../../../hooks/useSnackbar";
import { convertInputDateToIsoString } from "../../../utils/date.utils";
import Cookies from "js-cookie";

export default function TambahBerita() {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const { showSnackbar, Snackbar } = useSnackbar();
  const handleAddDestination = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataJson = Object.fromEntries(formData.entries());

    const dateRelease = convertInputDateToIsoString(formDataJson.dateRelease);

    formDataJson.dateRelease = dateRelease;

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
        `https://be-pariwisata-aceh.vercel.app/news/add`,
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

  useEffect(() => {
    const accessToken = Cookies.get("admin-access-token");
    if (!accessToken) navigate("/admin/login");
  }, []);
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
            <InputAdmin name="tagLine" type="text" placeholder="Tag Line" />
            <InputAdmin name="dateRelease" type="date" placeholder="mm-dd-yy" />
            <InputAdmin name="desc" type="text" placeholder="Deskripsi" />
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
