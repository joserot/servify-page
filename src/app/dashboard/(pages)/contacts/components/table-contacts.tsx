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
  contacts: Contact[];
}

export function TableContacts({ contacts }: Props) {
  if (!contacts || !contacts.length) return null;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Fecha</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Asunto</TableHead>
          <TableHead>Mensaje</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contacts.map((contact) => (
          <TableRow key={contact.id}>
            <TableCell>{getDateFormat(contact.date)}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.subject}</TableCell>
            <TableCell>
              {contact.message.length > 40
                ? contact.message.slice(0, 40) + "..."
                : contact.message}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
