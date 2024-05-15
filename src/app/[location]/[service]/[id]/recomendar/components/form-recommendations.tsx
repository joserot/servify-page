"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { LoadingButton } from "@/components/ui/loading-button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faCircleCheck,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import createRecommendation from "../services/create-recommendation";

import { useToast } from "@/components/ui/use-toast";

import { useState } from "react";

import revalidateUrl from "@/app/actions";

const initialAttributes = [
  {
    name: "Paciencia",
    checked: false,
  },
  {
    name: "Puntualidad",
    checked: false,
  },
  {
    name: "Amabilidad",
    checked: false,
  },
  {
    name: "Compromiso",
    checked: false,
  },
];

interface Props {
  id: string;
  user: User | null;
  professionalName: string;
}

export default function FormRecommendations({
  id,
  user,
  professionalName,
}: Props) {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [like, setLike] = useState<boolean>(true);
  const [uploaded, setUploaded] = useState<boolean>(false);
  const [attributes, setAttributes] = useState(initialAttributes);
  const [recommendation, setRecommendation] = useState("");

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = !user
      ? event.currentTarget.userName.value
      : user.name + " " + user.lastName;
    const text = event.currentTarget.text.value;
    const avatar = !user ? "" : user.image;

    if (text.trim().length < 10 && !like) {
      toast({
        variant: "destructive",
        title: `Introduce al menos 10 carácteres sobre cómo puede mejorar ${professionalName}`,
      });

      return;
    }

    setIsLoading(true);

    const response = await createRecommendation(id, like, name, text, avatar);

    setIsLoading(false);

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

  const handleAttributeClick = (
    event: React.SyntheticEvent<HTMLButtonElement>,
    atr: string
  ) => {
    event.preventDefault();

    changeRecommendationText(atr);

    const updatedAttributes = attributes.map((attr) =>
      attr.name === atr ? { ...attr, checked: !attr.checked } : attr
    );

    setAttributes(updatedAttributes);
  };

  const changeRecommendationText = (atr: string) => {
    let recommendationText = recommendation;

    const thisAtr = attributes.find((attribute) => attribute.name === atr);
    if (thisAtr && !thisAtr.checked) {
      recommendationText = recommendationText + atr + " ";
      setRecommendation(recommendationText);
    } else if (thisAtr && thisAtr.checked) {
      const atrRegex = new RegExp(`\\b${thisAtr.name}\\b`, "g");
      recommendationText = recommendationText.replace(atrRegex, "");
      setRecommendation(recommendationText);
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
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
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
              setRecommendation("");
            }}
            className="flex items-center gap-2"
          >
            Bueno <FontAwesomeIcon icon={faThumbsUp} />
          </Button>
          <Button
            onClick={(event) => {
              event.preventDefault();
              setLike(false);
              setRecommendation("");
            }}
            variant={!like ? "destructive" : "outline"}
            className="flex items-center gap-2"
          >
            Malo <FontAwesomeIcon icon={faThumbsDown} />
          </Button>
        </div>
      </div>
      {!user ? (
        <Input required name="userName" placeholder="Tu nombre" />
      ) : null}

      {like ? (
        <div>
          <span className="font-medium">
            Selecciona cualidades de {professionalName} (opcional)
          </span>
          <div className="flex flex-wrap gap-2">
            {attributes.map((attribute) => {
              return (
                <Button
                  onClick={(e) => handleAttributeClick(e, attribute.name)}
                  key={attribute.name}
                  className="flex items-center gap-2"
                  variant="outline"
                >
                  {attribute.name}
                  {
                    <FontAwesomeIcon
                      className={attribute.checked ? "block" : "hidden"}
                      icon={faCheck}
                    />
                  }
                </Button>
              );
            })}
          </div>
        </div>
      ) : null}

      <Textarea
        name="text"
        placeholder={
          like
            ? "Recomendación (opcional)"
            : `Introduce al menos 10 carácteres sobre cómo puede mejorar ${professionalName}`
        }
        value={recommendation}
        onChange={(e) => {
          setRecommendation(e.target.value);
        }}
      />
      <LoadingButton loading={isLoading} className="self-end">
        Enviar
      </LoadingButton>
    </form>
  );
}
