import { Skeleton } from "@/components/ui/skeleton";

const cardsList = ["", "", "", ""];

export default function CardsSkeleton() {
  return (
    <section
      className="
        flex 
        flex-col 
        justify-center
        items-center
        gap-5
        w-full "
    >
      {cardsList.map((card, i) => {
        return (
          <div
            key={i}
            className={`
        bg-background 
        rounded 
        shadow-sm 
        w-full
        p-3
        flex
        flex-col
        transition-shadow
        cursor-pointer
        border
        hover:shadow-lg
        dark:border-gray-500
        dark:hover:shadow-slate-50
        dark:hover:shadow-sm
        relative
        `}
          >
            <div className="hidden md:block absolute top-3 right-3">
              <Skeleton className="max-w-[200px]  w-full h-4 rounded-md" />
            </div>
            <div
              className="
        w-full
        flex
        justify-start
        items-start
        gap-5"
            >
              <div
                className={` 
          flex
          flex-col
          gap-1
          justify-start
          items-start
          py-2`}
              >
                <Skeleton
                  className="
              w-28 
              h-28
              object-cover
              rounded
              border
              border-gray-300"
                />
              </div>
              <div
                className="
          w-2/3
          flex
          flex-col
          justify-start
          items-start
          gap-1
          md:gap-0
          "
              >
                <Skeleton
                  className={`
                max-w-[200px] w-full 
                h-4 
                rounded-md
                mb-1
             `}
                />

                <Skeleton
                  className={`
                max-w-[200px] w-full 
                h-4 
                rounded-md
                mb-1
             `}
                />
                <Skeleton
                  className={`
                max-w-[200px] w-full 
                h-4 
                rounded-md
                mb-1
             `}
                />
                <Skeleton
                  className={`
                max-w-[200px] w-full 
                h-4 
                rounded-md
                mb-1
             `}
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
