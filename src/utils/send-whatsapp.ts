export default function sendWhatsapp(phone: string, message: string) {
  const link = `https://wa.me/${phone}?text=${message}`;

  window.open(link, "_blank");
}
