import React from "react";
import HeadingSection from "../micro/HeadingSection";
import HomeCard from "../cards/HomeCard";
import { useTranslation } from "react-i18next";

export default function SeputarAceh() {
  const { t } = useTranslation();
  return (
    <div className="px-20">
      <HeadingSection>{t("section-seputar-aceh.title")}</HeadingSection>
      <HomeCard />
    </div>
  );
}
