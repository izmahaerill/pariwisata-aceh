import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowwhiterightRegular from "../../assets/icons/arrowwhiteright-regular";
import BoldBookmark from "../../assets/icons/bold-bookmark";
import Bookmark from "../../assets/icons/bookmark";
import Category from "../../assets/icons/category";
import Location from "../../assets/icons/location";
import Ticked from "../../assets/icons/ticked";

export default function DestinasiWisata({ destinations }) {
  const navigate = useNavigate();
  const [destinationData, setDestinationData] = useState([]);

  const navigateToDestinationDetails = (id) => {
    navigate(`/destinasi-wisata/${id}`);
  };

  const toggleBookmark = (destination) => {
    const updatedDestinations = destinationData.map((item) => {
      return item.id === destination.id
        ? { ...item, bookmark: !item.bookmark }
        : item;
    });

    setDestinationData(updatedDestinations);

    const bookmarkedDestinations = updatedDestinations.filter(
      (item) => item.bookmark
    );
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkedDestinations));
  };

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const initializedDestinations = destinations.map((destination) => ({
      ...destination,
      bookmark: storedBookmarks.some((item) => item.id === destination.id),
    }));

    setDestinationData(initializedDestinations);
  }, [destinations]);

  if (!destinations.length) {
    return <h1>Destinations is Loading</h1>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto">
      {destinationData.map((item) => (
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
            <div
              className="text-sm flex justify-end items-center cursor-pointer"
              onClick={() => navigateToDestinationDetails(item.id)}
            >
              Selengkapnya <ArrowwhiterightRegular className="w-4 h-4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

DestinasiWisata.propTypes = {
  destinations: PropTypes.array.isRequired,
};
