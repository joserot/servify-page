interface Professional {
  id: string;
  name: string;
  lastName: string;
  email: string;
  createdAt: string;
  image: string;
  service: string;
  location: string;
  locationService: string;
  phone: string;
  description: string;
  active: boolean;
  verifications: string[];
  price: number;
  jobsImages: string[];
  image: string;
  likes: number;
}

interface User {
  id: string;
  email: string;
  name: string;
  roles: string[];
  lastName: string;
  createdAt: string;
  image: string;
}

interface Recommend {
  id: string;
  like: boolean;
  name?: string;
  text?: string;
  image?: string;
}

interface Contact {
  id: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

interface ContactProfessional {
  id: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  date: string;
}
