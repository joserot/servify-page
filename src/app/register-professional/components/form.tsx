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
import { Label } from "@/components/ui/label";
import { LoadingButton } from "@/components/ui/loading-button";
import { Separator } from "@/components/ui/separator";

import { useToast } from "@/components/ui/use-toast";

import { useState } from "react";

import { categoriesList, locationsList, modalityList } from "@/data/data";

import registerProfessional from "../service/register-professional";

import revalidateUrl from "@/app/actions";

import { useRouter } from "next/navigation";

export default function Form() {
  const { toast } = useToast();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = event.currentTarget.userName.value;
    const lastName = event.currentTarget.lastName.value;
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    const price = event.currentTarget.price.value;
    const service = event.currentTarget.service.value;
    const location = event.currentTarget.location.value;
    const locationService = event.currentTarget.locationService.value;
    const phone = event.currentTarget.phone.value;

    setIsLoading(true);

    const response = await registerProfessional(
      name,
      lastName,
      email,
      password,
      service,
      location,
      locationService,
      phone,
      price
    );

    if (response.status === 201 || response.status === 200) {
      revalidateUrl("/profile-professional");
      router.push("/profile-professional");
    } else {
      toast({
        variant: "destructive",
        title: response,
      });
      setIsLoading(false);
    }
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
            placeholder="**************"
            name="password"
          />
        </Label>
      </div>

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
        WhatsApp de contacto
        <Input required placeholder="Ej. +543756435953" name="phone" />
      </Label>

      <Label className="flex flex-col gap-1 w-full">
        Precio mínimo (En pesos)
        <Input type="number" required placeholder="Ej. 10000" name="price" />
      </Label>

      <LoadingButton loading={isLoading}>Registrate</LoadingButton>
    </form>
  );
}
