import Link from "next/link";

export default function LoginLink() {
  return (
    <p className="text-foreground text-center">
      ¿Ya tienes una cuenta?{" "}
      <Link className="underline" href={"/login"}>
        Inicia sesión
      </Link>
    </p>
  );
}
