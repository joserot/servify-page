"use client";

import BigImage from "./big-image";

import { useState } from "react";

interface Props {
  professional: Professional;
}

export default function Jobs({ professional }: Props) {
  const [image, setImage] = useState("");

  if (!professional.jobsImages.length)
    return (
      <div className="w-full pt-10">
        <p>Aún no hay fotos de trabajos realizados</p>
      </div>
    );

  const handleClick = (newImage: string) => {
    setImage(newImage);
  };

  return (
    <>
      <BigImage
        image={image}
        setImage={setImage}
        imagesList={professional.jobsImages}
      />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-10">
        {professional.jobsImages.map((image, i) => {
          return (
            <img
              onClick={() => handleClick(image)}
              className="h-auto w-full object-cover rounded-sm cursor-pointer"
              key={i}
              src={image}
              width={200}
              height={200}
              alt="Trabajo realizado"
            />
          );
        })}
      </div>
    </>
  );
}
