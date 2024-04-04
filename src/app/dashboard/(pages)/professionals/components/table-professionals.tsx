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

const invoices = [
  {
    id: "1",
    name: "Jose Rotchen",
    email: "jose.rotchen14@gmail.com",
    job: "Electricista",
    date: "30/09/2000",
  },
  {
    id: "2",
    name: "Juan Carlos",
    email: "jcarlos12@gmail.com",
    job: "Plomero",
    date: "30/09/2000",
  },
  {
    id: "3",
    name: "Roberto Benitez",
    email: "robert4@gmail.com",
    job: "Plomero",
    date: "30/09/2000",
  },
  {
    id: "4",
    name: "Daniel Fernandez",
    email: "daniel12@gmail.com",
    job: "Elctricista",
    date: "30/09/2000",
  },
];

export function TableProfessionals() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Profesión</TableHead>
          <TableHead>Fecha de creación</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell>{invoice.email}</TableCell>
            <TableCell>{invoice.job}</TableCell>
            <TableCell>{invoice.date}</TableCell>
            <TableCell className="flex gap-2 items-center">
              <Button>
                <FontAwesomeIcon className="w-3" icon={faPen} />
              </Button>
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
