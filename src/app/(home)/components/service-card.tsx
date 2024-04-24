"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  label: string;
  value: string;
  image: string;
}

export default function ServicesCard({ label, value, image }: Props) {
  const router = useRouter();

  const handleClick = () => router.push(`/searcher?profession=${value}`);

  return (
    <div
      onClick={handleClick}
      className="
      cursor-pointer
      w-full
      sm:max-w-sm
      rounded
      overflow-hidden
      shadow-md
      hover:shadow-lg
      transition-shadow
      flex sm:flex-col
      dark:border
      border-gray-500
      dark:hover:shadow-slate-50
      dark:hover:shadow-sm "
    >
      <Image
        src={image}
        alt={label}
        width={400}
        height={400}
        className="w-36 h-auto sm:w-full"
      />
      <div className="px-6 py-4 flex justify-center items-center">
        <div className="text-md mb-2 sm:text-center">{label}</div>
      </div>
    </div>
  );
}
