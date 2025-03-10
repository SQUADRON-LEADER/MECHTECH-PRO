import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, User, Bell } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "Find Mechanic", link: "#find-mechanic" },
    { name: "Track Service", link: "#track-service" },
    { name: "Pricing & Plans", link: "#pricing" },
    {
      name: "Services",
      link: "#services",
      dropdown: [
        "Battery Jumpstart",
        "Tire Change",
        "Engine Repair",
        "Oil Change",
        "Brake Service",
      ],
    },
    { name: "About Us", link: "#about" },
    { name: "Blog & Tips", link: "#blog" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary-black/90 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#home" className="flex items-center">
                <span className="text-neon-yellow font-bold text-2xl">
                  MechFix
                </span>
                <span className="text-deep-green font-bold ml-1">Pro</span>
              </a>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => toggleDropdown(item.name)}
                    onMouseLeave={() => toggleDropdown("")}
                  >
                    <button className="text-gray-300 hover:text-neon-yellow px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200">
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-dark-gray ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                        activeDropdown === item.name
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      <div className="py-1">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-deep-green hover:text-neon-yellow transition-colors duration-200"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.link}
                    className="text-gray-300 hover:text-neon-yellow px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-neon-yellow transition-colors duration-200">
              <User size={20} />
            </button>
            <button className="text-gray-300 hover:text-neon-yellow transition-colors duration-200">
              <Bell size={20} />
            </button>
            <button className="bg-neon-yellow text-primary-black px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all duration-200 glow">
              Emergency SOS
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-neon-yellow focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden bg-dark-gray`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="w-full text-left text-gray-300 hover:text-neon-yellow hover:bg-primary-black px-3 py-2 rounded-md text-base font-medium flex items-center justify-between transition-colors duration-200"
                >
                  {item.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-200 overflow-hidden ${
                    activeDropdown === item.name ? "max-h-60" : "max-h-0"
                  }`}
                >
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className="block pl-6 pr-4 py-2 text-sm text-gray-300 hover:bg-deep-green hover:text-neon-yellow transition-colors duration-200"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.name}
                href={item.link}
                className="text-gray-300 hover:text-neon-yellow hover:bg-primary-black block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            )
          )}
          <button className="w-full mt-4 bg-neon-yellow text-primary-black px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all duration-200 glow">
            Emergency SOS
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;