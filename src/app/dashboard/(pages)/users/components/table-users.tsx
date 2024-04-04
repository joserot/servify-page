import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    id: "1",
    name: "Jose Rotchen",
    email: "jose.rotchen14@gmail.com",
    date: "30/09/2000",
  },
  {
    id: "2",
    name: "Alberto Fernandez",
    email: "alberto@gmail.com",
    date: "20/10/2022",
  },
  {
    id: "3",
    name: "Jose Rotchen",
    email: "jose.rotchen14@gmail.com",
    date: "30/09/2000",
  },
  {
    id: "4",
    name: "Alberto Fernandez",
    email: "alberto@gmail.com",
    date: "20/10/2022",
  },
  {
    id: "5",
    name: "Jose Rotchen",
    email: "jose.rotchen14@gmail.com",
    date: "30/09/2000",
  },
  {
    id: "6",
    name: "Alberto Fernandez",
    email: "alberto@gmail.com",
    date: "20/10/2022",
  },
  {
    id: "7",
    name: "Jose Rotchen",
    email: "jose.rotchen14@gmail.com",
    date: "30/09/2000",
  },
  {
    id: "8",
    name: "Alberto Fernandez",
    email: "alberto@gmail.com",
    date: "20/10/2022",
  },
  {
    id: "9",
    name: "Jose Rotchen",
    email: "jose.rotchen14@gmail.com",
    date: "30/09/2000",
  },
  {
    id: "10",
    name: "Alberto Fernandez",
    email: "alberto@gmail.com",
    date: "20/10/2022",
  },
];

export function TableUsers() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Fecha de creación</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell>{invoice.email}</TableCell>
            <TableCell>{invoice.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
