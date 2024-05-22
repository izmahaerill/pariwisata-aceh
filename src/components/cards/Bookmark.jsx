import React from "react";
import bookmark from "../../data-json/card-bookmark"; // Impor data bookmark
import BoldBookmark from "../../assets/icons/bold-bookmark"; // Ganti nama impor untuk menghindari konflik
import Location from "../../assets/icons/location";
import Category from "../../assets/icons/category";
import Ticked from "../../assets/icons/ticked";
import Arrowbase from "../../assets/icons/arrow-base";

export default function BookmarkList() {
  return (
    <div className="container mx-auto px-4 mt-20"> {/* Tambahkan margin top di sini */}
      <div className="mb-6"> {/* Tambahkan margin bottom */}
        <h1 className="text-3xl font-bold text-center text-yellow-primary">Bookmark</h1> {/* Tambahkan judul di atas */}
      </div>
      <div className="grid grid-cols-3 gap-10">
        {bookmark.map((item) => (
          <div
            key={item.id}
            className="px-5 py-5 border-2 border-yellow-primary rounded-2xl flex flex-col gap-6 w-full h-full cursor-pointer"
          >
            <img
              className="rounded-2xl w-auto h-auto bg-contain"
              src={item.url}
              width={500}
              height={500}
              layout="fixed"
              alt="seputar aceh"
            />
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                < BoldBookmark/>
              </div>
              <div className="flex justify-start items-center gap-4">
                <div className="flex flex-col gap-2">
                  <Location />
                  <Category />
                  <Ticked />
                </div>
                <div className="flex flex-col gap-4 text-md">
                  <h6>{item.location}</h6>
                  <h6>{item.typeLocation}</h6>
                  <h6>{item.typeSellTicket}</h6>
                </div>
              </div>
              <h6 className="text-sm flex justify-end items-center">
                Selengkapnya <Arrowbase />
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
