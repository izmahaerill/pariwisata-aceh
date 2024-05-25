import ArrowBase from "../../assets/icons/arrow-base";
import { Link } from "react-router-dom";

export default function HeroImage() {
  return (
    <>
      <div className="mt-[65px] bg-[url('/images/bg-heroimage.png')] min-h-[260px] flex items-center px-20 contrast-125  brightness-95 ">
        <div className="  text-white flex flex-col justify-center gap-5 w-52 h-auto mt-5 overlay hover:overlay-active">
          <h1 className="text-4xl font-semibold w-[40rem] leading-tight ">
            Beragam Destinasi Wisata Aceh yang Wajib Anda Kunjungi
          </h1>
          <div className="cursor-pointer">
            <Link
              to="/destinasi-wisata"
              className="bg-yellow-primary  text-base py-1 rounded-lg flex justify-center items-center gap-1 cursor-pointer z-40"
            >
              Jelajahi Aceh <ArrowBase />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
