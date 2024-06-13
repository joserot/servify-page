import { PROJECT_NAME } from "@/constants/constants";
import Link from "next/link";

interface Props {
  color?: "primary" | "white";
}

export default function Logo({ color = "primary" }: Props) {
  return (
    <section>
      <Link href="/" className={`text-2xl font-extrabold text-${color}`}>
        {PROJECT_NAME}
      </Link>
    </section>
  );
}
