interface ListSelect {
  label: string;
  value: string;
}

export default function getLabel(value: string, list: ListSelect[]) {
  const item = list.find((item) => {
    return item.value === value;
  });

  if (!item) return "--";

  return item.label;
}
