export default function getDateFormat(date: string) {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth() + 1;
  const day = new Date(date).getDay();

  return `${day}/${month}/${year}`;
}
