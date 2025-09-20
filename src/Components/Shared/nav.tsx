import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate("/home");
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-200">
      <div className="bg-primary py-6 px-6 bg-primary ">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="font-semibold text-lg">
            R. Sinclair
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12">
            <Link
              to="/shopall"
              className="text-black hover:text-gray-600 font-bold"
            >
              Shop All
            </Link>
            <Link
              to="/gallery"
              className="text-black hover:text-gray-600 font-bold"
            >
              Gallery
            </Link>
            <a
              href="/home#contact"
              className="text-black hover:text-gray-600 font-bold"
              onClick={handleContactClick}
            >
              Contact
            </a>
          </div>

          {/* Right Side (Desktop) */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/login"
              className="text-black hover:text-gray-600 font-bold"
            >
              Log In
            </Link>
            <Link
              to="/cart"
              className="text-black hover:text-gray-600 font-bold"
            >
              Cart (0)
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Full-Screen Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-gray-300 flex flex-col items-center justify-center space-y-8 text-2xl z-40 transition-all duration-500 ease-in-out">
            <Link
              to="/shopall"
              className="font-light hover:text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Shop All
            </Link>
            <Link
              to="/gallery"
              className="font-light hover:text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <a
              href="/home#contact"
              className="font-light hover:text-gray-600"
              onClick={handleContactClick}
            >
              Contact
            </a>
            <Link
              to="/login"
              className="font-light hover:text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Log In
            </Link>
            <Link
              to="/cart"
              className="font-light hover:text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Cart (0)
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
