import getMyProfessionalProfile from "@/app/profile-professional/services/get-my-professional-profile";
import Revision from "./revision";

import Form from "./form";

interface Props {
  user: User;
}

export default async function Content({ user }: Props) {
  const professionalData: Professional = await getMyProfessionalProfile(
    user.id
  );

  return (
    <>
      <Revision active={professionalData.active} />
      <span className="block text-3xl font-bold my-5">Editar tu perfil</span>
      <Form professional={professionalData} />
    </>
  );
}
