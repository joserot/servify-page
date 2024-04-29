import Link from "next/link";

export default function RegisterLink() {
  return (
    <p className="text-foreground text-center">
      ¿No tienes una cuenta?{" "}
      <Link className="underline" href={"/register"}>
        Registrate
      </Link>
    </p>
  );
}
