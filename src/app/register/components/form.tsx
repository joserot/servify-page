import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Form() {
  return (
    <form className="w-full  flex flex-col gap-4">
      <Input type="text" placeholder="Nombre" />
      <Input type="text" placeholder="Apellido" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Contraseña" />
      <Input type="password" placeholder="Confirma tu contraseña" />
      <Button className="text-bold text-white">Registrarse</Button>
    </form>
  );
}
