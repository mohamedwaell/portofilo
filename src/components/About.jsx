import React, { useState, useEffect, useRef } from "react";
import GlareHover from "./GlareHover";

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

  const skillsCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
        { name: "Tailwind", icon: "tailwind-icon" },
        { name: "React", icon: "fab fa-react" },
      ],
    },
  ];

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
                I'm a passionate{" "}
                <span className="text-[#a47cf3] font-semibold">
                  full-stack developer
                </span>{" "}
                who loves creating digital experiences that blend creativity
                with cutting-edge technology.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                With expertise in modern web technologies, I specialize in
                building scalable applications that not only function flawlessly
                but also provide exceptional user experiences.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                When I'm not coding, you'll find me exploring new frameworks,
                contributing to open-source projects, or experimenting with the
                latest design trends.
              </p>
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
