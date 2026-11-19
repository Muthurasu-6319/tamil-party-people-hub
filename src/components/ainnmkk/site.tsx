import React, { useState, useMemo, useRef, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  Eye,
  Facebook,
  Flag,
  Globe,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Home,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Newspaper,
  Pause,
  Phone,
  Play,
  Scale,
  Search,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  Sprout,
  Twitter,
  Users,
  UserCheck,
  Volume2,
  VolumeX,
  X,
  Youtube,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSiteLanguage } from "@/routes/__root";
import { submitContactMessage, submitMembership } from "@/lib/ainnmkk-contact.functions";
import { contactSchema, membershipSchema, toMembershipInsert } from "@/lib/ainnmkk-membership";
import {
  PARTY_INFO,
  PILLARS,
  LEADERS,
  WINGS,
  NEWS_ARTICLES,
  EVENTS,
  GALLERY,
  TIMELINE,
  FLAG_SYMBOL_INFO,
  Leader,
  NewsArticle,
  GalleryItem,
} from "@/data/partyData";
import {
  partyLogoImg,
  leaderImg,
  rallyImg,
  farmersImg,
  womenImg,
  youthImg,
  socialServiceImg,
  getAssetUrl,
} from "@/data/assets";
import { VirtualIdCard } from "@/components/ainnmkk/VirtualIdCard";

export const partyLogoSrc = partyLogoImg;

type TextPair = { ta: string; en: string };

export type NavSubItem = {
  href: string;
  label: TextPair;
  description: TextPair;
  icon: React.ComponentType<{ className?: string }>;
};

export type NavGroupItem = {
  type: "group";
  label: TextPair;
  items: NavSubItem[];
};

export type NavLinkItem = {
  type: "link";
  href: string;
  label: TextPair;
};

export type HeaderNavItem = NavGroupItem | NavLinkItem;

export const headerNavConfig: HeaderNavItem[] = [
  {
    type: "link",
    href: "/",
    label: { ta: "Home", en: "Home" },
  },
  {
    type: "group",
    label: { ta: "About Us", en: "About Us" },
    items: [
      {
        href: "/about",
        label: { ta: "எங்களைப் பற்றி", en: "About Us" },
        description: { ta: "கட்சியின் வரலாறு மற்றும் பார்வை", en: "Party history, vision & mission" },
        icon: BookOpen,
      },
      {
        href: "/organization",
        label: { ta: "கட்சி அமைப்பு", en: "Organization" },
        description: { ta: "மாநில & மாவட்ட அணிகள்", en: "State & district committees" },
        icon: Flag,
      },
    ],
  },
  {
    type: "group",
    label: { ta: "Leadership", en: "Leadership" },
    items: [
      {
        href: "/leadership",
        label: { ta: "தலைமை நிர்வாகிகள்", en: "Party Leaders" },
        description: { ta: "நிறுவனத் தலைவர் மற்றும் தலைமை நிர்வாகிகள்", en: "Founder & key leaders" },
        icon: Users,
      },
    ],
  },
  {
    type: "group",
    label: { ta: "Our Ideology", en: "Our Ideology" },
    items: [
      {
        href: "/ideology",
        label: { ta: "12 அடிப்படைக் கொள்கைகள்", en: "12 Principles" },
        description: { ta: "நமது அடிப்படைக் கொள்கைகள்", en: "Core party principles" },
        icon: Sprout,
      },
    ],
  },
  {
    type: "group",
    label: { ta: "News & Media", en: "News & Media" },
    items: [
      {
        href: "/news",
        label: { ta: "செய்திகள்", en: "Latest News" },
        description: { ta: "கட்சியின் புதிய அறிவிப்புகள் & செய்திகள்", en: "Party news & announcements" },
        icon: Newspaper,
      },
      {
        href: "/press-releases",
        label: { ta: "பத்திரிகை வெளியீடுகள்", en: "Press Releases" },
        description: { ta: "அதிகாரப்பூர்வ பத்திரிகை அறிக்கைகள்", en: "Official press releases" },
        icon: Newspaper,
      },
    ],
  },
  {
    type: "group",
    label: { ta: "Events", en: "Events" },
    items: [
      {
        href: "/events",
        label: { ta: "நிகழ்வுகள்", en: "Party Events" },
        description: { ta: "மாநாடுகள் & களப்பணி", en: "Rallies & meets" },
        icon: CalendarDays,
      },
    ],
  },
  {
    type: "group",
    label: { ta: "Gallery", en: "Gallery" },
    items: [
      {
        href: "/gallery",
        label: { ta: "படத்தொகுப்பு", en: "Photo Gallery" },
        description: { ta: "புகைப்படங்கள் மற்றும் காணொளிகள்", en: "Photo & video archive" },
        icon: Eye,
      },
    ],
  },
  {
    type: "link",
    href: "/contact",
    label: { ta: "Contact", en: "Contact" },
  },
];

const navItems: { href: string; label: TextPair }[] = [
  { href: "/about", label: { ta: "எங்களைப் பற்றி", en: "About" } },
  { href: "/leadership", label: { ta: "தலைமை", en: "Leadership" } },
  { href: "/organization", label: { ta: "அமைப்பு", en: "Organization" } },
  { href: "/ideology", label: { ta: "கொள்கைகள்", en: "Principles" } },
  { href: "/news", label: { ta: "செய்திகள்", en: "News" } },
  { href: "/events", label: { ta: "நிகழ்வுகள்", en: "Events" } },
  { href: "/gallery", label: { ta: "படத்தொகுப்பு", en: "Gallery" } },
  { href: "/membership", label: { ta: "உறுப்பினர் சேர்க்கை", en: "Membership" } },
  { href: "/contact", label: { ta: "தொடர்புக்கு", en: "Contact" } },
];

