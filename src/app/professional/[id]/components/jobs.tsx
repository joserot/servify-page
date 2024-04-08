"use client";

import BigImage from "./big-image";

import { useState } from "react";

const images = [
  "/service-2.jpg",
  "/service-3.jpg",
  "/service-4.jpg",
  "/service-5.jpg",
  "/service-2.jpg",
  "/service-3.jpg",
  "/service-4.jpg",
  "/service-5.jpg",
  "/service-2.jpg",
  "/service-3.jpg",
  "/service-4.jpg",
  "/service-5.jpg",
  "/service-2.jpg",
  "/service-3.jpg",
  "/service-4.jpg",
  "/service-5.jpg",
];

export default function Jobs() {
  const [image, setImage] = useState("");

  const handleClick = (newImage: string) => {
    console.log(newImage);

    setImage(newImage);
  };

  return (
    <>
      <BigImage image={image} setImage={setImage} imagesList={images} />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-10">
        {images.map((image, i) => {
          return (
            <img
              onClick={() => handleClick(image)}
              className="h-auto w-full object-cover rounded-sm cursor-pointer"
              key={i}
              src={image}
              width={200}
              height={200}
            />
          );
        })}
      </div>
    </>
  );
}
