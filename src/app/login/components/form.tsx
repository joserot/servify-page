"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import loginEmail from "@/services/login-email";

import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    const response: any = await loginEmail({ email, password });

    if (response.status === 201) {
      router.push("/");
    } else {
      alert("Ocurrió un error");
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
      <Button className="text-bold text-white">Iniciar sesión</Button>
    </form>
  );
}
