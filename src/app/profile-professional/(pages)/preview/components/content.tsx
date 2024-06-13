import getMyProfessionalProfile from "@/app/profile-professional/services/get-my-professional-profile";

import Hero from "./hero";
import Revision from "@/app/profile-professional/components/revision";
import JobsAndRecommendations from "./jobs-and-recommendations";

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
      <Hero user={user} professional={professionalData} />
      <JobsAndRecommendations professional={professionalData} />
    </>
  );
}
