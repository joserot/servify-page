import { PROJECT_NAME } from "@/constants/constants";
import Link from "next/link";

export default function Logo() {
  return (
    <section>
      <Link
        href="/"
        className="
            text-2xl
            font-extrabold
            text-primary
            "
      >
        {PROJECT_NAME}
      </Link>
    </section>
  );
}
