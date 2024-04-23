import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faEye } from "@fortawesome/free-solid-svg-icons";

import ButtonEditProfessional from "./button-edit-professional";

interface Props {
  professionals: Professional[];
}

export function TableProfessionals({ professionals }: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
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
            <TableCell className="font-medium">{professional.id}</TableCell>
            <TableCell>
              {professional.name + " " + professional.lastName}
            </TableCell>
            <TableCell>{professional.service}</TableCell>
            <TableCell>{professional.location}</TableCell>
            <TableCell>{professional.email}</TableCell>
            <TableCell>{professional.active ? "Activo" : "Inactivo"}</TableCell>
            <TableCell>{professional.createdAt}</TableCell>
            <TableCell className="flex gap-2 items-center">
              <ButtonEditProfessional />
              <Button>
                <FontAwesomeIcon className="w-3" icon={faEye} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
