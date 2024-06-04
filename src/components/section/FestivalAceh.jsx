import React from "react";
import HeadingSection from "../micro/HeadingSection";
import { useTranslation } from "react-i18next";

export default function FestivalAceh() {
  const { t } = useTranslation();
  return (
    <div className="px-20">
      <HeadingSection>{t("section-festival-aceh.title")}</HeadingSection>
      <img
        className="w-full rounded-2xl"
        src="/images/festival-aceh.png"
        width={500}
        height={500}
        alt="festival aceh"
      />
    </div>
  );
}
