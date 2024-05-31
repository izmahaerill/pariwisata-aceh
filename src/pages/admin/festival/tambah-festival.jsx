import React from "react";
import TextareaAdmin from "../../../components/micro/TextareaAdmin";
import NavigationAdmin from "../../../components/NavigationAdmin";
import InputAdmin from "../../../components/micro/InputAdmin";
import HeadingAdmin from "../../../components/micro/HeadingAdmin";
import axios from "axios";
import useSnackbar from "../../../hooks/useSnackbar";
import { useNavigate } from "react-router-dom";

export default function TambahFestival() {
  const navigate = useNavigate();
  const { showSnackbar, Snackbar } = useSnackbar();
  const handleAddFestival = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataJson = Object.fromEntries(formData.entries());
    // if (!formDataJson.file.size) {
    //   setTimeout(() => {
    //     showSnackbar(false, null);
    //   }, 2000);
    //   return;
    // }
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    showSnackbar(true, "Loading...");
    try {
      const { data } = await axios.post(
        `https://be-pariwisata-aceh.vercel.app/festival/add`,
        formDataJson,
        config
      );
      showSnackbar(true, data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
        navigate("/admin/festival");
      }, 1000);
    } catch (error) {
      console.log(error);
      showSnackbar(true, error.response.data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    }
  };

  // const onHandleInputFileChange = (event) => {
  //   if (event.target.files) {
  //     const file = event.target.files[0];
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setSelectedImage(e.target.result);
  //     };
  //     reader.readAsDataURL(file);
  //   } else {
  //     setTimeout(() => {
  //       showSnackbar(false, null);
  //     }, 2000);
  //   }
  // };

  return (
    <>
      <Snackbar />
      <NavigationAdmin>
        <form onSubmit={handleAddFestival} className="pt-28 px-20 ">
          <HeadingAdmin text="Tambah Festival" />
          <div className="flex flex-col gap-2">
            <InputAdmin name="title" type="text" placeholder="Nama Festival" />
            <InputAdmin name="locate" type="text" placeholder="Lokasi" />
            <InputAdmin
              name="startDate"
              type="date"
              placeholder="Tanggal Mulai"
            />
            <InputAdmin
              name="endDate"
              type="date"
              placeholder="Tanggal Berakhir"
            />
            <TextareaAdmin id={1} name="desc" placeholder="Deskripsi" />
          </div>
          <div className="flex justify-center items-center my-10">
            <button
              className="bg-yellow-primary text-white py-2 px-4 rounded-lg"
              name="button"
              type="submit"
              // onClick={onClick}
            >
              Simpan
            </button>
          </div>
        </form>
      </NavigationAdmin>
    </>
  );
}
