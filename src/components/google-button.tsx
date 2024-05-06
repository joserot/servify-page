"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import loginGoogle from "@/services/login-google";

export default function GoogleButton() {
  return (
    <Button
      onClick={loginGoogle}
      className="w-full flex gap-2 items-center"
      variant={"outline"}
    >
      <Image src="/google.webp" width={20} height={20} alt="logo de Google" />
      Ingresar con Google
    </Button>
  );
}
