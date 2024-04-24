import Header from "@/components/header";
import Footer from "@/components/footer";
import Filters from "./components/filters";
import OrderBy from "./components/order-by";
import Cards from "./components/cards";
import ButtonFilters from "./components/button-filters";
import ModalLocation from "./components/modal-location";
import { Searcher } from "@/components/searcher";

import getProfessionals from "./services/get-professionals";

export default async function SearcherPage({
  searchParams,
}: {
  searchParams?: {
    location?: string;
    profession?: string;
    locationService?: string;
    orderBy?: string;
    page?: string;
  };
}) {
  const location = searchParams?.location || "";
  const profession = searchParams?.profession || "";
  const locationService = searchParams?.locationService || "";
  const orderBy = searchParams?.orderBy || "";

  const currentPage = Number(searchParams?.page) || 1;

  const professionals: Professional[] = await getProfessionals(
    location,
    profession,
    locationService,
    orderBy
  );

  return (
    <main className="bg-gray-200 dark:bg-gray-800 ">
      {/* <ModalLocation /> */}
      <Header showSearcher />
      <article
        className="
        flex 
        flex-col 
        justify-start
        start-center
        md:flex-row
        w-11/12
        max-w-7xl
        mx-auto
        mt-10
        h-full
        min-h-[90vh]"
      >
        <Filters />
        <div
          className="
        w-full 
        lg:w-2/3
        pb-20"
        >
          <div className="md:hidden w-full mb-5">
            <Searcher background={false} />
          </div>
          <OrderBy />
          {!professionals || !professionals.length ? (
            <p>No se encontraron profesionales</p>
          ) : (
            <Cards professionals={professionals} />
          )}
        </div>
        {/* <ButtonFilters /> */}
      </article>

      <Footer />
    </main>
  );
}
