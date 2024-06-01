import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import useSnackbar from "../../../hooks/useSnackbar";

export default function LoginAdmin() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const { showSnackbar, Snackbar } = useSnackbar();

  const handleLoginWithEmailPasword = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let formDataJson = Object.fromEntries(formData.entries());
    formDataJson = {
      ...formDataJson,
      role: "ADMIN",
    };
    showSnackbar(true, "Loading...");
    try {
      const { data } = await axios.post(
        `https://be-pariwisata-aceh.vercel.app/auth/signin`,
        formDataJson
      );
      showSnackbar(true, data.message[0]);
      Cookies.set("admin-access-token", data.token, { expires: 1 });
      setTimeout(() => {
        showSnackbar(false, null);
        setIsLoggedin(true);
      }, 1500);
    } catch (error) {
      showSnackbar(true, error.response.data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    }
  };

  useEffect(() => {
    const accessToken = Cookies.get("admin-access-token");
    if (accessToken) navigate("/admin/destinasi-wisata");
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/admin/destinasi-wisata");
    }
  }, [isLoggedIn]);

  return (
    <>
      <Snackbar />
      <div className="w-full h-screen flex justify-center px-60 py-20 drop-shadow-customShadow ">
        <form
          className="w-1/2 h-full flex flex-col items-center justify-center bg-yellow-primary"
          onSubmit={handleLoginWithEmailPasword}
        >
          <h1 className="text-3xl text-[#ffffff] font-semibold my-6 tracking-widest shadow-white drop-shadow-2xl">
            Login Admin
          </h1>

          <div className="w-full flex items-center justify-center my-4">
            <input
              type="email"
              name="email"
              placeholder="Masukkan email"
              className="w-3/4 text-yellow-primary my-2 bg-[#ffffff] rounded-xl p-3 text-sm focus:outline-yellow-primary focus:ring-2 px-5"
            />
          </div>

          <div className="w-full flex items-center justify-center my-2">
            <input
              type="password"
              name="password"
              placeholder="Masukkan kata sandi"
              className="w-3/4 text-yellow-primary my-2 bg-[#ffffff] rounded-xl p-3 text-sm focus:outline-yellow-primary focus:ring-2 px-5"
            />
          </div>
          <div className="w-full flex justify-center my-4">
            <button className="w-1/4 text-yellow-primary my-2 bg-[#ffffff] rounded-xl p-2 text-center hover:bg-gray-secondary">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
