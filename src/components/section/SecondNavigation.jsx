import Festival from "../../assets/icons/festival";
import Mountain from "../../assets/icons/mountain";
import News from "../../assets/icons/news";
import { useTranslation } from "react-i18next";

export default function SecondNavigation() {
  const { t } = useTranslation();

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
              <a href="/destinasi-wisata">
                {t("second-navigation.title-destination")}
              </a>
            </p>
            <p className="text-gray-400 w-72 text-sm max-w-[250px]">
              {t("second-navigation.desc-destination")}
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
              <a href="/festival">{t("second-navigation.title-festival")}</a>
            </p>
            <p className="text-gray-400 w-72 text-sm max-w-[250px]">
              {t("second-navigation.desc-festival")}
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
              <a href="/berita">{t("second-navigation.title-seputar")}</a>
            </p>
            <p className="text-gray-400 w-72 text-sm max-w-[250px]">
              {t("second-navigation.desc-seputar")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
