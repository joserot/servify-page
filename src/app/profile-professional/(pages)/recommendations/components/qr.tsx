"use client";

import QRCode from "react-qr-code";

import { SITE_URL } from "@/constants/constants";

interface Props {
  professional: Professional;
}

export default function Qr({ professional }: Props) {
  return (
    <div className="w-full flex justify-center">
      <QRCode
        value={`${SITE_URL}/${professional.location}/${professional.service}/${professional.id}/recomendar`}
        size={200}
      />
    </div>
  );
}
