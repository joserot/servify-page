export default function recommendAdapter(recommend: any) {
  return {
    id: recommend._id,
    like: recommend.like,
    name: recommend.name,
    text: recommend.text,
    active: recommend.active,
    featured: recommend.featured,
    image: recommend.avatar ? recommend.avatar : "/placeholder-user.webp",
    createdAt: recommend.createdAt,
  };
}
