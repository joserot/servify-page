import Header from "@/components/header";
import Footer from "@/components/footer";

import getProfile from "@/services/get-profile";

import Form from "./components/form";

export default async function ProfessionalPage() {
  const user: User | null = await getProfile();

  return (
    <main className="md:bg-gray-200 md:dark:bg-gray-800 relative">
      <Header user={user} />
      <div
        className="
        min-h-[90vh]
        "
      >
        <div
          className="        
          md:bg-background 
          md:w-11/12
          max-w-3xl
          mx-auto
          my-10
          md:rounded-md
          md:shadow-sm
          p-5
          md:p-10"
        >
          <span className="block text-3xl font-bold mb-5">
            Registrate como profesional
          </span>
          <Form />
        </div>
      </div>

      <Footer />
    </main>
  );
}
