import React from "react";
import seputarAceh from "../../data-json/seputar-aceh";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Navigation";

export default function DetailBerita() {
  const { id } = useParams();
  const selectedItem = seputarAceh.find((item) => item.id === parseInt(id));

  if (!id) {
    return <div>Item not found</div>;
  }

  return (
    <Navigation>
      <div className="px-20 pt-28 ">
        <div className="outline outline-2 outline-yellow-primary h-auto rounded-2xl overflow-hidden">
          <div className="flex justify-center items-center bg-yellow-primary px-10 text-2xl p-3">
            <h1 className="text-white font-semibold">Berita Seputar Aceh</h1>
          </div>
          <div className="px-10 mt-10 mb-20 ">
            <div className="w-full h-[60vh] mb-10 object-fill">
              <img
                src={selectedItem.url}
                className="w-full h-full object-cover object-center rounded-2xl"
                alt="wisata"
                style={{ objectFit: "cover" }}
              />
            </div>
            <article className="flex flex-col gap-5 px-10 text-justify">
              <h2 className="text-2xl font-medium">{selectedItem.tittle}</h2>
              <p className="text-sm">{selectedItem.timePost}</p>
              <div className="flex flex-col gap-4">
                {selectedItem.desc.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </Navigation>
  );
}
