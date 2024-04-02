"use client";

import { useState } from "react";

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

import { categoriesList, locationsList } from "@/data/data";

export function Searcher() {
  const [openCategories, setOpenCategories] = useState(false);
  const [category, setCategory] = useState("");

  const [openLocations, setOpenLocations] = useState(false);
  const [location, setLocation] = useState("");

  return (
    <form className="w-full flex relative rounded-full overflow-hidden bg-background">
      <Popover open={openCategories} onOpenChange={setOpenCategories}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openCategories}
            className="w-full md:w-5/12 gap-2 justify-start items-center border-none rounded-none h-11"
          >
            <FontAwesomeIcon
              icon={faBriefcase}
              className="ml-2 h-4 w-4 shrink-0 opacity-50"
            />

            {category
              ? categoriesList.find((framework) => framework.value === category)
                  ?.label
              : "¿Que servicio necesitas?"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
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
            className="w-full md:w-5/12 gap-2 justify-start items-center border-none rounded-none h-11"
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              className="ml-2 h-4 w-4 shrink-0 opacity-50"
            />
            {location
              ? locationsList.find((framework) => framework.value === location)
                  ?.label
              : "¿Cuál es tu ubicación?"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
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

      <Button className="absolute right-1 top-1 h-9 w-9 rounded-full">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
    </form>
  );
}
