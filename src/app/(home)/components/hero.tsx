"use client";

import Image from "next/image";

import { Searcher } from "@/components/searcher";

export default function Hero() {
  return (
    <article className="flex justify-center items-center mb-20 md:my-28 ">
      <div
        className="
            w-full
            md:w-11/12 
            max-w-7xl 
            bg-gradient-to-r
        from-blue-400
        to-primary
            md:rounded-3xl 
            flex
            flex-col
            md:flex-row
            justify-center
            items-center
            gap-5
            md:gap-0
            py-5
            md:py-0
            "
      >
        <div
          className="
            p-5 
            pb-0 
            w-full
            md:w-2/3
            lg:w-1/2
            md:pb-10
            md:p-10
            flex 
            justify-center 
            items-start 
            flex-col"
        >
          <h1 className="scroll-m-20 text-white text-4xl font-extrabold lg:text-5xl mb-6 ">
            Encontrá un profesional para el servicio que necesitas
          </h1>
          <Searcher />
        </div>
        <div
          className="
            w-full
            md:w-1/3
            lg:w-1/2
            flex 
            justify-start 
            items-start 
            p-5 
            pt-0 
            md:p-7"
        >
          <Image
            width={600}
            height={400}
            alt="servify"
            src={"/hero-home.webp"}
            className="
            w-full
             max-w-xl  
            md:w-full
            h-64
            object-cover
            lg:h-full
            rounded-tl-3xl
            rounded-br-3xl
            rounded-tr-md
            rounded-bl-md"
          />
        </div>
      </div>
    </article>
  );
}
