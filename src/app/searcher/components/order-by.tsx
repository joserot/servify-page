"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { useRef } from "react";

export default function OrderBy() {
  const ref = useRef();

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (order: string) => {
    const params = new URLSearchParams(searchParams);

    if (order === "") {
      params.delete("orderBy");
    } else {
      params.set("orderBy", order);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-full mb-5">
      <label className="flex  justify-end items-center gap-1 flex-wrap text-sm">
        Ordenar Por:
        <Select
          onValueChange={(value) => {
            handleChange(value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecciona" />
          </SelectTrigger>
          <SelectContent
            ref={(ref) => {
              if (!ref) return;
              ref.ontouchstart = (e) => {
                e.preventDefault();
              };
            }}
          >
            <SelectGroup>
              <SelectItem value="likes">Más me gustas</SelectItem>
              <SelectItem value="price">Mejor precio</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </label>
    </div>
  );
}
