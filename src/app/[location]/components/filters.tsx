"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { modalityList } from "@/data/data";

export default function Filters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChangeFilter = (modality: string) => {
    const params = new URLSearchParams(searchParams);

    if (modality === "Cualquiera") {
      params.delete("locationService");
    } else {
      params.set("locationService", modality);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <section
      className="
      hidden
      lg:flex
      w-full
      h-full
      min-h-screen
      "
    >
      <div
        className="
      bg-background 
      rounded
      shadow-sm
      w-11/12
      h-auto
      lg:sticky
      lg:top-20
      self-start
      p-5
      "
      >
        <span className="font-semibold text-xl">Filtros</span>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Lugar del servicio</AccordionTrigger>
            <AccordionContent>
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={"Cualquiera"}
                    id={"Cualquiera"}
                    onClick={() => handleChangeFilter("Cualquiera")}
                  />
                  <Label htmlFor={"Cualquiera"}>{"Cualquiera"}</Label>
                </div>

                {modalityList.map((modality) => {
                  return (
                    <div
                      key={modality.value}
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem
                        value={modality.value}
                        id={modality.value}
                        onClick={() => handleChangeFilter(modality.value)}
                      />
                      <Label htmlFor={modality.value}>{modality.label}</Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
