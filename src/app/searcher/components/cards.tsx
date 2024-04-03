import CardWorker from "./card-worker";

import { workers } from "@/data/data";

export default function Cards() {
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
      {workers.map((worker) => {
        return <CardWorker key={worker.id} worker={worker} />;
      })}
    </section>
  );
}
