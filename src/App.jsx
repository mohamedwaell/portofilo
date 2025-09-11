import TargetCursor from "./components/TargetCursor.jsx";
import React, { useEffect, useState } from "react";
import ModernNavbar from "./components/ModernNavbar.jsx";
import Particles from "./components/Particles.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";




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
    <div className="relative min-h-screen bg-[#060010] text-white font-sans">
      <TargetCursor targetSelector=".cursor-target" />
      <WhatsAppButton />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
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
        <main className="pt-24 md:pt-28 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          {/* <About />
          <Contact /> */}
         
          </div>
        </main>
      </div>
    </div>
    </>
  );
}
