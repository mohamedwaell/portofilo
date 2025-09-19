import React from "react";

export function Marquee({ children, className = "", pauseOnHover = false }) {
  return (
    <div
      className={`flex animate-marquee ${pauseOnHover ? "hover:pause" : ""} ${className}`}
      style={{
        animationDuration: "20s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
      }}
    >
      <div className="flex shrink-0 justify-around min-w-full">
        {children}
      </div>
      <div className="flex shrink-0 justify-around min-w-full">
        {children}
      </div>
    </div>
  );
}
