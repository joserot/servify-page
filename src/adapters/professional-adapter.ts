export default function professionalAdapter(professional: any) {
  return {
    id: professional._id,
    email: professional.email,
    name: professional.name,
    lastName: professional.lastName,
    createdAt: professional.createdAt,
    image: professional.avatar ? professional.avatar : "/placeholder-user.webp",
    location: professional.location,
    locationService: professional.locationService,
    service: professional.profession,
    likes: professional.likes,
    verifications: professional.verifications,
    phone: professional.phone,
    description: professional.description,
    startDay: professional.startDay,
    endDay: professional.endDay,
    startTime: professional.startTime,
    endTime: professional.endTime,
    active: professional.active,
    jobsImages: professional.jobsImages,
    price: professional.price,
  };
}
