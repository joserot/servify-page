"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

import { useToast } from "@/components/ui/use-toast";

export default function CopyLink() {
  const { toast } = useToast();

  const copyLink = async () => {
    await navigator.clipboard.writeText(
      "https://servify-page.vercel.app/posadas/electricista/6634200e8abb990e6fd8a377/recomendar"
    );

    toast({
      title: "¡Link copiado!",
    });
  };

  return (
    <div className="w-full flex justify-center items-center gap-2 max-w-[500px] mx-auto py-10">
      <Input
        value="https://servify-page.vercel.app/posadas/electricista/6634200e8abb990e6fd8a377/recomendar"
        disabled
      />
      <Button onClick={copyLink}>
        <FontAwesomeIcon icon={faCopy} />
      </Button>
    </div>
  );
}
