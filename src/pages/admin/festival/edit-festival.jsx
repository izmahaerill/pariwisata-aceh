import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSnackbar from "../../../hooks/useSnackbar";
import axios from "axios";
import TextareaAdmin from "../../../components/micro/TextareaAdmin";
import NavigationAdmin from "../../../components/NavigationAdmin";
import InputAdmin from "../../../components/micro/InputAdmin";
import HeadingAdmin from "../../../components/micro/HeadingAdmin";

export default function EditFestival() {
  const [dataBeforeUpdate, setDataBeforeUpdate] = useState(null);
  const navigate = useNavigate();
  const { showSnackbar, Snackbar } = useSnackbar();
  const id = useParams().id;

  const handleEditFestival = async (event) => {
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
        `https://be-pariwisata-aceh.vercel.app/festival/${id}`,
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

  const getFestivalFromApi = async () => {
    showSnackbar(true, "get data...");
    try {
      const { data } = await axios.get(
        `https://be-pariwisata-aceh.vercel.app/festival/${id}`
      );
      showSnackbar(false, null);
      setDataBeforeUpdate(data.data);
    } catch (error) {
      showSnackbar(true, error.response.data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    }
  };

  useEffect(() => {
    getFestivalFromApi();
  }, []);

  return (
    <>
      <Snackbar />
      <NavigationAdmin>
        <form onSubmit={handleEditFestival} className="pt-28 px-20 ">
          <HeadingAdmin text="Edit Festival" />
          <div className="flex flex-col gap-2">
            <InputAdmin
              name="title"
              type="text"
              placeholder="Nama Festival"
              defaultValue={dataBeforeUpdate?.title}
            />
            <InputAdmin
              name="locate"
              type="text"
              placeholder="Lokasi"
              defaultValue={dataBeforeUpdate?.locate}
            />
            <InputAdmin
              name="input"
              type="date"
              placeholder="Tanggal Mulai"
              defaultValue={dataBeforeUpdate?.startDate}
            />
            <InputAdmin
              name="input"
              type="date"
              placeholder="Tanggal Berakhir"
              defaultValue={dataBeforeUpdate?.endDate}
            />
            <TextareaAdmin
              id={1}
              name="desc"
              placeholder="Deskripsi"
              defaultValue={dataBeforeUpdate?.desc}
            />
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
