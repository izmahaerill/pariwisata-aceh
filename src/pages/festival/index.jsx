import React, { useState } from "react";
import Navigation from "../../components/Navigation";
import Festival from "../../components/cards/Festival";
import ArrowRightRegular from "../../assets/icons/arrow-right-regular";
import ArrowLeftRegular from "../../assets/icons/arrow-left-regular";

export default function Index() {
  // State untuk melacak bulan saat ini
  const [currentMonth, setCurrentMonth] = useState("April");

  // Fungsi untuk menangani perpindahan ke bulan berikutnya saat tombol panah kanan diklik
  const handleNextMonth = () => {
    switch (currentMonth) {
      case "April":
        setCurrentMonth("Mei");
        break;
      case "Mei":
        setCurrentMonth("Juni");
        break;
      // Tambahkan kasus lainnya untuk bulan-bulan tambahan jika diperlukan
      default:
        break;
    }
  };

  // Fungsi untuk menangani perpindahan ke bulan sebelumnya saat tombol panah kiri diklik
  const handlePreviousMonth = () => {
    switch (currentMonth) {
      case "Juni":
        setCurrentMonth("Mei");
        break;
      case "Mei":
        setCurrentMonth("April");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Navigation>
        <div className="px-20 pt-28">
          <img
            className=" w-full mb-12"
            src="/images/current-festival/festival.png"
            alt="festival aceh terbaru"
            width={500}
            height={500}
          />
          <div className="outline outline-2 outline-yellow-primary h-auto rounded-2xl overflow-hidden ">
            <div className="bg-yellow-primary flex justify-between px-10 text-2xl p-3">
              <h1 className="text-white">{currentMonth} 2024</h1>
              <div className="flex gap-3">
                <button onClick={handlePreviousMonth}>
                  <ArrowLeftRegular />
                </button>
                <button onClick={handleNextMonth}>
                  <ArrowRightRegular />
                </button>
              </div>
            </div>
            <div className="py-7">
              <Festival />
            </div>
          </div>
        </div>
      </Navigation>
    </>
  );
}
