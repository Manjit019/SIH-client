import { ChevronDown } from "lucide-react";
import React, { type FC } from "react";
import { Link } from "react-router"; // Assuming you're using React Router; adjust if needed

const MobileMenu: FC<{
  navItems: any;
  isOpen: boolean;
  setIsHamburgerOpen: (isOpen: boolean) => void;
}> = ({ navItems, isOpen, setIsHamburgerOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);

  return (
    <div
      className={`md:hidden flex flex-col absolute top-14 left-0 w-full bg-accent/30 backdrop-blur-md rounded-lg shadow-lg z-10 ring ring-accent/50 p-4 transition-all duration-500 ease-in-out ${
        isOpen
          ? "opacity-100 scale-95 [transform:rotateX(0deg)]"
          : "opacity-0 scale-95 [transform:rotateX(-90deg)]"
      }`}
      style={{ perspective: "1000px" }}
    >
      <div
      // className={`transform origin-top transition-all duration-500 ease-in-out ${
      //   isOpen ? 'scale-100' : 'scale-0'
      // }`}
      >
        {navItems.map((item: any, idx: number) => {
          return (
            <div
              key={item.name}
              className={`transform origin-top transition-all duration-[${
                idx + 1
              }00] ease-in-out mb-3 last:mb-0 ${
                isOpen
                  ? "scale-100 ml-0 opacity-100"
                  : " scale-0 opacity-0 ml-32"
              }`}
            >
              <Link
                to={item.href}
                onClick={() => setIsHamburgerOpen(false)}
                className={`hover:bg-white/20 rounded-2xl px-3 py-1 transition-all duration-300 flex items-center gap-1 text-sm w-fit ${
                  item.isLogin ? "bg-white text-accent hover:text-white" : ""
                }`}
              >
                {item.icon}
                {item.name}
                {item.isNestedElements && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      isMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>
              {item.isNestedElements && isMenuOpen && (
                <ul className="mt-2 ml-3 rounded-lg shadow-lg z-10">
                  {item.isNestedElements.map((subItem: any) => (
                    <li
                      key={subItem.name}
                      className="border-b border-t border-white/20 last:border-0"
                    >
                      <Link
                        to={subItem.href}
                        className=" rounded-2xl px-3 py-1 transition-all duration-300 flex items-center gap-1 text-sm w-fit"
                      >
                        {subItem.icon} {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
