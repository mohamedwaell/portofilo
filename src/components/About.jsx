import React from "react";
import Lanyard from "./Lanyard";

const About = () => {
  return (
    <section id="about" className="w-full py-16 ">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About Me
          </h2>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-left space-y-6">
            <p className="text-lg text-white/80 leading-relaxed">
              I specialize in building interactive web experiences and blending
              creativity with technology. My passion lies in developing
              solutions that are not only functional but also visually engaging.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Beyond coding, I enjoy working on collaborative projects and
              exploring new technologies that push the boundaries of what’s
              possible on the web.
            </p>
          </div>

          {/* Right: 3D Model */}
          <div className="h-[400px] md:h-[500px] flex justify-center">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