function DesktopNavDropdown({
  group,
  language,
  currentPath,
}: {
  group: NavGroupItem;
  language: "ta" | "en";
  currentPath: string;
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isChildActive = group.items.some(
    (item) => currentPath === item.href || (item.href !== "/" && currentPath.startsWith(item.href))
  );

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 180);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`inline-flex items-center gap-0.5 2xl:gap-1 px-1.5 2xl:px-2.5 py-1 text-[11px] 2xl:text-xs font-semibold rounded-md transition-colors ${
          isChildActive
            ? "text-[#12883c] font-bold"
            : open
            ? "text-[#12883c] bg-slate-100"
            : "text-slate-700 hover:text-[#12883c]"
        }`}
      >
        <span>{group.label.en}</span>
        <ChevronDown
          className={`size-2.5 2xl:size-3 transition-transform duration-200 ${
            open ? "rotate-180 text-[#12883c]" : "text-slate-400"
          }`}
        />
      </button>

      {open && (
        <div
          className="absolute left-0 top-full pt-1.5 z-50 min-w-56 animate-in fade-in-0 zoom-in-95 duration-150 origin-top"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl ring-1 ring-black/5">
            {group.items.map((sub) => {
              const SubIcon = sub.icon;
              const isActive = currentPath === sub.href;
              return (
                <Link
                  key={sub.href}
                  to={sub.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-emerald-50 text-[#12883c] font-bold"
                      : "hover:bg-slate-50 text-slate-700 hover:text-slate-900"
                  }`}
                >
                  <SubIcon className={`size-3.5 shrink-0 ${isActive ? "text-[#12883c]" : "text-slate-400"}`} />
                  <span>{language === "ta" ? sub.label.ta : sub.label.en}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export function BrandMark({
  className = "size-12",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full ${
        light ? "ring-2 ring-brand-yellow/40 bg-white/10" : ""
      } ${className}`}
    >
      <img
        alt="அகில இந்திய நம் நாடு மக்கள் கட்சி (AINNMK)"
        className="size-full rounded-full object-contain"
        fetchPriority="high"
        src={partyLogoImg}
      />
      {light ? <span className="sr-only">AINNMK</span> : null}
    </span>
  );
}

function Bilingual({ text, className = "" }: { text: TextPair; className?: string }) {
  const { language, setLanguage } = useSiteLanguage();
  return (
    <button
      aria-label={language === "ta" ? "Switch to English" : "தமிழில் காண்க"}
      className={`inline-flex h-8 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 text-xs font-bold transition-all hover:bg-slate-100 text-slate-900 shadow-2xs ${className}`}
      onClick={() => setLanguage(language === "ta" ? "en" : "ta")}
      type="button"
    >
      <span>{language === "ta" ? "தமிழ்" : "English"}</span>
      <ChevronDown aria-hidden="true" className="size-3 text-slate-600" />
    </button>
  );
}

export function SiteHeader() {
  const { language, setLanguage } = useSiteLanguage();
  const location = useLocation();
  const currentPath = location?.pathname || "";
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpandedGroups, setMobileExpandedGroups] = useState<Record<string, boolean>>({
    "About Us": true,
    "Leadership": false,
    "Our Ideology": false,
    "News & Media": false,
    "Events": false,
    "Gallery": false,
  });

  const toggleMobileGroup = (key: string) => {
    setMobileExpandedGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Top Banner Ribbon - Responsive, no mobile overflow */}
      <div className="w-full min-h-9 bg-[#12883c] px-3 sm:px-6 xl:px-8 2xl:px-12 py-1 text-xs font-semibold text-white flex items-center justify-between border-b border-emerald-800/40 overflow-hidden">
        <div className="flex items-center gap-2 truncate min-w-0 pr-2">
          <span className="inline-flex items-center gap-1.5 font-bold text-amber-300 shrink-0">
            <Megaphone className="size-3.5 fill-amber-300 text-amber-300 shrink-0" />
            <span className="truncate">{language === "ta" ? "நம் தாய்நாடு – நம் குடும்பம்" : "Our Motherland – Our Family"}</span>
          </span>
          <span className="text-white/40 hidden md:inline shrink-0">|</span>
          <span className="text-white/95 hidden md:inline text-[11px] sm:text-xs truncate">
            {language === "ta" ? "சமாதானம்  •  சமத்துவம்  •  மக்கள் நலம்" : "Peace  •  Equality  •  People's Welfare"}
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-2 text-white">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-amber-300 transition-colors">
              <Facebook className="size-3.5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-amber-300 transition-colors">
              <Youtube className="size-3.5" />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X" className="hover:text-amber-300 transition-colors">
              <Twitter className="size-3.5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-amber-300 transition-colors">
              <Instagram className="size-3.5" />
            </a>
          </div>
          <button
            type="button"
            onClick={() => setLanguage(language === "ta" ? "en" : "ta")}
            aria-label={language === "ta" ? "Switch to English" : "Switch to Tamil"}
            className="rounded-full bg-white text-slate-900 px-2.5 py-0.5 text-[11px] sm:text-xs font-extrabold flex items-center gap-1 hover:bg-slate-100 shadow-xs transition-colors shrink-0"
          >
            <span>{language === "ta" ? "தமிழ்" : "English"}</span>
            <ChevronDown className="size-3 text-slate-600" />
          </button>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/90 bg-white shadow-xs overflow-hidden">
        <div className="w-full flex min-h-[64px] sm:min-h-[74px] items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6 xl:px-8 2xl:px-12 max-w-full">
          <Link aria-label="AINNMK Home" className="flex min-w-0 items-center gap-2 sm:gap-3 group shrink" to="/">
            <BrandMark className="size-10 sm:size-12 drop-shadow-xs group-hover:scale-105 transition-transform shrink-0" />
            <div className="min-w-0 flex flex-col justify-center">
              <span className="block truncate text-xs sm:text-sm font-black leading-tight text-[#12883c] tracking-tight">
                அகில இந்திய நம் நாடு மக்கள் கட்சி
              </span>
              <span className="mt-0.5 block truncate text-[9px] sm:text-[11px] font-black text-[#1e3a5f] tracking-wide uppercase">
                Agila India Nam Nadu Makkal Katchi
              </span>
            </div>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 2xl:gap-1.5 xl:flex shrink-0">
            {headerNavConfig.map((item, idx) => {
              if (item.type === "link") {
                const isHome = item.href === "/";
                const isActive = currentPath === item.href;
                if (isHome) {
                  return (
                    <Link
                      key={item.href}
                      className={`rounded-full px-2.5 2xl:px-3.5 py-1 2xl:py-1.5 text-[11px] 2xl:text-xs font-bold inline-flex items-center gap-1 transition-all shadow-xs ${
                        isActive
                          ? "bg-[#12883c] text-white"
                          : "text-slate-700 hover:text-[#12883c] hover:bg-slate-100"
                      }`}
                      to={item.href}
                    >
                      <Home className="size-3 2xl:size-3.5" />
                      <span>Home</span>
                    </Link>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    className={`px-1.5 2xl:px-2.5 py-1 2xl:py-1.5 text-[11px] 2xl:text-xs font-semibold rounded-md transition-colors ${
                      isActive
                        ? "text-[#12883c] font-bold"
                        : "text-slate-700 hover:text-[#12883c]"
                    }`}
                    to={item.href}
                  >
                    {item.label.en}
                  </Link>
                );
              }
              return (
                <DesktopNavDropdown
                  key={idx}
                  group={item}
                  language={language}
                  currentPath={currentPath}
                />
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <Button
              asChild
              className="h-8 2xl:h-9 rounded-full bg-[#fbbf24] hover:bg-[#f59e0b] px-3.5 2xl:px-5 text-[11px] 2xl:text-xs font-black shadow-xs text-slate-950 transition-transform hover:scale-105"
            >
              <Link to="/membership">
                <span>Join Our Party</span>
                <ArrowUpRight aria-hidden="true" className="ml-1 size-3.5 2xl:size-4" />
              </Link>
            </Button>
          </div>

          <div className="flex shrink-0 items-center gap-2 xl:hidden">
            <Button
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="size-9 sm:size-10 p-0 text-slate-800"
              onClick={() => setMenuOpen((open) => !open)}
              variant="outline"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {menuOpen ? (
          <nav aria-label="Mobile navigation" className="grid gap-1 border-t border-border bg-background px-4 py-4 xl:hidden shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
            {headerNavConfig.map((item, idx) => {
              if (item.type === "link") {
                const isActive = currentPath === item.href;
                return (
                  <Link
                    key={item.href}
                    className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                      isActive
                        ? "bg-emerald-50 text-[#12883c] font-bold"
                        : "text-foreground hover:bg-muted hover:text-primary"
                    }`}
                    onClick={() => setMenuOpen(false)}
                    to={item.href}
                  >
                    {item.label.en}
                  </Link>
                );
              }

              const isGroupOpen = mobileExpandedGroups[item.label.en] ?? false;
              const isChildActive = item.items.some((sub) => currentPath === sub.href);

              return (
                <div key={idx} className="rounded-lg border border-border/60 bg-muted/20 my-1 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleMobileGroup(item.label.en)}
                    className={`flex w-full items-center justify-between px-3.5 py-2.5 text-sm font-bold transition-colors ${
                      isChildActive ? "text-[#12883c]" : "text-foreground hover:text-primary"
                    }`}
                  >
                    <span>{item.label.en}</span>
                    <ChevronDown
                      className={`size-4 transition-transform duration-200 ${
                        isGroupOpen ? "rotate-180 text-[#12883c]" : "text-muted-foreground"
                      }`}
                    />
                  </button>

                  {isGroupOpen && (
                    <div className="grid gap-1 px-2 pb-2 pt-0.5 border-t border-border/40">
                      {item.items.map((sub) => {
                        const SubIcon = sub.icon;
                        const isActive = currentPath === sub.href;
                        return (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            onClick={() => setMenuOpen(false)}
                            className={`flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-md transition-colors ${
                              isActive
                                ? "bg-[#12883c] text-white font-bold"
                                : "text-foreground/85 hover:bg-muted hover:text-foreground"
                            }`}
                          >
                            <SubIcon className={`size-3.5 shrink-0 ${isActive ? "text-white" : "text-[#12883c]"}`} />
                            <span>{language === "ta" ? sub.label.ta : sub.label.en}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <Button asChild className="mt-3 w-full rounded-full bg-[#fbbf24] hover:bg-[#f59e0b] text-slate-950 font-black" onClick={() => setMenuOpen(false)}>
              <Link to="/membership">
                Join Our Party Now ↗
              </Link>
            </Button>
          </nav>
        ) : null}
      </header>
    </>
  );
}

export function SiteFooter() {
  const { language } = useSiteLanguage();

  return (
    <footer className="w-full max-w-full overflow-hidden bg-slate-950 text-slate-200 border-t-4 border-primary">
      <div className="mx-auto max-w-[1360px] px-5 pb-8 pt-16 sm:px-8 lg:px-12">
        <div className="grid gap-10 border-b border-slate-800 pb-12 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.1fr]">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3">
              <BrandMark className="size-14 ring-2 ring-brand-yellow/40 bg-white/10" light />
              <div>
                <p className="text-base font-extrabold text-white">அகில இந்திய நம் நாடு மக்கள் கட்சி</p>
                <p className="mt-0.5 text-xs text-slate-400 font-semibold tracking-wider">
                  Agila India Nam Nadu Makkal Katchi · AINNMK
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-6 text-slate-300 max-w-sm">
              {language === "ta"
                ? "சாதி, மதம், மொழி, இனம் கடந்து தமிழர்களின் சமத்துவ வாழ்விற்கும் உழவர் பெருமக்களின் உரிமைக்கும் குரல் கொடுக்கும் மக்கள் இயக்கம்."
                : "A principled democratic political movement championing social brotherhood, agrarian dignity, and inclusive empowerment across India."}
            </p>
            <div className="mt-5 flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-bold text-brand-yellow">
                <Sprout className="size-3.5 text-emerald-400" />
                <span>சின்னம்: நெற்கதிர் (Paddy Crops)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-bold text-emerald-300">
                <span>தோற்றம்: 2008</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
              {language === "ta" ? "முக்கியப் பக்கங்கள்" : "Quick Links"}
            </p>
            <div className="mt-4 grid gap-2.5 text-xs">
              <Link className="text-slate-400 hover:text-white transition-colors" to="/about">
                {language === "ta" ? "கட்சியின் வரலாறு" : "About Us & History"}
              </Link>
              <Link className="text-slate-400 hover:text-white transition-colors" to="/leadership">
                {language === "ta" ? "கட்சித் தலைமை" : "Party Leadership"}
              </Link>
              <Link className="text-slate-400 hover:text-white transition-colors" to="/organization">
                {language === "ta" ? "அமைப்பு அணிகள்" : "Organization Wings"}
              </Link>
              <Link className="text-slate-400 hover:text-white transition-colors" to="/ideology">
                {language === "ta" ? "ஏழு கோட்பாடுகள்" : "7 Principles"}
              </Link>
              <Link className="text-slate-400 hover:text-white transition-colors" to="/gallery">
                {language === "ta" ? "படத்தொகுப்பு" : "Photo Gallery"}
              </Link>
            </div>
          </div>

          {/* Wings */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
              {language === "ta" ? "கட்சி அணிகள்" : "Wings"}
            </p>
            <div className="mt-4 grid gap-2.5 text-xs text-slate-400">
              <span>உழவர் மற்றும் பொதுமக்கள் அணி</span>
              <span>இளைஞர் எழுச்சி அணி</span>
              <span>வீரத்தாய் மகளிர் அணி</span>
              <span>மாணவர் & அறிவுசார் அணி</span>
              <span>மக்கள் சேவைப் பிரிவு</span>
            </div>
          </div>

          {/* Headquarters */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
              {language === "ta" ? "தலைமை அலுவலகம்" : "Headquarters"}
            </p>
            <p className="mt-4 flex items-start gap-2.5 text-xs leading-6 text-slate-300">
              <MapPin className="mt-1 size-4 shrink-0 text-brand-yellow" />
              <span>{PARTY_INFO.headquartersTa}</span>
            </p>
            <p className="mt-3 flex items-center gap-2.5 text-xs text-slate-300">
              <Phone className="size-4 shrink-0 text-brand-yellow" />
              <span>{PARTY_INFO.phone}</span>
            </p>
            <p className="mt-2.5 flex items-center gap-2.5 text-xs text-slate-300">
              <Mail className="size-4 shrink-0 text-brand-yellow" />
              <span>{PARTY_INFO.email}</span>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2008 - 2026 {PARTY_INFO.nameTa}. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</span>
          <div className="flex gap-6">
            <Link className="hover:text-white transition-colors" to="/privacy">
              {language === "ta" ? "தனியுரிமைக் கொள்கை" : "Privacy Policy"}
            </Link>
            <Link className="hover:text-white transition-colors" to="/terms">
              {language === "ta" ? "விதிமுறைகள்" : "Terms & Conditions"}
            </Link>
            <Link className="hover:text-white transition-colors" to="/admin">
              {language === "ta" ? "நிர்வாகி பகுதி" : "Admin Portal"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================================
   HOME PAGE
   ========================================================================= */

export function HomePage() {
  const { language } = useSiteLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <SiteHeader />
      <main className="w-full max-w-full overflow-x-hidden">
        {/* =========================================================================
            HERO BANNER SECTION - EXACT REFERENCE LAYOUT WITH BANNER.PNG
            ========================================================================= */}
        <section className="relative w-full overflow-hidden bg-white border-b border-slate-200">
          <div className="relative w-full aspect-[2164/726]">
            <img
              src="/banner.png"
              alt="நம் தாய்நாடு – நம் குடும்பம் | அகில இந்திய நம் நாடு மக்கள் கட்சி"
              className="w-full h-auto block select-none"
            />

            {/* Overlaid Action Buttons (Placed right below the slogan text on the left) */}
            <div className="absolute left-[3%] sm:left-[4.5%] md:left-[5%] bottom-[8%] sm:bottom-[12%] md:bottom-[15%] lg:bottom-[17%] z-10 flex flex-wrap items-center gap-2 sm:gap-3.5">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#12883c] hover:bg-[#0e6e30] px-3 py-1.5 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-[11px] sm:text-xs md:text-sm font-bold text-white shadow-lg shadow-emerald-950/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>எங்கள் கட்சியை பற்றி</span>
                <ArrowRight className="size-3.5 sm:size-4" />
              </Link>
              <Link
                to="/news"
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white hover:bg-slate-50 px-3 py-1.5 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-[11px] sm:text-xs md:text-sm font-bold text-slate-800 shadow-lg shadow-slate-900/10 border border-slate-200/90 transition-all hover:scale-105 active:scale-95"
              >
                <span>செய்திகளை பார்க்க</span>
                <ArrowRight className="size-3.5 sm:size-4" />
              </Link>
            </div>

            {/* Carousel Navigation Chevrons */}
            <button
              type="button"
              onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 3))}
              aria-label="Previous Slide"
              className="absolute left-2.5 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 size-7 sm:size-9 md:size-10 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors shadow-md"
            >
              <ChevronLeft className="size-4 sm:size-5 md:size-6" />
            </button>
            <button
              type="button"
              onClick={() => setCurrentSlide((prev) => (prev < 3 ? prev + 1 : 0))}
              aria-label="Next Slide"
              className="absolute right-2.5 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 size-7 sm:size-9 md:size-10 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors shadow-md"
            >
              <ChevronRight className="size-4 sm:size-5 md:size-6" />
            </button>

            {/* Carousel Indicator Dots */}
            <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => setCurrentSlide(0)}
                aria-label="Go to slide 1"
                className={`transition-all ${currentSlide === 0 ? "h-1.5 sm:h-2 w-5 sm:w-7 rounded-full bg-white shadow-xs" : "size-1.5 sm:size-2 rounded-full bg-white/60 hover:bg-white"}`}
              />
              <button
                type="button"
                onClick={() => setCurrentSlide(1)}
                aria-label="Go to slide 2"
                className={`transition-all ${currentSlide === 1 ? "h-1.5 sm:h-2 w-5 sm:w-7 rounded-full bg-white shadow-xs" : "size-1.5 sm:size-2 rounded-full bg-white/60 hover:bg-white"}`}
              />
              <button
                type="button"
                onClick={() => setCurrentSlide(2)}
                aria-label="Go to slide 3"
                className={`transition-all ${currentSlide === 2 ? "h-1.5 sm:h-2 w-5 sm:w-7 rounded-full bg-white shadow-xs" : "size-1.5 sm:size-2 rounded-full bg-white/60 hover:bg-white"}`}
              />
              <button
                type="button"
                onClick={() => setCurrentSlide(3)}
                aria-label="Go to slide 4"
                className={`transition-all ${currentSlide === 3 ? "h-1.5 sm:h-2 w-5 sm:w-7 rounded-full bg-white shadow-xs" : "size-1.5 sm:size-2 rounded-full bg-white/60 hover:bg-white"}`}
              />
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: ABOUT PARTY & 4 IDEOLOGY CARDS (EXACT REFERENCE DESIGN)
            ========================================================================= */}
        <section className="bg-white py-8 sm:py-10 border-b border-slate-200/80">
          <div className="w-full px-4 sm:px-6 xl:px-8 2xl:px-12">
            <div className="grid lg:grid-cols-12 gap-6 items-stretch">
              {/* Left Column: About Our Party (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="h-0.5 w-4 bg-[#12883c] rounded-full" />
                    <span className="h-0.5 w-4 bg-[#12883c] rounded-full" />
                  </div>
                  <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                    {language === "ta" ? "எங்கள் கட்சியைப் பற்றி" : "About Our Party"}
                  </h2>
                </div>

                <div className="flex-1 rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="shrink-0 flex items-center justify-center">
                    <BrandMark className="size-24 sm:size-28 md:size-32 drop-shadow-md" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between h-full space-y-4 text-center sm:text-left">
                    <p className="text-xs sm:text-[13px] text-slate-700 font-medium leading-relaxed">
                      {language === "ta"
                        ? "அகில இந்திய நம் நாடு மக்கள் கட்சி 2008 ஆம் ஆண்டு தொடங்கப்பட்டது. சாதி, மதம், மொழி, இனம் போன்ற வேறுபாடுகள் இல்லாமல் அனைவரும் ஒரே சமுதாயமாகவும், ஒரே குடும்பமாகவும் வாழ வேண்டும் என்பது எங்கள் கொள்கை."
                        : "Agila India Nam Nadu Makkal Katchi was founded in 2008. We champion a harmonious society where citizens live with dignity as one family, transcending all barriers of caste, creed, and language."}
                    </p>
                    <div>
                      <Link
                        to="/about"
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#12883c] hover:bg-[#0e6e30] px-5 py-2 text-xs font-bold text-white shadow-xs transition-transform hover:scale-105 active:scale-95"
                      >
                        <span>{language === "ta" ? "மேலும் அறிய" : "Read More"}</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: 4 Ideology Feature Cards (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="h-0.5 w-4 bg-[#12883c] rounded-full" />
                    <span className="h-0.5 w-4 bg-[#12883c] rounded-full" />
                  </div>
                  <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                    {language === "ta" ? "எங்கள் கொள்கைகள்" : "Our Ideology"}
                  </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 flex-1">
                  {/* Card 1: சமூக ஒற்றுமை */}
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs flex flex-col items-center text-center justify-between hover:border-emerald-300 hover:shadow-md transition-all">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-emerald-50 text-[#12883c] my-1">
                      <Users className="size-8" />
                    </div>
                    <div className="mt-2">
                      <h3 className="text-xs sm:text-sm font-black text-slate-900">
                        {language === "ta" ? "சமூக ஒற்றுமை" : "Social Unity"}
                      </h3>
                      <p className="mt-1 text-[11px] text-slate-600 font-medium leading-snug">
                        {language === "ta" ? "அனைவரும் ஒன்றிணைந்து வாழ்தல்" : "Living in collective harmony"}
                      </p>
                    </div>
                  </div>

                  {/* Card 2: சமத்துவம் */}
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs flex flex-col items-center text-center justify-between hover:border-purple-300 hover:shadow-md transition-all">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-purple-50 text-[#4c1d6f] my-1">
                      <Scale className="size-8" />
                    </div>
                    <div className="mt-2">
                      <h3 className="text-xs sm:text-sm font-black text-slate-900">
                        {language === "ta" ? "சமத்துவம்" : "Equality"}
                      </h3>
                      <p className="mt-1 text-[11px] text-slate-600 font-medium leading-snug">
                        {language === "ta" ? "அனைத்து மக்களும் சமம்" : "Equal rights for all citizens"}
                      </p>
                    </div>
                  </div>

                  {/* Card 3: மக்கள் நலன் */}
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs flex flex-col items-center text-center justify-between hover:border-teal-300 hover:shadow-md transition-all">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 my-1">
                      <HandHeart className="size-8" />
                    </div>
                    <div className="mt-2">
                      <h3 className="text-xs sm:text-sm font-black text-slate-900">
                        {language === "ta" ? "மக்கள் நலன்" : "Public Welfare"}
                      </h3>
                      <p className="mt-1 text-[11px] text-slate-600 font-medium leading-snug">
                        {language === "ta" ? "எல்லோரின் நலனே எங்கள் குறிக்கோள்" : "Welfare of every citizen is our goal"}
                      </p>
                    </div>
                  </div>

                  {/* Card 4: இளைஞர் & மகளிர் பங்கேற்பு */}
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs flex flex-col items-center text-center justify-between hover:border-indigo-300 hover:shadow-md transition-all">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-indigo-50 text-[#4c1d6f] my-1">
                      <GraduationCap className="size-8" />
                    </div>
                    <div className="mt-2">
                      <h3 className="text-xs sm:text-sm font-black text-slate-900">
                        {language === "ta" ? "இளைஞர் & மகளிர் பங்கேற்பு" : "Youth & Women"}
                      </h3>
                      <p className="mt-1 text-[11px] text-slate-600 font-medium leading-snug">
                        {language === "ta" ? "இளைய தலைமுறையுடன் முன்னேறுவோம்" : "Progressing with youth & women"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: THREE CARDS (LEADERSHIP, LATEST NEWS, JOIN PARTY) WITH CORNER LEAVES
            ========================================================================= */}
        <section className="relative bg-white py-8 sm:py-10 border-b border-slate-200/80 overflow-hidden w-full max-w-full">
          {/* Decorative Corner Leaf Motifs */}
          <div className="pointer-events-none absolute left-0 bottom-1 select-none opacity-25 sm:opacity-35">
            <Leaf className="size-16 sm:size-20 text-emerald-600 rotate-45" />
          </div>
          <div className="pointer-events-none absolute right-0 bottom-1 select-none opacity-25 sm:opacity-35">
            <Leaf className="size-16 sm:size-20 text-emerald-600 -rotate-45" />
          </div>

          <div className="w-full px-4 sm:px-6 xl:px-8 2xl:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              
              {/* Card 1: Our Leadership (5 Cols) */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs flex flex-col justify-between">
                <div className="bg-[#4c1d6f] px-4 py-2.5 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm">
                    <span className="text-amber-300 font-black">-</span>
                    <span>{language === "ta" ? "எங்கள் தலைமை" : "Our Leadership"}</span>
                  </div>
                  <Link
                    to="/leadership"
                    className="text-[#fbbf24] hover:text-amber-300 text-xs font-bold inline-flex items-center gap-1 transition-colors"
                  >
                    <span>{language === "ta" ? "அனைவரையும் பார்க்க" : "View All"}</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>

                <div className="p-4 flex items-center justify-between gap-2 flex-1">
                  <button
                    type="button"
                    aria-label="Previous leader"
                    className="text-slate-400 hover:text-slate-700 transition-colors p-1"
                  >
                    <ChevronLeft className="size-5" />
                  </button>

                  <div className="grid grid-cols-4 gap-2.5 sm:gap-3 flex-1 items-center">
                    <Link to="/leadership" className="group flex flex-col items-center">
                      <img
                        src={leaderImg}
                        alt="Dr. N. Dharmaraj"
                        className="size-14 sm:size-16 rounded-xl object-cover object-top border-2 border-amber-400/80 shadow-xs group-hover:scale-105 transition-transform"
                      />
                    </Link>
                    <Link to="/leadership" className="group flex flex-col items-center">
                      <img
                        src={womenImg}
                        alt="Adv. S. Anbarasi"
                        className="size-14 sm:size-16 rounded-xl object-cover object-top border-2 border-slate-200 shadow-xs group-hover:scale-105 transition-transform"
                      />
                    </Link>
                    <Link to="/leadership" className="group flex flex-col items-center">
                      <img
                        src={youthImg}
                        alt="Er. R. Karthikeyan"
                        className="size-14 sm:size-16 rounded-xl object-cover object-top border-2 border-slate-200 shadow-xs group-hover:scale-105 transition-transform"
                      />
                    </Link>
                    <Link to="/leadership" className="group flex flex-col items-center">
                      <img
                        src={farmersImg}
                        alt="Farmer V. Selvam"
                        className="size-14 sm:size-16 rounded-xl object-cover object-top border-2 border-slate-200 shadow-xs group-hover:scale-105 transition-transform"
                      />
                    </Link>
                  </div>

                  <button
                    type="button"
                    aria-label="Next leader"
                    className="text-slate-400 hover:text-slate-700 transition-colors p-1"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>

              {/* Card 2: Latest News (4 Cols) */}
              <div className="lg:col-span-4 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-slate-900">
                    <span className="text-[#12883c] font-black">-</span>
                    <span>{language === "ta" ? "சமீபத்திய செய்திகள்" : "Latest News"}</span>
                  </div>
                  <Link
                    to="/news"
                    className="text-[#4c1d6f] hover:text-purple-900 text-xs font-bold inline-flex items-center gap-1 transition-colors"
                  >
                    <span>{language === "ta" ? "முழுவதும் பார்க்க" : "View All"}</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>

                <div className="mt-3 flex items-center gap-3">
                  <img
                    src={rallyImg}
                    alt="AINNMK State Meeting"
                    className="size-20 sm:size-22 rounded-xl object-cover shrink-0 border border-slate-200"
                  />
                  <div className="flex-1 min-w-0">
                    <Link
                      to="/news"
                      className="text-xs sm:text-[13px] font-bold text-slate-900 hover:text-[#12883c] line-clamp-2 leading-snug transition-colors"
                    >
                      {language === "ta"
                        ? "அகில இந்திய நம் நாடு மக்கள் கட்சி மாநில அளவிலான கூட்டம் வெற்றி..."
                        : "Statewide executive conference concludes with mass participation..."}
                    </Link>
                    <div className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                      <CalendarDays className="size-3.5 text-slate-400" />
                      <span>Nov 18, 2026</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Join Our Party (3 Cols) */}
              <div className="lg:col-span-3 rounded-2xl bg-[#4c1d6f] text-white p-5 shadow-sm flex flex-col items-center justify-between text-center relative overflow-hidden">
                <div className="relative z-10 w-full flex flex-col items-center">
                  <h3 className="text-sm sm:text-base font-black tracking-wide text-white">
                    {language === "ta" ? "கட்சியில் இணையுங்கள்" : "Join Our Party"}
                  </h3>
                  <p className="mt-1 text-[11px] sm:text-xs text-purple-200 font-medium">
                    {language === "ta" ? "ஒற்றுமையுடன் இணைந்து செயல்பட வாருங்கள்..." : "Come forward and unite with us..."}
                  </p>

                  <div className="my-3 flex size-12 sm:size-14 items-center justify-center rounded-full bg-white/10 border border-white/20">
                    <Users className="size-6 sm:size-7 text-white" />
                  </div>

                  <Link
                    to="/membership"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#fbbf24] hover:bg-amber-400 px-5 py-2 text-xs font-black text-slate-950 shadow-sm transition-transform hover:scale-105 active:scale-95"
                  >
                    <span>{language === "ta" ? "உறுப்பினர் பதிவு" : "Member Registration"}</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PRESIDENT'S MESSAGE / LEADER SPOTLIGHT */}
        <section className="bg-gradient-to-b from-white to-slate-50 py-20 px-5 sm:px-8 lg:px-12 border-b border-border/80">
          <div className="mx-auto max-w-[1360px]">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group max-w-md w-full">
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-600 via-amber-400 to-purple-700 opacity-30 blur-xl group-hover:opacity-50 transition-opacity" />
                  <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-white">
                    <img
                      src={leaderImg}
                      alt="Dr. N. Dharmaraj"
                      className="w-full h-[440px] object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6 text-white text-left">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow">
                        கட்சியின் நிறுவனர் & மாநிலத் தலைவர்
                      </span>
                      <h4 className="text-xl font-black text-white mt-1">{LEADERS[0]?.nameTa}</h4>
                      <p className="text-xs text-slate-300">{LEADERS[0]?.nameEn}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 rounded-md bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-800">
                  <Award className="size-4 text-emerald-700" />
                  <span>{language === "ta" ? "தலைவரின் செய்தி · PRESIDENT'S MESSAGE" : "PRESIDENT'S INAUGURAL MESSAGE"}</span>
                </div>

                <h2 className="text-3xl font-extrabold sm:text-4xl text-slate-900 leading-tight">
                  {language === "ta"
                    ? "“உழவனின் வியர்வைக்கு நியாயமும், இளைஞர்களின் உழைப்பிற்கு மதிப்பும் தரும் சமத்துவ சமுதாயம்!”"
                    : "“A society where the farmer's sweat receives honor, and youth potential is fulfilled!”"}
                </h2>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    {language === "ta"
                      ? "அன்பார்ந்த தாய்மார்களே, பாசமிகு இளைஞர்களே, உழவர் பெருமக்களே! அகில இந்திய நம் நாடு மக்கள் கட்சி 2008-ஆம் ஆண்டு தொடங்கப்பட்ட நாள் முதல் இன்று வரை, சாதி, மத, பேதமற்ற சமத்துவ சமுதாயத்தைப் படைப்பதே எங்கள் முதன்மையான மூச்சாகக் கொண்டு இயங்கி வருகிறோம்."
                      : "Dear citizens, dedicated youth, and esteemed farmers! Since our inception in 2008, AINNMK has stood steadfast in defense of the voiceless, working tirelessly to eradicate communal divides and build an equitable Tamil Nadu."}
                  </p>
                  <p>
                    {language === "ta"
                      ? "விவசாயி தன் விளைபொருளுக்குக் கட்டுப்படியான விலையைக் கேட்பது அவனுடைய பிச்சையல்ல; அடிப்படை உரிமை! அதேபோல் கிராமத்து இளைஞர்களுக்கு நவீனத் தொழில்நுட்பக் கல்வியும், மகளிர் கைகளில் பொருளாதார சுதந்திரமும் சேரும் போதே தமிழகம் உண்மையான வல்லரசாக மாறும்."
                      : "Fair pricing for farm produce is not a concession; it is an undeniable constitutional right. When our young women gain financial autonomy and students master modern science, true prosperity is born."}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button asChild className="rounded-md font-bold">
                    <Link to="/about">
                      {language === "ta" ? "தலைவரைப் பற்றி மேலும் அறிய" : "Read President's Profile"}
                      <ArrowRight className="size-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-md font-semibold">
                    <Link to="/leadership">
                      {language === "ta" ? "கட்சியின் நிர்வாகக் குழு" : "View State Leadership"}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FLAG & SYMBOL PHILOSOPHY SECTION */}
        <section className="bg-emerald-950 text-white py-20 px-5 sm:px-8 lg:px-12 border-b border-emerald-900">
          <div className="mx-auto max-w-[1360px]">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-yellow">
                கொடி & சின்னத்தின் விளக்கம் · PHILOSOPHY & IDENTITY
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                {language === "ta" ? "முவர்ணக் கொடியும் நெற்கதிர் சின்னமும்" : "The Tricolor Flag & The Sacred Paddy Symbol"}
              </h2>
              <p className="text-sm text-emerald-200 leading-relaxed">
                {language === "ta"
                  ? "நமது கட்சியின் கொடியிலுள்ள ஒவ்வொரு நிறமும், நெற்கதிர் சின்னமும் தமிழர்களின் வாழ்வியலையும் நமது இலட்சியங்களையும் பறைசாற்றுகின்றன."
                  : "Every band of color on our flag and the golden ear of grain on our seal embodies the deep cultural spirit and socio-political aspirations of our movement."}
              </p>
            </div>

            {/* Colors Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {FLAG_SYMBOL_INFO.flag.colors.map((c, idx) => (
                <div
                  key={c.nameEn}
                  className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-xl backdrop-blur relative overflow-hidden group hover:border-brand-yellow/50 transition-colors"
                >
                  <div className={`size-12 rounded-xl ${c.color} flex items-center justify-center shadow-lg mb-5`}>
                    <Flag className="size-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{language === "ta" ? c.nameTa : c.nameEn}</h3>
                  <p className="mt-3 text-xs leading-6 text-slate-300">
                    {language === "ta" ? c.meaningTa : c.meaningEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 CORE PILLARS / IDEOLOGY PREVIEW */}
        <section className="py-20 px-5 sm:px-8 lg:px-12 bg-white border-b border-border/80">
          <div className="mx-auto max-w-[1360px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  நமது கொள்கைகள் · GUIDING PILLARS
                </span>
                <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl text-slate-900">
                  {language === "ta" ? "மக்களை ஒன்றிணைக்கும் அடிப்படைக் கோட்பாடுகள்" : "Core Principles Championed by AINNMK"}
                </h2>
              </div>
              <Button asChild variant="outline" className="rounded-md font-bold self-start md:self-auto">
                <Link to="/ideology">
                  {language === "ta" ? "அனைத்து கொள்கைகளையும் காண்க" : "View Complete Manifesto"}
                  <ArrowRight className="size-4 ml-1.5" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PILLARS.map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl border border-border/90 bg-slate-50/50 p-7 shadow-sm hover:shadow-md hover:border-primary/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-black text-primary/30 block mb-2">{p.number}</span>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {language === "ta" ? p.titleTa : p.titleEn}
                    </h3>
                    <p className="mt-2 text-xs font-semibold text-purple-700">
                      {language === "ta" ? p.taglineTa : p.taglineEn}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600">
                      {language === "ta" ? p.descriptionTa : p.descriptionEn}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/80">
                    <ul className="space-y-1.5 text-[11px] text-slate-700">
                      {(language === "ta" ? p.keyPointsTa : p.keyPointsEn).slice(0, 2).map((pt, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ORGANIZATION WINGS SHOWCASE */}
        <section className="py-20 px-5 sm:px-8 lg:px-12 bg-slate-50 border-b border-border/80">
          <div className="mx-auto max-w-[1360px]">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                கட்சி அணிகள் · ORGANIZATIONAL WINGS
              </span>
              <h2 className="text-3xl font-extrabold sm:text-4xl text-slate-900">
                {language === "ta" ? "களத்தில் மக்களின் துணையாக நிற்கும் அணிகள்" : "Active Fronts Serving the Grassroots"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                {language === "ta"
                  ? "விவசாயிகள், இளைஞர்கள், தாய்மார்கள் மற்றும் மாணவர்கள் என ஒவ்வொரு பிரிவினருக்கும் பிரத்யேக மக்கள் சேவைப் படைகள்."
                  : "Dedicated frontline branches addressing the distinct needs of farmers, youth, working women, students, and civic relief."}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {WINGS.slice(0, 6).map((wing) => {
                const imgUrl = getAssetUrl(wing.imageKey);
                return (
                  <div
                    key={wing.id}
                    className="rounded-2xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-48 w-full overflow-hidden relative">
                        <img
                          src={imgUrl}
                          alt={wing.nameTa}
                          className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                        <span className="absolute bottom-3 left-4 text-xs font-extrabold text-brand-yellow">
                          {wing.memberCount}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-slate-900">{language === "ta" ? wing.nameTa : wing.nameEn}</h3>
                        <p className="mt-1 text-xs font-semibold text-purple-700">{language === "ta" ? wing.taglineTa : wing.taglineEn}</p>
                        <p className="mt-3 text-xs leading-relaxed text-slate-600">{language === "ta" ? wing.descriptionTa : wing.descriptionEn}</p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <Link
                        to="/organization"
                        className="inline-flex items-center text-xs font-bold text-primary hover:underline"
                      >
                        {language === "ta" ? "அணி விவரங்களை வாசிக்க" : "Learn more"}
                        <ArrowRight className="size-3.5 ml-1" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LATEST NEWS & EVENTS SECTION */}
        <section className="py-20 px-5 sm:px-8 lg:px-12 bg-white border-b border-border/80">
          <div className="mx-auto max-w-[1360px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  செய்திகள் & ஊடகம் · PRESS & UPDATES
                </span>
                <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl text-slate-900">
                  {language === "ta" ? "கட்சியின் சமீபத்திய நிகழ்வுகளும் போராட்டங்களும்" : "Recent Statements & Community Campaigns"}
                </h2>
              </div>
              <Button asChild variant="outline" className="rounded-md font-bold self-start md:self-auto">
                <Link to="/news">
                  {language === "ta" ? "அனைத்து செய்திகள்" : "All News Releases"}
                  <ArrowRight className="size-4 ml-1.5" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-8 lg:grid-cols-12">
              {/* Featured News Lead */}
              {NEWS_ARTICLES[0] && (
                <div className="lg:col-span-7 rounded-2xl border border-border bg-slate-50 overflow-hidden shadow-sm flex flex-col justify-between group">
                  <div>
                    <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                      <img
                        src={getAssetUrl(NEWS_ARTICLES[0].imageKey)}
                        alt={NEWS_ARTICLES[0].titleTa}
                        className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 rounded-md bg-emerald-600 px-3 py-1 text-xs font-bold text-white shadow">
                        {language === "ta" ? NEWS_ARTICLES[0].categoryTa : NEWS_ARTICLES[0].categoryEn}
                      </span>
                    </div>
                    <div className="p-7">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <CalendarDays className="size-3.5 text-primary" />
                          {NEWS_ARTICLES[0].date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="size-3.5 text-primary" />
                          {NEWS_ARTICLES[0].readTimeTa}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                        {language === "ta" ? NEWS_ARTICLES[0].titleTa : NEWS_ARTICLES[0].titleEn}
                      </h3>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        {language === "ta" ? NEWS_ARTICLES[0].summaryTa : NEWS_ARTICLES[0].summaryEn}
                      </p>
                    </div>
                  </div>
                  <div className="p-7 pt-0">
                    <Button asChild className="rounded-md text-xs font-bold">
                      <Link to="/news">
                        {language === "ta" ? "முழு அறிக்கையை வாசிக்க" : "Read Full Statement"}
                        <ArrowRight className="size-3.5 ml-1.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              )}

              {/* Side News List */}
              <div className="lg:col-span-5 space-y-4">
                {NEWS_ARTICLES.slice(1, 4).map((art) => (
                  <div
                    key={art.id}
                    className="rounded-xl border border-border bg-white p-5 shadow-sm hover:border-primary/50 transition-colors flex gap-4 items-start"
                  >
                    <img
                      src={getAssetUrl(art.imageKey)}
                      alt={art.titleTa}
                      className="size-20 rounded-lg object-cover shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                        <span className="font-bold text-primary">{language === "ta" ? art.categoryTa : art.categoryEn}</span>
                        <span>•</span>
                        <span>{art.date}</span>
                      </div>
                      <h4 className="mt-1 font-bold text-sm text-slate-900 leading-snug line-clamp-2">
                        {language === "ta" ? art.titleTa : art.titleEn}
                      </h4>
                      <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                        {language === "ta" ? art.summaryTa : art.summaryEn}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Upcoming Event Teaser Box */}
                <div className="rounded-xl border-2 border-emerald-500/30 bg-emerald-950 p-6 text-white shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-yellow">
                      அடுத்த முக்கிய நிகழ்வு · NEXT UPCOMING EVENT
                    </span>
                    <span className="rounded-full bg-emerald-800 px-2.5 py-0.5 text-[10px] font-bold text-emerald-200">
                      {EVENTS[0]?.date}
                    </span>
                  </div>
                  <h4 className="mt-3 font-bold text-base text-white">{language === "ta" ? EVENTS[0]?.titleTa : EVENTS[0]?.titleEn}</h4>
                  <p className="mt-2 text-xs text-emerald-200/80 flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-brand-yellow shrink-0" />
                    <span>{language === "ta" ? EVENTS[0]?.locationTa : EVENTS[0]?.locationEn}</span>
                  </p>
                  <Button asChild size="sm" className="mt-4 rounded-md bg-brand-yellow text-slate-950 hover:bg-yellow-400 font-bold text-xs">
                    <Link to="/events">
                      {language === "ta" ? "நிகழ்வு விவரங்கள்" : "Event Schedule"}
                      <ArrowRight className="size-3 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHOTO GALLERY HIGHLIGHT */}
        <section className="py-20 px-5 sm:px-8 lg:px-12 bg-slate-50 border-b border-border/80">
          <div className="mx-auto max-w-[1360px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  படத்தொகுப்பு · PHOTO ARCHIVES
                </span>
                <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl text-slate-900">
                  {language === "ta" ? "களப் பணிகளின் புகைப்படப் பதிவுகள்" : "Moments of Grassroots Action"}
                </h2>
              </div>
              <Button asChild variant="outline" className="rounded-md font-bold self-start md:self-auto">
                <Link to="/gallery">
                  {language === "ta" ? "முழுப் படத்தொகுப்பு" : "Explore Full Gallery"}
                  <ArrowRight className="size-4 ml-1.5" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GALLERY.slice(0, 6).map((item) => (
                <div
                  key={item.id}
                  className="group relative h-64 overflow-hidden rounded-2xl border border-border shadow-sm"
                >
                  <img
                    src={getAssetUrl(item.imageKey)}
                    alt={item.titleTa}
                    className="size-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                    <span className="rounded bg-emerald-600/90 px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider">
                      {language === "ta" ? item.categoryTa : item.categoryEn}
                    </span>
                    <h4 className="mt-2 text-sm font-bold leading-snug line-clamp-2">
                      {language === "ta" ? item.titleTa : item.titleEn}
                    </h4>
                    <p className="mt-1 text-[11px] text-slate-300 flex items-center gap-1">
                      <MapPin className="size-3 text-brand-yellow" />
                      <span>{item.locationTa} · {item.date}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VIRTUAL MEMBERSHIP ID TEASER CTA */}
        <section className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-900 py-16 px-5 sm:px-8 lg:px-12 text-white">
          <div className="mx-auto max-w-[1360px] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
                உடனடி மெய்நிகர் அட்டை · INSTANT DIGITAL CADRE ID
              </span>
              <h2 className="text-3xl font-black sm:text-4xl text-white">
                {language === "ta" ? "உங்கள் அதிகாரப்பூர்வ டிஜிட்டல் உறுப்பினர் அட்டையைப் பெறுங்கள்!" : "Get Your Official Digital Party Membership Card Today!"}
              </h2>
              <p className="text-sm text-emerald-100/90 leading-relaxed">
                {language === "ta"
                  ? "ஒரு சில நிமிடங்களில் கட்சியில் பதிவு செய்து, பிரத்யேக உறுப்பினர் எண் மற்றும் கியூ-ஆர் குறியீட்டுடன் கூடிய அடையாள அட்டையை உடனே பதிவிறக்கம் செய்துகொள்ளுங்கள்."
                  : "Join the pro-people democratic revolution. Fill your simple details and obtain an instant verifiable photo-membership card."}
              </p>
            </div>
            <div className="shrink-0 flex flex-wrap gap-4">
              <Button asChild className="h-12 rounded-lg bg-brand-yellow text-slate-950 hover:bg-yellow-400 font-extrabold px-6 shadow-xl">
                <Link to="/membership">
                  <UserCheck className="size-4 mr-2" />
                  {language === "ta" ? "இப்போது உறுப்பினர் அட்டையை உருவாக்கு" : "Generate ID Card Now"}
                  <ArrowRight className="size-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CONTACT & GRIEVANCE SECTION */}
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

/* =========================================================================
   ABOUT PAGE
   ========================================================================= */

export function AboutPage({ page }: { page: "about" | "ideology" }) {
  const { language } = useSiteLanguage();
  const isAbout = page === "about";

  return (
    <>
      <SiteHeader />
      <main className="w-full max-w-full overflow-x-hidden">
        {/* Banner */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-slate-950 py-20 px-5 sm:px-8 lg:px-12 text-white">
          <div className="mx-auto max-w-[1360px] text-center max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
              {isAbout ? (language === "ta" ? "எங்கள் வரலாறு" : "Our Heritage & Story") : (language === "ta" ? "நமது கொள்கை" : "Our Ideology & Vision")}
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white">
              {isAbout
                ? (language === "ta" ? "அகில இந்திய நம் நாடு மக்கள் கட்சி" : "About Agila India Nam Nadu Makkal Katchi")
                : (language === "ta" ? "ஒற்றுமை • சமத்துவம் • மக்கள் நலன்" : "Unity • Equality • People’s Welfare")}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-emerald-200 leading-relaxed">
              {isAbout
                ? (language === "ta"
                  ? "2008-ஆம் ஆண்டு முதல் தமிழக மக்களின் வாழ்வுரிமைக்காகவும் சமத்துவ சமுதாயத்திற்காகவும் உழைக்கும் மக்கள் இயக்கம்."
                  : "A dedicated grassroots political movement born in 2008 to empower farmers, defend civil liberties, and foster social fraternity.")
                : (language === "ta"
                  ? "ஏழு அடிப்படை மக்கள் நல்வழிக் கோட்பாடுகளின் வழிநின்று தமிழகத்தை தன்னிறைவு பெற்ற மாநிலமாக மாற்றும் தொலைநோக்குப் பார்வை."
                  : "Our 7-pillar constitutional vision engineered to transform Tamil Nadu into a self-reliant, corruption-free haven of social justice.")}
            </p>
          </div>
        </section>

        {/* Detailed Content */}
        {isAbout ? (
          <>
            {/* Founder Profile Box */}
            <section className="py-20 px-5 sm:px-8 lg:px-12 bg-white border-b border-border">
              <div className="mx-auto max-w-[1200px] grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 flex justify-center">
                  <div className="rounded-2xl border-4 border-emerald-100 shadow-xl overflow-hidden max-w-sm w-full bg-slate-50">
                    <img src={leaderImg} alt="Founder Leader" className="w-full h-96 object-cover object-top" />
                    <div className="p-5 text-center">
                      <h3 className="font-extrabold text-lg text-slate-900">{LEADERS[0]?.nameTa}</h3>
                      <p className="text-xs text-primary font-bold">{LEADERS[0]?.roleTa}</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 space-y-5 text-slate-700">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">நிறுவனர் தொலைநோக்குப் பார்வை</span>
                  <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                    {language === "ta" ? "மக்களுக்கான தலைவர் முனைவர் நா. தர்மராஜ்" : "Founder President Dr. N. Dharmaraj"}
                  </h2>
                  <p className="text-sm leading-relaxed">
                    {language === "ta"
                      ? "முனைவர் நா. தர்மராஜ் அவர்கள் அடித்தட்டு மக்களுக்காகவும், டெல்டா உழவர்களின் வாழ்வாதாரத்திற்காகவும் தனது வாழ்க்கையை அர்ப்பணித்த சமூகப் போராளி மற்றும் சட்ட அறிஞர். 2008-ஆம் ஆண்டு சாதி மத பேதமற்ற ஒரு மாற்று அரசியலை முன்னெடுத்து AINNMK இயக்கத்தைத் தோற்றுவித்தார்."
                      : "Dr. N. Dharmaraj is a seasoned advocate, grassroots organizer, and scholar dedicated to protecting the livelihood of smallholder farmers and marginalized families. He established AINNMK in 2008 to introduce an uncorrupted political alternative."}
                  </p>
                  <blockquote className="border-l-4 border-brand-yellow pl-4 italic text-slate-900 font-semibold text-sm">
                    "{LEADERS[0]?.quoteTa}"
                  </blockquote>
                </div>
              </div>
            </section>

            {/* Historical Milestone Timeline */}
            <section className="py-20 px-5 sm:px-8 lg:px-12 bg-slate-50 border-b border-border">
              <div className="mx-auto max-w-[1100px]">
                <div className="text-center mb-14">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">வரலாற்றுப் படிகள் · HISTORICAL JOURNEY</span>
                  <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                    {language === "ta" ? "2008 முதல் 2026 வரை நமது சாதனைப் பயணம்" : "Milestones of Public Service (2008 - 2026)"}
                  </h2>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-1 before:bg-emerald-200 hidden md:block">
                  {TIMELINE.map((m, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <div key={m.year} className={`relative flex items-center justify-between ${isEven ? "flex-row-reverse" : ""}`}>
                        <div className="w-[45%] rounded-xl border border-border bg-white p-6 shadow-sm">
                          <span className="text-2xl font-black text-primary font-mono">{m.year}</span>
                          <h4 className="mt-1 font-bold text-base text-slate-900">{language === "ta" ? m.titleTa : m.titleEn}</h4>
                          <p className="mt-2 text-xs leading-relaxed text-slate-600">{language === "ta" ? m.descTa : m.descEn}</p>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 size-8 rounded-full border-4 border-white bg-emerald-600 shadow flex items-center justify-center text-white text-[10px] font-bold">
                          ★
                        </div>
                        <div className="w-[45%]" />
                      </div>
                    );
                  })}
                </div>

                {/* Mobile Timeline */}
                <div className="md:hidden space-y-6">
                  {TIMELINE.map((m) => (
                    <div key={m.year} className="rounded-xl border border-border bg-white p-5 shadow-sm">
                      <span className="text-xl font-black text-primary font-mono">{m.year}</span>
                      <h4 className="mt-1 font-bold text-base text-slate-900">{language === "ta" ? m.titleTa : m.titleEn}</h4>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600">{language === "ta" ? m.descTa : m.descEn}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          /* IDEOLOGY / PRINCIPLES PAGE */
          <section className="py-20 px-5 sm:px-8 lg:px-12 bg-white">
            <div className="mx-auto max-w-[1200px] space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <h2 className="text-3xl font-extrabold sm:text-4xl text-slate-900">
                  {language === "ta" ? "ஏழு அடிப்படை மக்கள் நல்வழிக் கோட்பாடுகள்" : "The 7 Founding Pillars of AINNMK"}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === "ta"
                    ? "மக்களுக்கு அதிகாரம், உழவர்களுக்கு பாதுகாப்பு, பெண்களுக்கு சம உரிமை — இதுவே நமது உறுதிமொழி."
                    : "Democratic sovereignty, farmer dignity, women's empowerment, and modern education form the cornerstone of our social contract."}
                </p>
              </div>

              <div className="space-y-8">
                {PILLARS.map((p) => (
                  <div
                    key={p.id}
                    className="rounded-2xl border border-border bg-slate-50/70 p-8 shadow-sm flex flex-col md:flex-row gap-8 items-start hover:border-primary/50 transition-colors"
                  >
                    <div className="size-16 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shrink-0 text-2xl font-black shadow-md">
                      {p.number}
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-2xl font-bold text-slate-900">{language === "ta" ? p.titleTa : p.titleEn}</h3>
                      <p className="text-xs font-bold text-purple-700">{language === "ta" ? p.taglineTa : p.taglineEn}</p>
                      <p className="text-sm text-slate-700 leading-relaxed">{language === "ta" ? p.descriptionTa : p.descriptionEn}</p>

                      <div className="pt-3 border-t border-border/80">
                        <h5 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">
                          {language === "ta" ? "கட்சியின் செயல்திட்டங்கள்:" : "Key Policy Action Items:"}
                        </h5>
                        <ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-600">
                          {(language === "ta" ? p.keyPointsTa : p.keyPointsEn).map((pt, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}

/* =========================================================================
   DIRECTORY PAGE (LEADERSHIP, ORGANIZATION, NEWS, EVENTS, GALLERY)
   ========================================================================= */

export function DirectoryPage({
  kind,
}: {
  kind: "leadership" | "organization" | "news" | "events" | "gallery";
}) {
  const { language } = useSiteLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeNewsArticle, setActiveNewsArticle] = useState<NewsArticle | null>(null);
  const [activeGalleryItem, setActiveGalleryItem] = useState<GalleryItem | null>(null);

  return (
    <>
      <SiteHeader />
      <main className="min-h-[70vh]">
        {/* Header Banner */}
        <section className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-slate-950 py-16 px-5 sm:px-8 lg:px-12 text-white">
          <div className="mx-auto max-w-[1360px] text-center max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
              {kind === "leadership" && (language === "ta" ? "கட்சித் தலைமை" : "Party Leadership")}
              {kind === "organization" && (language === "ta" ? "அமைப்பு அணிகள்" : "Organizational Fronts")}
              {kind === "news" && (language === "ta" ? "செய்திகள் & பத்திரிகை வெளியீடுகள்" : "Official News & Communiques")}
              {kind === "events" && (language === "ta" ? "கூட்டங்கள் & மாநாடுகள்" : "Party Conventions & Events")}
              {kind === "gallery" && (language === "ta" ? "புகைப்படப் பதிவுகள்" : "Official Photo Archives")}
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              {kind === "leadership" && (language === "ta" ? "கட்சியின் தலைமைப் பொறுப்பாளர்கள்" : "Leadership & Office Bearers")}
              {kind === "organization" && (language === "ta" ? "மக்களுடன் இணைந்து செயல்படும் 6 அணிகள்" : "Our Six Grassroots Wings")}
              {kind === "news" && (language === "ta" ? "அதிகாரப்பூர்வ கட்சிச் செய்திகள்" : "Press Releases & News Bulletin")}
              {kind === "events" && (language === "ta" ? "கட்சி மாநாடுகள் மற்றும் களப் பயணங்கள்" : "Conferences & Public Campaigns")}
              {kind === "gallery" && (language === "ta" ? "களப் பணிகளின் புகைப்பட ஆவணம்" : "Memories from the Grassroots")}
            </h1>
          </div>
        </section>

        {/* ================= LEADERSHIP ================= */}
        {kind === "leadership" && (
          <section className="py-20 px-5 sm:px-8 lg:px-12 bg-white">
            <div className="mx-auto max-w-[1360px]">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {LEADERS.map((leader) => {
                  const imgUrl = getAssetUrl(leader.imageKey);
                  return (
                    <div
                      key={leader.id}
                      className="rounded-2xl border border-border bg-slate-50/50 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="h-72 w-full overflow-hidden relative">
                          <img
                            src={imgUrl}
                            alt={leader.nameTa}
                            className="size-full object-cover object-top hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                          <div className="absolute bottom-3 left-4 right-4 text-white">
                            <span className="text-[10px] font-bold text-brand-yellow uppercase tracking-wider block">
                              {leader.districtTa}
                            </span>
                            <h3 className="font-extrabold text-lg leading-tight mt-0.5">{leader.nameTa}</h3>
                            <p className="text-xs text-slate-300">{leader.nameEn}</p>
                          </div>
                        </div>

                        <div className="p-6 space-y-3">
                          <div className="inline-block rounded-md bg-emerald-100 text-emerald-900 px-2.5 py-1 text-xs font-bold">
                            {leader.roleTa}
                          </div>
                          <p className="text-xs text-slate-700 leading-relaxed">{leader.bioTa}</p>
                          <blockquote className="border-l-2 border-brand-yellow pl-3 italic text-[11px] text-slate-800">
                            "{leader.quoteTa}"
                          </blockquote>
                        </div>
                      </div>

                      <div className="p-6 pt-0 border-t border-border/80 flex items-center justify-between text-xs text-muted-foreground">
                        <a href={`tel:${leader.phone}`} className="flex items-center gap-1 hover:text-primary transition-colors">
                          <Phone className="size-3.5" />
                          <span>{leader.phone}</span>
                        </a>
                        <a href={`mailto:${leader.email}`} className="flex items-center gap-1 hover:text-primary transition-colors">
                          <Mail className="size-3.5" />
                          <span>Email</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ================= ORGANIZATION ================= */}
        {kind === "organization" && (
          <section className="py-20 px-5 sm:px-8 lg:px-12 bg-white">
            <div className="mx-auto max-w-[1360px] space-y-12">
              <div className="grid gap-8 lg:grid-cols-2">
                {WINGS.map((wing) => {
                  const imgUrl = getAssetUrl(wing.imageKey);
                  return (
                    <div
                      key={wing.id}
                      className="rounded-2xl border border-border bg-slate-50/70 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row gap-6 items-start"
                    >
                      <img
                        src={imgUrl}
                        alt={wing.nameTa}
                        className="w-full sm:w-44 h-48 rounded-xl object-cover shrink-0 shadow"
                      />
                      <div className="space-y-3 flex-1">
                        <span className="text-[10px] font-extrabold text-primary uppercase tracking-wider block">
                          {wing.memberCount}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 leading-tight">
                          {language === "ta" ? wing.nameTa : wing.nameEn}
                        </h3>
                        <p className="text-xs font-semibold text-purple-700">{wing.taglineTa}</p>
                        <p className="text-xs text-slate-600 leading-relaxed">{wing.descriptionTa}</p>
                        <div className="pt-2 text-xs">
                          <span className="font-bold text-slate-900">அமைப்பாளர்: </span>
                          <span className="text-slate-700">{wing.leaderTa}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ================= NEWS ================= */}
        {kind === "news" && (
          <section className="py-20 px-5 sm:px-8 lg:px-12 bg-white">
            <div className="mx-auto max-w-[1360px]">
              {/* Category Pills & Search */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-border">
                <div className="flex flex-wrap items-center gap-2">
                  {["all", "தலைமைச் செய்தி", "மகளிர் அணி", "இளைஞரணி", "மக்கள் சேவை"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                        selectedCategory === cat
                          ? "bg-primary text-primary-foreground shadow"
                          : "bg-muted text-muted-foreground hover:bg-slate-200"
                      }`}
                    >
                      {cat === "all" ? (language === "ta" ? "அனைத்து செய்திகள்" : "All News") : cat}
                    </button>
                  ))}
                </div>

                <div className="relative w-full sm:w-64">
                  <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={language === "ta" ? "செய்திகளைத் தேடுங்கள்..." : "Search releases..."}
                    className="pl-9 h-9 text-xs rounded-full"
                  />
                </div>
              </div>

              {/* News Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {NEWS_ARTICLES.filter((item) => {
                  const matchCat = selectedCategory === "all" || item.categoryTa === selectedCategory;
                  const matchSearch =
                    !searchQuery ||
                    item.titleTa.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.summaryTa.toLowerCase().includes(searchQuery.toLowerCase());
                  return matchCat && matchSearch;
                }).map((article) => (
                  <div
                    key={article.id}
                    className="rounded-2xl border border-border bg-slate-50/50 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-52 w-full overflow-hidden relative">
                        <img
                          src={getAssetUrl(article.imageKey)}
                          alt={article.titleTa}
                          className="size-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 rounded bg-emerald-700 px-2.5 py-0.5 text-[10px] font-bold text-white shadow">
                          {article.categoryTa}
                        </span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-[10px] text-muted-foreground mb-2">
                          <CalendarDays className="size-3 text-primary" />
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.readTimeTa}</span>
                        </div>
                        <h3 className="font-bold text-base text-slate-900 leading-snug line-clamp-2">
                          {language === "ta" ? article.titleTa : article.titleEn}
                        </h3>
                        <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-3">
                          {language === "ta" ? article.summaryTa : article.summaryEn}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveNewsArticle(article)}
                        className="w-full text-xs font-bold rounded-md"
                      >
                        <Eye className="size-3.5 mr-1.5 text-primary" />
                        {language === "ta" ? "முழு செய்தியை வாசிக்க" : "Read Full Story"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* News Article Modal Dialog */}
            {activeNewsArticle && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
                <div className="w-full max-w-2xl rounded-2xl bg-white p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95">
                  <button
                    onClick={() => setActiveNewsArticle(null)}
                    className="absolute top-4 right-4 size-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
                  >
                    <X className="size-4" />
                  </button>

                  <span className="rounded bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 text-xs">
                    {activeNewsArticle.categoryTa}
                  </span>
                  <h3 className="mt-3 text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                    {activeNewsArticle.titleTa}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground pb-4 border-b border-border">
                    <span>{activeNewsArticle.date}</span>
                    <span>•</span>
                    <span>{activeNewsArticle.readTimeTa}</span>
                  </div>

                  <img
                    src={getAssetUrl(activeNewsArticle.imageKey)}
                    alt={activeNewsArticle.titleTa}
                    className="mt-4 w-full h-64 object-cover rounded-xl"
                  />

                  <div className="mt-6 space-y-4 text-sm text-slate-700 leading-relaxed">
                    {activeNewsArticle.contentTa.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-8 pt-4 border-t border-border flex justify-end">
                    <Button onClick={() => setActiveNewsArticle(null)} className="rounded-md text-xs font-bold">
                      {language === "ta" ? "மூடுக (Close)" : "Close"}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* ================= EVENTS ================= */}
        {kind === "events" && (
          <section className="py-20 px-5 sm:px-8 lg:px-12 bg-white">
            <div className="mx-auto max-w-[1360px]">
              <div className="flex gap-2 mb-10 pb-4 border-b border-border">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                    selectedCategory === "all" ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {language === "ta" ? "அனைத்து நிகழ்வுகள்" : "All Events"}
                </button>
                <button
                  onClick={() => setSelectedCategory("upcoming")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                    selectedCategory === "upcoming" ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {language === "ta" ? "வரவிருக்கும் நிகழ்வுகள்" : "Upcoming"}
                </button>
                <button
                  onClick={() => setSelectedCategory("completed")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                    selectedCategory === "completed" ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {language === "ta" ? "முடிவடைந்தவை" : "Completed"}
                </button>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {EVENTS.filter((e) => selectedCategory === "all" || e.status === selectedCategory).map((event) => (
                  <div
                    key={event.id}
                    className="rounded-2xl border border-border bg-slate-50/50 p-6 shadow-sm flex flex-col justify-between hover:border-primary/50 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5">
                          {event.categoryTa}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            event.status === "upcoming"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-slate-200 text-slate-700"
                          }`}
                        >
                          {event.status === "upcoming"
                            ? (language === "ta" ? "வரவிருக்கும் நிகழ்வு" : "Upcoming")
                            : (language === "ta" ? "நடைபெற்றது" : "Completed")}
                        </span>
                      </div>

                      <h3 className="font-extrabold text-lg text-slate-900 leading-snug">{event.titleTa}</h3>

                      <div className="mt-4 space-y-1.5 text-xs text-slate-600">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="size-4 text-primary shrink-0" />
                          <span className="font-bold text-slate-900">{event.date}</span>
                          <span>•</span>
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="size-4 text-primary shrink-0" />
                          <span>{event.locationTa}</span>
                        </div>
                      </div>

                      <p className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-border/80 pt-3">
                        {event.descriptionTa}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/80 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500">
                        சிறப்பு விருந்தினர்: <strong className="text-slate-800">{event.chiefGuestTa}</strong>
                      </span>
                      {event.status === "upcoming" && (
                        <Button
                          size="sm"
                          onClick={() => toast.success("நிகழ்வு நினைவூட்டல் பதிவு செய்யப்பட்டது! (Reminder Set)")}
                          className="rounded-md text-xs font-bold"
                        >
                          கலந்துகொள்
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================= GALLERY ================= */}
        {kind === "gallery" && (
          <section className="py-20 px-5 sm:px-8 lg:px-12 bg-white">
            <div className="mx-auto max-w-[1360px]">
              <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-border">
                {["all", "rally", "welfare", "youth", "meeting"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCategory(c)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold capitalize ${
                      selectedCategory === c ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {c === "all" ? (language === "ta" ? "அனைத்துப் புகைப்படங்கள்" : "All Photos") : c}
                  </button>
                ))}
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {GALLERY.filter((g) => selectedCategory === "all" || g.category === selectedCategory).map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => setActiveGalleryItem(photo)}
                    className="group relative h-72 rounded-2xl overflow-hidden border border-border shadow-sm cursor-pointer"
                  >
                    <img
                      src={getAssetUrl(photo.imageKey)}
                      alt={photo.titleTa}
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                    <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                      <span className="rounded bg-emerald-600 px-2 py-0.5 text-[9px] font-bold text-white uppercase">
                        {photo.categoryTa}
                      </span>
                      <h4 className="mt-2 text-sm font-bold leading-tight">{photo.titleTa}</h4>
                      <p className="mt-1 text-[11px] text-slate-300 flex items-center gap-1">
                        <MapPin className="size-3 text-brand-yellow" />
                        <span>{photo.locationTa} · {photo.date}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Lightbox Preview Modal */}
            {activeGalleryItem && (
              <div
                onClick={() => setActiveGalleryItem(null)}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-3xl rounded-2xl bg-slate-950 text-white p-5 shadow-2xl relative overflow-hidden"
                >
                  <button
                    onClick={() => setActiveGalleryItem(null)}
                    className="absolute top-4 right-4 size-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                  >
                    <X className="size-4" />
                  </button>
                  <img
                    src={getAssetUrl(activeGalleryItem.imageKey)}
                    alt={activeGalleryItem.titleTa}
                    className="w-full max-h-[60vh] object-contain rounded-xl"
                  />
                  <div className="mt-4 space-y-1">
                    <span className="text-xs font-bold text-brand-yellow">{activeGalleryItem.categoryTa}</span>
                    <h3 className="text-lg font-bold">{activeGalleryItem.titleTa}</h3>
                    <p className="text-xs text-slate-300">{activeGalleryItem.descriptionTa}</p>
                    <p className="text-[11px] text-slate-400">{activeGalleryItem.locationTa} · {activeGalleryItem.date}</p>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}

/* =========================================================================
   MEMBERSHIP PAGE (ONLINE APPLICATION + LIVE VIRTUAL ID CARD)
   ========================================================================= */

export function MembershipPage() {
  const { language } = useSiteLanguage();

  return (
    <>
      <SiteHeader />
      <main className="w-full max-w-full overflow-x-hidden">
        {/* Banner */}
        <section className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-slate-950 py-16 px-5 sm:px-8 lg:px-12 text-white">
          <div className="mx-auto max-w-[1360px] text-center max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
              {language === "ta" ? "அதிகாரப்பூர்வ உறுப்பினர் சேர்க்கை" : "Cadre Enrollment & Digital ID"}
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white">
              {language === "ta" ? "ஒற்றுமையின் பயணத்தில் இணையுங்கள்!" : "Join the Movement for Change!"}
            </h1>
            <p className="mt-3 text-sm text-emerald-200 leading-relaxed">
              {language === "ta"
                ? "சாதி, மத பேதமற்ற சமத்துவ சமுதாயத்தைப் படைக்க நம் நாடு மக்கள் கட்சியின் உறுதியான தொண்டராக இன்றே இணையுங்கள்."
                : "Become an official verified member of AINNMK. Enter your details below and preview your dynamic PVC membership card immediately."}
            </p>
          </div>
        </section>

        {/* Form and Virtual ID Card Section */}
        <section className="py-16 px-5 sm:px-8 lg:px-12 bg-white">
          <div className="mx-auto max-w-[1360px] space-y-14">
            {/* Live Virtual ID Card Generator */}
            <div className="rounded-2xl border-2 border-emerald-500/20 bg-slate-50/50 p-6 sm:p-10 shadow-sm">
              <VirtualIdCard language={language} />
            </div>

            {/* Complete Membership Application Form */}
            <div className="grid lg:grid-cols-12 gap-10 items-start border-t border-border pt-12">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {language === "ta" ? "விண்ணப்ப விவரங்கள்" : "Formal Verification Steps"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {language === "ta" ? "அதிகாரப்பூர்வ உறுப்பினர் பதிவுப் படிவம்" : "Central Party Database Registration"}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === "ta"
                    ? "விண்ணப்பங்கள் தலைமை அலுவலகத்தால் சரிபார்க்கப்பட்டு, மாவட்ட நிர்வாகிகள் வழியாக அதிகாரப்பூர்வ அட்டை உங்கள் முகவரிக்கு தபாலிலும் அனுப்பி வைக்கப்படும்."
                    : "Your membership details are encrypted and securely filed. An official embossed laminated PVC card will also be mailed via your district coordinator."}
                </p>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-2">
                  <div className="flex items-center gap-2 font-bold">
                    <ShieldCheck className="size-4 text-emerald-700" />
                    <span>உறுப்பினர் நன்மைகள்:</span>
                  </div>
                  <ul className="space-y-1 list-disc pl-5 text-[11px] text-emerald-800">
                    <li>கட்சியின் கொள்கை முடிவுகள் மற்றும் மாநில மாநாடுகளில் பங்கேற்பு</li>
                    <li>இலவச சட்ட ஆலோசனை மற்றும் நலத்திட்ட உதவிகள்</li>
                    <li>உள்ளாட்சி மற்றும் பொதுத் தேர்தல்களில் மக்கள் பணியாற்றும் வாய்ப்பு</li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-7">
                <MembershipForm language={language} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function MembershipForm({ language }: { language: "ta" | "en" }) {
  const [pending, setPending] = useState(false);
  const [consent, setConsent] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    const input = {
      full_name: String(fields.get("full_name") ?? ""),
      mobile: String(fields.get("mobile") ?? "").replace(/\D/g, ""),
      email: String(fields.get("email") ?? ""),
      state: String(fields.get("state") ?? "தமிழ்நாடு"),
      district: String(fields.get("district") ?? ""),
      constituency: String(fields.get("constituency") ?? ""),
      address: String(fields.get("address") ?? ""),
      organization_wing: String(fields.get("organization_wing") ?? ""),
      age: String(fields.get("age") ?? ""),
      consent,
    };
    const result = membershipSchema.safeParse(input);
    if (!result.success) {
      const issue = result.error.issues[0];
      toast.error(
        issue?.message ||
          (language === "ta" ? "விவரங்களைச் சரிபார்த்து மீண்டும் முயலுங்கள்." : "Please check your details and try again.")
      );
      return;
    }
    setPending(true);
    try {
      await submitMembership({ data: toMembershipInsert(result.data) });
      toast.success(
        language === "ta"
          ? "உங்கள் உறுப்பினர் விண்ணப்பம் வெற்றிகரமாகப் பெறப்பட்டது! (Registration Successful)"
          : "Your membership application has been submitted successfully!"
      );
      form.reset();
      setConsent(false);
    } catch {
      toast.error(language === "ta" ? "விண்ணப்பம் அனுப்புவதில் சிக்கல் ஏற்பட்டது." : "Could not submit application. Please try again.");
    } finally {
      setPending(false);
    }
  }

  const wingsList = [
    "உழவர் மற்றும் பொதுமக்கள் அணி",
    "இளைஞர் எழுச்சி அணி",
    "வீரத்தாய் மகளிர் அணி",
    "மாணவர் மற்றும் அறிவுசார் அணி",
    "மக்கள் சேவைப் பிரிவு",
    "ஊடகம் மற்றும் சமூக ஊடக அணி",
  ];

  return (
    <form className="grid gap-4 sm:grid-cols-2 rounded-2xl border border-border bg-slate-50/50 p-6 sm:p-8" noValidate onSubmit={submit}>
      <FormField id="m-name" label={language === "ta" ? "முழுப் பெயர் *" : "Full Name *"}>
        <Input autoComplete="name" className="h-11 rounded-md bg-white" id="m-name" maxLength={120} name="full_name" required />
      </FormField>

      <FormField id="m-mobile" label={language === "ta" ? "கைபேசி எண் *" : "Mobile Number *"}>
        <Input autoComplete="tel" className="h-11 rounded-md bg-white" id="m-mobile" inputMode="numeric" maxLength={14} name="mobile" placeholder="9876543210" required type="tel" />
      </FormField>

      <FormField id="m-email" label={language === "ta" ? "மின்னஞ்சல் (விருப்பம்)" : "Email (Optional)"}>
        <Input autoComplete="email" className="h-11 rounded-md bg-white" id="m-email" maxLength={254} name="email" type="email" />
      </FormField>

      <FormField id="m-age" label={language === "ta" ? "வயது *" : "Age *"}>
        <Input className="h-11 rounded-md bg-white" id="m-age" max="120" min="18" name="age" placeholder="18+" type="number" required />
      </FormField>

      <FormField id="m-state" label={language === "ta" ? "மாநிலம் *" : "State *"}>
        <Input defaultValue="தமிழ்நாடு" className="h-11 rounded-md bg-white" id="m-state" maxLength={100} name="state" required />
      </FormField>

      <FormField id="m-district" label={language === "ta" ? "மாவட்டம் *" : "District *"}>
        <Input className="h-11 rounded-md bg-white" id="m-district" maxLength={100} name="district" placeholder="சென்னை / மதுரை / திருச்சி..." required />
      </FormField>

      <FormField id="m-wing" label={language === "ta" ? "சேர விரும்பும் அணி *" : "Preferred Wing *"}>
        <select
          className="h-11 w-full rounded-md border border-input bg-white px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          defaultValue=""
          id="m-wing"
          name="organization_wing"
          required
        >
          <option disabled value="">
            {language === "ta" ? "அணியைத் தேர்ந்தெடுக்கவும்" : "Select an organization wing"}
          </option>
          {wingsList.map((w) => (
            <option key={w} value={w}>{w}</option>
          ))}
        </select>
      </FormField>

      <FormField id="m-constituency" label={language === "ta" ? "சட்டமன்றத் தொகுதி" : "Assembly Constituency"}>
        <Input className="h-11 rounded-md bg-white" id="m-constituency" maxLength={120} name="constituency" />
      </FormField>

      <div className="sm:col-span-2">
        <FormField id="m-address" label={language === "ta" ? "முழு முகவரி *" : "Full Residential Address *"}>
          <Textarea className="min-h-20 resize-y rounded-md bg-white" id="m-address" maxLength={1000} name="address" required />
        </FormField>
      </div>

      <div className="flex items-start gap-3 sm:col-span-2 pt-2">
        <Checkbox checked={consent} id="m-consent" onCheckedChange={(c) => setConsent(c === true)} />
        <Label className="cursor-pointer text-xs text-muted-foreground leading-snug" htmlFor="m-consent">
          {language === "ta"
            ? "அகில இந்திய நம் நாடு மக்கள் கட்சியின் கொள்கைகளுக்கும் விதிகளுக்கும் கட்டுப்பட்டு மக்கள் பணியாற்றுவேன் என உறுதி கூறுகிறேன். *"
            : "I solemnly pledge to uphold the principles and democratic code of AINNMK in dedicated public service. *"}
        </Label>
      </div>

      <div className="sm:col-span-2 pt-2">
        <Button className="h-12 w-full font-bold rounded-md bg-primary hover:bg-primary/90 text-white" disabled={pending} type="submit">
          {pending ? "விண்ணப்பம் அனுப்பப்படுகிறது..." : (language === "ta" ? "உறுப்பினர் விண்ணப்பத்தைச் சமர்ப்பி" : "Submit Membership Registration")}
          <ArrowRight className="size-4 ml-2" />
        </Button>
      </div>
    </form>
  );
}

/* =========================================================================
   CONTACT PAGE
   ========================================================================= */

export function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="w-full max-w-full overflow-x-hidden">
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

function ContactSection() {
  const { language } = useSiteLanguage();
  const [pending, setPending] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    const input = {
      full_name: String(fields.get("full_name") ?? ""),
      mobile: String(fields.get("mobile") ?? "").replace(/\D/g, ""),
      email: String(fields.get("email") ?? ""),
      subject: String(fields.get("subject") ?? ""),
      message: String(fields.get("message") ?? ""),
    };
    const result = contactSchema.safeParse(input);
    if (!result.success) {
      toast.error(language === "ta" ? "தயவுசெய்து விவரங்களைச் சரிபார்க்கவும்." : "Please check form fields.");
      return;
    }
    setPending(true);
    try {
      await submitContactMessage({ data: result.data });
      toast.success(
        language === "ta" ? "உங்கள் தகவல் பெறப்பட்டது! நன்றி." : "Your message has been received. Thank you."
      );
      form.reset();
    } catch {
      toast.error(language === "ta" ? "செய்தி அனுப்புவதில் தோல்வி." : "Could not send message.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="bg-slate-50 py-20 px-5 sm:px-8 lg:px-12 border-b border-border">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              தொடர்பு கொள்ள · REACH US
            </span>
            <h2 className="text-3xl font-black text-slate-900 leading-tight">
              {language === "ta" ? "மக்களின் குரலைக் கேட்க நாங்கள் எப்போதும் தயார்!" : "We Are Always Here to Listen & Assist"}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {language === "ta"
                ? "உங்கள் பகுதியின் மக்கள் பிரச்சனைகள், உழவர் கோரிக்கைகள் அல்லது கட்சியில் இணையும் வழிகாட்டல்களுக்கு எங்களைத் தொடர்பு கொள்ளுங்கள்."
                : "For civic grievances, agricultural assistance, media briefings, or party membership queries, reach our central command desks."}
            </p>

            {/* Address Card */}
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="size-5 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">மாநிலத் தலைமை அலுவலகம்:</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-5">{PARTY_INFO.headquartersTa}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-border/80 pt-3">
                <Phone className="size-5 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">தொலைபேசி / உதவி எண்:</h4>
                  <p className="mt-0.5 text-xs text-slate-600">{PARTY_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-border/80 pt-3">
                <Mail className="size-5 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">அதிகாரப்பூர்வ மின்னஞ்சல்:</h4>
                  <p className="mt-0.5 text-xs text-slate-600">{PARTY_INFO.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {language === "ta" ? "கட்சியின் தலைமைக்கு தகவல் அனுப்ப" : "Send a Message to State Secretariat"}
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                {language === "ta" ? "உங்கள் கருத்துக்கள் மற்றும் குறைகளை உடனுக்குடன் பகிருங்கள்." : "Submit your query or petition for prompt attention."}
              </p>

              <form className="grid gap-4 sm:grid-cols-2" noValidate onSubmit={submit}>
                <FormField id="c-name" label={language === "ta" ? "முழுப் பெயர் *" : "Full Name *"}>
                  <Input autoComplete="name" className="h-11 rounded-md" id="c-name" maxLength={120} name="full_name" required />
                </FormField>
                <FormField id="c-mobile" label={language === "ta" ? "கைபேசி எண் *" : "Mobile Number *"}>
                  <Input autoComplete="tel" className="h-11 rounded-md" id="c-mobile" inputMode="numeric" maxLength={14} name="mobile" placeholder="9876543210" required type="tel" />
                </FormField>
                <div className="sm:col-span-2">
                  <FormField id="c-email" label={language === "ta" ? "மின்னஞ்சல் (விருப்பம்)" : "Email (Optional)"}>
                    <Input autoComplete="email" className="h-11 rounded-md" id="c-email" maxLength={254} name="email" type="email" />
                  </FormField>
                </div>
                <div className="sm:col-span-2">
                  <FormField id="c-subject" label={language === "ta" ? "விஷயம் / தலைப்பு *" : "Subject *"}>
                    <Input className="h-11 rounded-md" id="c-subject" maxLength={160} name="subject" required />
                  </FormField>
                </div>
                <div className="sm:col-span-2">
                  <FormField id="c-message" label={language === "ta" ? "உங்கள் செய்தி அல்லது மனு விவரம் *" : "Message or Petition *"}>
                    <Textarea className="min-h-28 resize-y rounded-md" id="c-message" maxLength={5000} name="message" required />
                  </FormField>
                </div>
                <div className="sm:col-span-2 pt-2">
                  <Button className="h-12 w-full sm:w-auto font-bold rounded-md bg-primary text-white" disabled={pending} type="submit">
                    {pending ? "அனுப்பப்படுகிறது..." : (language === "ta" ? "செய்தியை அனுப்புக" : "Send Message")}
                    <Send className="size-4 ml-2" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   POLICY & TERMS PAGE
   ========================================================================= */

export function PolicyPage({ type }: { type: "privacy" | "terms" }) {
  const { language } = useSiteLanguage();
  const isPrivacy = type === "privacy";

  return (
    <>
      <SiteHeader />
      <main className="py-20 px-5 sm:px-8 lg:px-12 bg-white">
        <article className="mx-auto max-w-4xl space-y-6 text-slate-700 leading-relaxed">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">AINNMK OFFICIAL POLICIES</span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
            {isPrivacy
              ? (language === "ta" ? "தனியுரிமைக் கொள்கை (Privacy Policy)" : "Privacy Policy")
              : (language === "ta" ? "விதிமுறைகள் மற்றும் நிபந்தனைகள் (Terms of Service)" : "Terms & Conditions")}
          </h1>
          <div className="border-t border-border pt-6 space-y-4 text-sm">
            <p>
              {language === "ta"
                ? "அகில இந்திய நம் நாடு மக்கள் கட்சியின் (AINNMK) அதிகாரப்பூர்வ இணையதளத்தில் வழங்கப்படும் தகவல்கள் அனைத்தும் இந்திய மக்களாட்சி நெறிமுறைகளின்படி மக்களுக்கான வெளிப்படைத்தன்மையுடன் பராமரிக்கப்படுகின்றன."
                : "All information provided on the official portal of Agila India Nam Nadu Makkal Katchi (AINNMK) is safeguarded with strict adherence to democratic privacy rights and citizen confidentiality."}
            </p>
            <p>
              {language === "ta"
                ? "உறுப்பினர் சேர்க்கை மற்றும் தொடர்புப் படிவங்கள் மூலம் பெறப்படும் தனிநபர் தகவல்கள், கட்சியின் உட்கட்சி அமைப்பியல் மற்றும் மக்கள் நலத் திட்டப் பணிகளுக்காக மட்டுமே பாதுகாப்பாகப் பயன்படுத்தப்படும். மூன்றாம் நபர்களுக்கோ அல்லது வணிக நிறுவனங்களுக்கோ எந்தக் காரணத்தைக் கொண்டும் விற்கப்படாது."
                : "Personal data collected through membership intake and petitions is utilized exclusively for internal organization and welfare coordination. It will never be sold, leased, or traded to commercial entities under any circumstances."}
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

function FormField({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5 text-left">
      <Label className="text-xs font-semibold text-foreground/90" htmlFor={id}>
        {label}
      </Label>
      {children}
    </div>
  );
}

export const siteMeta = {
  index: {
    title: "அகில இந்திய நம் நாடு மக்கள் கட்சி | AINNMK - அதிகாரப்பூர்வ இணையதளம்",
    description: "2008 முதல் செயல்படும் அகில இந்திய நம் நாடு மக்கள் கட்சி. ஒற்றுமை, சமத்துவம், உழவர் நலன் மற்றும் மக்களின் உரிமைக்கான இயக்கம்.",
  },
  about: {
    title: "கட்சியின் வரலாறு & நோக்கம் | AINNMK",
    description: "2008-ல் நிறுவப்பட்ட AINNMK கட்சியின் வரலாறு, தலைவர் முனைவர் நா. தர்மராஜ் அவர்களின் தொலைநோக்குப் பார்வை.",
  },
  ideology: {
    title: "ஏழு அடிப்படைக் கோட்பாடுகள் | AINNMK",
    description: "அகில இந்திய நம் நாடு மக்கள் கட்சியின் சமத்துவ சமுதாயம் மற்றும் உழவர் நலக் கொள்கை ஆவணம்.",
  },
  leadership: {
    title: "கட்சித் தலைமைப் பொறுப்பாளர்கள் | AINNMK",
    description: "அகில இந்திய நம் நாடு மக்கள் கட்சியின் மாநில நிர்வாகிகள், மாவட்டச் செயலாளர்கள் விவரங்கள்.",
  },
  organization: {
    title: "கட்சியின் 6 அமைப்பு அணிகள் | AINNMK",
    description: "உழவர் அணி, இளைஞரணி, வீரத்தாய் மகளிர் அணி, மாணவரணி அடங்கிய AINNMK கட்டமைப்பு.",
  },
  news: {
    title: "அதிகாரப்பூர்வ செய்திகள் & அறிக்கைகள் | AINNMK",
    description: "AINNMK மாநாடுகள், போராட்டங்கள், நலத்திட்டங்கள் மற்றும் பத்திரிகை வெளியீடுகள்.",
  },
  events: {
    title: "கட்சி நிகழ்வுகள் & பொது மாநாடுகள் | AINNMK",
    description: "அகில இந்திய நம் நாடு மக்கள் கட்சியின் வரவிருக்கும் பொதுக்கூட்டங்கள் மற்றும் மாநாட்டு அட்டவணை.",
  },
  gallery: {
    title: "புகைப்பட ஆவணப் படத்தொகுப்பு | AINNMK",
    description: "AINNMK களப் பணிகள், மாநாடுகள், உழவர் பேரணிகளின் அதிகாரப்பூர்வ புகைப்படத் தொகுப்பு.",
  },
  membership: {
    title: "உறுப்பினர் சேர்க்கை & டிஜிட்டல் அட்டை | AINNMK",
    description: "கட்சியில் உடனடியாக இணைந்து உங்கள் அதிகாரப்பூர்வ டிஜிட்டல் உறுப்பினர் அடையாள அட்டையைப் பெறுங்கள்.",
  },
  contact: {
    title: "தலைமை அலுவலகத் தொடர்பு | AINNMK",
    description: "அகில இந்திய நம் நாடு மக்கள் கட்சியின் சென்னை தலைமை அலுவலகம் மற்றும் மாவட்ட உதவி எண்கள்.",
  },
  privacy: {
    title: "தனியுரிமைக் கொள்கை | AINNMK",
    description: "AINNMK உறுப்பினர் தரவுப் பாதுகாப்பு மற்றும் தனியுரிமை விளக்கம்.",
  },
  terms: {
    title: "விதிமுறைகள் & நிபந்தனைகள் | AINNMK",
    description: "AINNMK இணையதளப் பயன்பாட்டு விதிமுறைகள்.",
  },
};
