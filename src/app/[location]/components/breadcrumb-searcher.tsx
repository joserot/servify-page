import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import getLabel from "@/utils/get-label";

import { locationsList, categoriesList } from "@/data/data";

interface Props {
  location: string;
  service: string;
}

export default function BreadcrumbSearcher({ location, service }: Props) {
  if (!service) return null;

  return (
    <Breadcrumb className="py-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={`/${location}`}>
              {getLabel(location, locationsList)}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{getLabel(service, categoriesList)}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
