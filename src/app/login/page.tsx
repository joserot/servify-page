import Form from "./components/form";
import Separator from "./components/separator";
import GoogleButton from "./components/google-button";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex">
      <div className="hidden md:block w-1/2 min-h-[100vh] bg-primary"></div>
      <div className="w-full py-5 md:w-1/2 min-h-[100vh]">
        <div className="mx-auto w-11/12 max-w-[500px] h-full flex flex-col justify-center items-center">
          <span className="block mb-4 text-3xl font-bold text-center">
            Inicia sesión
          </span>
          <p className="mb-4 text-foreground text-center">
            Inicia sesión para contactar con especialistas en tu ciudad
          </p>
          <Form />
          <Separator />
          <GoogleButton />
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
      </div>
    </main>
  );
}
