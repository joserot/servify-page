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
import { LoadingButton } from "@/components/ui/loading-button";

import { useToast } from "@/components/ui/use-toast";

import { useState, useEffect } from "react";

import editRecommend from "../services/edit-recommend";
import getOneRecommend from "../services/get-one-recommend";

import revalidateUrl from "@/app/actions";

import { statusList, featuredList } from "@/data/data";

interface Props {
  id: string;
  setOpen: (open: boolean) => void;
}

export default function FormEditRecommend({ id, setOpen }: Props) {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const [recommendData, setRecommendData] = useState<Recommend | null>(null);

  useEffect(() => {
    if (!id) return;

    const getRecommend = async () => {
      const recommend: Recommend = await getOneRecommend(id);
      setRecommendData(recommend);
    };

    getRecommend();
  }, [id]);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    const active = event.currentTarget.active.value === "activo" ? true : false;
    const featured =
      event.currentTarget.featured.value === "destacado" ? true : false;

    const response = await editRecommend(id, active, featured);
    console.log(response);

    setIsLoading(false);

    if (response.status === 201 || response.status === 200) {
      revalidateUrl("/dashboard/recommendations");
      setOpen(false);
    } else {
      toast({
        variant: "destructive",
        title: response,
      });
    }
  };

  if (!recommendData) return null;

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <Input
        defaultValue={recommendData.name}
        required
        placeholder="Nombre"
        name="userName"
        disabled
      />

      <Textarea
        defaultValue={recommendData.text}
        required
        placeholder="Descripción"
        name="description"
        disabled
      />

      <Select
        defaultValue={recommendData.active ? "activo" : "inactivo"}
        required
        name="active"
      >
        <SelectTrigger>
          <SelectValue placeholder="Selecciona si la recomendación está activa" />
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

      <Select
        defaultValue={recommendData.featured ? "destacado" : "no-destacado"}
        required
        name="featured"
      >
        <SelectTrigger>
          <SelectValue placeholder="Selecciona si la recomendación está destacada" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {featuredList.map((status) => {
              return (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>

      <LoadingButton loading={isLoading}>Editar recomendación</LoadingButton>
    </form>
  );
}
