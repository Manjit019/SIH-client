import { Menu as LucideMenu, XCircle } from "lucide-react";

export default function HamburgerButton({
  isHamburgerOpen,
  handleHamburgerMenu,
}: {
  isHamburgerOpen: boolean;
  handleHamburgerMenu: () => void;
}) {
  return (
    <button
      className="md:hidden relative flex items-center justify-center cursor-pointer ring-1 ring-white/40 rounded-full px-2 py-1 transition-all duration-300 hover:ring-white/80 "
      onClick={handleHamburgerMenu}
    >
      {/* Menu Icon */}
      <div className="flex items-center gap-1">
        <span
          className={`transition-all duration-500 ease-in-out`}
        >
            {!isHamburgerOpen ? <LucideMenu size={26} strokeWidth={2} /> : <XCircle size={26} strokeWidth={2} />}
         
        </span>
        <span
          className={` text-sm font-semibold transition-all duration-300 uppercase opacity-60 hover:opacity-100 `}
        >
          {!isHamburgerOpen ? "Menu" : "Close"}
        </span>
      </div>

    </button>
  );
}
