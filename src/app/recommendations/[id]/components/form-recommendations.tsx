"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import createRecommendation from "../services/create-recommendation";

import { useToast } from "@/components/ui/use-toast";

import { useState } from "react";

import revalidateUrl from "@/app/actions";

interface Props {
  id: string;
  user: User | null;
}

export default function FormRecommendations({ id, user }: Props) {
  const { toast } = useToast();

  const [like, setLike] = useState<boolean>(true);
  const [uploaded, setUploaded] = useState<boolean>(false);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = !user
      ? event.currentTarget.userName.value
      : user.name + " " + user.lastName;
    const text = event.currentTarget.text.value;
    const avatar = !user ? "" : user.image;

    const response = await createRecommendation(id, like, name, text, avatar);

    if (response.status === 201 || response.status === 200) {
      setUploaded(true);
      revalidateUrl("/searcher");
    } else {
      toast({
        variant: "destructive",
        title: response,
      });
    }
  };

  if (uploaded)
    return (
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <p className="text-lg font-semibold text-center">
          ¡Gracias por tu recomendación!
        </p>
        <FontAwesomeIcon
          className="w-16 h-auto text-primary"
          icon={faCircleCheck}
        />
      </div>
    );

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
      <div>
        <span className="block mb-2 text-lg font-bold">
          Califica el servicio
        </span>
        <div className="flex gap-1 justify-start items-center">
          <Button
            variant={like ? "default" : "outline"}
            onClick={(event) => {
              event.preventDefault();
              setLike(true);
            }}
            className="flex items-center gap-2"
          >
            Bueno <FontAwesomeIcon icon={faThumbsUp} />
          </Button>
          <Button
            onClick={(event) => {
              event.preventDefault();
              setLike(false);
            }}
            variant={!like ? "destructive" : "outline"}
            className="flex items-center gap-2"
          >
            Malo <FontAwesomeIcon icon={faThumbsDown} />
          </Button>
        </div>
      </div>
      {!user ? <Input required name="userName" placeholder="Nombre" /> : null}
      <Textarea name="text" placeholder="Recomendación (opcional)" />
      <Button className="self-end">Enviar</Button>
    </form>
  );
}
