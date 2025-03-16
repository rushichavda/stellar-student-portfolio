
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { name: "About", href: "#about" },
    { name: "Publications", href: "#publications" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-dark-200/80 backdrop-blur-lg py-2 shadow-lg" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-heading font-bold text-white">
          Rushi<span className="text-highlight-purple">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {sections.map((section) => (
            <a
              key={section.name}
              href={section.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {section.name}
            </a>
          ))}
          
          <div className="flex items-center space-x-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-300 hover:text-white">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-dark-100 flex flex-col justify-center items-center space-y-8 transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 z-40" : "opacity-0 -z-10"
        )}
      >
        {sections.map((section) => (
          <a
            key={section.name}
            href={section.href}
            className="text-xl text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {section.name}
          </a>
        ))}
        
        <div className="flex items-center space-x-6 mt-8">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <Linkedin size={24} />
          </a>
          <a href="mailto:contact@example.com" className="text-gray-300 hover:text-white">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
