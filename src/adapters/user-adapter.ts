export default function userAdapter(user: any) {
  return {
    id: user._id,
    password: user.password,
    email: user.email,
    roles: user.roles,
    name: user.name,
    lastName: user.lastName,
    createdAt: user.createdAt,
    image: user.avatar ? user.avatar : "/placeholder-user.webp",
  };
}
