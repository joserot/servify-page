"use client";

import Link from "next/link";
import { PROJECT_NAME } from "@/constants/constants";

import { useState, useEffect } from "react";

interface Props {
  text?: string;
  images?: string[];
}

export default function Banner({ text, images }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (!images || !images.length) return;

    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images]);

  const image = images && images.length ? images[imageIndex] : null;

  const style = image
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${image})`,
      }
    : {};

  return (
    <div
      style={style}
      className={`
        hidden
        md:flex
        w-1/2
        min-h-[100vh]
        bg-gradient-to-r
        from-blue-500
        to-primary
        bg-no-repeat
        bg-cover
        bg-center
        p-10
        flex-col
        justify-between
        transition-all`}
    >
      <section>
        <Link
          href="/"
          className="
            text-4xl
            font-extrabold
            text-white
            "
        >
          {PROJECT_NAME}
        </Link>
      </section>
      {text ? <p className="text-xl text-white">{text}</p> : null}
    </div>
  );
}
