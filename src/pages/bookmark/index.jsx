import React from "react";
import Navigation from "../../components/Navigation";
import BookmarkList from "../../components/cards/Bookmark";
import { useTranslation } from "react-i18next";

export default function Index() {
  const { t } = useTranslation();
  return (
    <>
      <Navigation>
        <div className="text-yellow-500 font-bold">
          {t("title-page.bookmark")}
        </div>
        <BookmarkList />{" "}
      </Navigation>
    </>
  );
}
