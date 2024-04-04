import Form from "./components/form";

import Banner from "@/components/banner";

export default function ContactPage() {
  return (
    <main className="flex">
      <Banner />
      <div className="w-full py-5 md:w-1/2 min-h-[100vh]">
        <div className="mx-auto w-11/12 max-w-[500px] h-full flex flex-col justify-center items-center">
          <span className="block mb-4 text-3xl font-bold text-center">
            Contacto
          </span>
          <Form />
        </div>
      </div>
    </main>
  );
}
