"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import loginGoogle from "@/services/login-google";

interface Props {
  location?: string;
  service?: string;
  id?: string;
}

export default function GoogleButton({ location, service, id }: Props) {
  return (
    <Button
      onClick={() => {
        location && service && id
          ? loginGoogle(location, service, id)
          : loginGoogle();
      }}
      className="w-full flex gap-2 items-center"
      variant={"outline"}
    >
      <Image src="/google.webp" width={20} height={20} alt="logo de Google" />
      Ingresar con Google
    </Button>
  );
}
