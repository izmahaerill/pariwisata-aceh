import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import LOGO from "/images/Logo.png";
import GOOGLE_ICON from "/images/Icon_Google.svg";
import FACEBOOK_ICON from "/images/Icon_FB.svg";
import APPLE_ICON from "/images/Icon_Apple.svg";
import axios from "axios";
import useSnackbar from "../../hooks/useSnackbar";

export default function Login() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const { showSnackbar, Snackbar } = useSnackbar();

  const handleLoginWithEmailPasword = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData.entries());
    showSnackbar(true, "Loading...");
    try {
      const { data } = await axios.get(
        `https://be-pariwisata-aceh.vercel.app/auth/signin?email=${email}&password=${[
          password,
        ]}`
      );
      showSnackbar(true, data.message[0]);
      Cookies.set("access-token", data.token, { expires: 7 });
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

  const handleClick = () => {
    const callbackUrl = `${window.location.origin}`;
    const googleClientId =
      "544326919545-e3h7ovgoed89vubrl4tuntohfdmg3pk1.apps.googleusercontent.com";
    const targetUrl = `https://accounts.google.com/o/oauth2/auth?redirect_uri=${encodeURIComponent(
      callbackUrl
    )}&response_type=token&client_id=${googleClientId}&scope=openid%20email%20profile`;
    window.location.href = targetUrl;
  };

  useEffect(() => {
    const accessToken = Cookies.get("access-token");
    if (accessToken) navigate("/");
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <>
      <Snackbar />
      <div className="w-full h-screen flex">
        <div className="w-1/2 h-full flex flex-col items-center justify-center bg-white">
          <img src={LOGO} alt="Logo" className="mx-2 my-4" />
        </div>

        <form
          className="w-1/2 h-full flex flex-col items-center justify-center bg-yellow-primary"
          onSubmit={handleLoginWithEmailPasword}
        >
          <h1 className="text-2xl text-[#ffffff] font-semibold my-6">MASUK</h1>

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

          <div className="w-3/4 flex justify-end m-2">
            <p className="text-sm font-normal text-white whitespace-nowrap cursor-pointer underline underline-offset-2 text-right hover:text-gray-secondary">
              Lupa Kata Sandi?
            </p>
          </div>

          <div className="w-full flex justify-center my-4">
            <button className="w-1/4 text-yellow-primary my-2 bg-[#ffffff] rounded-xl p-2 text-center hover:bg-gray-secondary">
              Masuk
            </button>
          </div>

          <div className="w-full flex items-center justify-center my-2">
            <p className="text-sm font-normal text-[#000000]">
              Belum Punya Akun?{" "}
              <Link
                to="/register"
                className="font-semibold underline underline-offset-2 cursor-pointer text-white hover:text-gray-secondary"
              >
                Daftar
              </Link>
            </p>
          </div>

          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-3/4 h-[1px] bg-black"></div>
            <p className="text-md absolute font-normal text-white bg-yellow-primary px-2">
              Masuk Dengan
            </p>
          </div>

          <div className="w-full flex items-center justify-center my-4">
            <img
              src={GOOGLE_ICON}
              alt="Google_Icon"
              className="h-8 mr-6 cursor-pointer hover:"
              onClick={handleClick}
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
      </div>
    </>
  );
}
