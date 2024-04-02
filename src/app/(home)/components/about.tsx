import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const list = [
    "Lorem ipsum dolor sit amet consectetur adipisicing.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit porro nesciunt.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  ];

  return (
    <article
      className="
        mb-24 
        md:mb-44 
        bg-gray-100 
        flex 
        justify-center 
        items-center
        dark:bg-transparent"
    >
      <div
        className="
          w-full 
          max-w-7xl 
          flex 
          justify-center 
          items-center 
          flex-col 
          md:flex-row-reverse 
          gap-6 
          p-5
          lg:p-8"
      >
        <div className="w-full md:w-1/2">
          <Image
            className="w-full"
            src="/about.jpg"
            alt="Servify"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full md:w-1/2 md:flex md:flex-col md:justify-center md:items-start">
          <h2 className="font-bold text-2xl lg:text-3xl mb-4">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="font-semibold lg:text-lg mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sit
            molestiae, accusamus mollitia.
          </p>
          <ul className="flex flex-col gap-3">
            {list.map((item, index) => {
              return (
                <li className="font-semibold lg:text-lg" key={index}>
                  <FontAwesomeIcon
                    className="text-primary mr-2"
                    icon={faCheck}
                  />
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </article>
  );
}
