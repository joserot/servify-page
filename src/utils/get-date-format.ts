export default function getDateFormat(date: string) {
  const dateFormat = new Date(date);
  const options: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return dateFormat.toLocaleDateString("es-ES", options);
}
