"use client";

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

import { useToast } from "@/components/ui/use-toast";

import { useState } from "react";

import addProfessional from "../services/add-professional";

import {
  categoriesList,
  locationsList,
  modalityList,
  verificationsList,
} from "@/data/data";

import revalidateUrl from "@/app/actions";

interface Props {
  setOpen: (open: boolean) => void;
}

export default function FormAddProfessional({ setOpen }: Props) {
  const { toast } = useToast();

  const [checkboxes, setCheckboxes] = useState(
    verificationsList.map((v) => {
      return { value: v.value, label: v.label, checked: false };
    })
  );

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = event.currentTarget.userName.value;
    const lastName = event.currentTarget.lastName.value;
    const email = event.currentTarget.email.value;
    const price = event.currentTarget.price.value;
    const service = event.currentTarget.service.value;
    const location = event.currentTarget.location.value;
    const locationService = event.currentTarget.locationService.value;
    const phone = event.currentTarget.phone.value;
    const description = event.currentTarget.description.value;
    const verifications = checkboxes
      .filter((checkbox) => {
        return checkbox.checked;
      })
      .map((c) => {
        return c.value;
      });
    const avatar = event.currentTarget.image.files[0];

    const response = await addProfessional(
      email,
      name,
      lastName,
      service,
      location,
      locationService,
      phone,
      description,
      verifications,
      price,
      avatar
    );

    if (response.status === 201 || response.status === 200) {
      revalidateUrl("/dashboard/professionals");
      setOpen(false);
    } else {
      toast({
        variant: "destructive",
        title: response,
      });
    }
  };

  const handleCheckboxClick = async (checkboxValue: string) => {
    let updatedCheckboxes = [...checkboxes];
    let index = updatedCheckboxes.findIndex((x) => checkboxValue === x.value);
    if (index !== -1) {
      updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
      setCheckboxes(updatedCheckboxes);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <Input required placeholder="Nombre" name="userName" />
      <Input required placeholder="Apellido" name="lastName" />
      <Input required placeholder="Email" type="email" name="email" />

      <Select required name="service">
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
      <Select required name="location">
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
      <Select required name="locationService">
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
      <Input required placeholder="Teléfono" name="phone" />
      <Textarea required placeholder="Descripción" name="description" />

      <Input placeholder="Precio mínimo" type="number" name="price" />

      <Label className="flex flex-col gap-1">
        Foto de perfil
        <Input type="file" name="image" />
      </Label>

      {checkboxes.map((varification) => {
        return (
          <div key={varification.value} className="flex items-center space-x-2">
            <Checkbox
              id={varification.value}
              name={varification.value}
              checked={varification.checked}
              onClick={() => {
                handleCheckboxClick(varification.value);
              }}
            />
            <label
              htmlFor={varification.value}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {varification.label}
            </label>
          </div>
        );
      })}

      <Button>Agregar profesional</Button>
    </form>
  );
}
