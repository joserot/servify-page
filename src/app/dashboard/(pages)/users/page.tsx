import SideNav from "../../components/side-nav";
import { TableUsers } from "./components/table-users";

export default function DashboardUsersPage() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <span className="mb-5 text-3xl font-bold block">Usuarios</span>
        <TableUsers />
      </div>
    </div>
  );
}
