import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import getDateFormat from "@/utils/get-date-format";

import ButtonDeleteRecommend from "./button-delete-recommend";
import ButtonEditRecommend from "./button-edit-recommend";

interface Props {
  recommendations: Recommend[];
}

export function TableRecommendations({ recommendations }: Props) {
  if (!recommendations || !recommendations.length) return null;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Fecha</TableHead>
          <TableHead>
            <FontAwesomeIcon className="text-primary" icon={faThumbsUp} /> /{" "}
            <FontAwesomeIcon className="text-red-500" icon={faThumbsDown} />
          </TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Texto</TableHead>
          <TableHead>Activo/Inactivo</TableHead>
          <TableHead>Destacado</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recommendations.map((recommend) => (
          <TableRow key={recommend.id}>
            <TableCell>{getDateFormat(recommend.createdAt)}</TableCell>
            <TableCell>
              {recommend.like ? (
                <FontAwesomeIcon className="text-primary" icon={faThumbsUp} />
              ) : (
                <FontAwesomeIcon className="text-red-500" icon={faThumbsDown} />
              )}
            </TableCell>
            <TableCell>{recommend.name}</TableCell>
            <TableCell>
              {recommend.text && recommend.text.length > 40
                ? recommend.text.slice(0, 40) + "..."
                : recommend.text}
            </TableCell>
            <TableCell>{recommend.active ? "Activo" : "Inactivo"}</TableCell>
            <TableCell>{recommend.featured ? "Si" : "No"}</TableCell>
            <TableCell className="flex gap-2 items-center">
              <ButtonEditRecommend id={recommend.id} />
              <ButtonDeleteRecommend id={recommend.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
