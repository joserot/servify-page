export default function contactProfessionalAdapter(contact: any) {
  return {
    id: contact._id,
    email: contact.email,
    phone: contact.phone,
    service: contact.service,
    location: contact.location,
    date: contact.createdAt,
  };
}
