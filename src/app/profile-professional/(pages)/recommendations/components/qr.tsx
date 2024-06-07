"use client";

import QRCode from "react-qr-code";

export default function Qr() {
  return (
    <div className="w-full flex justify-center">
      <QRCode
        value="https://servify-page.vercel.app/posadas/electricista/6634200e8abb990e6fd8a377/recomendar"
        size={200}
      />
    </div>
  );
}
