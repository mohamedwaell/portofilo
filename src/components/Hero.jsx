import React from 'react'
import TextType from "./TextType.jsx";
import TiltedCard from "./TiltedCard.jsx";
import ModelViewer from "./ModelViewer.jsx";
import { PROFILE_IMAGE, CV_URL, HERO_TYPING_TEXTS, HERO_TEXT_COLORS } from "../consts";
const Hero = () => {
  return (
    <section
    id="home"
    className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 mb-16 sm:mb-24"
  >
    <div className="flex-1 flex flex-col gap-6 max-w-lg justify-center items-center">
      <div className="flex justify-center items-center w-full">
        <TiltedCard
          imageSrc={PROFILE_IMAGE}
          altText="Profile"
          captionText="That's me!"
          imageHeight="min(50vw, 180px)"
          imageWidth="min(50vw, 180px)"
          containerHeight="min(60vw, 220px)"
          containerWidth="min(60vw, 220px)"
          scaleOnHover={1.08}
          displayOverlayContent={true}
        />
      </div>
      <p className="text-5xl md:text-7xl font-bold hero-heading cursor-target text-center">
        Mohamed Wael
      </p>

      <TextType
        text={HERO_TYPING_TEXTS}
        as="h1"
        className="text-3xl font-bold text-center mt-2"
        typingSpeed={60}
        pauseDuration={1200}
        textColors={HERO_TEXT_COLORS}
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

    <div className="flex-1 flex items-center justify-center max-w-xl md:max-w-lg w-full px-4 md:px-0">
      <div className="p-2 sm:p-4 w-full">
        <ModelViewer
          modelUrl="/models/me.glb"
          height="56vh"
          scale={1.6}
          autoRotate
          autoRotateSpeed={2.7}
          cameraPosition={[0, 2, 6]}
          controls={{ enableZoom: false }}
        />
      </div>
    </div>
  </section>
  )
}

export default Hero