import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Location from "../../assets/icons/location";
import secondNavigation from "../../data-json/second-navigation";
import Ticked from "../../assets/icons/ticked";
import Maps from "../../components/micro/Maps";
import useSnackbar from "../../hooks/useSnackbar";
import axios from "axios";

export default function DetailDestinasiWisata() {
  const { id } = useParams();
  const { Snackbar, showSnackbar } = useSnackbar();
  const [touristDestination, setTouristDestination] = useState(null);

  const getTouristDestinationFromApi = async () => {
    showSnackbar(true, "get data...");
    try {
      const { data } = await axios.get(
        `https://be-pariwisata-aceh.vercel.app/tourist-destination/${id}`
      );
      showSnackbar(false, null);
      setTouristDestination(data.data);
    } catch (error) {
      console.log(error);
      showSnackbar(true, error.response.data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    }
  };

  useEffect(() => {
    getTouristDestinationFromApi();
  }, []);

  if (!id) {
    return <div>Item not found</div>;
  }

  return (
    <>
      <Snackbar />
      <Navigation>
        {!touristDestination ? (
          <div>Item Not Found</div>
        ) : (
          <div className="px-20">
            <div className="flex flex-col justify-center gap-1 items-center pt-24 pb-10 ">
              <h1 className="text-3xl font-medium text-yellow-primary">
                {touristDestination.title}
              </h1>
              <h2 className="text-md flex text-gray-500">
                <Location width="1.7rem" height="1.7rem" fill="gray" />
                {touristDestination.locate}
              </h2>
            </div>
            <img
              src={touristDestination.url}
              className="w-full h-[60vh] object-cover rounded-2xl"
              width={400}
              height={400}
              alt="wisata aceh"
            />
            <div className="bg-red-500">
              {secondNavigation.map((item) => {
                <div key={id} className="flex justify-start items-center gap-5">
                  <div className="bg-white h-20 w-20 rounded-full flex justify-center items-center shadow-base">
                    <img
                      src={item.icon}
                      alt="wisata"
                      width={2.5}
                      height={2.5}
                      className="object-cover"
                      fill="#FFA006"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-yellow-primary text-lg font-semibold">
                      {item.title}
                    </p>
                    <p className="text-gray-400 w-72 text-sm">
                      {item.subTitle}
                    </p>
                  </div>
                </div>;
              })}
            </div>

            <h3 className="mb-3 text-2xl font-medium text-yellow-primary mt-10">
              Deskripsi
            </h3>
            <h4 className="text-justify text-sm">{touristDestination.desc}</h4>
            <div className="flex gap-10 mt-10">
              <div>
                <h3 className="mb-5 text-2xl font-medium text-yellow-primary">
                  Lokasi Maps
                </h3>
                <Maps location={touristDestination.location} />
              </div>
              <div>
                <div>
                  <h3 className="mb-3 text-2xl font-medium text-yellow-primary">
                    Fasilitas
                  </h3>
                  <div className="text-sm">
                    <li>Tempat Sampah</li>
                    <li>Mushola</li>
                    <li>Area Parkir</li>
                    <li>toilet</li>
                    <li>Mushola</li>
                  </div>
                </div>
                <div className="text-sm">
                  <h3 className="mb-3 text-2xl font-medium text-yellow-primary">
                    Jam Operasional
                  </h3>
                  <h4>24 Jam</h4>
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-medium text-yellow-primary">
                    Detail Biaya
                  </h3>
                  <h4 className="flex gap-2 items-center text-sm">
                    <Ticked /> Gratis
                  </h4>
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-medium text-yellow-primary">
                    Tips Berkunjung
                  </h3>
                  <h4>
                    <div className="text-sm">
                      <p>Menggunakan pakaian yang sopan dan tertutup</p>
                      <p>Menjaga sopan santun antar sesama </p>
                      <p>Menghormati nilai-nilai religi</p>
                    </div>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        )}
      </Navigation>
    </>
  );
}
