import React from "react";
import Navigation from "../components/Navigation";
import SecondNavigation from "../components/section/SecondNavigation";
import HeroImage from "../components/section/HeroImage";
import DestinasiUnggulan from "../components/section/DestinasiUnggulan";
import FestivalAceh from "../components/section/FestivalAceh";
import SeputarAceh from "../components/section/SeputarAceh";

export default function index() {
  return (
    <>
      <Navigation>
        <div className="flex flex-col gap-20">
          <HeroImage />
          <SecondNavigation />
          <DestinasiUnggulan />
          <FestivalAceh />
          <SeputarAceh />
        </div>
      </Navigation>
    </>
  );
}
