import ArrowBase from "../../assets/icons/arrow-base";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HeroImage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="mt-[65px] bg-[url('/images/bg-heroimage.png')] bg-no-repeat bg-cover min-h-[350px] flex items-center px-20 contrast-125  brightness-95 ">
        <div className="  text-white flex flex-col justify-center gap-5 w-52 h-auto mt-5 overlay hover:overlay-active">
          <h1 className="text-4xl font-semibold w-[40rem] leading-tight ">
            {t("hero-image.title")}
          </h1>
          <div className="cursor-pointer">
            <Link
              to="/destinasi-wisata"
              className="bg-yellow-primary  text-base py-1 rounded-lg flex justify-center items-center gap-1 cursor-pointer z-40"
            >
              {t("hero-image.cta")} <ArrowBase />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
