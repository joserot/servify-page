export default function userAdapter(user: any) {
  return {
    id: user._id,
    email: user.email,
    roles: user.roles,
    name: user.name,
    lastName: user.lastName,
    createdAt: user.createdAt,
    image: user.image ? user.image : "/placeholder-user.webp",
  };
}
