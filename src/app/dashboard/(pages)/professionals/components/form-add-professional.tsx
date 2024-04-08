import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import {
  categoriesList,
  locationsList,
  modalityList,
  verificationsList,
} from "@/data/data";

export default function FormAddProfessional() {
  return (
    <form className="w-full flex flex-col gap-4">
      <Label className="flex flex-col gap-1">
        Foto de perfil
        <Input type="file" />
      </Label>
      <Input placeholder="Nombre" />
      <Input placeholder="Apellido" />
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Selecciona la profesion" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categoriesList.map((category) => {
              return (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Selecciona la ubicación" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {locationsList.map((location) => {
              return (
                <SelectItem key={location.value} value={location.value}>
                  {location.label}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Selecciona la ubicación del servicio" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {modalityList.map((modality) => {
              return (
                <SelectItem key={modality.value} value={modality.value}>
                  {modality.label}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input placeholder="Teléfono" />

      {verificationsList.map((varification) => {
        return (
          <div key={varification.value} className="flex items-center space-x-2">
            <Checkbox id={varification.value} />
            <label
              htmlFor={varification.value}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {varification.label}
            </label>
          </div>
        );
      })}
      <Textarea placeholder="Descripción" />
      <Label className="flex flex-col gap-2">
        Imagenes de trabajos
        <div className="flex gap-1">
          <Input type="file" />
          <Button>+</Button>
        </div>
      </Label>
      <Button>Agregar profesional</Button>
    </form>
  );
}
