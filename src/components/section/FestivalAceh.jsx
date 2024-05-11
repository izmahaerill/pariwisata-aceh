import React from "react";
import HeadingSection from "../micro/HeadingSection";

export default function FestivalAceh() {
  return (
    <div className="px-20">
      <HeadingSection>Festival Aceh</HeadingSection>
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
