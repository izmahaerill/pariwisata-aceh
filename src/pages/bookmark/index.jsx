import React from "react";
import Navigation from "../../components/Navigation";
import BookmarkList from "../../components/cards/Bookmark"; // Ensure the component is imported correctly

export default function Index() {
  return (
    <>
      <Navigation>

      <div className="text-yellow-500 font-bold">Bookmark</div>
        <BookmarkList /> {/* Add the BookmarkList component to display the list of bookmarks */}
      </Navigation>
    </>
  );
}
