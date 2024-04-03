import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Form() {
  return (
    <form className="w-full  flex flex-col gap-4">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Contraseña" />
      <Button className="text-bold text-white">Iniciar sesión</Button>
    </form>
  );
}
