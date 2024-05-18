import React from "react";
import Navigation from "../../components/Navigation";
import DestinasiWisata from "../../components/cards/DestinasiWisata";
import InputSearchDestinasi from "../../assets/icons/inputSearchDestinasi";
import ButtonFilter from "../../components/micro/ButtonFilter";

export default function index() {
  return (
    <Navigation>
      <div className="px-20 pt-28">
        <div className="flex gap-5 justify-center items-start">
          <InputSearchDestinasi placeholder="Temukan Destinasi yang Ingin Anda Tuju" />
          <ButtonFilter />
        </div>
        <DestinasiWisata />
      </div>
    </Navigation>
  );
}
