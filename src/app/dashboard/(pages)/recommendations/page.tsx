import SideNav from "../../components/side-nav";
import { TableRecommendations } from "./components/table-recommendations";

import getProfile from "@/services/get-profile";

import validateUserRole from "../../functions/validate-user-role";

import getRecommendations from "./services/get-recommendations";

export default async function DashboardUContactPage() {
  const recommendations: Recommend[] = await getRecommendations();
  const user: User = await getProfile();

  const validateUser = validateUserRole(user);

  if (!validateUser) return null;

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <div className="flex mb-5 gap-5 items-center flex-wrap">
          <span className="text-3xl font-bold block">Recomendaciones</span>
        </div>
        {!recommendations ? (
          <p>No hay recomendaciones</p>
        ) : (
          <TableRecommendations recommendations={recommendations} />
        )}
      </div>
    </div>
  );
}
