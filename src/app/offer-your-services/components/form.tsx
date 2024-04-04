import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Form() {
  return (
    <form className="w-full  flex flex-col gap-4">
      <Input type="email" placeholder="Email" />
      <Input type="tel" placeholder="Teléfono" />
      <Input type="text" placeholder="Profesión" />
      <Input type="text" placeholder="Ubicación" />
      <Button className="text-bold text-white">¡Ofrecé tus servicios!</Button>
    </form>
  );
}
