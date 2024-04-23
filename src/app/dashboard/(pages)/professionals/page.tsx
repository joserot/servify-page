import SideNav from "../../components/side-nav";
import ButtonAddProfessional from "./components/button-add-professional";
import { TableProfessionals } from "./components/table-professionals";

import getProfessionals from "./services/get-professionals";

export default async function DashboardUsersPage() {
  const professionals: Professional[] = await getProfessionals();

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <div className="flex mb-5 gap-5 items-center flex-wrap">
          <span className="text-3xl font-bold block">Profesionales</span>
          <ButtonAddProfessional />
        </div>
        {!professionals ? (
          <p>No hay profesionales registrados</p>
        ) : (
          <TableProfessionals professionals={professionals} />
        )}
      </div>
    </div>
  );
}
