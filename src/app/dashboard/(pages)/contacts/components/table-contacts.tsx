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
import { faEye } from "@fortawesome/free-solid-svg-icons";

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
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contacts.map((contact) => (
          <TableRow key={contact.id}>
            <TableCell>{getDateFormat(contact.date)}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.subject}</TableCell>
            <TableCell>
              {contact.message.length > 20
                ? contact.message.slice(0, 20) + "..."
                : contact.message}
            </TableCell>
            <TableCell>
              <Button>
                <FontAwesomeIcon icon={faEye} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
