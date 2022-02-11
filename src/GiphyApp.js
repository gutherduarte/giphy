import React, { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiphyApp = () => {
  const [categories, setCategories] = useState(["random"]);

  return (
    <>
      <AddCategory setCategories={setCategories} />
      {categories.map((cat) => (
        <GifGrid key={cat} category={cat} />
      ))}
    </>
  );
};
