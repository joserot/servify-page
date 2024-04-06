import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function GoogleButton() {
  return (
    <Button className="w-full flex gap-2 items-center" variant={"outline"}>
      <Image src="/google.webp" width={20} height={20} alt="logo de Google" />
      Google
    </Button>
  );
}
