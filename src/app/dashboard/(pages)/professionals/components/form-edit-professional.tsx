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
import { LoadingButton } from "@/components/ui/loading-button";

import { useToast } from "@/components/ui/use-toast";

import { useState, useEffect } from "react";

import editProfessional from "../services/edit-professional";
import getOneProfessional from "../services/get-one-professional";

import {
  categoriesList,
  locationsList,
  modalityList,
  verificationsList,
  statusList,
  daysList,
  timesList,
} from "@/data/data";

import revalidateUrl from "@/app/actions";

interface Props {
  id: string;
  setOpen: (open: boolean) => void;
}

export default function FormEditProfessional({ id, setOpen }: Props) {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const [professionalData, setProfessionalData] = useState<Professional | null>(
    null
  );
  const [checkboxes, setCheckboxes] = useState(
    verificationsList.map((v) => {
      return { value: v.value, label: v.label, checked: false };
    })
  );

  useEffect(() => {
    if (!id) return;

    const getProfessional = async () => {
      const professional: Professional = await getOneProfessional(id);
      setProfessionalData(professional);

      const verifications = verificationsList.map((v) => {
        let checked = false;
        if (professional.verifications.includes(v.value)) {
          checked = true;
        }
        return { value: v.value, label: v.label, checked };
      });

      setCheckboxes(verifications);
    };

    getProfessional();
  }, [id]);

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
    const active = event.currentTarget.active.value === "activo" ? "1" : "0";

    const verifications = checkboxes
      .filter((checkbox) => {
        return checkbox.checked;
      })
      .map((c) => {
        return c.value;
      });
    const avatar = event.currentTarget.image.files[0];
    const jobs = event.currentTarget.jobs.files;

    setIsLoading(true);

    const response = await editProfessional(
      id,
      email,
      name,
      lastName,
      service,
      location,
      locationService,
      phone,
      description,
      startDay,
      endDay,
      startTime,
      endTime,
      verifications,
      price,
      active,
      avatar,
      jobs
    );

    setIsLoading(false);

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

  if (!professionalData) return null;

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <Input
        defaultValue={professionalData.name}
        required
        placeholder="Nombre"
        name="userName"
      />
      <Input
        defaultValue={professionalData.lastName}
        required
        placeholder="Apellido"
        name="lastName"
      />
      <Input
        defaultValue={professionalData.email}
        required
        placeholder="Email"
        type="email"
        name="email"
      />

      <Select defaultValue={professionalData.service} required name="service">
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
      <Select defaultValue={professionalData.location} required name="location">
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
      <Select
        defaultValue={professionalData.locationService}
        required
        name="locationService"
      >
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

      <Label>
        Desde día
        <Select
          defaultValue={professionalData.startDay}
          required
          name="startDay"
        >
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
      <Label>
        Hasta día
        <Select defaultValue={professionalData.endDay} required name="endDay">
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

      <Label>
        Desde horario
        <Select
          defaultValue={professionalData.startTime}
          required
          name="startTime"
        >
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

      <Label>
        Hasta horario
        <Select defaultValue={professionalData.endTime} required name="endTime">
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

      <Select
        defaultValue={professionalData.active ? "activo" : "inactivo"}
        required
        name="active"
      >
        <SelectTrigger>
          <SelectValue placeholder="Selecciona si el profesional está activo" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {statusList.map((status) => {
              return (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Input
        defaultValue={professionalData.phone}
        required
        placeholder="Teléfono"
        name="phone"
      />
      <Textarea
        defaultValue={professionalData.description}
        required
        placeholder="Descripción"
        name="description"
      />

      <Input
        defaultValue={professionalData.price}
        placeholder="Precio mínimo"
        type="number"
        name="price"
      />

      <Label className="flex flex-col gap-1">
        Foto de perfil
        <Input type="file" name="image" />
      </Label>

      <Label className="flex flex-col gap-1">
        Fotos de trabajos
        <Input type="file" name="jobs" multiple />
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

      <LoadingButton loading={isLoading}>Editar profesional</LoadingButton>
    </form>
  );
}
