import React, { useState } from "react";
import Navigation from "../../components/Navigation";
import DestinasiWisata from "../../components/cards/DestinasiWisata";
import InputSearchDestinasi from "../../assets/icons/inputSearchDestinasi";
import ButtonFilter from "../../components/micro/ButtonFilter";
import destinasiWisata from "../../data-json/destinasi-wisata";

export default function index() {
  const [destinations, setDestinations] = useState(destinasiWisata);
  return (
    <Navigation>
      <div className="px-20 pt-28">
        <div className="flex gap-5 justify-center items-start">
          <InputSearchDestinasi
            destinations={destinations}
            setDestinations={setDestinations}
            placeholder="Temukan Destinasi yang Ingin Anda Tuju"
          />
          <ButtonFilter
            destinations={destinations}
            setDestinations={setDestinations}
          />
        </div>
        <DestinasiWisata destinations={destinations} />
      </div>
    </Navigation>
  );
}
