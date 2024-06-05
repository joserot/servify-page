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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { LoadingButton } from "@/components/ui/loading-button";
import { Separator } from "@/components/ui/separator";

import { useToast } from "@/components/ui/use-toast";

import { useState } from "react";

import {
  categoriesList,
  locationsList,
  modalityList,
  daysList,
  timesList,
} from "@/data/data";

export default function Form() {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = event.currentTarget.userName.value;
    const lastName = event.currentTarget.lastName.value;
    const email = event.currentTarget.email.value;
    const price = event.currentTarget.price.value;
    const service = event.currentTarget.service.value;
    const location = event.currentTarget.location.value;
    const locationService = event.currentTarget.locationService.value;
    const startDay = event.currentTarget.startDay.value;
    const endDay = event.currentTarget.endDay.value;
    const startTime = event.currentTarget.startTime.value;
    const endTime = event.currentTarget.endTime.value;
    const phone = event.currentTarget.phone.value;
    const description = event.currentTarget.description.value;

    return;

    setIsLoading(true);

    // const response = await addProfessional(
    //   email,
    //   name,
    //   lastName,
    //   service,
    //   location,
    //   locationService,
    //   phone,
    //   description,
    //   startDay,
    //   endDay,
    //   startTime,
    //   endTime,
    //   verifications,
    //   price,
    //   avatar
    // );

    // setIsLoading(false);

    // if (response.status === 201 || response.status === 200) {
    //   revalidateUrl("/dashboard/professionals");
    //   setOpen(false);
    // } else {
    //   toast({
    //     variant: "destructive",
    //     title: response,
    //   });
    // }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <span className="block text-xl font-semibold">Información personal</span>

      <div className="flex flex-col gap-4 md:flex-row">
        <Label className="flex flex-col gap-1 w-full md:w-1/2">
          Nombre
          <Input required placeholder="Ej. Juan" name="userName" />
        </Label>
        <Label className="flex flex-col gap-1 w-full md:w-1/2">
          Apellido
          <Input required placeholder="Ej. Perez" name="lastName" />
        </Label>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <Label className="flex flex-col gap-1 w-full md:w-1/2">
          Email
          <Input
            required
            type="email"
            placeholder="Ej. juan@perez.com"
            name="email"
          />
        </Label>

        <Label className="flex flex-col gap-1 w-full md:w-1/2">
          Contraseña
          <Input
            required
            type="password"
            placeholder="********"
            name="password"
          />
        </Label>
      </div>

      <Label className="flex flex-col gap-1 w-full">
        Descripción
        <Textarea
          required
          placeholder="Me dedico a esto hace 5 años..."
          name="description"
        />
      </Label>

      <Separator />

      <span className="block text-xl font-semibold">
        Información sobre tu servicio
      </span>

      <div className="flex flex-col gap-4 md:flex-row">
        <Label className="flex flex-col gap-1 w-full md:w-1/2">
          ¿Que servicio ofreces?
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
        </Label>

        <Label className="flex flex-col gap-1 w-full md:w-1/2">
          ¿En qué ubicación ofreces?
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
        </Label>
      </div>

      <Label className="flex flex-col gap-1">
        ¿En donde ofreces el servicio?
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
      </Label>

      <Label className="flex flex-col gap-1 w-full">
        Teléfono de contacto
        <Input required placeholder="Ej. +543756435953" name="phone" />
      </Label>

      <Label className="flex flex-col gap-1 w-full">
        Precio mínimo (En pesos)
        <Input type="number" required placeholder="Ej. 10000" name="price" />
      </Label>

      <Separator />

      <span className="block text-xl font-semibold">
        Información sobre tus horarios
      </span>

      <div className="flex flex-col gap-4 md:flex-row">
        <Label className="flex flex-col gap-1 w-full md:w-1/2">
          Desde el día
          <Select required name="startDay">
            <SelectTrigger>
              <SelectValue placeholder="Selecciona el día" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {daysList.map((day) => {
                  return (
                    <SelectItem key={day.value} value={day.value}>
                      {day.label}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Label>
        <Label className="flex flex-col gap-1 w-full md:w-1/2">
          Hasta el día
          <Select required name="endDay">
            <SelectTrigger>
              <SelectValue placeholder="Selecciona el día" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {daysList.map((day) => {
                  return (
                    <SelectItem key={day.value} value={day.value}>
                      {day.label}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Label>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <Label className="flex flex-col gap-1 w-full md:w-1/2">
          Desde el horario
          <Select required name="startTime">
            <SelectTrigger>
              <SelectValue placeholder="Selecciona el horario" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {timesList.map((time) => {
                  return (
                    <SelectItem key={time.value} value={time.value}>
                      {time.label}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Label>

        <Label className="flex flex-col gap-1 w-full md:w-1/2">
          Hasta el horario
          <Select required name="endTime">
            <SelectTrigger>
              <SelectValue placeholder="Selecciona el horario" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {timesList.map((time) => {
                  return (
                    <SelectItem key={time.value} value={time.value}>
                      {time.label}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Label>
      </div>

      <LoadingButton loading={isLoading}>Registrate</LoadingButton>
    </form>
  );
}
