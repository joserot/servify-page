import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import ButtonDeleteUser from "./button-delete-user";

import getDateFormat from "@/utils/get-date-format";

interface Props {
  users: User[];
}

export function TableUsers({ users }: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
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
            <TableCell>{user.name + " " + user.lastName}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{getDateFormat(user.createdAt)}</TableCell>
            <TableCell>
              <img
                className="rounded-full w-10 h-10"
                src={user.image}
                width={30}
                height={30}
              />
            </TableCell>
            <TableCell>
              <ButtonDeleteUser id={user.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
