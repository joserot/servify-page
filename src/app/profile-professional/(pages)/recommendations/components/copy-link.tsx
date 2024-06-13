"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

import { useToast } from "@/components/ui/use-toast";

import { SITE_URL } from "@/constants/constants";

interface Props {
  professional: Professional;
}

export default function CopyLink({ professional }: Props) {
  const { toast } = useToast();

  const link = `${SITE_URL}/${professional.location}/${professional.service}/${professional.id}/recomendar`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(link);

    toast({
      title: "¡Link copiado!",
    });
  };

  return (
    <div className="w-full flex justify-center items-center gap-2 max-w-[500px] mx-auto py-10">
      <Input value={link} disabled />
      <Button onClick={copyLink}>
        <FontAwesomeIcon icon={faCopy} />
      </Button>
    </div>
  );
}
