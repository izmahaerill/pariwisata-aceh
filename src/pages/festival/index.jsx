import React from "react";
import Navigation from "../../components/Navigation";
import ArrowBase from "../../assets/icons/arrow-base";
import Festival from "../../components/cards/Festival";

export default function index() {
  return (
    <>
      <Navigation>
        <div className="px-20 pt-28">
          <img
            className=" w-full mb-12"
            src="/images/current-festival/festival.png"
            alt="festival aceh terbaru"
            width={500}
            height={500}
          />
          <div className="outline outline-2 outline-yellow-primary h-auto rounded-2xl overflow-hidden ">
            <div className="bg-yellow-primary flex justify-between px-10 text-2xl p-3">
              <h1 className="text-white">Mei 2024</h1>
              <div className="flex gap-3">
                <button>
                  <ArrowBase />
                </button>
                <button className="">
                  <ArrowBase />
                </button>
              </div>
            </div>
            <div className="py-7">
              <Festival />
            </div>
          </div>
        </div>
      </Navigation>
    </>
  );
}
