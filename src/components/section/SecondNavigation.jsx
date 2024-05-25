import Festival from "../../assets/icons/festival";
import Mountain from "../../assets/icons/mountain";
import News from "../../assets/icons/news";

export default function SecondNavigation() {
  return (
    <>
      <div className="px-20 flex justify-between w-full">
        <div className="flex justify-start items-center gap-5">
          <a href="/destinasi-wisata">
            <div className="bg-white h-20 w-20 rounded-full flex justify-center items-center shadow-base">
              <Mountain />
            </div>
          </a>
          <div className="flex flex-col gap-1">
            <p className="text-yellow-primary text-lg font-semibold">
              <a href="/destinasi-wisata">Destinasi wisata Aceh</a>
            </p>
            <p className="text-gray-400 w-72 text-sm max-w-[250px]">
              Beragam destinasi wisata Aceh yang wajib dikunjungi untuk berlibur
              anda.
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-5">
          <a href="/festival">
            <div className="bg-white h-20 w-20 rounded-full flex justify-center items-center shadow-base">
              <Festival />
            </div>
          </a>
          <div className="flex flex-col gap-1">
            <p className="text-yellow-primary text-lg font-semibold">
              <a href="/festival">Festival Aceh</a>
            </p>
            <p className="text-gray-400 w-72 text-sm max-w-[250px]">
              Beragam Festival di Aceh yang menarik di setiap tahunnya.
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-5">
          <a href="/berita">
            <div className="bg-white h-20 w-20 rounded-full flex justify-center items-center shadow-base">
              <News />
            </div>
          </a>

          <div className="flex flex-col gap-1">
            <p className="text-yellow-primary text-lg font-semibold">
              <a href="/berita">Seputar Aceh</a>
            </p>
            <p className="text-gray-400 w-72 text-sm max-w-[250px]">
              Dapatkan berita lengkap mengenai wisata tentang Aceh.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
