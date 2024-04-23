import SideNav from "../../components/side-nav";
import { TableUsers } from "./components/table-users";

import getUsers from "../users/services/get-users";

export default async function DashboardUsersPage() {
  const users: User[] = await getUsers();

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <span className="mb-5 text-3xl font-bold block">Usuarios</span>
        {!users ? (
          <p>No hay usuarios registrados</p>
        ) : (
          <TableUsers users={users} />
        )}
      </div>
    </div>
  );
}
