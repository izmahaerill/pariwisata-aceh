import { React, useState } from "react";
import Navigation from "../../components/Navigation";
import Festival from "../../components/cards/Festival";
import ArrowRightRegular from "../../assets/icons/arrow-right-regular";
import ArrowLeftRegular from "../../assets/icons/arrow-left-regular";
import festival from "../../data-json/card-festival";

export default function index() {
  const month = ["April 2024", "Mei 2024", "Juni 2024"];

  const [index, setIndex] = useState(0);

  const [dataFestival, setDataFestival] = useState(
    festival.filter((item) => month[index] === item.month)
  );

  const refreshDataFestival = (indexMonth) => {
    setDataFestival(
      festival.filter((item) => month[indexMonth] === item.month)
    );
  };

  const decreesIndex = () => {
    if (index === 0) return;
    setIndex(index - 1);
    refreshDataFestival(index - 1);
  };

  const creesIndex = () => {
    if (index === month.length - 1) return;
    setIndex(index + 1);
    refreshDataFestival(index + 1);
  };
  return (
    <>
      <Navigation>
        <div className="px-20 pt-28">
          <img
            className="w-full mb-12"
            src="/images/current-festival/festival.png"
            alt="festival aceh terbaru"
            width={500}
            height={500}
          />
          <div className="outline outline-2 outline-yellow-primary h-auto rounded-2xl overflow-hidden ">
            <div className="bg-yellow-primary flex justify-between px-10 text-2xl p-3">
              <h1 className="text-white">{month[index]}</h1>
              <div className="flex gap-3">
                <button onClick={decreesIndex}>
                  <ArrowLeftRegular />
                </button>
                <button onClick={creesIndex}>
                  <ArrowRightRegular />
                </button>
              </div>
            </div>
            <div className="py-7">
              <Festival
                dataFestival={dataFestival}
                setDataFestival={setDataFestival}
                index={index}
                setIndex={setIndex}
                month={month}
              />
            </div>
          </div>
        </div>
      </Navigation>
    </>
  );
}
