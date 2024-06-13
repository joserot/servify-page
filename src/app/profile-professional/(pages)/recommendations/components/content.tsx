import getMyProfessionalProfile from "@/app/profile-professional/services/get-my-professional-profile";

import Qr from "./qr";
import CopyLink from "./copy-link";

interface Props {
  user: User;
}

export default async function Content({ user }: Props) {
  const professionalData: Professional = await getMyProfessionalProfile(
    user.id
  );

  return (
    <>
      <Qr professional={professionalData} />
      <CopyLink professional={professionalData} />
    </>
  );
}
