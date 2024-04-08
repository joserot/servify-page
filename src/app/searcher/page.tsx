import Header from "@/components/header";
import Footer from "@/components/footer";
import Filters from "./components/filters";
import OrderBy from "./components/order-by";
import Cards from "./components/cards";
import ButtonFilters from "./components/button-filters";
import ModalLocation from "./components/modal-location";

export default function SearcherPage() {
  return (
    <main className="bg-gray-200 dark:bg-gray-800">
      <ModalLocation />
      <Header showSearcher />
      <article
        className="
        flex 
        flex-col 
        justify-center
        start-center
        md:flex-row
        w-11/12
        max-w-7xl
        mx-auto
        mt-10
        h-full"
      >
        <Filters />
        <div
          className="
        w-full 
        lg:w-2/3
        pb-20"
        >
          <OrderBy />
          <Cards />
        </div>
        <ButtonFilters />
      </article>

      <Footer />
    </main>
  );
}
