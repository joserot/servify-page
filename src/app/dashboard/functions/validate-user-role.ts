export default function validateUserRole(user: User) {
  if (!user.roles.includes("admin")) {
    return false;
  }

  return true;
}
