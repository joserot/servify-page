import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// import Link from "next/link";

interface Props {
  user: User;
}

export default function FormProfile({ user }: Props) {
  return (
    <div className="pb-5 border-b border-gray-300">
      <span className="block text-3xl font-bold mb-5">Datos de tu perfil</span>
      <form className="w-full flex flex-col gap-4">
        <Label className="flex flex-col gap-1">
          Nombre
          <Input defaultValue={user.name} placeholder="Nombre" />
        </Label>
        <Label className="flex flex-col gap-1">
          Apellido
          <Input defaultValue={user.lastName} placeholder="Apellido" />
        </Label>
        <Label className="flex flex-col gap-1">
          Email
          <Input value={user.email} placeholder="Email" disabled />
        </Label>
        {/* <span className="text-sm">
          ¿Olvidaste tu contraseña?{" "}
          <Link className="text-primary hover:underline" href="/">
            Actualizar contraseña
          </Link>
        </span> */}
        <Label className="flex flex-col gap-1">
          Foto de perfil
          <div className="flex gap-2 items-center">
            <img
              src={user.image}
              alt="Foto de perfil"
              width={30}
              height={30}
              className="w-16 h-16 rounded-full"
            />
            <Input type="file" />
          </div>
        </Label>
      </form>
    </div>
  );
}
