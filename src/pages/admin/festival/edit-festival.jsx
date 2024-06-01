import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSnackbar from "../../../hooks/useSnackbar";
import axios from "axios";
import TextareaAdmin from "../../../components/micro/TextareaAdmin";
import NavigationAdmin from "../../../components/NavigationAdmin";
import InputAdmin from "../../../components/micro/InputAdmin";
import HeadingAdmin from "../../../components/micro/HeadingAdmin";
import {
  convertInputDateToIsoString,
  formatToDateInput,
} from "../../../utils/date.utils";
import Cookies from "js-cookie";

export default function EditFestival() {
  const [dataBeforeUpdate, setDataBeforeUpdate] = useState(null);
  const navigate = useNavigate();
  const { showSnackbar, Snackbar } = useSnackbar();
  const id = useParams().id;

  const handleEditFestival = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataJson = Object.fromEntries(formData.entries());

    const endDate = convertInputDateToIsoString(formDataJson.endDate);
    const startDate = convertInputDateToIsoString(formDataJson.startDate);

    formDataJson.endDate = endDate;
    formDataJson.startDate = startDate;
    showSnackbar(true, "Loading...");
    try {
      const { data } = await axios.put(
        `https://be-pariwisata-aceh.vercel.app/festival/${id}`,
        formDataJson
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

  useEffect(() => {
    const accessToken = Cookies.get("admin-access-token");
    if (!accessToken) navigate("/admin/login");
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
              name="startDate"
              type="date"
              defaultValue={
                dataBeforeUpdate &&
                formatToDateInput(dataBeforeUpdate.startDate)
              }
            />
            <InputAdmin
              name="endDate"
              type="date"
              defaultValue={
                dataBeforeUpdate && formatToDateInput(dataBeforeUpdate.endDate)
              }
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
