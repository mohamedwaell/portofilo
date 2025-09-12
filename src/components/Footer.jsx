import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-10 border-t border-white/10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70">
        <div>© {new Date().getFullYear()} Mohamed Wael. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#home" className="hover:text-white cursor-target">Top</a>
          <a href="#projects" className="hover:text-white cursor-target">Projects</a>
          <a href="#contact" className="hover:text-white cursor-target">Contact</a>
        </div>
      </div>
    </footer>
  );
}


