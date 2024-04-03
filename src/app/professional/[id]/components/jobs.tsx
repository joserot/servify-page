"use client";

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
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-10">
      {images.map((image, i) => {
        return (
          <img
            className="h-auto w-full object-cover rounded-sm"
            key={i}
            src={image}
            width={200}
            height={200}
          />
        );
      })}
    </div>
  );
}
