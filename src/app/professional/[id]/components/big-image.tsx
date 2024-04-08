import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  image: string;
  setImage: (image: string) => void;
  imagesList: string[];
}

export default function BigImage({ image, setImage, imagesList }: Props) {
  if (!image) return null;

  const handleClose = () => {
    setImage("");
  };

  const handleGoRight = () => {
    const imageActiveIndex = imagesList.findIndex((el) => {
      return el === image;
    });

    const nextImage = imagesList[imageActiveIndex + 1];

    if (nextImage) {
      setImage(nextImage);
    } else {
      setImage(imagesList[0]);
    }
  };

  const handleGoLeft = () => {
    const imageActiveIndex = imagesList.findIndex((el) => {
      return el === image;
    });

    const prevImage = imagesList[imageActiveIndex - 1];

    if (prevImage) {
      setImage(prevImage);
    } else {
      setImage(imagesList[imagesList.length - 1]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <Button
        onClick={handleClose}
        className="absolute top-4 right-4 md:top-20 md:right-20 flex items-center justify-center w-10 h-10 md:w-16 md:h-16 text-3xl"
      >
        <FontAwesomeIcon className="w-16" icon={faXmark} />
      </Button>
      <Button
        onClick={handleGoRight}
        className="absolute translate-y-[50%] right-4 md:right-20 flex items-center justify-center w-10 h-10 md:w-16 md:h-16 text-3xl"
      >
        <FontAwesomeIcon className="w-16" icon={faArrowRight} />
      </Button>
      <Button
        onClick={handleGoLeft}
        className="absolute translate-y-[50%] left-4 md:left-20 flex items-center justify-center w-10 h-10 md:w-16 md:h-16 text-3xl"
      >
        <FontAwesomeIcon className="w-16" icon={faArrowLeft} />
      </Button>
      <img
        src={image}
        width={500}
        className="w-11/12 max-w-[700px] h-auto object-cover rounded-sm"
      />
    </div>
  );
}
