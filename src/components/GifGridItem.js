import React from "react";

export const GifGridItem = ({ tittle, url }) => {
  return (
    <article className="item">
      <img src={url} alt={tittle} />
      <p>{tittle}</p>
    </article>
  );
};
