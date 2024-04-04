import Link from "next/link";

export default function Banner() {
  return (
    <div className="hidden md:flex w-1/2 min-h-[100vh] bg-primary p-10 flex-col justify-between">
      <section>
        <Link
          href="/"
          className="
            text-4xl
            font-extrabold
            text-white
            "
        >
          Servify
        </Link>
      </section>
      <p className="text-xl text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium id
        orci vel varius. Mauris dictum urna id mi accumsan fringilla. Duis
        ultrices justo vel odio elementum, at posuere tortor mollis.
      </p>
    </div>
  );
}
