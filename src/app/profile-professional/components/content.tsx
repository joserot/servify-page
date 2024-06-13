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
      <Form professional={professionalData} />
    </>
  );
}
