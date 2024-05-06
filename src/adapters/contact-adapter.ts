export default function contactAdapter(contact: any) {
  return {
    id: contact._id,
    email: contact.email,
    subject: contact.subject,
    message: contact.message,
    date: contact.createdAt,
  };
}
