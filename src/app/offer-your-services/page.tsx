import Form from "./components/form";

export default function OfferYourServicesPage() {
  return (
    <main className="flex">
      <div className="hidden md:block w-1/2 min-h-[100vh] bg-primary"></div>
      <div className="w-full py-5 md:w-1/2 min-h-[100vh]">
        <div className="mx-auto w-11/12 max-w-[500px] h-full flex flex-col justify-center items-center">
          <span className="block mb-4 text-3xl font-bold text-center">
            Ofrecé tus servicios
          </span>
          <p className="mb-4 text-foreground text-center">
            Da a conocer tu trabajo y consigue clientes en tu ciudad
          </p>
          <Form />
        </div>
      </div>
    </main>
  );
}
