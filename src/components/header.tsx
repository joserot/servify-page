import Logo from "./logo";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { DropdownMenuHeader } from "./dropdown-menu-header";

export default function Header() {
  return (
    <header
      className="
            flex
            flex-col
            items-center
            justify-center
            sticky
            top-0
            shadow-md
            bg-background
            z-10

            "
    >
      <div
        className=" 
            w-11/12
            max-w-7xl
            py-2 
            flex
            flex-row
            items-center
            justify-between"
      >
        <Logo />
        <div
          className="
            flex
            items-center
            gap-3
        "
        >
          <ModeToggle />
          <DropdownMenuHeader />
        </div>
      </div>
    </header>
  );
}
