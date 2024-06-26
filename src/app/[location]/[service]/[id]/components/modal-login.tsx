import { DialogContent, DialogFooter } from "@/components/ui/dialog";

import Form from "./form-login";
import GoogleButton from "@/components/google-button";
import Separator from "./separator";

import Link from "next/link";

interface Props {
  professional: Professional;
}

export default function ModalLogin({ professional }: Props) {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <div className="mx-auto w-11/12 max-w-[500px] h-full flex flex-col justify-center items-center">
        <span className="block mb-4 text-3xl font-bold text-center">
          Inicia sesión
        </span>
        <p className="mb-4 text-foreground text-center">
          Inicia sesión para contactar con especialistas en tu ciudad
        </p>
        <GoogleButton
          location={professional.location}
          service={professional.service}
          id={professional.id}
        />
        <Separator />
        <Form />
        <p className="mb-4 text-foreground text-center mt-5">
          Al hacer click en continuar aceptas nuestros{" "}
          <Link className="underline" href={"/"}>
            términos y condiciones
          </Link>{" "}
          y{" "}
          <Link className="underline" href={"/"}>
            políticas de privacidad
          </Link>{" "}
        </p>
      </div>
      <DialogFooter>
        <div className="w-full flex justify-center items-center">
          <p className="text-center">
            ¿No tienes cuenta?{" "}
            <Link className="underline" href={"/register"}>
              Registrate
            </Link>
          </p>
        </div>
      </DialogFooter>
    </DialogContent>
  );
}
