"use client";

import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/ui/loading-button";
import { useToast } from "@/components/ui/use-toast";

import loginEmail from "@/services/login-email";

import { useRouter } from "next/navigation";

import revalidateUrl from "@/app/actions";

import { useState } from "react";

export default function Form() {
  const router = useRouter();

  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    setIsLoading(true);

    const response: any = await loginEmail({ email, password });

    setIsLoading(false);

    if (response.status === 201) {
      revalidateUrl("/");
      router.push("/");
    } else {
      toast({
        variant: "destructive",
        title: response,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full  flex flex-col gap-4">
      <Input required type="email" placeholder="Email" name="email" />
      <Input
        required
        type="password"
        placeholder="Contraseña"
        name="password"
      />
      <LoadingButton loading={isLoading} className="text-bold text-white">
        Iniciar sesión
      </LoadingButton>
    </form>
  );
}
