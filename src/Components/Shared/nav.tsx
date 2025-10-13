import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const SCROLL_THRESHOLD = 300; // hide navbar only after 300px scroll

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > SCROLL_THRESHOLD) {
        // past threshold
        if (currentScrollY > lastScrollY) {
          // scrolling down
          setShowNav(false);
        } else {
          // scrolling up
          setShowNav(true);
        }
      } else {
        // before threshold, always show
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/home");
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-primary py-6 px-6">
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
              Cart
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
