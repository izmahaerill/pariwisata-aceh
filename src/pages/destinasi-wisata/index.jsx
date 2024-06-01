import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import DestinasiWisata from "../../components/cards/DestinasiWisata";
import InputSearchDestinasi from "../../assets/icons/inputSearchDestinasi";
import ButtonFilter from "../../components/micro/ButtonFilter";
import axios from "axios";
import useSnackbar from "../../hooks/useSnackbar";

export default function Index() {
  const [touristDestinations, setTouristDestinations] = useState([]);
  const [afterFilter, setAfterFilter] = useState([]);
  const { Snackbar, showSnackbar } = useSnackbar();
  const getTouristDestinationsFromApi = async () => {
    showSnackbar(true, "get data...");
    try {
      const { data } = await axios.get(
        `https://be-pariwisata-aceh.vercel.app/tourist-destination/all`
      );
      showSnackbar(false, null);
      setTouristDestinations(data.data);
      setAfterFilter(data.data);
    } catch (error) {
      console.log(error);
      showSnackbar(true, error.response.data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    }
  };

  useEffect(() => {
    getTouristDestinationsFromApi();
  }, []);

  return (
    <>
      <Snackbar />
      <Navigation>
        <div className="px-20 pt-28">
          <div className="flex gap-5 justify-center items-start">
            <InputSearchDestinasi
              dataOld={touristDestinations}
              setDestinations={setAfterFilter}
              placeholder="Temukan Destinasi yang Ingin Anda Tuju"
            />
            <ButtonFilter
              dataOld={touristDestinations}
              setDestinations={setAfterFilter}
            />
          </div>
          <DestinasiWisata destinations={afterFilter} />
        </div>
      </Navigation>
    </>
  );
}
