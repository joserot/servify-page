import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Form() {
  return (
    <form className="w-full  flex flex-col gap-4">
      <Input type="email" placeholder="Email" />
      <Input type="tel" placeholder="Teléfono" />
      <Input type="text" placeholder="Profesión" />
      <Textarea placeholder="Cuentanos algo sobre ti." />
      <Button className="text-bold text-white">¡Ofrecé tus servicios!</Button>
    </form>
  );
}
