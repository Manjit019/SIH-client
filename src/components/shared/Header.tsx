import { Contact2, File, Home, User2, Info, ChevronDown, DownloadIcon, ArrowDownCircle, CheckCircle2Icon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

const Header = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: <Home size={20} /> },
    { name: "About", href: "/about", icon: <Info size={20} /> },
    { name: "Contact", href: "/contact", icon: <Contact2 size={20} /> },
    {
      name: "Certificate",
      href: "",
      icon: <File size={20} />,
      isNestedElements: [
        {
          name: "Verify Certificate",
          href: "/certificate/verify",
          icon : <CheckCircle2Icon size={16} />,
        },
        {
          name: "Download Certificate",
          href: "/certificate/download",
          icon : <ArrowDownCircle size={16} />,
        },
      ],
    },
    {
      name: "Hospital Login",
      href: "/hospital/login",
      icon: <User2 size={20} />,
      isLogin: true,
    },
  ];

  return (
    <div className="px-4 py-2 bg-accent text-white flex items-center justify-between shadow z-20 fixed top-0 left-0 right-0">
      <div className="flex items-center gap-1">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <h1 className="text-2xl font-bold"> <span className="text-emerald-500">Get</span> DHP</h1>
      </div>
      <nav>
        <ul className=" space-x-1 hidden md:flex ">
          {navItems.map((item) => {
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  // onMouseEnter={() => {
                  //   item.isNestedElements && setIsMenuOpen(true);
                  // }}
                  
                  onClick={() => {
                    item.isNestedElements && setIsMenuOpen(!isMenuOpen);
                  }}
                  className={` hover:bg-white/20 rounded-2xl px-3 py-1 transition-all duration-300 flex items-center gap-1 text-sm  ${
                    item.isLogin ? "bg-white text-accent hover:text-white" : ""
                  } ${pathname === item.href ? "bg-white/20" : ""}`}
                >
                  {item.icon}
                  {item.name}
                  {item.isNestedElements && <ChevronDown size={16} className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`} />}
                  {item.isNestedElements && isMenuOpen && (
                    <ul className="absolute top-13 bg-accent rounded-lg shadow-lg z-10">
                      {item.isNestedElements.map((subItem) => (
                        <li
                          key={subItem.name}
                          className="border-b last:border-0"
                        >
                          <Link
                            to={subItem.href}
                            className={`text-sm text-white/80 hover:text-white transition-all duration-300 px-3 py-1  flex items-center gap-1 ${
                              pathname === subItem.href ? "bg-white/20" : ""
                            }`}
                          >
                            {subItem.icon}
                            {subItem.name}
                          </Link>{" "}
                        </li>
                      ))}
                    </ul>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
