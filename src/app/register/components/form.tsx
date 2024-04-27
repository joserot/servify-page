"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import register from "@/services/register";

import { useRouter } from "next/navigation";

import revalidateUrl from "@/app/actions";

export default function Form() {
  const router = useRouter();

  const { toast } = useToast();

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = event.currentTarget.userName.value;
    const lastName = event.currentTarget.lastName.value;
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    const response = await register({ name, lastName, email, password });

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
      <Input required type="text" placeholder="Nombre" name="userName" />
      <Input required type="text" placeholder="Apellido" name="lastName" />
      <Input required type="email" placeholder="Email" name="email" />
      <Input
        required
        type="password"
        placeholder="Contraseña"
        name="password"
      />
      <Button>Registrarse</Button>
    </form>
  );
}
