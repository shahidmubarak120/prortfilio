import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white/80 font-medium">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:text-white hover:scale-110 transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-20 left-1/2 -translate-x-1/2 w-[90%]">

          <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 text-center animate-fadeIn">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-lg text-white/80 hover:text-white hover:scale-105 transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;












