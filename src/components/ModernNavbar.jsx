import React, { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export default function ModernNavbar({ items = NAV_ITEMS }) {
  const [active, setActive] = useState(items[0].href);

  return (
    <nav className="w-full  py-4">
      <ul className="flex justify-center gap-8">
        {items.map(item => (
          <li key={item.href}>
            <a
              href={item.href}
               className={`px-3 py-2 font-general cursor-target rounded-md font-medium transition 
                  ${active === item.href ? 'text-[#a47cf3]' : 'text-white/80 '}`}
              onClick={() => setActive(item.href)}
              tabIndex={0}
              aria-current={active === item.href ? 'page' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}