"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import sendMessage from "../services/send-message";

import { useToast } from "@/components/ui/use-toast";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import { LoadingButton } from "@/components/ui/loading-button";

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
    const subject = event.currentTarget.subject.value;
    const message = event.currentTarget.message.value;

    setIsLoading(true);

    const response = await sendMessage(email, subject, message);

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
          ¡Gracias por tu mensaje!
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
      <Input type="text" placeholder="Asunto" name="subject" />
      <Textarea placeholder="Mensaje" name="message" />
      <LoadingButton loading={isLoading} className="text-bold text-white">
        Enviar
      </LoadingButton>
    </form>
  );
}
