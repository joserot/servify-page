import Link from "next/link";

export default function Terms() {
  return (
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
  );
}
