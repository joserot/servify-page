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
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface Props {
  users: User[];
}

export function TableUsers({ users }: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Fecha de creación</TableHead>
          <TableHead>Foto de perfil</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.id}</TableCell>
            <TableCell>{user.name + " " + user.lastName}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.createdAt}</TableCell>
            <TableCell>
              <img
                className="rounded-full w-10 h-10"
                src={user.image}
                width={30}
                height={30}
              />
            </TableCell>
            <TableCell>
              <Button variant={"destructive"}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
