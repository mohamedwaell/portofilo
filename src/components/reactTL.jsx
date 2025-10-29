import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Dot = ({ children }) => (
  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white border-4 border-indigo-500 shadow">{children}</div>
);

const Card = ({ role, company, period, points }) => (
  <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 p-4 w-full md:max-w-md">
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-sm md:text-base font-semibold text-slate-900 dark:text-slate-100">{role}</h3>
        {company && <p className="text-xs text-slate-500 dark:text-slate-400">{company}</p>}
      </div>
      {period && <time className="text-xs text-slate-400">{period}</time>}
    </div>
    {points && (
      <ul className="mt-3 list-disc list-inside text-sm text-slate-700 dark:text-slate-200 space-y-1">
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    )}
  </div>
);

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

const lineVariants = {
  hidden: { opacity: 0, scaleY: 0, originY: 0 },
  visible: { opacity: 1, scaleY: 1, originY: 0 }
};

function TimelineItem({ item, idx, isAlternate, align }) {
  const side = isAlternate ? (idx % 2 === 0 ? "left" : "right") : align;
  const showLeft = side === "left";
  const containerClasses = showLeft ? "md:pr-8 md:pl-0 md:text-right md:flex md:justify-end" : "md:pl-8 md:pr-0 md:text-left";

  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });
  const controls = useAnimation();
  const dotControls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      dotControls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start("hidden");
      dotControls.start({ opacity: 0, scale: 0.7 });
    }
  }, [inView, controls, dotControls]);

  return (
    <li ref={ref} className={`relative md:flex md:items-center ${containerClasses} pl-16 md:pl-0 text-left`}>
      <div className={`md:w-1/2 w-full ${showLeft ? "md:order-1" : "md:order-2"}`}>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className={`md:inline-block ${showLeft ? "md:pr-6" : "md:pl-6"}`}
        >
          <Card role={item.role} company={item.company} period={item.period} points={item.points} />
        </motion.div>
      </div>

      {/* Dot - positioned on left on mobile, centered on md+ */}
      <motion.div
        className="absolute left-5 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={dotControls}
        transition={{ duration: 0.35 }}
      >
        <div className="-mt-1 md:-mt-2">
          <Dot />
        </div>
      </motion.div>

      <div className={`md:w-1/2 w-full ${showLeft ? "md:order-2" : "md:order-1"}`} aria-hidden></div>
    </li>
  );
}

export default function VerticalTimeline({ items = [], align = "left", compact = false }) {
  const isAlternate = align === "alternate";

  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { amount: 0.2 });
  const lineControls = useAnimation();

  useEffect(() => {
    if (lineInView) {
      lineControls.start("visible");
    } else {
      lineControls.start("hidden");
    }
  }, [lineInView, lineControls]);

  return (
    <div className={`w-full py-8`}>
      <div ref={lineRef} className="relative mx-auto container px-4">
        {/* Vertical line: left rail on mobile, center on md+ */}
        <motion.div
          className="absolute left-6 md:left-1/2 md:-translate-x-1/2 h-full w-px bg-slate-200 dark:bg-slate-700"
          variants={lineVariants}
          initial="hidden"
          animate={lineControls}
          transition={{ duration: 0.5, ease: "easeOut" }}
          aria-hidden
        />

        <ul className={`space-y-${compact ? "8" : "12"} relative`}>
          {items.map((item, idx) => (
            <TimelineItem key={idx} item={item} idx={idx} isAlternate={isAlternate} align={align} />
          ))}
        </ul>
      </div>
    </div>
  );
}
