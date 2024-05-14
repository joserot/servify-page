import Header from "@/components/header";
import Footer from "@/components/footer";

import getProfile from "@/services/get-profile";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default async function NotFound() {
  const user: User | null = await getProfile();
  return (
    <main>
      <Header user={user} />
      <div
        className="w-full
            md:w-11/12 
            max-w-7xl 
            mx-auto
            min-h-[90vh]
            flex
            justify-center
            items-center
            flex-col
            gap-5"
      >
        <p className="font-bold text-4xl text-balance text-center">
          Pagina no encontrada
        </p>
        <Link
          href="/"
          className="text-primary flex items-center gap-3 text-lg hover:underline"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Volver al inicio
        </Link>
      </div>
      <Footer />
    </main>
  );
}
