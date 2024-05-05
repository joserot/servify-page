import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import getLabel from "@/utils/get-label";

import { categoriesList, locationsList } from "@/data/data";

import getDateFormat from "@/utils/get-date-format";

interface Props {
  professionals: Professional[];
}

export function TableContacts({ professionals }: Props) {
  if (!professionals || !professionals.length) return null;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Foto</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Profesión</TableHead>
          <TableHead>Ubicación</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Activo/Inactivo</TableHead>
          <TableHead>Fecha de creación</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {professionals.map((professional) => (
          <TableRow key={professional.id}>
            <TableCell className="font-medium">
              <img
                className="rounded-full w-10 h-10 object-cover"
                src={professional.image}
                width={30}
                height={30}
              />
            </TableCell>
            <TableCell>
              {professional.name + " " + professional.lastName}
            </TableCell>
            <TableCell>
              {getLabel(professional.service, categoriesList)}
            </TableCell>
            <TableCell>
              {getLabel(professional.location, locationsList)}
            </TableCell>
            <TableCell>{professional.email}</TableCell>
            <TableCell>{professional.active ? "Activo" : "Inactivo"}</TableCell>
            <TableCell>{getDateFormat(professional.createdAt)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
