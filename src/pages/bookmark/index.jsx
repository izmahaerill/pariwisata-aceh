import React from "react";
import Navigation from "../../components/Navigation";
import BookmarkList from "../../components/cards/Bookmark";
// import BookmarkPage from "../../components/cards/Bookmark";
import { useTranslation } from "react-i18next";

export default function Index() {
  const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  console.log("storedBookmarks:", storedBookmarks);

  const { t } = useTranslation();

  return (
    <>
      <Navigation>
        <div className="text-yellow-500 font-bold">
          {t("title-page.bookmark")}
          {/* {storedBookmarks.map(item => (
            <div key={item.id}>
            <p>{item.title}</p>
            </div>
          ))} */}
        </div>
        <div className="px-20">
          <BookmarkList />{" "}
        </div>
      </Navigation>
    </>
  );
}
