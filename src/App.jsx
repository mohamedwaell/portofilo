import TargetCursor from "./components/TargetCursor.jsx";
import React, { useEffect, useState } from "react";
import ModernNavbar from "./components/ModernNavbar.jsx";
import Particles from "./components/Particles.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
// import ScrollToTop from "./components/ScrollToTop.jsx";
import Projects from "./components/Projects.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import LogoLoop from './components/LogoLoop';
import TechStack from './components/TechStack.jsx';
import Contacts from "./components/Contact2.jsx";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  
  
} from 'react-icons/si';

const techLogos = [
  { node: <SiHtml5 />, title: "HTML5", href: "https://www.html.com" },
  { node: <SiCss3 />, title: "CSS3", href: "https://www.css.com" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
  
];



export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => setVisible(false), 1000); // optional: fully remove after fade
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
    
     <div
        className={`fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-white dark:bg-black transition-opacity duration-700 ${
          loading
            ? "opacity-100 pointer-events-auto z-50"
            : "opacity-0 pointer-events-none"
        } ${visible ? "" : "hidden"}`}
      >
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50" />
      </div>
    <div className="relative min-h-screen bg-[#11111b] text-white font-sans overflow-x-hidden">
      <TargetCursor targetSelector=".cursor-target" />
      <WhatsAppButton />
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10">
        <ModernNavbar />
        <main className="pt-24 md:pt-28 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
           <div style={{ height: '250px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        speed={80}
        direction="left"
        logoHeight={70}
        gap={40}
        pauseOnHover={false}
        scaleOnHover
        fadeOut
        fadeOutColor="#11111b"
        ariaLabel="Technology partners"
      />
    </div>
    
         
          <About />
          <TechStack />
          <Experience />
          <Testimonials />
          <Projects />
           </div>
          <Contacts />
          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Footer />

          </div> */}
        </main>
      </div>
    </div>
    </>
  );
}
