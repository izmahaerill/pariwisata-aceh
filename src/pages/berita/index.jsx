import React from "react";
import seputarAceh from "../../data-json/seputar-aceh";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Navigation";

export default function index() {
  const { id } = useParams();
  const selectedItem = seputarAceh.find((item) => item.id === parseInt(id));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <Navigation>
      <div className="pt-28">
        <h2>{selectedItem.tittle}</h2>
        <p>{selectedItem.desc}</p>
      </div>
    </Navigation>
  );
}
