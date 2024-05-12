"use client";

import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";

import sendMessage from "../services/send-message";

import { useToast } from "@/components/ui/use-toast";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

interface Props {
  user: User | null;
}

export default function Form({ user }: Props) {
  const { toast } = useToast();

  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = !user ? event.currentTarget.email.value : user.email;
    const phone = event.currentTarget.phone.value;
    const service = event.currentTarget.service.value;
    const location = event.currentTarget.location.value;

    setIsLoading(true);

    const response = await sendMessage(email, phone, service, location);

    setIsLoading(false);

    if (response.status === 200 || response.status === 201) {
      toast({
        variant: "default",
        title: "Mensaje Enviado",
      });

      setSent(true);
    } else {
      toast({
        variant: "destructive",
        title: response,
      });
    }
  };

  if (sent) {
    return (
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <p className="text-lg font-semibold text-center">
          ¡Gracias por tu mensaje! Te responderemos en breve
        </p>
        <FontAwesomeIcon
          className="w-16 h-auto text-primary"
          icon={faCircleCheck}
        />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full  flex flex-col gap-4">
      {!user && <Input type="email" placeholder="Email" name="email" />}
      <Input type="tel" placeholder="Teléfono" name="phone" />
      <Input type="text" placeholder="Profesión" name="service" />
      <Input type="text" placeholder="Ubicación" name="location" />
      <LoadingButton loading={isLoading} className="text-bold text-white">
        ¡Ofrecé tus servicios!
      </LoadingButton>
    </form>
  );
}
