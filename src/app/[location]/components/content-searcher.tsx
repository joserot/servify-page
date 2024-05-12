import Header from "@/components/header";
import Footer from "@/components/footer";
import Filters from "./filters";
import OrderBy from "./order-by";
import Cards from "./cards";
import { Searcher } from "@/components/searcher";

import getProfile from "@/services/get-profile";

import { Suspense } from "react";

import CardsSkeleton from "./cards-skeleton";

interface Props {
  location: string;
  profession: string;
  locationService: string;
  orderBy: string;
  page: number;
}

export default async function ContentSearcher({
  location,
  profession,
  locationService,
  orderBy,
  page,
}: Props) {
  const user: User | null = await getProfile();

  return (
    <main className="bg-gray-200 dark:bg-gray-800 ">
      <Header showSearcher user={user} />
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
          <Suspense
            key={location + profession + locationService + orderBy}
            fallback={<CardsSkeleton />}
          >
            <Cards
              location={location}
              profession={profession}
              locationService={locationService}
              orderBy={orderBy}
            />
          </Suspense>
        </div>
      </article>

      <Footer />
    </main>
  );
}
