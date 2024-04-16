import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftItem } from "./GiftItem";

export const BuscaGift = ({ e }) => {
  const { data:images, loading } = useFetchGifs(e);

  return (
    <>
      <h3 className="animate__animated animate__fadeInDown">{e}</h3>

      {loading ? <p className="animate__animated animate__flash">Loading</p> : null}

      <div className="card-grid">
        {images.map((img) => (
          <GiftItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
