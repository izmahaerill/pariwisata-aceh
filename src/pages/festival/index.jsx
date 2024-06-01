import { React, useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import Festival from "../../components/cards/Festival";
import ArrowRightRegular from "../../assets/icons/arrow-right-regular";
import ArrowLeftRegular from "../../assets/icons/arrow-left-regular";
import axios from "axios";
import useSnackbar from "../../hooks/useSnackbar";
import {
  formatDateFromIsoString,
  formatToDateInput,
} from "../../utils/date.utils";

export default function Index() {
  const [months, setMonths] = useState([
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ]);

  const [index, setIndex] = useState(0);

  const [dataFestival, setDataFestival] = useState([]);
  const [filterFestival, setFilterFestival] = useState([]);
  const { Snackbar, showSnackbar } = useSnackbar();

  const refreshDataFestival = (indexMonth, festival = dataFestival) => {
    console.log(months);
    const afterFilter = festival.filter((item) => {
      return formatDateFromIsoString(item.startDate).includes(
        months[indexMonth]
      );
    });
    setFilterFestival(afterFilter);
  };

  const decreesIndex = () => {
    if (index === 0) return;
    setIndex(index - 1);
    refreshDataFestival(index - 1);
  };

  const creesIndex = () => {
    if (index === months.length - 1) return;
    setIndex(index + 1);
    refreshDataFestival(index + 1);
  };

  const getFestivalFromApi = async () => {
    showSnackbar(true, "get data...");
    try {
      const { data } = await axios.get(
        `https://be-pariwisata-aceh.vercel.app/festival/all`
      );
      showSnackbar(false, null);
      setMonths([
        ...months.filter((month) => {
          const result = data.data.findIndex((item) =>
            formatDateFromIsoString(item.startDate).includes(month)
          );
          console.log(result);
          if (result !== -1) return true;
          return false;
        }),
      ]);
      setDataFestival(data.data);
      refreshDataFestival(index, data.data);
    } catch (error) {
      showSnackbar(true, error.response.data.message[0]);
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    }
  };

  useEffect(() => {
    getFestivalFromApi();
  }, []);
  return (
    <>
      <Snackbar />
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
              <h1 className="text-white">{months[index]}</h1>
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
                dataFestival={filterFestival}
                index={index}
                setIndex={setIndex}
                month={months}
              />
            </div>
          </div>
        </div>
      </Navigation>
    </>
  );
}
