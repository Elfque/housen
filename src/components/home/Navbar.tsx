import { ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";

const navLinks = [
  "Home",
  "Properties",
  "About",
  "Services",
  "Insights",
  "Contact",
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header
      className={`left-0 top-0 z-50 w-full ${pathname === "/" ? "absolute" : "bg-black"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3 text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30">
            <span className="text-sm font-bold">H</span>
          </div>

          <span className="text-lg font-semibold tracking-widest">HOUSEN</span>
        </div>

        {/* Nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-white/80 transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button className="flex items-center gap-2 rounded-full bg-[#D9B88C] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90">
          Book a Tour
          <ArrowRight size={16} />
        </button>
      </div>
    </header>
  );
}
