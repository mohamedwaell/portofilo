import React, { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function ModernNavbar({ items = NAV_ITEMS }) {
  const [active, setActive] = useState(items[0].href);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 bg-black/80 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-[#a47cf3]">Mohamed Wael</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center gap-8">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`px-3 py-2 font-general cursor-target rounded-md font-medium transition 
                ${
                  active === item.href
                    ? "text-[#a47cf3]"
                    : "text-white/80 hover:text-white"
                }`}
                onClick={() => setActive(item.href)}
                tabIndex={0}
                aria-current={active === item.href ? "page" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="flex flex-col items-center gap-6 py-6 bg-black/90 md:hidden">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`px-3 py-2 font-general cursor-target rounded-md font-medium transition 
                ${
                  active === item.href
                    ? "text-[#a47cf3]"
                    : "text-white/80 hover:text-white"
                }`}
                onClick={() => {
                  setActive(item.href);
                  setMenuOpen(false); // close menu after click
                }}
                tabIndex={0}
                aria-current={active === item.href ? "page" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
