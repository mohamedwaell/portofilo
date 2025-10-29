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

import { ABOUT_SKILLS } from "../consts";

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
    <section ref={sectionRef} id="about" className="w-full min-h-screen flex items-center py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Title with line */}
        <div className="mb-12">
         
          <h2 className="text-3xl md:text-4xl font-bold hero-heading text-center">About Me</h2>
          
          
        </div>

        {/* Main Content - Compact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div
            className={`space-y-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-base text-white/80 leading-relaxed">
              I'm a <span className="text-[#a47cf3] font-semibold">Full Stack Developer</span> and software engineer passionate about building digital solutions. My journey spans from backend systems to user experiences.
            </p>
            <p className="text-base text-white/80 leading-relaxed">
              I discovered my love for development through ERP systems and interactive applications. I focus on clean code, problem-solving, scalable design, and user-first thinking.
            </p>
            <p className="text-base text-white/80 leading-relaxed">
              Currently, I'm focused on creating full-stack web applications from scratch, combining backend logic with intuitive frontend design, and transforming ideas into functional browser tools.
            </p>
            
            {/* Skills - Compact */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-2">
                {ABOUT_SKILLS.slice(0, 6).map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/70"
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
            <div className="w-full max-w-md mx-auto">
              <img
                src="/about.webp"
                alt="About"
                className="w-full h-auto  object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
