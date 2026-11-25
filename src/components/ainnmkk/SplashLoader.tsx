import React, { useEffect, useState } from "react";
import { partyLogoImg } from "@/data/assets";

export function SplashLoader() {
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const exitDelay = prefersReduced ? 200 : 1650;
    const doneDelay = prefersReduced ? 350 : 2300;

    const exitTimer = setTimeout(() => setPhase("exiting"), exitDelay);
    const doneTimer = setTimeout(() => setPhase("done"), doneDelay);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  const isExiting = phase === "exiting";

  return (
    <div
      aria-hidden={isExiting}
      onClick={() => setPhase("exiting")}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white px-6 select-none transition-all duration-700 ease-out ${
        isExiting ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Subtle tricolor ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[460px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 size-[380px] rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 size-[340px] rounded-full bg-purple-700/10 blur-3xl" />
      </div>

      {/* Animated Logo Ring */}
      <div className="relative flex items-center justify-center">
        {/* Outer rotating tricolor ring */}
        <div className="size-36 sm:size-40 rounded-full p-[3px] splash-spin-slow bg-[conic-gradient(from_0deg,#12883c_0deg_120deg,#fbbf24_120deg_240deg,#4c1d6f_240deg_360deg)] shadow-xl shadow-emerald-900/10">
          <div className="size-full rounded-full bg-white" />
        </div>

        {/* Soft pulsing ring */}
        <div className="absolute size-32 sm:size-36 rounded-full border-2 border-emerald-500/20 animate-ping" />

        {/* Party Logo */}
        <div className="absolute size-28 sm:size-32 rounded-full bg-white p-1.5 shadow-inner flex items-center justify-center splash-logo-pop">
          <img
            src={partyLogoImg}
            alt="AINNMK Official Logo"
            className="size-full rounded-full object-contain"
          />
        </div>
      </div>

      {/* Party Title & Slogan */}
      <div className="mt-7 text-center space-y-1.5 splash-text-rise">
        <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#4c1d6f]">
          AINNMK • EST. 2008
        </p>
        <h2 className="text-xl sm:text-2xl font-black text-[#12883c] tracking-tight">
          அகில இந்திய நம் நாடு மக்கள் கட்சி
        </h2>
        <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-600">
          Agila India Nam Nadu Makkal Katchi
        </p>
        <p className="pt-1 text-xs font-bold text-amber-600">
          நம் தாய்நாடு – நம் குடும்பம்
        </p>
      </div>

      {/* Smooth Tricolor Loading Progress Bar */}
      <div className="mt-6 w-52 sm:w-64 h-1.5 rounded-full bg-slate-100 overflow-hidden border border-slate-200/80 shadow-inner">
        <div className="h-full rounded-full splash-progress bg-gradient-to-r from-[#12883c] via-[#fbbf24] to-[#4c1d6f]" />
      </div>
    </div>
  );
}

