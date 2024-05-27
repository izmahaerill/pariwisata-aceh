import { Link, useNavigate } from "react-router-dom";
import LOGO from "/images/Logo.png";
import GOOGLE_ICON from "/images/Icon_Google.svg";
import FACEBOOK_ICON from "/images/Icon_FB.svg";
import APPLE_ICON from "/images/Icon_Apple.svg";
import axios from "axios";
import useSnackbar from "../../hooks/useSnackbar";

export default function Register() {
  const { Snackbar, showSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const formDataJson = Object.fromEntries(form.entries());
    showSnackbar(true, "Loading...");
    try {
      const { data } = await axios.post(
        `https://be-pariwisata-aceh.vercel.app/auth/signup`,
        formDataJson
      );
      showSnackbar(true, data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
        navigate("/login");
      }, 1500);
    } catch (error) {
      showSnackbar(true, error.response.data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    }
  };

  return (
    <>
      <Snackbar />
      <div className="w-full h-screen flex">
        <form
          onSubmit={handleSubmit}
          className="w-1/2 h-full flex flex-col items-center justify-center bg-yellow-primary"
        >
          <h1 className="text-2xl text-[#ffffff] font-semibold my-6">DAFTAR</h1>

          <div className="w-full flex items-center justify-center my-2">
            <input
              name="email"
              type="email"
              placeholder="Masukkan email"
              className="w-3/4 text-yellow-primary my-2 bg-white rounded-xl p-3 text-sm focus:outline-yellow-primary focus:ring-2 px-5"
            />
          </div>
          <div className="w-full flex items-center justify-center my-4">
            <input
              name="username"
              type="text"
              placeholder="Masukkan username"
              className="w-3/4 text-yellow-primary my-2 bg-white rounded-xl p-3 text-sm focus:outline-yellow-primary focus:ring-2 px-5"
            />
          </div>

          <div className="w-full flex items-center justify-center my-2">
            <input
              name="password"
              type="password"
              placeholder="Masukkan password"
              className="w-3/4 text-yellow-primary my-2 bg-[#ffffff] rounded-xl p-3 text-sm focus:outline-yellow-primary focus:ring-2 px-5"
            />
          </div>

          <div className="w-full flex justify-center my-4">
            <button className="w-1/4 text-yellow-primary my-2 bg-[#ffffff] rounded-xl p-2 text-center hover:bg-gray-secondary">
              Daftar
            </button>
          </div>

          <div className="w-full flex items-center justify-center my-2">
            <p className="text-sm font-normal text-[#000000]">
              Sudah Punya Akun?{" "}
              <Link
                to="/login"
                className="font-semibold underline underline-offset-2 cursor-pointer text-[#ffffff] hover:text-gray-secondary"
              >
                Masuk
              </Link>
            </p>
          </div>

          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-3/4 h-[1px] bg-black"></div>
            <p className="text-md absolute font-normal text-white bg-yellow-primary px-2">
              Daftar Dengan
            </p>
          </div>
          <div className="w-full flex items-center justify-center my-4">
            <img
              src={GOOGLE_ICON}
              alt="Google_Icon"
              className="h-8 mr-6 cursor-pointer"
            />
            <img
              src={FACEBOOK_ICON}
              alt="Facebook_Icon"
              className="h-8 mr-6 cursor-pointer"
            />
            <img
              src={APPLE_ICON}
              alt="Apple_Icon"
              className="h-8 mr-6 cursor-pointer"
            />
          </div>
        </form>

        <div className="w-1/2 h-full flex flex-col items-center justify-center bg-white">
          <img src={LOGO} alt="Logo" className="mx-2 my-4" />
        </div>
      </div>
    </>
  );
}
