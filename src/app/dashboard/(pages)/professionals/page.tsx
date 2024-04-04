import SideNav from "../../components/side-nav";
import { TableProfessionals } from "./components/table-professionals";
import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function DashboardUsersPage() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <div className="flex mb-5 gap-5 items-center flex-wrap">
          <span className="text-3xl font-bold block">Profesionales </span>
          <Button className="flex gap-2">
            <FontAwesomeIcon className="w-3" icon={faPlus} /> Agregar
            profesional
          </Button>
        </div>

        {/* <div className="mb-5 flex justify-end">
          <Button className="flex gap-2">
            <FontAwesomeIcon className="w-3" icon={faPlus} /> Agregar
            profesional
          </Button>
        </div> */}
        <TableProfessionals />
      </div>
    </div>
  );
}
