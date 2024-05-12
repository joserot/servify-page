interface ListSelect {
  label: string;
  value: string;
}

export default function existInList(value: string, list: ListSelect[]) {
  const item = list.find((item) => {
    return item.value === value;
  });

  return item;
}
