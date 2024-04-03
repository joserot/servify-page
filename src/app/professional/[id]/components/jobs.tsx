"use client";

import { Gallery } from "react-grid-gallery";

const images = [
  {
    src: "/service-3.jpg",
    width: 320,
    height: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/service-2.jpg",
    width: 320,
    height: 212,
    alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "/service-4.jpg",
    width: 320,
    height: 212,
  },
];

export default function Jobs() {
  return (
    <div className="w-full">
      <Gallery enableImageSelection={false} images={images} />
    </div>
  );
}
