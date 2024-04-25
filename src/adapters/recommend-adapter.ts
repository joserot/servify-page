export default function recommendAdapter(recommend: any) {
  return {
    id: recommend._id,
    like: recommend.like,
    name: recommend.name,
    text: recommend.text,
    image: recommend.image ? recommend.image : "/placeholder-user.webp",
  };
}
