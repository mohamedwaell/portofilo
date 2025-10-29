import React from "react";
import { TESTIMONIALS } from "../consts";

export default function Testimonials() {
  return (
    <section id="testimonials" className="min-h-[60vh] p-8">
      <h2 className="text-3xl md:text-4xl font-bold hero-heading text-center mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {TESTIMONIALS.map((t, idx) => (
          <article
            key={idx}
            className="rounded-2xl border border-dashed border-white/15 bg-white/5 p-5 flex gap-4 items-start"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-14 h-14 rounded-full object-cover border border-white/20"
              loading="lazy"
            />
            <div>
              <p className="text-slate-200 italic mb-3">“{t.quote}”</p>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span className="font-semibold text-slate-100">{t.name}</span>
                {t.title && <span>• {t.title}</span>}
                {t.link && (
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-300 hover:text-purple-200 underline underline-offset-2"
                  >
                    View project
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


