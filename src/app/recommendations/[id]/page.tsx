import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "./components/hero";
import FormRecommendations from "./components/form-recommendations";

import getOneProfessional from "@/services/get-one-professional";

export default async function RecommendationsPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  const professional: Professional = await getOneProfessional(id);

  return (
    <main className="bg-gray-200 dark:bg-gray-800 relative">
      <Header />
      <div
        className="
        min-h-[90vh]
        "
      >
        <div
          className="        
        bg-background 
        md:w-11/12
        max-w-3xl
        mx-auto
        my-10
        md:rounded-md
        shadow-sm
        p-5
        md:p-10"
        >
          <Hero professional={professional} />
          <FormRecommendations id={professional.id} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
