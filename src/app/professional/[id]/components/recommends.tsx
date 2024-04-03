import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const recommendsList = [
  {
    image: "https://github.com/shadcn.png",
    letters: "CN",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliqua quis velit metus. Duis aliquam nulla eu ultrices lacinia.",
  },
  {
    image: "https://github.com/shadcn.png",
    letters: "CN",
    stars: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliqua quis velit metus. Duis aliquam nulla eu ultrices lacinia.",
  },
  {
    image: "https://github.com/shadcn.png",
    letters: "CN",
    stars: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliqua quis velit metus. Duis aliquam nulla eu ultrices lacinia.ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "https://github.com/shadcn.png",
    letters: "CN",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliqua quis velit metus. Duis aliquam nulla eu ultrices lacinia.",
  },
  {
    image: "https://github.com/shadcn.png",
    letters: "CN",
    stars: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliqua quis velit metus. Duis aliquam nulla eu ultrices lacinia.",
  },
  {
    image: "https://github.com/shadcn.png",
    letters: "CN",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliqua quis velit metus. Duis aliquam nulla eu ultrices lacinia. ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function Recommends() {
  return (
    <div className="w-full pt-10">
      {recommendsList.map((r, i) => {
        const listStarts: string[] = [];

        for (let index = 0; index < r.stars; index++) {
          listStarts.push("-");
        }

        return (
          <div key={i}>
            <div className="flex gap-2 items-center mb-1">
              <Avatar>
                <AvatarImage src={r.image} alt="@shadcn" />
                <AvatarFallback>{r.letters}</AvatarFallback>
              </Avatar>

              <div
                className={`
              my-1
              text-sm 
              sm:text-base
              text-yellow-500 `}
              >
                {listStarts.map((start, i) => {
                  return <FontAwesomeIcon key={i} icon={faStar} />;
                })}
              </div>
            </div>
            <p className="text-sm text-foreground">{r.text}</p>
            <Separator className="my-4" />
          </div>
        );
      })}
    </div>
  );
}
