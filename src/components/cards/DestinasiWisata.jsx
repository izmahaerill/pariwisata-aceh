import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Bookmark from "../../assets/icons/bookmark";
import Location from "../../assets/icons/location";
import Category from "../../assets/icons/category";
import Ticked from "../../assets/icons/ticked";
import ArrowwhiterightRegular from "../../assets/icons/arrowwhiteright-regular";

export default function DestinasiWisata({ destinations }) {
  const navigate = useNavigate();
  const [destinationList, setDestinationList] = useState([]);

  useEffect(() => {
    // if (destinations && destinations.length > 0) {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    // const storedBookmarks = localStorage.getItem("bookmarks");

    // if (storedBookmarks) {
    //   setDestinationList(JSON.parse(storedBookmarks));
    // } else {
    const initializedDestinations = destinations.map((destination) => ({
      ...destination,
      bookmark: storedBookmarks.includes(destinations.id),
    }));

    setDestinationList(initializedDestinations);
    // }
    // }
  }, [destinations]);

  const handleCardClick = (id) => {
    navigate(`/destinasi-wisata/${id}`);
  };

  const handleBookmark = (destination) => {
    const index = destinationList.findIndex(
      (item) => item?.id === destination?.id
    );

    if (index === -1) {
      return;
    }

    const updatedDestinationList = [...destinationList];
    updatedDestinationList[index] = {
      ...updatedDestinationList[index],
      bookmark: !updatedDestinationList[index].bookmark,
    };
    // console.log("destination:", destination);
    // console.log("destinationList:", destinationList);
    // const updatedList = destinationList.map((item) => {
    //   item?.id !== destination?.id
    //     ? item
    //     : { ...item, bookmark: !item?.bookmark };
    // });

    setDestinationList(updatedDestinationList);
    console.log("destinationList:", destinationList);

    const bookmarkedID = updatedDestinationList.filter((item) => item.bookmark);
    // const bookmarkedID = updatedDestinationList.filter(item => item.bookmark).map(item => item.id)
    console.log("bookmarkedID:", bookmarkedID);

    // const bookmarkedDestinations = updatedList
    //   .filter((item) => item?.bookmark)
    //   .map((item) => item?.id);
    // console.log("bookmarkedDestinations", bookmarkedDestinations);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkedID));
  };

  if (!destinations.length) {
    return <h1>Destinations is Loading</h1>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto">
      {destinationList.map((item, index) => (
        <div
          key={index}
          className="w-full p-4 border-2 border-yellow-primary rounded-2xl flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative w-full h-52 overflow-hidden rounded-2xl">
            <img
              className="object-cover w-full h-full"
              src={item?.url}
              alt={item?.title}
            />
          </div>
          <div className="flex flex-col gap-2 p-4">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold truncate w-3/4">
                {item?.title}
              </h3>
              <button type="button" onClick={() => handleBookmark(item)}>
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <Location width="1.5rem" height="1.5rem" fill="black" />
              <span className="text-sm truncate ">{item?.locate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Category className="" fill="black" />
              <span className="text-sm truncate">{item?.typeLocation}</span>
            </div>
            <div className="flex items-center gap-2">
              <Ticked className="w-4 h-4" />
              <span className="text-sm truncate">{item?.typeSellTicket}</span>
            </div>
            <div
              className="text-sm flex justify-end items-center cursor-pointer"
              onClick={() => handleCardClick(item?.id)}
            >
              Selengkapnya <ArrowwhiterightRegular className="w-4 h-4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
