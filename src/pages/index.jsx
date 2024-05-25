import { useEffect } from "react";
import Navigation from "../components/Navigation";
import SecondNavigation from "../components/section/SecondNavigation";
import HeroImage from "../components/section/HeroImage";
import DestinasiUnggulan from "../components/section/DestinasiUnggulan";
import FestivalAceh from "../components/section/FestivalAceh";
import SeputarAceh from "../components/section/SeputarAceh";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  useEffect(() => {
    const accessTokenRegex = /access_token=([^&]+)/;
    const isMatch = window.location.href.match(accessTokenRegex);

    if (isMatch) {
      navigate("/");
      const accessToken = isMatch[1];
      Cookies.set("access-token", accessToken, { expires: 7 });
    }
  }, []);

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
