import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Form() {
  return (
    <form className="w-full  flex flex-col gap-4">
      <Input type="email" placeholder="Email" />
      <Textarea placeholder="Asunto" />
      <Button className="text-bold text-white">Enviar</Button>
    </form>
  );
}
