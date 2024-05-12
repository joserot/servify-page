"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faBriefcase,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { useParams } from "next/navigation";

import { categoriesList, locationsList } from "@/data/data";

import { Suspense } from "react";

import ModalLocation from "./modal-location";

interface Props {
  background?: boolean;
}

export function Searcher({ background = true }: Props) {
  return (
    <Suspense>
      <SearcherBar background={background} />
    </Suspense>
  );
}

function SearcherBar({ background = true }: Props) {
  const params = useParams<{ location: string; service: string }>();

  const professionQuery = params.service;
  const locationQuery = params.location;

  const [openCategories, setOpenCategories] = useState(false);
  const [category, setCategory] = useState<string | null>(professionQuery);

  const [openLocations, setOpenLocations] = useState(false);
  const [location, setLocation] = useState<string | null>(locationQuery);

  const [isOpenModalLocations, setIsOpenModalLocations] = useState(false);

  const router = useRouter();

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!category && !location) {
      setIsOpenModalLocations(true);
      return;
    } else if (category && !location) {
      setIsOpenModalLocations(true);
      return;
    } else if (!category && location) {
      router.push(`/${location}`);
    } else {
      router.push(`/${location}/${category}`);
    }
  };

  return (
    <>
      <ModalLocation
        isOpen={isOpenModalLocations}
        service={category}
        setOpen={setIsOpenModalLocations}
      />

      <form
        onSubmit={handleSubmit}
        className={`
      w-full 
      flex
      flex-col
      gap-2
      relative
      overflow-hidden
      ${background ? "bg-gray-400" : ""}
      rounded-md
      p-2
      md:p-0
      md:bg-background
      md:rounded-full
      md:flex-row`}
      >
        <Popover open={openCategories} onOpenChange={setOpenCategories}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openCategories}
              className="w-full md:w-5/12 gap-2 justify-start items-center border-none md:rounded-none h-11 overflow-hidden"
            >
              <FontAwesomeIcon
                icon={faBriefcase}
                className="ml-2 h-4 w-4 shrink-0 opacity-50"
              />

              {category
                ? categoriesList.find(
                    (framework) => framework.value === category
                  )?.label
                : "¿Que servicio necesitas?"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command className="w-full min-w-[90vw] md:min-w-0">
              <CommandList>
                <CommandInput placeholder="Busca ayuda en..." />
                <CommandEmpty>No hay resultados</CommandEmpty>
                <CommandGroup>
                  {categoriesList.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setCategory(
                          currentValue === category ? "" : currentValue
                        );
                        setOpenCategories(false);
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={cn(
                          "mr-2 h-4 w-4",
                          category === framework.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {framework.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Popover open={openLocations} onOpenChange={setOpenLocations}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openLocations}
              className="w-full md:w-5/12 gap-2 justify-start items-center border-none md:rounded-none h-11 overflow-hidden"
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                className="ml-2 h-4 w-4 shrink-0 opacity-50"
              />
              {location
                ? locationsList.find(
                    (framework) => framework.value === location
                  )?.label
                : "¿Cuál es tu ubicación?"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command className="w-full min-w-[90vw] md:min-w-0">
              <CommandList>
                <CommandInput placeholder="En donde lo necesitas..." />
                <CommandEmpty>No hay resultados</CommandEmpty>
                <CommandGroup>
                  {locationsList.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setLocation(
                          currentValue === location ? "" : currentValue
                        );
                        setOpenLocations(false);
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={cn(
                          "mr-2 h-4 w-4",
                          location === framework.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {framework.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Button
          className="
        flex
        items-center
        gap-2
        w-full 
        right-1
        top-1
        md:rounded-full
        md:absolute
        md:h-9
        md:w-9"
        >
          <span className="md:hidden">Buscar</span>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </form>
    </>
  );
}
