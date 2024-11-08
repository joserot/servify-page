import Form from "./components/form";

import Banner from "@/components/banner";
import Header from "@/components/header";

import getProfile from "@/services/get-profile";

export default async function OfferYourServicesPage() {
  const user: User | null = await getProfile();

  return (
    <>
      <div className="w-full md:hidden">
        <Header user={user} />
      </div>
      <main className="flex">
        <Banner />
        <div className="w-full py-20 md:py-5 md:w-1/2 md:min-h-[100vh]">
          <div className="mx-auto w-11/12 max-w-[500px] h-full flex flex-col justify-center items-center">
            <span className="block mb-4 text-3xl font-bold text-center">
              Ofrecé tus servicios
            </span>
            <p className="mb-4 text-foreground text-center">
              Da a conocer tu trabajo y consigue clientes en tu ciudad
            </p>
            <Form user={user} />
          </div>
        </div>
      </main>
    </>
  );
}
