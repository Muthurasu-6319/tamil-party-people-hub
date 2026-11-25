import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  HeartPulse,
  Briefcase,
  Receipt,
  TrendingDown,
  ShoppingBag,
  Sprout,
  ShieldAlert,
  Ban,
  Landmark,
  Printer,
  CheckCircle2,
  Phone,
  Mail,
  Sparkles,
  ArrowRight,
  Search,
} from "lucide-react";
import { ELECTION_PROMISES, MANIFESTO_META } from "@/data/partyData";
import { leaderImg } from "@/data/assets";

const PROMISE_ICONS = [
  BookOpen,
  HeartPulse,
  Briefcase,
  Receipt,
  TrendingDown,
  ShoppingBag,
  Sprout,
  ShieldAlert,
  Ban,
  Landmark,
];

export function ManifestoView({
  language,
  SiteHeader,
  SiteFooter,
}: {
  language: "ta" | "en";
  SiteHeader: React.ComponentType;
  SiteFooter: React.ComponentType;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNumber, setSelectedNumber] = useState<string>("all");

  const filteredPromises = ELECTION_PROMISES.filter((p) => {
    const matchesNumber = selectedNumber === "all" || p.number === selectedNumber;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      p.titleTa.toLowerCase().includes(q) ||
      p.titleEn.toLowerCase().includes(q) ||
      p.fullTextTa.toLowerCase().includes(q) ||
      p.fullTextEn.toLowerCase().includes(q) ||
      p.categoryTa.toLowerCase().includes(q) ||
      p.categoryEn.toLowerCase().includes(q);
    return matchesNumber && matchesSearch;
  });

  return (
    <>
      <SiteHeader />
      <main className="w-full max-w-full overflow-x-hidden bg-slate-50/70">
        {/* Official Party Letterhead Header inspired by Manifesto Sheets */}
        <section className="bg-white border-b border-slate-200 shadow-2xs">
          <div className="mx-auto max-w-[1160px] px-4 sm:px-8 pt-6 pb-8">
            <div className="rounded-2xl border-2 border-emerald-700/20 bg-gradient-to-b from-white via-emerald-50/20 to-white p-5 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left: Founder Photo & Designation */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="size-24 sm:size-28 rounded-2xl overflow-hidden border-2 border-[#12883c] shadow-md bg-white shrink-0">
                    <img
                      src={leaderImg}
                      alt={MANIFESTO_META.founderNameEn}
                      className="size-full object-cover object-top"
                    />
                  </div>
                  <div className="text-left">
                    <h2 className="text-base sm:text-lg font-black text-[#12883c] leading-tight">
                      {language === "ta" ? MANIFESTO_META.founderNameTa : MANIFESTO_META.founderNameEn}
                    </h2>
                    <p className="text-xs sm:text-sm font-bold text-slate-700 mt-0.5">
                      {language === "ta" ? MANIFESTO_META.founderRoleTa : MANIFESTO_META.founderRoleEn}
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-amber-100 border border-amber-300 px-2.5 py-0.5 text-[11px] font-extrabold text-amber-950">
                      <Sparkles className="size-3 text-amber-600" />
                      <span>{MANIFESTO_META.partyShort}</span>
                    </div>
                  </div>
                </div>

                {/* Center & Right: Party Name & Official Contact */}
                <div className="text-center md:text-right space-y-1.5 flex-1">
                  <div className="text-xl sm:text-2xl font-black tracking-wider text-[#12883c]">
                    {MANIFESTO_META.partyShort}
                  </div>
                  <h1 className="text-xl sm:text-3xl font-black text-slate-900 leading-tight">
                    {MANIFESTO_META.partyNameTa}
                  </h1>
                  <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#1e3a5f]">
                    {MANIFESTO_META.partyNameEn}
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center md:justify-end gap-3 text-xs font-bold text-slate-700">
                    <span className="inline-flex items-center gap-1.5">
                      <Phone className="size-3.5 text-[#12883c]" />
                      <span>செல்: {MANIFESTO_META.phones.join(", ")}</span>
                    </span>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Mail className="size-3.5 text-[#12883c]" />
                      <span>{MANIFESTO_META.email}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Tricolor Party Ribbon */}
              <div className="mt-6 h-2 w-full rounded-full overflow-hidden flex">
                <div className="w-1/3 bg-[#12883c]" />
                <div className="w-1/3 bg-[#fbbf24]" />
                <div className="w-1/3 bg-[#4c1d6f]" />
              </div>

              {/* Manifesto Title & Unity Symbols */}
              <div className="mt-6 text-center space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-900/5 border border-purple-200 px-4 py-1 text-xs font-black text-[#4c1d6f]">
                  <span>☪</span>
                  <span>ॐ</span>
                  <span>✝</span>
                  <span className="ml-1">
                    {language === "ta"
                      ? "சாதி, மதம், இனம், மொழி கடந்த மக்கள் நல வாக்குறுதி"
                      : "Secular & Universal People's Manifesto"}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {language === "ta" ? MANIFESTO_META.titleTa : MANIFESTO_META.titleEn}
                </h2>
                <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === "ta"
                    ? "கல்வி, மருத்துவம், வேலைவாய்ப்பு, விவசாயம், விலைவாசி கட்டுப்பாடு மற்றும் சட்டம் ஒழுங்கு ஆகிய 10 முக்கியத் துறைகளில் மக்களின் வாழ்வாதாரத்தை உயர்த்தும் அதிகாரப்பூர்வ தேர்தல் வாக்குறுதிகள்."
                    : "Our 10 official commitments across education, healthcare, employment, agriculture, inflation control, and banking reform."}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 rounded-full bg-[#12883c] hover:bg-[#0e6e30] text-white px-5 py-2 text-xs font-bold shadow-xs transition-colors"
                  >
                    <Printer className="size-3.5" />
                    <span>{language === "ta" ? "வாக்குறுதி அச்சிடுக / PDF" : "Print / Save Manifesto"}</span>
                  </button>
                  <Link
                    to="/membership"
                    className="inline-flex items-center gap-2 rounded-full bg-[#fbbf24] hover:bg-[#f59e0b] text-slate-950 px-5 py-2 text-xs font-black shadow-xs transition-colors"
                  >
                    <span>{language === "ta" ? "கட்சியில் இணையுங்கள்" : "Join Our Party"}</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Quick Jump Filter */}
        <section className="py-8 px-4 sm:px-8">
          <div className="mx-auto max-w-[1160px] space-y-6">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="relative flex-1">
                <Search className="size-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    language === "ta"
                      ? "வாக்குறுதியில் தேடுங்கள் (எ.கா: கல்வி, மருத்துவம், வேலை, விவசாயம், GST)..."
                      : "Search promises (e.g., education, hospital, job, farmer, GST)..."
                  }
                  className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#12883c]/30 focus:border-[#12883c]"
                />
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setSelectedNumber("all")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    selectedNumber === "all"
                      ? "bg-[#12883c] text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {language === "ta" ? "அனைத்தும் (10)" : "All (10)"}
                </button>
                {ELECTION_PROMISES.map((p) => (
                  <button
                    key={p.number}
                    type="button"
                    onClick={() => setSelectedNumber(p.number)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-black font-mono transition-colors ${
                      selectedNumber === p.number
                        ? "bg-[#4c1d6f] text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {p.number}
                  </button>
                ))}
              </div>
            </div>

            {/* 10 Election Promises List */}
            <div className="grid gap-6">
              {filteredPromises.map((promise) => {
                const idx = Number(promise.number) - 1;
                const IconComp = PROMISE_ICONS[idx] || CheckCircle2;
                return (
                  <article
                    key={promise.number}
                    className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#12883c] via-[#fbbf24] to-[#4c1d6f]" />

                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                      {/* Number & Icon Badge */}
                      <div className="flex items-center gap-3 shrink-0">
                        <div className="size-12 sm:size-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col items-center justify-center text-[#12883c] shadow-2xs">
                          <span className="text-lg sm:text-xl font-black font-mono leading-none">
                            {promise.number}
                          </span>
                        </div>
                        <div className="sm:hidden">
                          <span className="inline-block rounded-full bg-purple-50 border border-purple-200 px-2.5 py-0.5 text-[11px] font-bold text-[#4c1d6f]">
                            {language === "ta" ? promise.categoryTa : promise.categoryEn}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-purple-50 border border-purple-200 px-3 py-0.5 text-xs font-bold text-[#4c1d6f]">
                            <IconComp className="size-3.5" />
                            <span>{language === "ta" ? promise.categoryTa : promise.categoryEn}</span>
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                          {language === "ta" ? promise.titleTa : promise.titleEn}
                        </h3>

                        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-medium bg-slate-50/80 rounded-xl p-4 border border-slate-100">
                          {language === "ta" ? `${Number(promise.number)}) ${promise.fullTextTa}` : promise.fullTextEn}
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {(language === "ta" ? promise.highlightsTa : promise.highlightsEn).map((h, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50/80 border border-emerald-200/80 px-2.5 py-1 text-xs font-bold text-emerald-900"
                            >
                              <CheckCircle2 className="size-3.5 text-[#12883c] shrink-0" />
                              <span>{h}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}

              {filteredPromises.length === 0 && (
                <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500 text-sm font-semibold">
                  {language === "ta"
                    ? "தேடிய சொல்லுக்குப் பொருத்தமான வாக்குறுதி இல்லை."
                    : "No matching promises found for your search."}
                </div>
              )}
            </div>

            {/* Official Sign-off Card matching Page 3 of Uploaded Manifesto */}
            <div className="rounded-3xl border-2 border-emerald-700/25 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 p-8 sm:p-10 text-white text-center shadow-xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 border border-amber-300/40 px-4 py-1 text-xs font-black text-amber-300">
                <span>{MANIFESTO_META.partyShort}</span>
                <span>•</span>
                <span>{language === "ta" ? "அதிகாரப்பூர்வ அறிவிப்பு" : "Official Declaration"}</span>
              </div>
              <div className="space-y-1">
                <p className="text-lg sm:text-xl font-bold text-emerald-200">
                  {MANIFESTO_META.signOffLine1Ta}
                </p>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {MANIFESTO_META.signOffLine2Ta}
                </h3>
                <p className="text-base sm:text-xl font-extrabold text-[#fbbf24]">
                  {MANIFESTO_META.signOffLine3Ta} — {MANIFESTO_META.founderNameTa}
                </p>
              </div>
              <div className="pt-3 flex flex-wrap justify-center gap-3">
                <Link
                  to="/membership"
                  className="inline-flex items-center gap-2 rounded-full bg-[#fbbf24] hover:bg-[#f59e0b] text-slate-950 px-6 py-2.5 text-xs sm:text-sm font-black shadow-lg transition-transform hover:scale-105"
                >
                  <span>{language === "ta" ? "இப்போதே உறுப்பினராக இணையுங்கள்" : "Join Our Movement Now"}</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

