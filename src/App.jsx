import ModelViewer from "./components/ModelViewer.jsx";
import TargetCursor from "./components/TargetCursor.jsx";
import TextType from "./components/TextType.jsx";
import TiltedCard from "./components/TiltedCard.jsx";
import React, { useEffect, useState } from "react";
import ModernNavbar from "./components/ModernNavbar.jsx";
import Particles from "./components/Particles.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

const PROFILE_IMAGE = "./porfile.jpg";
const CV_URL = "./Cv.pdf";

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
      <TargetCursor targetSelector=".cursor-target" className='hidden md:block'   />
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
        <main className="pt-10 pb-32">
          <section
            id="home"
            className="w-full flex flex-col md:flex-row items-center justify-center gap-10 mb-20"
          >
            <div className="flex-1 flex flex-col gap-6 max-w-lg justify-center items-center">
              <div className="flex justify-center items-center w-full">
                <TiltedCard
                  imageSrc={PROFILE_IMAGE}
                  altText="Profile"
                  captionText="That's me!"
                  imageHeight="180px"
                  imageWidth="180px"
                  containerHeight="220px"
                  containerWidth="220px"
                  scaleOnHover={1.08}
                  displayOverlayContent={true}
                />
              </div>
              <p className="text-5xl md:text-7xl font-bold hero-heading cursor-target text-center">
                Mohamed Wael
              </p>

              <TextType
                text={[
                  "I'm a Frontend & Creative Developer.",
                  "I build cool things with JS & 3D.",
                  "Let's make something awesome!",
                ]}
                as="h1"
                className="text-3xl font-bold text-center mt-2"
                typingSpeed={60}
                pauseDuration={1200}
                textColors={["#fff", "#a47cf3", "#f2d479"]}
                showCursor={true}
                cursorCharacter="_"
              />
              <div className="flex flex-col sm:flex-row gap-4 mt-6 ">
                <a
                  href={CV_URL}
                  download="Mohamed_Wael_CV.pdf"
                  className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 text-center cursor-target"
                >
                  Download CV
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 border-2 border-purple-500 text-purple-300 hover:bg-purple-900/30 hover:text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 text-center cursor-target"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 text-center cursor-target"
                >
                  Get in touch
                </a>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center max-w-lg">
              <div className="p-4   ">
                <ModelViewer
                  modelUrl="/models/me.glb"
                  height="500px"
                  scale={1.7}
                  autoRotate
                  autoRotateSpeed={2.7}
                  cameraPosition={[0, 2, 6]}
                  controls={{ enableZoom: false }}
                />
              </div>
            </div>
          </section>
          
         
        </main>
      </div>
    </div>
    </>
  );
}
