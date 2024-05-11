import Form from "./components/form";
import Separator from "./components/separator";
import GoogleButton from "@/components/google-button";

import Banner from "@/components/banner";
import Header from "@/components/header";
import Terms from "./components/terms";
import RegisterLink from "./components/register-link";

export default function LoginPage() {
  return (
    <>
      <div className="w-full md:hidden">
        <Header />
      </div>
      <main className="flex">
        <Banner
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac tincidunt elit. Pellentesque mollis velit mauris, id accumsan quam faucibus nec. Aenean cursus, nisi eget porta vestibulum, lacus risus interdum quam, in dignissim urna mi vitae libero. Phasellus tristique viverra laoreet"
          images={["/banner-2.jpg", "/banner-1.jpg", "/banner-3.jpg"]}
        />
        <div className="w-full py-20 md:py-5 md:w-1/2 md:min-h-[100vh]">
          <div className="mx-auto w-11/12 max-w-[500px] h-full flex flex-col justify-center items-center">
            <span className="block mb-4 text-3xl font-bold text-center">
              Inicia sesión
            </span>
            <p className="mb-4 text-foreground text-center">
              Inicia sesión para contactar con especialistas en tu ciudad
            </p>
            <GoogleButton />
            <Separator />
            <Form />

            <Terms />
            <RegisterLink />
          </div>
        </div>
      </main>
    </>
  );
}
