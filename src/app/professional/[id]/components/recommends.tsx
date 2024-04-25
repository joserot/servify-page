import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import getRecommendsOfProfessional from "../service/get-recommends-of-professional";

interface Props {
  professionalId: string;
}

export default async function Recommends({ professionalId }: Props) {
  const recommends: Recommend[] = await getRecommendsOfProfessional(
    professionalId
  );

  const recommendsFilter = recommends.filter((r) => {
    return r.name && r.like;
  });

  if (!recommendsFilter.length)
    return (
      <div className="w-full pt-10">
        <p>Aún no hay recomendaciones</p>
      </div>
    );

  return (
    <div className="w-full pt-10">
      {recommendsFilter.map((r, i) => {
        return (
          <div key={i}>
            <div className="flex gap-3 items-center mb-1">
              <Avatar>
                <AvatarImage
                  src={r.image}
                  alt={r.name ? r.name : "Persona que recomienda"}
                />
                <AvatarFallback>{r.name ? r.name[0] : ""}</AvatarFallback>
              </Avatar>

              {r.like ? (
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold block">{r.name}</span>
                    <FontAwesomeIcon
                      className="text-primary"
                      icon={faThumbsUp}
                    />
                  </div>
                  {r.text ? (
                    <p className="text-sm text-foreground">{r.text}</p>
                  ) : null}
                </div>
              ) : null}
            </div>

            <Separator className="my-4" />
          </div>
        );
      })}
    </div>
  );
}
