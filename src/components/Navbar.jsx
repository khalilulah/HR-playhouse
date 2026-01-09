import { Menu, X, ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/images/HrPlayhouseHublogo.jpeg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 10);
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    setOpen(false);

    // Check if we're already on the home page
    if (location.pathname === "/") {
      // If on home page, just scroll to the contact section
      const contactSection = document.getElementById("contact-us");
      if (contactSection) {
        const offsetTop = contactSection.offsetTop - 80; // Account for navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    } else {
      // If on another page, navigate to home first, then scroll
      navigate("/");
      // Use setTimeout to wait for navigation and DOM render
      setTimeout(() => {
        const contactSection = document.getElementById("contact-us");
        if (contactSection) {
          const offsetTop = contactSection.offsetTop - 80; // Account for navbar height
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }, 300);
    }
  };

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Solutions",
      href: "/solutions",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Case Studies",
      href: "/case",
    },
    {
      label: "Resources",
      href: "/resources",
    },
    {
      label: "Contact Us",
      href: "#contact-us",
      isContactLink: true,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if the current path matches the nav item
  const isActive = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`sticky top-0 w-full z-50 font-family-SatoshiMedium transition-all duration-300 ${
          isScrolled
            ? "bg-primary/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
            <div className="flex items-center space-x-4.5 lg:space-x-10 cursor-pointer">
              <Link to="/">
                <img src={Logo} alt="logo" className="w-10 h-10 rounded-full" />
              </Link>
              {/* Desktop Links */}
              <div className="hidden space-x-4 lg:space-x-10 md:flex text-primary-text">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(index)}
                  >
                    {item.isContactLink ? (
                      <a
                        href={item.href}
                        onClick={handleContactClick}
                        className="hover:text-secondary flex items-center gap-1 py-2 cursor-pointer"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className={`flex items-center gap-1 py-2 transition-colors ${
                          isActive(item.href)
                            ? "text-secondary font-bold border-b-2 border-secondary"
                            : "hover:text-secondary"
                        }`}
                      >
                        {item.label}
                        {item.children && <ChevronDown className="w-4 h-4" />}
                      </Link>
                    )}
                    {item.children && hoveredItem === index && (
                      <div
                        className="absolute top-full left-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/10 overflow-hidden"
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        {item.children.map((child, childIndex) => (
                          <a
                            key={childIndex}
                            href={child.href}
                            className="block px-4 py-3 hover:bg-white/10 hover:text-white transition-colors"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-x-2.5 lg:space-x-5 flex items-center ">
              <Link
                to="https://learn.thehrplayhousehub.org/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="hidden md:inline-block flex-col px-2.5 lg:px-5 py-1 lg:py-2 bg-secondary-50 rounded-4xl font-family-SatoshiBold text-secondary text-sm lg:text-[16px] cursor-pointer hover:scale-105 transition-transform duration-300">
                  Login
                </button>
              </Link>
              <Link
                to="https://learn.thehrplayhousehub.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-2.5 lg:px-5 py-1 lg:py-2 bg-secondary rounded-4xl font-family-SatoshiBold text-primary text-sm lg:text-md cursor-pointer hover:scale-105 transition-transform duration-300">
                  Get Started
                </button>
              </Link>
              {/* Mobile Menu Button */}

              <button
                onClick={() => setOpen(true)}
                className="md:hidden text-gray-300 ml-2 cursor-pointer"
              >
                <Menu className="w-6 h-6 text-secondary" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
      />
      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full bg-primary text-secondary z-50
          w-full md:w-3/4
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <span className="text-lg font-semibold ">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X className="w-6 h-6 text-secondary cursor-pointer" />
          </button>
        </div>

        <nav className="flex flex-col px-2 space-y-2 text-lg ">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`text-base sm:text-lg pl-2 rounded-sm py-2 transition-colors ${
                isActive(item.href) && !item.isContactLink
                  ? "bg-secondary text-primary font-bold"
                  : "hover:bg-secondary-50"
              }`}
            >
              {item.isContactLink ? (
                <a
                  href={item.href}
                  onClick={handleContactClick}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                <>
                  <Link
                    to={item.href}
                    className="flex items-center gap-1"
                    onClick={() => {
                      setHoveredItem(index);
                      setOpen(false);
                    }}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-4 h-4 mt-1" />}
                  </Link>
                  {item.children && hoveredItem === index && (
                    <div
                      className="mt-2 bg-slate-900/95 backdrop-blur-sm shadow-xl overflow-hidden"
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      {item.children.map((child, childIndex) => (
                        <a
                          key={childIndex}
                          href={child.href}
                          className="block px-4 py-3 hover:bg-white/10 hover:text-white transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <Link
            to="/login"
            className="px-2.5 lg:px-5 py-1 lg:py-2 text-center bg-secondary-50 rounded-md font-family-SatoshiBold text-secondary text-base sm:text-lg cursor-pointer "
          >
            Login
          </Link>
        </nav>
      </aside>
    </>
  );
}

export default Navbar;
