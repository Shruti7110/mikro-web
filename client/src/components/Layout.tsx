import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Mail, Phone, MapPin, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "/assets/logo.png";

// Determine if link is active
const useActive = () => {
  const [location] = useLocation();
  return (path: string) => location === path;
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isActive = useActive();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const expertiseLinks = [
    { name: "Laser Systems", path: "/laser-systems" },
    { name: "Electric Vehicles", path: "/electric-vehicles" },
    { name: "High Speed Automation", path: "/high-speed-automation" },
    { name: "Defence & Aerospace", path: "/defence-aerospace" },
    { name: "Export Solutions", path: "/export-solutions" },
    { name: "Pharma Automation", path: "/pharma-automation" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/#about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith("/#")) {
      const id = path.split("#")[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (location !== "/") {
        window.location.href = path; 
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-white py-4"
      }`}
    >
      <div className="container-padding flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={logo} alt="Mikro Innotech" className="h-10 md:h-12 w-auto object-contain" />
            <span className="sr-only">Mikro Innotech</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className={`text-sm font-medium transition-colors uppercase tracking-wide ${
              isActive("/") ? "text-primary font-bold" : "text-slate-600 hover:text-primary"
            }`}
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-primary transition-colors uppercase tracking-wide focus:outline-none">
              Expertise <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {expertiseLinks.map((item) => (
                <DropdownMenuItem key={item.path} asChild>
                  <Link 
                    href={item.path}
                    className="w-full cursor-pointer text-sm py-2"
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            onClick={() => handleNavClick("/#about")}
            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors uppercase tracking-wide"
          >
            About Us
          </button>

          <Link 
            href="/contact" 
            className={`text-sm font-medium transition-colors uppercase tracking-wide ${
              isActive("/contact") ? "text-primary font-bold" : "text-slate-600 hover:text-primary"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg p-4 md:hidden flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          <Link 
            href="/" 
            className={`py-2 text-sm font-medium uppercase tracking-wide ${
              isActive("/") ? "text-primary font-bold" : "text-slate-600 hover:text-primary"
            }`}
          >
            Home
          </Link>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">Expertise</span>
            {expertiseLinks.map((item) => (
              <Link 
                key={item.path} 
                href={item.path} 
                className={`pl-4 py-2 text-sm font-medium uppercase tracking-wide ${
                  isActive(item.path) ? "text-primary font-bold" : "text-slate-600 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => handleNavClick("/#about")}
            className="text-left py-2 text-sm font-medium text-slate-600 hover:text-primary uppercase tracking-wide"
          >
            About Us
          </button>

          <Link 
            href="/contact" 
            className={`py-2 text-sm font-medium uppercase tracking-wide ${
              isActive("/contact") ? "text-primary font-bold" : "text-slate-600 hover:text-primary"
            }`}
          >
            Contact
          </Link>

          <Button 
            className="w-full bg-primary hover:bg-blue-700 text-white rounded-none uppercase tracking-wider text-xs font-bold"
             onClick={() => handleNavClick("/contact")}
          >
            Get a Quote
          </Button>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800" id="footer">
      <div className="container-padding grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div className="space-y-4">
          <img src={logo} alt="Mikro Innotech" className="h-10 w-auto bg-white p-1 rounded-sm" />
          <p className="text-sm leading-relaxed max-w-sm">
            Mikro Innotech is a leader in advanced automation solutions, specializing in laser systems, robotics, and high-precision engineering for global industries.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://www.linkedin.com/company/mikro-innotech-india/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Solutions</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/laser-systems" className="hover:text-white transition-colors">Laser Systems</Link></li>
            <li><Link href="/electric-vehicles" className="hover:text-white transition-colors">Electric Vehicles (EV)</Link></li>
            <li><Link href="/pharma-automation" className="hover:text-white transition-colors">Pharmaceutical Automation</Link></li>
            <li><Link href="/high-speed-automation" className="hover:text-white transition-colors">High-Speed Automation</Link></li>
            <li><Link href="/defence-aerospace" className="hover:text-white transition-colors">Defence & Aerospace</Link></li>
            <li><Link href="/export-solutions" className="hover:text-white transition-colors">Export Solutions</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div id="contact-info">
          <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-primary mt-0.5" />
              <span>
                Mikro Innotech India Pvt. Ltd.<br />
                225, Sasewadi, Taluka Bhor,<br />
                Off Pune–Bangalore Expressway,<br />
                Pune 412205, Maharashtra, India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary" />
              <a href="tel:+919876543210" className="hover:text-white">+91 830 880 2300</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary" />
              <a href="mailto:info@mikroinnotech.com" className="hover:text-white">sales@mikroindia.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container-padding mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Mikro Innotech India Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow pt-[72px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
