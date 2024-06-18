import { Button } from "@/components/ui/button";
import CardPhoto from "./card-photo";
import Revision from "@/app/profile-professional/components/revision";

import getMyProfessionalProfile from "@/app/profile-professional/services/get-my-professional-profile";

import ButtonAddPhotos from "./button-add-photos";

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
      <div className="w-full flex flex-col gap-5 relative">
        {professionalData.jobsImages.length ? (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {professionalData.jobsImages.map((card, i) => {
              return (
                <CardPhoto
                  key={i}
                  src={card}
                  user={user}
                  professional={professionalData}
                />
              );
            })}
          </div>
        ) : (
          <div>
            <p className="text-foreground text-center">
              Aún no hay fotos subidas
            </p>
          </div>
        )}
        {professionalData.jobsImages.length < 10 ? (
          <div className="w-full bg-card sticky bottom-0 py-5">
            <ButtonAddPhotos professional={professionalData} user={user} />
          </div>
        ) : null}
      </div>
    </>
  );
}
