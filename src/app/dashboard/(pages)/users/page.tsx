import SideNav from "../../components/side-nav";
import { TableUsers } from "./components/table-users";

import getUsers from "../users/services/get-users";
import getProfile from "@/services/get-profile";

import validateUserRole from "../../functions/validate-user-role";

export default async function DashboardUsersPage() {
  const users: User[] = await getUsers();
  const user: User = await getProfile();

  const validateUser = validateUserRole(user);

  if (!validateUser) return null;

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
