"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Filters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const idParam = params.get("id");

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = event.currentTarget.idProfessional.value;

    if (!id || !id.length) {
      params.delete("id");
    } else {
      params.set("id", id);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-[500px]">
      <form onSubmit={handleSubmit} className="w-full flex gap-2 items-center">
        <Input
          defaultValue={idParam ? idParam : ""}
          placeholder="Busca por ID de profesional"
          name="idProfessional"
        />
        <Button>Buscar</Button>
      </form>
    </div>
  );
}
