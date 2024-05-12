"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import { locationsList } from "@/data/data";

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
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/navigation";

interface Props {
  isOpen: boolean;
  service: string | null;
  setOpen: (open: boolean) => void;
}

export default function ModalLocation({ isOpen, service, setOpen }: Props) {
  const [openLocations, setOpenLocations] = useState(false);
  const [location, setLocation] = useState("");

  const router = useRouter();

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!service) {
      router.push(`/${location}`);
    } else {
      router.push(`/${location}/${service}`);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="mx-auto w-11/12 max-w-[500px] h-full flex flex-col justify-center items-center">
          <span className="block mb-4 text-3xl font-bold text-center">
            ¿Cuál es tu ubicación?
          </span>
          <p className="mb-4 text-foreground text-center">
            Necesitamos conocer tu ubicación para conectar con especialistas en
            tu ciudad
          </p>
          <form
            onSubmit={handleSubmit}
            className="
      w-full 
      flex
      flex-col
      gap-2
      relative
      overflow-hidden
      bg-gray-400
      rounded-md
      p-2
      border 
      border-input
      md:p-0
      md:bg-white
      md:rounded-full
      md:flex-row"
          >
            <Popover open={openLocations} onOpenChange={setOpenLocations}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openLocations}
                  className="w-full  gap-2 justify-start items-center border-none md:rounded-none h-11 overflow-hidden"
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
        </div>
      </DialogContent>
    </Dialog>
  );
}
