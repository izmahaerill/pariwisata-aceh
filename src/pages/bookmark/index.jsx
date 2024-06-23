import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ArrowwhiterightRegular from "../../assets/icons/arrowwhiteright-regular";
import BoldBookmark from "../../assets/icons/bold-bookmark";
import Bookmark from "../../assets/icons/bookmark";
import Category from "../../assets/icons/category";
import Location from "../../assets/icons/location";
import Ticked from "../../assets/icons/ticked";
import Navigation from "../../components/Navigation";

export default function Bookmarks() {
  const navigate = useNavigate();
  const [bookmarkedDestinations, setBookmarkedDestinations] = useState([]);

  const { t } = useTranslation();

  const navigateToDestinationDetails = (id) => {
    navigate(`/destinasi-wisata/${id}`);
  };

  const toggleBookmark = (destination) => {
    const updatedDestinations = bookmarkedDestinations.map((item) => {
      return item.id === destination.id
        ? { ...item, bookmark: !item.bookmark }
        : item;
    });

    const filteredDestinations = updatedDestinations.filter(
      (item) => item.bookmark
    );
    setBookmarkedDestinations(filteredDestinations);
    localStorage.setItem("bookmarks", JSON.stringify(filteredDestinations));
  };

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarkedDestinations(storedBookmarks);
  }, []);

  return (
    <Navigation>
      <div className="mb-6 pt-28">
        <h1 className="text-3xl font-bold text-center text-yellow-primary">
          {t("title-page.bookmark")}
        </h1>
      </div>
      <div className="px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto">
        {bookmarkedDestinations.map((item) => (
          <div
            key={item.id}
            className="w-full p-4 border-2 border-yellow-primary rounded-2xl flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-52 overflow-hidden rounded-2xl">
              <img
                className="object-cover w-full h-full"
                src={item.url}
                alt={item.title}
              />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold truncate w-3/4">
                  {item.title}
                </h3>
                <button type="button" onClick={() => toggleBookmark(item)}>
                  {item.bookmark ? <BoldBookmark /> : <Bookmark />}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Location width="1.5rem" height="1.5rem" fill="black" />
                <span className="text-sm truncate ">{item.locate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Category className="" fill="black" />
                <span className="text-sm truncate">{item.typeLocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <Ticked className="w-4 h-4" />
                <span className="text-sm truncate">{item.typeSellTicket}</span>
              </div>
              <button
                type="button"
                className="text-sm flex justify-end items-center"
                onClick={() => navigateToDestinationDetails(item.id)}
              >
                Selengkapnya <ArrowwhiterightRegular className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Navigation>
  );
}
