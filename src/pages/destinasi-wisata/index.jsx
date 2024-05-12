import React from "react";
import Navigation from "../../components/Navigation";
import DestinasiWisata from "../../components/cards/DestinasiWisata";

export default function index() {
  return (
    <Navigation>
      <div className="px-20 pt-28">
        <DestinasiWisata />
      </div>
    </Navigation>
  );
}
