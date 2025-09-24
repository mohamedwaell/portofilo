import React, { useState, useEffect, useRef } from "react";

// Animated counter component
function AnimatedCounter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounter();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounter = () => {
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
  };

  return (
    <div
      ref={ref}
      className="text-5xl md:text-6xl font-bold text-[#a47cf3] mb-2"
    >
      {count}+
    </div>
  );
}

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  
  return (
    <section ref={sectionRef} id="about" className="w-full mb-16 sm:mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold hero-heading">
            About Me
          </h2>
          <p className="mt-3 text-white/70 text-center max-w-2xl mx-auto">
            Get to know me better and my journey in tech.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text Content */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-4">
              <p className="text-lg text-white/80 leading-relaxed">
                I'm a <span className="text-[#a47cf3] font-semibold">full‑stack developer</span> focused on building fast, accessible, and delightful web experiences. I love turning complex problems into simple, scalable solutions with clean code and thoughtful design.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Over the past years I’ve worked across freelance projects and startup teams, shipping production‑ready features end‑to‑end — from architecture and APIs to pixel‑perfect interfaces. My toolkit centers on modern JavaScript, type‑safety, performance, and a great developer experience.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                When I’m not building, I’m learning — contributing to open source, exploring new frameworks, and polishing small details that make products feel inspiring to use.
              </p>
            </div>

            {/* Skills */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-[#a47cf3]">◆</span> Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "PostgreSQL",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Git / GitHub"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: About Image */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-full">
              <img
                src="/about.png"
                alt="About"
                className="w-full h-auto rounded-2xl border border-white/10 shadow-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
       

        {/* Centered Stats Section */}
        <div
          className={`mt-16 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <AnimatedCounter target={1} />
              <div className="text-lg text-white/70 font-medium">
                Years Experience
              </div>
            </div>
            <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <AnimatedCounter target={15} />
              <div className="text-lg text-white/70 font-medium">
                Projects Completed
              </div>
            </div>
            <div className="text-center p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="text-5xl md:text-6xl font-bold text-[#a47cf3] mb-2">
                ∞
              </div>
              <div className="text-lg text-white/70 font-medium">
                Passion for Code
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
