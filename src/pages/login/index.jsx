import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import LOGO from "/images/Logo.png";
import GOOGLE_ICON from "/images/Icon_Google.svg";
import FACEBOOK_ICON from "/images/Icon_FB.svg";
import APPLE_ICON from "/images/Icon_Apple.svg";

export default function Login() {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);

  // login biasa
  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   // Gantikan URL ini dengan URL API login Anda
  //   const loginUrl = "https://api.example.com/login";

  //   try {
  //     const response = await fetch(loginUrl, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Login failed");
  //     }

  //     const data = await response.json();
  //     console.log("Login successful", data);
  //     // Lakukan sesuatu dengan data (misalnya, simpan token, navigasi ke halaman lain)
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };
  // end login biasa

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
    const accessTokenRegex = /access_token=([^&]+)/;
    const isMatch = window.location.href.match(accessTokenRegex);

    if (isMatch) {
      const accessToken = isMatch[1];
      Cookies.set("access_token", accessToken);
      setIsLoggedin(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedin) {
      navigate("/secure");
    }
  }, [isLoggedin, navigate]);

  // set cookie
  // Metode untuk mengatur data dalam cookie yang akan kedaluwarsa dalam 7 hari
  const SetCookie = () => {
    Cookies.set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9", {
      kedaluwarsa: 7,
    });
  };

  // Metode untuk mengambil data dari cookies
  const GetCookie = () => {
    alert(Cookies.get("token"));
  };
  // Metode untuk menghapus data dari cookie const HapusCookie = ( ) => { Cookies . hapus ( "tanda" );   }; return (     <div style={{ textAlign: "center" }}>       <h6>1. Klik Set Cookie untuk mengatur data dalam cookie</h6>       <h6>2. Klik Dapatkan Cookie untuk menampilkan data</h6 >       <h6>2. Klik Hapus Cookie untuk menghapus data dari cookie</h6>       <button onClick={SetCookie}>Setel Cookie</button>       <button onClick={GetCookie}>Dapatkan Cookie</button>       <button onClick ={RemoveCookie}>Hapus Cookie</button>     </div>   ); } ekspor Aplikasi bawaan ;
  // end set cookie

  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full flex flex-col items-center justify-center bg-white">
        <img src={LOGO} alt="Logo" className="mx-2 my-4" />
      </div>

      <form
        className="w-1/2 h-full flex flex-col items-center justify-center bg-yellow-primary"
        // onSubmit={handleLogin}
      >
        <h1 className="text-2xl text-[#ffffff] font-semibold my-6">MASUK</h1>

        <div className="w-full flex items-center justify-center my-4">
          <input
            type="email"
            placeholder="Masukkan email atau username"
            className="w-3/4 text-yellow-primary my-2 bg-[#ffffff] rounded-xl p-3 text-sm focus:outline-yellow-primary focus:ring-2 px-5"
          />
        </div>

        <div className="w-full flex items-center justify-center my-2">
          <input
            type="password"
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
  );
}
