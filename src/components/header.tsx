import Logo from "./logo";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { DropdownMenuHeader } from "./dropdown-menu-header";
import { Searcher } from "./searcher";

interface Props {
  showSearcher?: boolean;
}

export default function Header({ showSearcher = false }: Props) {
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

        {showSearcher && (
          <div className="hidden lg:block border-2 border-gray-200 rounded-full min-w-[500px]">
            <Searcher />
          </div>
        )}

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
