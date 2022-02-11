import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      {loading ? (
        "Cargando..."
      ) : (
        <section className="seccion-articulos">
          {images && images.map((img) => <GifGridItem key={img.id} {...img} />)}
        </section>
      )}
    </>
  );
};
