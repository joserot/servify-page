"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import loginEmail from "@/services/login-email";

import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();

  const { toast } = useToast();

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    const response: any = await loginEmail({ email, password });

    if (response.status === 201) {
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
      <Label className="flex flex-col gap-1 w-full">
        Email
        <Input
          required
          type="email"
          placeholder="Ej. juanperez@email.com"
          name="email"
        />
      </Label>
      <Label className="flex flex-col gap-1 w-full">
        Contraseña
        <Input
          required
          type="password"
          placeholder="*********"
          name="password"
        />
      </Label>
      <Button className="text-bold text-white">Iniciar sesión</Button>
    </form>
  );
}
