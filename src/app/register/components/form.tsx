"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import register from "@/services/register";

import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = event.currentTarget.userName.value;
    const lastName = event.currentTarget.lastName.value;
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    const response = await register({ name, lastName, email, password });

    if (response.status === 201) {
      router.push("/");
    } else {
      alert("Ocurrió un error");
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
      <Button className="text-bold text-white">Registrarse</Button>
    </form>
  );
}
