import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  categoriesList,
  locationsList,
  modalityList,
  verificationsList,
  statusList,
} from "@/data/data";

export default function Filters() {
  return (
    <section
      className="
      hidden
      lg:flex
      justify-center
      items-center
      w-1/3
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
                {modalityList.map((modality) => {
                  return (
                    <div
                      key={modality.value}
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem
                        value={modality.value}
                        id={modality.value}
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
