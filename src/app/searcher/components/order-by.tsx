import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function OrderBy() {
  return (
    <div className="w-full mb-5">
      <label className="flex  justify-end items-center gap-1 flex-wrap text-sm">
        Ordenar Por:
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecciona" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1">Más Destacados</SelectItem>
              <SelectItem value="2">Más Recomendados</SelectItem>
              <SelectItem value="3">Más Experiencia</SelectItem>
              <SelectItem value="4">Menor Precio</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </label>
    </div>
  );
}
