import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import getDateFormat from "@/utils/get-date-format";

interface Props {
  contacts: ContactProfessional[];
}

export function TableContacts({ contacts }: Props) {
  if (!contacts || !contacts.length) return null;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Fecha</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Teléfono</TableHead>
          <TableHead>Profesión</TableHead>
          <TableHead>Ubicación</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contacts.map((contact) => (
          <TableRow key={contact.id}>
            <TableCell>{getDateFormat(contact.date)}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell>{contact.service}</TableCell>
            <TableCell>{contact.location}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
