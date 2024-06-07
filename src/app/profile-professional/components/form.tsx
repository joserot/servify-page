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

import Image from "next/image";
import { Button } from "@/components/ui/button";

import sendWhatsapp from "@/utils/send-whatsapp";

export default function Form() {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");

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

  const testWhatsApp = async (
    event: React.SyntheticEvent<HTMLButtonElement>,
    phone: string
  ) => {
    event.preventDefault();

    if (!phone) {
      toast({
        variant: "destructive",
        title: "Introduce el número de WhatsApp",
      });

      return;
    }

    sendWhatsapp(phone, "Prueba numero de WhatsApp");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-4 relative"
    >
      <span className="block text-xl font-semibold">Información personal</span>

      <Label className="flex md:items-center flex-col md:flex-row gap-1 md:gap-3 w-full ">
        <span className="md:w-[150px] md:flex-shrink-0">Foto de perfil</span>
        <div className="w-full flex gap-2 items-center">
          <Image
            width={64}
            height={64}
            src={"/placeholder-user.webp"}
            alt="Foto de perfil"
            className="w-16 h-16 rounded-full object-cover object-center"
          />
          <Input required name="photo" type="file" />
        </div>
      </Label>

      <Separator />

      <Label className="flex md:items-center flex-col md:flex-row gap-1 md:gap-3 w-full ">
        <span className="md:w-[150px] md:flex-shrink-0">Nombre</span>
        <Input
          required
          placeholder="Ej. Juan"
          name="userName"
          defaultValue="Juan"
        />
      </Label>

      <Separator />

      <Label className="flex md:items-center flex-col md:flex-row gap-1 md:gap-3 w-full ">
        <span className="md:w-[150px] md:flex-shrink-0">Apellido</span>
        <Input
          required
          placeholder="Ej. Perez"
          name="lastName"
          defaultValue="Perez"
        />
      </Label>

      <Separator />

      <Label className="flex md:items-center flex-col md:flex-row gap-1 md:gap-3 w-full ">
        <span className="md:w-[150px] md:flex-shrink-0">Email</span>
        <Input
          required
          type="email"
          placeholder="Ej. juan@perez.com"
          name="email"
          defaultValue="juan@perez.com"
          disabled
        />
      </Label>

      <Separator />

      <Label className="flex md:items-center flex-col md:flex-row gap-1 md:gap-3 w-full ">
        <span className="md:w-[150px] md:flex-shrink-0">Descripción</span>
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

      <Label className="flex md:items-center flex-col md:flex-row gap-1 md:gap-3 w-full ">
        <span className="md:w-[150px] md:flex-shrink-0">
          ¿Que servicio ofreces?
        </span>
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

      <Separator />

      <Label className="flex md:items-center flex-col md:flex-row gap-1 md:gap-3 w-full ">
        <span className="md:w-[150px] md:flex-shrink-0">
          ¿En qué ubicación ofreces?
        </span>
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

      <Separator />

      <Label className="flex md:items-center flex-col md:flex-row gap-1 md:gap-3 w-full ">
        <span className="md:w-[150px] md:flex-shrink-0">
          ¿En donde ofreces el servicio?
        </span>
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

      <Separator />

      <Label className="flex md:items-center flex-col md:flex-row gap-1  md:gap-3 w-full ">
        <span className="md:w-[150px] md:flex-shrink-0">
          WhatsApp de contacto
        </span>
        <Input
          className="md:flex-grow-1"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button
          className="md:flex-shrink-0"
          onClick={(e) => {
            testWhatsApp(e, phone);
          }}
          variant="secondary"
        >
          Probar link
        </Button>
      </Label>

      <Separator />

      <Label className="flex md:items-center flex-col md:flex-row gap-1 md:gap-3 w-full ">
        <span className="md:w-[150px] md:flex-shrink-0">
          Precio mínimo (En pesos)
        </span>
        <Input type="number" required placeholder="Ej. 10000" name="price" />
      </Label>

      <Separator />

      <span className="block text-xl font-semibold">
        Información sobre tus horarios de trabajo
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

      <Separator />

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

      <div className="w-full md:bg-card sticky bottom-0 py-5">
        <LoadingButton className="w-full" loading={isLoading}>
          Guardar cambios
        </LoadingButton>
      </div>
    </form>
  );
}
