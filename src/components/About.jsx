import React from "react";



const About = () => {
  return (
    <section id="about" className="w-full mb-16 sm:mb-24">
      <div className="relative max-w-6xl mx-auto">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-16 -left-10 h-56 w-56 rounded-full bg-purple-700/30 blur-3xl" />
          <div className="absolute bottom-0 -right-10 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold hero-heading text-center">About Me</h2>
        <p className="mt-3 text-white/80 text-center max-w-2xl mx-auto">
          I'm a passionate software engineer with a strong foundation in full-stack development and a keen eye for creating user-centric applications.
        </p>
        <p className="mt-3 text-white/70 text-center max-w-3xl mx-auto">
          My journey in technology began with curiosity and grew into a career dedicated to solving complex problems through elegant code and thoughtful UX.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>
            Clean Code
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12H3"/><path d="M7 12a4 4 0 1 1 8 0"/></svg>
            Smooth Motion
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 18 0A9 9 0 0 0 3 12Z"/><path d="M12 7v5l3 3"/></svg>
            Performance
          </span>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Hi, I’m Mohamed</h3>
              <p className="mt-3 text-white/80 leading-relaxed">
                I thrive where innovation meets practical solutions. I believe in maintainable systems,
                expressive interfaces, and shipping with quality.
              </p>
              <ul className="mt-5 space-y-3 text-white/85 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md bg-purple-600/30 text-purple-300">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3Z"/><path d="M8 17v4l4 2 4-2v-4"/></svg>
                  </span>
                  <span>Computer Engineering Student</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md bg-purple-600/30 text-purple-300">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 1 7l11 5 11-5-11-5Zm0 9L1 6v3l11 5 11-5V6l-11 5Zm0 4L1 10v3l11 5 11-5v-3l-11 5Z"/></svg>
                  </span>
                  <span>Full-Stack Developer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md bg-purple-600/30 text-purple-300">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M9 18h6v2H9v-2Zm3-16a7 7 0 0 0-4 12.9V16h8v-1.1A7 7 0 0 0 12 2Z"/></svg>
                  </span>
                  <span>Problem Solver</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="px-5 py-3 bg-purple-700 hover:bg-purple-600 text-white font-medium rounded-lg transition-all text-center cursor-target"
                >
                  Get in touch
                </a>
                <a
                  href="/Cv.pdf"
                  download
                  className="px-5 py-3 border-2 border-purple-500 text-purple-300 hover:bg-purple-900/30 hover:text-white font-medium rounded-lg transition-all text-center cursor-target"
                >
                  View CV
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-purple-600/20 text-purple-300">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M14 3c-4 1-7 4-8 8l-3 6 6-3c4-1 7-4 8-8l2-2-2-2-3 1Z"/><path d="M6 12l6 6"/></svg>
                  </span>
                  <h4 className="font-semibold">Creative UI</h4>
                </div>
                <p className="mt-2 text-sm text-white/75">Micro‑interactions, tasteful motion, and polished visuals.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-purple-600/20 text-purple-300">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z"/></svg>
                  </span>
                  <h4 className="font-semibold">Robust</h4>
                </div>
                <p className="mt-2 text-sm text-white/75">Clean architecture, maintainable code, reliable delivery.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-purple-600/20 text-purple-300">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7v5l3 3"/><path d="M3 12a9 9 0 1 0 18 0A9 9 0 0 0 3 12Z"/></svg>
                  </span>
                  <h4 className="font-semibold">Fast</h4>
                </div>
                <p className="mt-2 text-sm text-white/75">Performance‑first approach with modern tooling.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-purple-600/20 text-purple-300">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M7 8a5 5 0 1 0 10 0 5 5 0 0 0-10 0Z"/><path d="M2 22a8 8 0 1 1 20 0H2Z"/></svg>
                  </span>
                  <h4 className="font-semibold">Team Player</h4>
                </div>
                <p className="mt-2 text-sm text-white/75">Clear communication and collaborative mindset.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="text-2xl font-bold">3+</div>
            <div className="text-xs text-white/70 mt-1">Years Coding</div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="text-2xl font-bold">15+</div>
            <div className="text-xs text-white/70 mt-1">Projects</div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="text-2xl font-bold">100%</div>
            <div className="text-xs text-white/70 mt-1">User‑Focused</div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default About;


