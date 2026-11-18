import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronDown,
  HandHeart,
  HeartHandshake,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Newspaper,
  Scale,
  Send,
  ShieldCheck,
  Sprout,
  Users,
  X,
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

type TextPair = { ta: string; en: string };

const navItems: { href: string; label: TextPair }[] = [
  { href: "/about", label: { ta: "எங்களைப் பற்றி", en: "About" } },
  { href: "/leadership", label: { ta: "தலைமை", en: "Leadership" } },
  { href: "/organization", label: { ta: "அமைப்பு", en: "Organization" } },
  { href: "/ideology", label: { ta: "கொள்கைகள்", en: "Principles" } },
  { href: "/news", label: { ta: "செய்திகள்", en: "News" } },
  { href: "/events", label: { ta: "நிகழ்வுகள்", en: "Events" } },
  { href: "/gallery", label: { ta: "படத்தொகுப்பு", en: "Gallery" } },
  { href: "/contact", label: { ta: "தொடர்புக்கு", en: "Contact" } },
];

const content = {
  ta: {
    strip: "அனைவரையும் இணைக்கும் ஒற்றுமை. அனைவருக்குமான மக்கள் நலன்.",
    join: "கட்சியில் இணையுங்கள்",
    home: "முகப்பு",
    heroEyebrow: "2008 முதல் · அகில இந்திய அளவில்",
    heroTitle: "நம் தாய்நாடு —\nநம் குடும்பம்",
    heroEnglish: "Our Motherland, Our Family",
    heroDescription:
      "சாதி, மதம், மொழி, இனம் என்ற வேறுபாடுகளைக் கடந்து, அனைவரும் ஒரே சமுதாயமாக ஒற்றுமையுடன் வாழ வேண்டும் என்ற நோக்கத்துடன் செயல்படும் அகில இந்திய நம் நாடு மக்கள் கட்சி.",
    about: "எங்கள் கட்சியைப் பற்றி",
    aboutEnglish: "A shared future begins with standing together.",
    founding: "2008 ஆம் ஆண்டு தொடக்கம்",
    aboutOne: "அகில இந்திய நம் நாடு மக்கள் கட்சி 2008 ஆம் ஆண்டு தொடங்கப்பட்டது.",
    aboutTwo:
      "சாதி, மதம், மொழி, இனம் போன்ற வேறுபாடுகள் இல்லாமல் அனைவரும் ஒரே சமுதாயமாகவும், ஒரே குடும்பமாகவும் வாழ வேண்டும் என்ற கொள்கையின் அடிப்படையில் கட்சி செயல்பட்டு வருகிறது.",
    aboutThree:
      "இந்தியா முழுவதும் மக்களின் ஒற்றுமை, சமூக நல்லிணக்கம் மற்றும் அனைவரின் பங்கேற்பை முன்னிறுத்தி செயல்படுவதே கட்சியின் நோக்கமாகும்.",
    explore: "எங்கள் நோக்கத்தை அறிய",
    valuesLabel: "நாம் நம்பும் கொள்கைகள்",
    valuesTitle: "மக்களை ஒன்றிணைக்கும் நான்கு அடிப்படை நோக்கங்கள்",
    valueItems: [
      { title: "சமூக ஒற்றுமை", subtitle: "Social unity", text: "சாதி, மதம், மொழி, இனம் போன்ற வேறுபாடுகளைக் கடந்து அனைவரும் ஒன்றிணைந்து வாழ்தல்.", icon: HeartHandshake },
      { title: "சமத்துவம்", subtitle: "Equality", text: "அனைத்து சமுதாய மக்களும் சமமாக மதிக்கப்பட வேண்டும்.", icon: Scale },
      { title: "மக்கள் நலன்", subtitle: "People’s welfare", text: "தாழ்த்தப்பட்ட மக்கள், ஏழை எளிய மக்கள் மற்றும் மலைவாழ் மக்களின் நலனில் அக்கறை.", icon: HandHeart },
      { title: "இளைஞர் மற்றும் மகளிர் பங்கேற்பு", subtitle: "Youth & women", text: "மாணவர்கள், இளைஞர்கள் மற்றும் மகளிர் அணிகளின் பங்கேற்பை ஊக்குவித்தல்.", icon: Users },
    ],
    leadershipEyebrow: "தலைமை",
    leadershipTitle: "கட்சியின் தலைமைப் பொறுப்பாளர்கள்",
    noLeaders: "அதிகாரப்பூர்வ தலைமை விவரங்கள் விரைவில் வெளியிடப்படும்.",
    viewAll: "அனைத்தையும் காண்க",
    orgEyebrow: "மக்களுடன் இணைந்து செயல்படும் அமைப்பு",
    orgTitle: "ஒவ்வொரு குரலுக்கும் ஓர் இடம்",
    wings: ["பொதுமக்கள் அணி", "மாணவரணி", "இளைஞரணி", "மகளிர் அணி", "மாவட்ட நிர்வாகிகள்", "மாநில நிர்வாகிகள்"],
    wingsEnglish: ["People’s Wing", "Students’ Wing", "Youth Wing", "Women’s Wing", "District teams", "State teams"],
    wingText: "மக்களின் தேவைகளைக் கேட்டு, ஒற்றுமையுடன் செயல்படும் அமைப்பு.",
    newsEyebrow: "செய்திகள் மற்றும் ஊடகம்",
    newsTitle: "கட்சியின் சமீபத்திய செய்திகள்",
    noNewsTitle: "அதிகாரப்பூர்வ செய்திகள் விரைவில்",
    noNewsText: "அங்கீகரிக்கப்பட்ட கட்சிச் செய்திகள் மற்றும் அறிவிப்புகள் வெளியிடப்பட்டவுடன் இங்கே சேர்க்கப்படும்.",
    eventsEyebrow: "கட்சிச் செயல்பாடுகள்",
    eventsTitle: "கூட்டங்கள் மற்றும் நிகழ்வுகள்",
    noEventsTitle: "தற்போது அறிவிக்கப்பட்ட நிகழ்வுகள் இல்லை",
    noEventsText: "அங்கீகரிக்கப்பட்ட கட்சி நிகழ்வு விவரங்கள் பகிரப்பட்டதும் இங்கே வெளியிடப்படும்.",
    joinTitle: "ஒற்றுமையின் பயணத்தில் இணையுங்கள்",
    joinText: "ஒற்றுமை, சமத்துவம் மற்றும் மக்கள் நலன் என்ற நோக்கத்துடன் ஒன்றிணைந்து செயல்பட வாருங்கள்.",
    contactEyebrow: "தொடர்பு கொள்ளுங்கள்",
    contactTitle: "உங்களிடமிருந்து கேட்க விரும்புகிறோம்",
    contactText: "கட்சியின் அதிகாரப்பூர்வ தொடர்பு விவரங்கள் உறுதிசெய்யப்பட்டதும் இங்கே சேர்க்கப்படும்.",
    contactEmailUnavailable: "அதிகாரப்பூர்வ மின்னஞ்சல் விரைவில் அறிவிக்கப்படும்.",
    contactPhoneUnavailable: "அதிகாரப்பூர்வ தொலைபேசி விரைவில் அறிவிக்கப்படும்.",
    name: "முழுப் பெயர்",
    mobile: "கைபேசி எண்",
    email: "மின்னஞ்சல் முகவரி",
    optional: "விருப்பத்தேர்வு",
    state: "மாநிலம்",
    district: "மாவட்டம்",
    constituency: "தொகுதி",
    address: "முகவரி",
    wing: "விருப்பமான அணி",
    age: "வயது",
    consent: "எனது தகவல்களை உறுப்பினர் விண்ணப்பத்திற்காகப் பயன்படுத்த ஒப்புக்கொள்கிறேன்.",
    submit: "உறுப்பினர் விண்ணப்பத்தை அனுப்பவும்",
    sending: "அனுப்பப்படுகிறது…",
    success: "உங்கள் விண்ணப்பம் வெற்றிகரமாகப் பெறப்பட்டது.",
    failure: "உங்கள் விண்ணப்பத்தை அனுப்ப இயலவில்லை. மீண்டும் முயலுங்கள்.",
    formHelper: "உங்கள் தகவல்கள் உறுப்பினர் விண்ணப்பத்தைப் பரிசீலிக்க மட்டுமே பயன்படுத்தப்படும்.",
    contactSubject: "பொருள்",
    contactMessage: "உங்கள் செய்தி",
    sendMessage: "செய்தியை அனுப்பவும்",
    messageSuccess: "உங்கள் செய்தி வெற்றிகரமாகப் பெறப்பட்டது.",
    contactFailure: "உங்கள் செய்தியை அனுப்ப இயலவில்லை. மீண்டும் முயலுங்கள்.",
    chooseWing: "ஒரு அணியைத் தேர்வு செய்யுங்கள்",
    wingsList: ["பொதுமக்கள் அணி", "மாணவரணி", "இளைஞரணி", "மகளிர் அணி", "மாவட்ட நிர்வாகிகள்", "மாநில நிர்வாகிகள்"],
    copyright: "© 2026 அகில இந்திய நம் நாடு மக்கள் கட்சி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    privacy: "தனியுரிமைக் கொள்கை",
    terms: "விதிமுறைகள்",
    admin: "நிர்வாகி",
    footerText: "ஒற்றுமை, சமத்துவம், மக்கள் நலன்.",
    association: "அதிகாரப்பூர்வ தொடர்பு முகவரி இன்னும் வெளியிடப்படவில்லை.",
  },
  en: {
    strip: "Unity that brings everyone together. Well-being for all.",
    join: "Join the party",
    home: "Home",
    heroEyebrow: "Since 2008 · A national party",
    heroTitle: "Our Motherland —\nOur Family",
    heroEnglish: "நம் தாய்நாடு — நம் குடும்பம்",
    heroDescription:
      "Agila India Nam Nadu Makkal Katchi works to bring people together as one society, beyond differences of caste, faith, language and community.",
    about: "About our party",
    aboutEnglish: "A shared future begins with standing together.",
    founding: "Founded in 2008",
    aboutOne: "Agila India Nam Nadu Makkal Katchi was founded in 2008.",
    aboutTwo:
      "The party works on the principle that all people should live together as one society and one family, without divisions of caste, faith, language or community.",
    aboutThree:
      "Our purpose is to advance unity, social harmony and broad public participation throughout India.",
    explore: "Discover our principles",
    valuesLabel: "What guides us",
    valuesTitle: "Four principles for bringing people together",
    valueItems: [
      { title: "Social unity", subtitle: "சமூக ஒற்றுமை", text: "Living together beyond divisions of caste, faith, language and community.", icon: HeartHandshake },
      { title: "Equality", subtitle: "சமத்துவம்", text: "Every community deserves equal respect and dignity.", icon: Scale },
      { title: "People’s welfare", subtitle: "மக்கள் நலன்", text: "Care for disadvantaged people, families in need and hill communities.", icon: HandHeart },
      { title: "Youth & women", subtitle: "இளைஞர் மற்றும் மகளிர் பங்கேற்பு", text: "Encouraging students, young people and women to participate.", icon: Users },
    ],
    leadershipEyebrow: "Leadership",
    leadershipTitle: "The people serving the party",
    noLeaders: "Official leadership details will be published when verified.",
    viewAll: "View all",
    orgEyebrow: "An organization rooted in public participation",
    orgTitle: "A place for every voice",
    wings: ["பொதுமக்கள் அணி", "மாணவரணி", "இளைஞரணி", "மகளிர் அணி", "மாவட்ட நிர்வாகிகள்", "மாநில நிர்வாகிகள்"],
    wingsEnglish: ["People’s Wing", "Students’ Wing", "Youth Wing", "Women’s Wing", "District teams", "State teams"],
    wingText: "Listening to community needs and working together in unity.",
    newsEyebrow: "News & media",
    newsTitle: "The latest from the party",
    noNewsTitle: "Official news coming soon",
    noNewsText: "Approved party news and announcements will appear here once they are published.",
    eventsEyebrow: "Party activities",
    eventsTitle: "Meetings and events",
    noEventsTitle: "No events announced yet",
    noEventsText: "Official party event details will be published here when available.",
    joinTitle: "Be part of the journey toward unity",
    joinText: "Join us in working together for unity, equality and the well-being of all people.",
    contactEyebrow: "Get in touch",
    contactTitle: "We’d like to hear from you",
    contactText: "Official party contact details will be added once confirmed.",
    contactEmailUnavailable: "Official email to be announced.",
    contactPhoneUnavailable: "Official phone to be announced.",
    name: "Full name",
    mobile: "Mobile number",
    email: "Email address",
    optional: "Optional",
    state: "State",
    district: "District",
    constituency: "Constituency",
    address: "Address",
    wing: "Interested organization or wing",
    age: "Age",
    consent: "I consent to my information being used to process my membership application.",
    submit: "Submit membership application",
    sending: "Sending…",
    success: "Your application has been received.",
    failure: "We could not send your application. Please try again.",
    formHelper: "Your information will only be used to review this membership application.",
    contactSubject: "Subject",
    contactMessage: "Your message",
    sendMessage: "Send message",
    messageSuccess: "Your message has been received.",
    contactFailure: "We could not send your message. Please try again.",
    chooseWing: "Choose an organization",
    wingsList: ["People’s Wing", "Students’ Wing", "Youth Wing", "Women’s Wing", "District teams", "State teams"],
    copyright: "© 2026 Agila India Nam Nadu Makkal Katchi. All rights reserved.",
    privacy: "Privacy policy",
    terms: "Terms",
    admin: "Admin",
    footerText: "Unity, equality, and the well-being of all.",
    association: "Official contact address has not yet been provided.",
  },
} as const;

export function useCopy() {
  const { language } = useSiteLanguage();
  return content[language];
}

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <span aria-hidden="true" className="relative grid size-12 shrink-0 place-items-center rounded-full border-[3px] border-primary bg-brand-yellow">
      <span className="grid size-8 place-items-center rounded-full bg-brand-purple">
        <span className="text-[19px] leading-none text-brand-yellow">❋</span>
      </span>
      {light ? <span className="sr-only">AINNMK</span> : null}
    </span>
  );
}

function Bilingual({ text, className = "" }: { text: TextPair; className?: string }) {
  const { language, setLanguage } = useSiteLanguage();
  return (
    <button
      aria-label={language === "ta" ? "Switch to English" : "தமிழில் காண்க"}
      className={`inline-flex h-9 items-center gap-1 rounded-md border border-border px-3 text-xs font-semibold transition-colors hover:bg-muted ${className}`}
      onClick={() => setLanguage(language === "ta" ? "en" : "ta")}
      type="button"
    >
      {language === "ta" ? text.ta : text.en}
      <ChevronDown aria-hidden="true" className="size-3.5" />
    </button>
  );
}

export function SiteHeader() {
  const { language } = useSiteLanguage();
  const c = content[language];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="hidden min-h-8 items-center justify-center bg-primary px-4 py-1 text-center text-[11px] font-medium text-primary-foreground sm:flex">
        <span className="size-1.5 rounded-full bg-brand-yellow" />
        <span className="ml-2">{c.strip}</span>
      </div>
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-[76px] max-w-[1320px] items-center justify-between gap-4 px-4 sm:px-7 xl:px-10">
          <Link aria-label="AINNMK Home" className="flex min-w-0 items-center gap-3" to="/">
            <BrandMark />
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold leading-snug text-foreground sm:text-base">அகில இந்திய நம் நாடு மக்கள் கட்சி</span>
              <span className="mt-0.5 block truncate text-[10px] font-medium text-muted-foreground sm:text-[11px]">Agila India Nam Nadu Makkal Katchi <span className="font-bold text-primary">· AINNMK</span></span>
            </span>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-4 xl:flex">
            <Link className="text-xs font-semibold text-foreground transition-colors hover:text-primary" to="/">{c.home}</Link>
            {navItems.map((item) => <Link className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary" key={item.href} to={item.href}>{language === "ta" ? item.label.ta : item.label.en}</Link>)}
          </nav>
          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <Bilingual text={{ ta: "தமிழ்", en: "English" }} />
            <Button asChild className="h-10 rounded-sm px-5 text-sm font-semibold shadow-none">
              <a href="/membership">{c.join}<ArrowRight aria-hidden="true" className="ml-1 size-4" /></a>
            </Button>
          </div>
          <div className="flex shrink-0 items-center gap-2 xl:hidden">
            <Bilingual text={{ ta: "தமி", en: "EN" }} />
            <Button aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"} className="size-10 p-0" onClick={() => setMenuOpen((open) => !open)} variant="outline"><Menu aria-hidden="true" className="size-5" /></Button>
          </div>
        </div>
        {menuOpen ? <nav aria-label="Mobile navigation" className="grid gap-1 border-t border-border bg-background px-5 py-4 xl:hidden">
          <Link className="px-2 py-2.5 text-sm font-semibold text-primary" onClick={() => setMenuOpen(false)} to="/">{c.home}</Link>
          {navItems.map((item) => <Link className="px-2 py-2.5 text-sm text-foreground transition-colors hover:text-primary" key={item.href} onClick={() => setMenuOpen(false)} to={item.href}>{language === "ta" ? item.label.ta : item.label.en}</Link>)}
          <Button asChild className="mt-2 rounded-sm" onClick={() => setMenuOpen(false)}><Link to="/membership">{c.join}</Link></Button>
        </nav> : null}
      </header>
    </>
  );
}

export function SiteFooter() {
  const { language } = useSiteLanguage();
  const c = content[language];
  return <footer className="bg-foreground text-background">
    <div className="mx-auto max-w-[1280px] px-5 pb-8 pt-14 sm:px-8 lg:px-12">
      <div className="grid gap-10 border-b border-background/15 pb-10 md:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3"><BrandMark light /><div><p className="text-sm font-bold">அகில இந்திய நம் நாடு மக்கள் கட்சி</p><p className="mt-1 text-[11px] text-background/65">Agila India Nam Nadu Makkal Katchi · AINNMK</p></div></div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-background/75">{c.footerText}</p>
          <p className="mt-2 text-xs leading-6 text-background/55">{c.association}</p>
        </div>
        <div><p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-yellow">{language === "ta" ? "வழிசெலுத்தல்" : "Explore"}</p><div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3">{navItems.map((item) => <Link className="text-xs text-background/75 transition-colors hover:text-background" key={item.href} to={item.href}>{language === "ta" ? item.label.ta : item.label.en}</Link>)}</div></div>
        <div><p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-yellow">{c.contactEyebrow}</p><p className="mt-4 flex items-start gap-2 text-xs leading-6 text-background/75"><MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand-yellow" />{c.association}</p><p className="mt-3 flex items-center gap-2 text-xs text-background/75"><Mail aria-hidden="true" className="size-4 text-brand-yellow" />{c.contactEmailUnavailable}</p></div>
      </div>
      <div className="flex flex-col gap-4 pt-6 text-xs text-background/60 sm:flex-row sm:items-center sm:justify-between"><span>{c.copyright}</span><div className="flex gap-5"><Link className="hover:text-background" to="/privacy">{c.privacy}</Link><Link className="hover:text-background" to="/terms">{c.terms}</Link><Link aria-label="Administrator sign in" className="hover:text-background" to="/admin">{c.admin}</Link></div></div>
    </div>
  </footer>;
}

function SectionTitle({ eyebrow, title, light = false, description }: { eyebrow: string; title: string; light?: boolean; description?: string }) {
  return <div className="mb-10 max-w-2xl"><p className={`text-xs font-bold uppercase tracking-[0.14em] ${light ? "text-brand-yellow" : "text-primary"}`}>{eyebrow}</p><h2 className={`mt-3 text-3xl font-bold leading-snug sm:text-4xl ${light ? "text-background" : "text-foreground"}`}>{title}</h2>{description ? <p className={`mt-3 text-sm leading-7 ${light ? "text-background/70" : "text-muted-foreground"}`}>{description}</p> : null}</div>;
}

export function HomePage() {
  const { language } = useSiteLanguage();
  const c = content[language];
  const ValueIcons = c.valueItems.map((item) => item.icon);
  return <>
    <SiteHeader />
    <main>
      <section className="relative isolate min-h-[590px] overflow-hidden border-b border-border/60 sm:min-h-[650px] lg:min-h-[690px]">
        <img alt="சூரிய உதயத்தில் செழித்து வளரும் பசுமையான நெற்பயிர்கள்" className="absolute inset-0 -z-20 size-full object-cover object-center" fetchPriority="high" src={new URL("../../assets/ainnmkk_fields.webp", import.meta.url).href} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/95 via-background/75 to-background/15" />
        <div className="relative mx-auto flex min-h-[590px] max-w-[1280px] items-center px-5 py-16 sm:min-h-[650px] sm:px-8 lg:min-h-[690px] lg:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4"><BrandMark /><div><p className="text-sm font-bold leading-6 text-foreground sm:text-base">அகில இந்திய நம் நாடு மக்கள் கட்சி</p><p className="text-xs font-medium text-foreground/65">Agila India Nam Nadu Makkal Katchi</p></div></div>
            <p className="mt-12 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.13em] text-primary"><span className="size-2 rounded-full bg-brand-yellow ring-2 ring-primary/15" />{c.heroEyebrow}</p>
            <h1 className="mt-5 whitespace-pre-line text-4xl font-extrabold leading-[1.18] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">{c.heroTitle}</h1>
            <p className="mt-4 text-lg font-semibold text-brand-purple sm:text-xl">{c.heroEnglish}</p>
            <p className="mt-5 max-w-[610px] text-sm leading-7 text-foreground/80 sm:text-base sm:leading-8">{c.heroDescription}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild className="h-12 rounded-sm px-5 text-sm font-semibold shadow-sm"><Link to="/about">{c.about}<ArrowRight aria-hidden="true" className="size-4" /></Link></Button>
              <Button asChild className="h-12 rounded-sm border-primary/30 bg-background/80 px-5 text-sm font-semibold" variant="outline"><Link to="/news"><Newspaper aria-hidden="true" className="size-4 text-primary" />{language === "ta" ? "செய்திகளைக் காண்க" : "Explore news"}</Link></Button>
              <Button asChild className="h-12 rounded-sm px-2 text-sm font-semibold text-foreground underline-offset-4 hover:text-primary" variant="link"><Link to="/membership">{language === "ta" ? "உறுப்பினராக இணையுங்கள்" : "Become a member"}<ArrowRight aria-hidden="true" className="size-4" /></Link></Button>
            </div>
          </div>
          <a aria-label="Scroll to learn about the party" className="absolute bottom-8 right-8 hidden size-11 items-center justify-center rounded-full border border-foreground/20 bg-background/70 text-foreground transition-transform hover:translate-y-1 sm:flex" href="#about"><ArrowDown aria-hidden="true" className="size-4" /></a>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:px-12 lg:py-24" id="about">
        <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-brand-green-soft p-8 sm:min-h-[365px]">
          <div className="absolute -left-8 -top-12 size-52 rounded-full border border-primary/10" /><div className="absolute -bottom-16 -right-16 size-64 rounded-full border border-brand-purple/10" />
          <div className="relative flex flex-col items-center text-center"><BrandMark /><p className="mt-5 text-lg font-bold text-foreground">அகில இந்திய நம் நாடு</p><p className="mt-1 text-sm font-semibold text-primary">மக்கள் கட்சி</p><p className="mt-3 max-w-[230px] text-[11px] leading-5 text-muted-foreground">Agila India Nam Nadu Makkal Katchi</p><span className="mt-6 inline-flex items-center gap-2 border-t border-border pt-4 text-xs font-bold text-brand-purple"><Sprout aria-hidden="true" className="size-4" /> AINNMK</span></div>
        </div>
        <div><p className="text-xs font-bold uppercase tracking-[0.13em] text-primary">{c.about}</p><h2 className="mt-3 text-3xl font-bold leading-snug text-foreground sm:text-4xl">{c.aboutEnglish}</h2><p className="mt-6 text-sm leading-7 text-foreground/85 sm:text-base sm:leading-8">{c.aboutOne}</p><p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">{c.aboutTwo}</p><p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">{c.aboutThree}</p><div className="mt-7 flex flex-wrap items-center gap-4"><span className="inline-flex items-center gap-2 border-l-[3px] border-brand-yellow bg-muted px-4 py-3 text-sm font-bold text-foreground"><CalendarDays aria-hidden="true" className="size-4 text-primary" />{c.founding}</span><Button asChild className="rounded-sm" variant="outline"><Link to="/about">{c.explore}<ArrowRight aria-hidden="true" className="size-4" /></Link></Button></div></div>
      </section>

      <section className="border-y border-border/70 bg-muted/55 px-5 py-16 sm:px-8 sm:py-20 lg:px-12"><div className="mx-auto max-w-[1180px]"><SectionTitle eyebrow={c.valuesLabel} title={c.valuesTitle} /><div className="grid gap-0 divide-y divide-border border-y border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">{c.valueItems.map((item, index) => { const Icon = ValueIcons[index] ?? Leaf; return <article className="group px-5 py-7 transition-colors hover:bg-background sm:px-6 lg:py-8" key={item.subtitle}><span className="grid size-11 place-items-center rounded-sm bg-brand-green-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon aria-hidden="true" className="size-5" /></span><h3 className="mt-6 text-lg font-bold text-foreground">{item.title}</h3><p className="mt-1 text-[11px] font-medium text-muted-foreground">{item.subtitle}</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p></article>; })}</div><div className="mt-7 text-right"><Button asChild className="rounded-sm px-0 text-primary" variant="link"><Link to="/ideology">{c.explore}<ArrowRight aria-hidden="true" className="size-4" /></Link></Button></div></div></section>

      <section className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"><div className="flex flex-wrap items-end justify-between gap-4"><SectionTitle eyebrow={c.leadershipEyebrow} title={c.leadershipTitle} /><Button asChild className="mb-10 rounded-sm" variant="outline"><Link to="/leadership">{c.viewAll}<ArrowRight aria-hidden="true" className="size-4" /></Link></Button></div><div className="flex min-h-[185px] flex-col items-center justify-center border border-dashed border-border bg-muted/35 px-6 py-10 text-center"><span className="grid size-11 place-items-center rounded-full bg-brand-green-soft text-primary"><Users aria-hidden="true" className="size-5" /></span><p className="mt-4 text-sm font-semibold text-foreground">{c.noLeaders}</p><p className="mt-2 max-w-lg text-xs leading-6 text-muted-foreground">{language === "ta" ? "சரிபார்க்கப்பட்ட பெயர்கள், பதவிகள் மற்றும் புகைப்படங்கள் மட்டுமே இங்கே வெளியிடப்படும்." : "Only verified names, designations and photographs will be published here."}</p></div></section>

      <section className="bg-brand-green-soft px-5 py-16 sm:px-8 sm:py-20 lg:px-12"><div className="mx-auto max-w-[1180px]"><SectionTitle eyebrow={c.orgEyebrow} title={c.orgTitle} /><div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{c.wings.map((wing, index) => <article className="group flex min-h-[152px] items-start gap-4 bg-background p-5 transition-colors hover:bg-white sm:p-6" key={wing}><span className="grid size-10 shrink-0 place-items-center bg-brand-green-soft text-primary transition-colors group-hover:bg-brand-yellow"><Users aria-hidden="true" className="size-5" /></span><div><h3 className="font-bold text-foreground">{wing}</h3><p className="mt-1 text-[11px] font-medium text-brand-purple">{c.wingsEnglish[index]}</p><p className="mt-3 text-xs leading-6 text-muted-foreground">{c.wingText}</p></div></article>)}</div><div className="mt-6 flex justify-end"><Button asChild className="rounded-sm" variant="outline"><Link to="/organization">{c.viewAll}<ArrowRight aria-hidden="true" className="size-4" /></Link></Button></div></div></section>

      <EmptyEditorialSection eyebrow={c.newsEyebrow} title={c.newsTitle} emptyTitle={c.noNewsTitle} emptyText={c.noNewsText} icon="news" link="/news" label={c.viewAll} />
      <EmptyEditorialSection eyebrow={c.eventsEyebrow} title={c.eventsTitle} emptyTitle={c.noEventsTitle} emptyText={c.noEventsText} icon="events" link="/events" label={c.viewAll} alternate />

      <section className="relative overflow-hidden bg-primary px-5 py-12 text-primary-foreground sm:px-8 sm:py-16 lg:px-12"><div className="absolute -right-16 -top-36 size-[440px] rounded-full border border-primary-foreground/10" /><div className="absolute -right-6 -top-24 size-[340px] rounded-full border border-brand-yellow/20" /><div className="relative mx-auto flex max-w-[1180px] flex-col gap-7 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.13em] text-brand-yellow">AINNMK · 2008</p><h2 className="mt-3 max-w-2xl text-3xl font-bold leading-snug sm:text-4xl">{c.joinTitle}</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-primary-foreground/80">{c.joinText}</p></div><Button asChild className="h-12 shrink-0 rounded-sm bg-brand-yellow px-5 text-sm font-bold text-foreground hover:bg-brand-yellow/80"><Link to="/membership">{c.join}<ArrowRight aria-hidden="true" className="size-4" /></Link></Button></div></section>

      <ContactSection />
    </main>
    <SiteFooter />
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 p-2 shadow-md backdrop-blur sm:hidden"><Button asChild className="h-11 w-full rounded-sm"><Link to="/membership">{c.join}<ArrowRight aria-hidden="true" className="size-4" /></Link></Button></div>
  </>;
}

function EmptyEditorialSection({ eyebrow, title, emptyTitle, emptyText, icon, link, label, alternate = false }: { eyebrow: string; title: string; emptyTitle: string; emptyText: string; icon: "news" | "events"; link: "/news" | "/events"; label: string; alternate?: boolean }) {
  const { language } = useSiteLanguage();
  const Icon = icon === "news" ? Newspaper : CalendarDays;
  return <section className={`px-5 py-16 sm:px-8 sm:py-20 lg:px-12 ${alternate ? "bg-muted/45" : ""}`}><div className="mx-auto max-w-[1180px]"><div className="flex flex-wrap items-end justify-between gap-4"><SectionTitle eyebrow={eyebrow} title={title} /><Button asChild className="mb-10 rounded-sm" variant="outline"><Link to={link}>{label}<ArrowRight aria-hidden="true" className="size-4" /></Link></Button></div><div className="grid gap-7 border-y border-border py-7 sm:grid-cols-[0.65fr_1.35fr] sm:items-center"><div className="relative flex min-h-[160px] items-center justify-center overflow-hidden bg-brand-green-soft"><div className="absolute left-4 top-4 size-14 border-l border-t border-brand-purple/20" /><div className="absolute bottom-4 right-4 size-14 border-b border-r border-primary/20" /><span className="grid size-16 place-items-center bg-background text-primary shadow-sm"><Icon aria-hidden="true" className="size-7" /></span></div><div className="max-w-xl"><p className="text-lg font-bold text-foreground">{emptyTitle}</p><p className="mt-2 text-sm leading-7 text-muted-foreground">{emptyText}</p><div className="mt-4 flex items-center gap-2 text-xs font-semibold text-brand-purple"><ShieldCheck aria-hidden="true" className="size-4" />{language === "ta" ? "சரிபார்க்கப்பட்ட அதிகாரப்பூர்வ தகவல் மட்டும்" : "Verified official information only"}</div></div></div></div></section>;
}

function FormField({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return <div className="grid gap-2"><Label htmlFor={id} className="text-xs font-semibold text-foreground">{label}</Label>{children}</div>;
}

function ContactSection() {
  const { language } = useSiteLanguage();
  const c = content[language];
  return <section className="mx-auto grid max-w-[1180px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12" id="contact"><div><p className="text-xs font-bold uppercase tracking-[0.13em] text-primary">{c.contactEyebrow}</p><h2 className="mt-3 text-3xl font-bold leading-snug text-foreground sm:text-4xl">{c.contactTitle}</h2><p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">{c.contactText}</p><div className="mt-8 grid gap-5 border-t border-border pt-6"><p className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"><span className="grid size-9 shrink-0 place-items-center bg-brand-green-soft text-primary"><MapPin aria-hidden="true" className="size-4" /></span>{c.association}</p><p className="flex items-center gap-3 text-sm text-muted-foreground"><span className="grid size-9 shrink-0 place-items-center bg-brand-green-soft text-primary"><Mail aria-hidden="true" className="size-4" /></span>{c.contactEmailUnavailable}</p></div></div><ContactForm /></section>;
}

function ContactForm() {
  const { language } = useSiteLanguage();
  const c = content[language];
  const [pending, setPending] = useState(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const input = { full_name: String(fields.get("full_name") ?? ""), email: String(fields.get("email") ?? ""), subject: String(fields.get("subject") ?? ""), message: String(fields.get("message") ?? "") };
    const result = contactSchema.safeParse(input);
    if (!result.success) { toast.error(language === "ta" ? "விவரங்களைச் சரிபார்த்து மீண்டும் முயலுங்கள்." : "Please check your details and try again."); return; }
    setPending(true);
    try { await submitContactMessage({ data: result.data }); toast.success(c.messageSuccess); event.currentTarget.reset(); }
    catch { toast.error(c.contactFailure); }
    finally { setPending(false); }
  }
  return <form className="grid gap-4 border-t border-border pt-5 sm:grid-cols-2" onSubmit={submit}>
    <FormField id="contact-name" label={c.name}><Input autoComplete="name" className="h-11 rounded-sm bg-background" id="contact-name" maxLength={120} name="full_name" required /></FormField>
    <FormField id="contact-email" label={c.email}><Input autoComplete="email" className="h-11 rounded-sm bg-background" id="contact-email" maxLength={254} name="email" required type="email" /></FormField>
    <div className="sm:col-span-2"><FormField id="contact-subject" label={c.contactSubject}><Input className="h-11 rounded-sm bg-background" id="contact-subject" maxLength={160} name="subject" required /></FormField></div>
    <div className="sm:col-span-2"><FormField id="contact-message" label={c.contactMessage}><Textarea className="min-h-32 resize-y rounded-sm bg-background" id="contact-message" maxLength={5000} name="message" required /></FormField></div>
    <div className="sm:col-span-2"><Button className="h-11 rounded-sm" disabled={pending} type="submit">{pending ? c.sending : c.sendMessage}<Send aria-hidden="true" className="size-4" /></Button></div>
  </form>;
}

const otherPages = {
  about: { eyebrowTa: "எங்கள் பயணம்", eyebrowEn: "Our story", titleTa: "எங்கள் கட்சியைப் பற்றி", titleEn: "About our party", introTa: "ஒற்றுமை, சமூக நல்லிணக்கம் மற்றும் மக்கள் பங்கேற்பு ஆகியவற்றை முன்னிறுத்திச் செயல்படும் ஓர் அரசியல் இயக்கம்.", introEn: "A political movement centered on unity, social harmony and public participation.", paragraphs: [
    { ta: "அகில இந்திய நம் நாடு மக்கள் கட்சி 2008 ஆம் ஆண்டு தொடங்கப்பட்டது.", en: "Agila India Nam Nadu Makkal Katchi was founded in 2008." },
    { ta: "சாதி, மதம், மொழி, இனம் போன்ற வேறுபாடுகள் இல்லாமல் அனைவரும் ஒரே சமுதாயமாகவும், ஒரே குடும்பமாகவும் வாழ வேண்டும் என்ற கொள்கையின் அடிப்படையில் கட்சி செயல்பட்டு வருகிறது.", en: "The party works on the principle that all people should live together as one society and one family, without divisions of caste, faith, language or community." },
    { ta: "இந்தியா முழுவதும் மக்களின் ஒற்றுமை, சமூக நல்லிணக்கம் மற்றும் அனைவரின் பங்கேற்பை முன்னிறுத்தி செயல்படுவதே கட்சியின் நோக்கமாகும்.", en: "Our purpose is to advance unity, social harmony and broad public participation throughout India." },
  ] },
  ideology: { eyebrowTa: "எங்கள் கொள்கை", eyebrowEn: "Our principles", titleTa: "ஒற்றுமை. சமத்துவம். மக்கள் நலன்.", titleEn: "Unity. Equality. People’s welfare.", introTa: "அனைவரையும் உள்ளடக்கும், ஒன்றிணைக்கும் சமுதாயமே எங்கள் அடிப்படை நோக்கம்.", introEn: "An inclusive society that brings people together is at the heart of our principles.", paragraphs: [] },
};

export function AboutPage({ page }: { page: "about" | "ideology" }) {
  const { language } = useSiteLanguage();
  const c = content[language];
  const data = otherPages[page];
  return <><SiteHeader /><main><section className="relative overflow-hidden bg-brand-green-soft px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"><div className="absolute -right-16 -top-28 size-80 rounded-full border border-primary/10" /><div className="absolute -right-8 top-8 size-56 rounded-full border border-brand-purple/10" /><div className="relative mx-auto max-w-[1180px]"><p className="text-xs font-bold uppercase tracking-[0.13em] text-primary">{language === "ta" ? data.eyebrowTa : data.eyebrowEn}</p><h1 className="mt-3 max-w-3xl text-4xl font-bold leading-snug text-foreground sm:text-5xl">{language === "ta" ? data.titleTa : data.titleEn}</h1><p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{language === "ta" ? data.introTa : data.introEn}</p><div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-brand-purple"><CalendarDays aria-hidden="true" className="size-4" />{c.founding}</div></div></section>
    <section className="mx-auto grid max-w-[1100px] gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-12"><div className="grid min-h-[250px] place-items-center bg-muted/55"><BrandMark /></div><div className="space-y-5">{(page === "about" ? data.paragraphs : data.paragraphs).length ? data.paragraphs.map((paragraph) => <p className="text-sm leading-8 text-muted-foreground sm:text-base" key={paragraph.en}>{language === "ta" ? paragraph.ta : paragraph.en}</p>) : c.valueItems.map((item) => <div className="border-b border-border pb-5" key={item.subtitle}><h2 className="text-xl font-bold text-foreground">{item.title}</h2><p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p></div>)}<Button asChild className="mt-4 rounded-sm"><Link to="/membership">{c.join}<ArrowRight aria-hidden="true" className="size-4" /></Link></Button></div></section></main><SiteFooter /></>;
}

export function DirectoryPage({ kind }: { kind: "leadership" | "organization" | "news" | "events" | "gallery" }) {
  const { language } = useSiteLanguage();
  const c = content[language];
  const isLeaders = kind === "leadership";
  const isOrg = kind === "organization";
  const title = kind === "leadership" ? c.leadershipTitle : kind === "organization" ? c.orgTitle : kind === "news" ? c.newsTitle : kind === "events" ? c.eventsTitle : language === "ta" ? "கட்சிப் படத்தொகுப்பு" : "Party gallery";
  const emptyTitle = kind === "leadership" ? c.noLeaders : kind === "news" ? c.noNewsTitle : kind === "events" ? c.noEventsTitle : language === "ta" ? "அதிகாரப்பூர்வப் படங்கள் விரைவில்" : "Official photos coming soon";
  const emptyText = kind === "leadership" ? c.noLeaders : kind === "news" ? c.noNewsText : kind === "events" ? c.noEventsText : language === "ta" ? "கட்சியால் வழங்கப்பட்ட சரிபார்க்கப்பட்டப் படங்கள் மட்டுமே இங்கே வெளியிடப்படும்." : "Only verified photos supplied by the party will be published here.";
  return <><SiteHeader /><main><section className="bg-brand-green-soft px-5 py-14 sm:px-8 sm:py-18 lg:px-12"><div className="mx-auto max-w-[1180px]"><p className="text-xs font-bold uppercase tracking-[0.13em] text-primary">{isLeaders ? c.leadershipEyebrow : isOrg ? c.orgEyebrow : kind === "news" ? c.newsEyebrow : kind === "events" ? c.eventsEyebrow : language === "ta" ? "படத்தொகுப்பு" : "Gallery"}</p><h1 className="mt-3 max-w-3xl text-4xl font-bold leading-snug text-foreground sm:text-5xl">{title}</h1></div></section>
      {isOrg ? <section className="mx-auto grid max-w-[1180px] gap-px bg-border px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-12">{c.wings.map((wing, index) => <article className="min-h-[165px] bg-background p-6" key={wing}><span className="grid size-10 place-items-center bg-brand-green-soft text-primary"><Users aria-hidden="true" className="size-5" /></span><h2 className="mt-5 font-bold text-foreground">{wing}</h2><p className="mt-1 text-xs font-medium text-brand-purple">{c.wingsEnglish[index]}</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{c.wingText}</p></article>)}</section> : <section className="mx-auto max-w-[1180px] px-5 py-14 sm:px-8 sm:py-18 lg:px-12"><div className="flex min-h-[260px] flex-col items-center justify-center border border-dashed border-border bg-muted/35 px-6 text-center"><span className="grid size-12 place-items-center bg-background text-primary"><ShieldCheck aria-hidden="true" className="size-5" /></span><h2 className="mt-4 text-lg font-bold text-foreground">{emptyTitle}</h2><p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">{emptyText}</p></div></section>}
    </main><SiteFooter /></>;
}

export function MembershipPage() {
  const { language } = useSiteLanguage();
  const c = content[language];
  return <><SiteHeader /><main><section className="bg-brand-green-soft px-5 py-14 sm:px-8 sm:py-18 lg:px-12"><div className="mx-auto max-w-[1180px]"><p className="text-xs font-bold uppercase tracking-[0.13em] text-primary">AINNMK · 2008</p><h1 className="mt-3 max-w-3xl text-4xl font-bold leading-snug text-foreground sm:text-5xl">{c.join}</h1><p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{c.joinText}</p></div></section><section className="mx-auto grid max-w-[1050px] gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:px-12"><div><p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">{language === "ta" ? "விண்ணப்ப விவரங்கள்" : "Application details"}</p><h2 className="mt-3 text-2xl font-bold leading-snug text-foreground">{c.joinTitle}</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">{c.formHelper}</p><div className="mt-7 flex items-start gap-3 border-l-[3px] border-brand-yellow bg-muted/55 p-4"><ShieldCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" /><p className="text-xs leading-6 text-muted-foreground">{language === "ta" ? "விண்ணப்பங்கள் தனியுரிமையுடன் பெறப்பட்டு, மதிப்பாய்விற்காகக் காத்திருக்கும். எந்த அதிகாரப்பூர்வ பதவியும் தானாக வழங்கப்படாது." : "Applications are received privately and await review. No official position is assigned automatically."}</p></div></div><MembershipForm /></section></main><SiteFooter /></>;
}

function MembershipForm() {
  const { language } = useSiteLanguage();
  const c = content[language];
  const [pending, setPending] = useState(false);
  const [consent, setConsent] = useState(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    const input = { full_name: String(fields.get("full_name") ?? ""), mobile: String(fields.get("mobile") ?? "").replace(/\D/g, ""), email: String(fields.get("email") ?? ""), state: String(fields.get("state") ?? ""), district: String(fields.get("district") ?? ""), constituency: String(fields.get("constituency") ?? ""), address: String(fields.get("address") ?? ""), organization_wing: String(fields.get("organization_wing") ?? ""), age: String(fields.get("age") ?? ""), consent };
    const result = membershipSchema.safeParse(input);
    if (!result.success) {
      const issue = result.error.issues[0];
      toast.error(issue?.message || (language === "ta" ? "விவரங்களைச் சரிபார்த்து மீண்டும் முயலுங்கள்." : "Please check your details and try again."));
      const firstInvalid = issue?.path[0];
      if (typeof firstInvalid === "string") form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    setPending(true);
    try {
      await submitMembership({ data: toMembershipInsert(result.data) });
      toast.success(c.success);
      form.reset();
      setConsent(false);
    } catch {
      toast.error(c.failure);
    } finally {
      setPending(false);
    }
  }
  const wings = c.wingsList;
  return <form className="grid gap-5 border-t border-border pt-5 sm:grid-cols-2" noValidate onSubmit={submit}>
    <FormField id="member-name" label={`${c.name} *`}><Input autoComplete="name" className="h-11 rounded-sm" id="member-name" maxLength={120} name="full_name" required /></FormField>
    <FormField id="member-mobile" label={`${c.mobile} *`}><Input autoComplete="tel-national" className="h-11 rounded-sm" id="member-mobile" inputMode="numeric" maxLength={14} name="mobile" pattern="[6-9][0-9]{9}" placeholder="9876543210" required type="tel" /></FormField>
    <FormField id="member-email" label={`${c.email} (${c.optional})`}><Input autoComplete="email" className="h-11 rounded-sm" id="member-email" maxLength={254} name="email" type="email" /></FormField>
    <FormField id="member-age" label={`${c.age} (${c.optional})`}><Input className="h-11 rounded-sm" id="member-age" max="120" min="18" name="age" type="number" /></FormField>
    <FormField id="member-state" label={`${c.state} *`}><Input autoComplete="address-level1" className="h-11 rounded-sm" id="member-state" maxLength={100} name="state" required /></FormField>
    <FormField id="member-district" label={`${c.district} *`}><Input autoComplete="address-level2" className="h-11 rounded-sm" id="member-district" maxLength={100} name="district" required /></FormField>
    <FormField id="member-constituency" label={`${c.constituency} (${c.optional})`}><Input className="h-11 rounded-sm" id="member-constituency" maxLength={120} name="constituency" /></FormField>
    <FormField id="member-wing" label={`${c.wing} *`}><select aria-label={c.wing} className="h-11 w-full rounded-sm border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" defaultValue="" id="member-wing" name="organization_wing" required><option disabled value="">{c.chooseWing}</option>{wings.map((wing) => <option key={wing} value={wing}>{wing}</option>)}</select></FormField>
    <div className="sm:col-span-2"><FormField id="member-address" label={`${c.address} *`}><Textarea autoComplete="street-address" className="min-h-24 resize-y rounded-sm" id="member-address" maxLength={1000} name="address" required /></FormField></div>
    <div className="flex items-start gap-3 sm:col-span-2"><Checkbox checked={consent} id="member-consent" onCheckedChange={(checked) => setConsent(checked === true)} /><Label className="cursor-pointer text-xs leading-5 text-muted-foreground" htmlFor="member-consent">{c.consent} *</Label></div>
    <div className="sm:col-span-2"><Button className="h-12 w-full rounded-sm sm:w-auto" disabled={pending} type="submit">{pending ? c.sending : c.submit}<ArrowRight aria-hidden="true" className="size-4" /></Button></div>
  </form>;
}

export function ContactPage() {
  return <><SiteHeader /><main><ContactSection /></main><SiteFooter /></>;
}

export function PolicyPage({ type }: { type: "privacy" | "terms" }) {
  const { language } = useSiteLanguage();
  const title = type === "privacy" ? language === "ta" ? "தனியுரிமைக் கொள்கை" : "Privacy policy" : language === "ta" ? "விதிமுறைகள்" : "Terms and conditions";
  return <><SiteHeader /><main><section className="bg-brand-green-soft px-5 py-14 sm:px-8 sm:py-18 lg:px-12"><div className="mx-auto max-w-[1000px]"><p className="text-xs font-bold uppercase tracking-[0.13em] text-primary">AINNMK</p><h1 className="mt-3 text-4xl font-bold text-foreground">{title}</h1></div></section><article className="mx-auto max-w-[1000px] space-y-5 px-5 py-12 sm:px-8 sm:py-16 lg:px-12"><p className="text-sm leading-8 text-muted-foreground">{type === "privacy" ? language === "ta" ? "உறுப்பினர் மற்றும் தொடர்பு விண்ணப்பங்களில் நீங்கள் வழங்கும் தகவல்கள் அந்த நோக்கத்திற்காக மட்டுமே பெறப்பட்டு, கட்சியின் பரிசீலனைக்காகப் பயன்படுத்தப்படும்." : "Information provided through membership and contact forms is collected for that purpose and used to review the request." : language === "ta" ? "இந்த இணையதளத்தில் உள்ள கட்சித் தகவல்கள் அனைத்தும் அதிகாரப்பூர்வ தகவலாகப் பரிசோதிக்கப்பட்ட பிறகே வெளியிடப்பட வேண்டும். விண்ணப்பங்களைச் சமர்ப்பிப்பது கட்சி உறுப்பினர் நிலை அல்லது பதவியை உறுதிப்படுத்தாது." : "Party information on this website should only be published after official verification. Submitting an application does not itself confirm party membership or a position."}</p><p className="text-sm leading-8 text-muted-foreground">{type === "privacy" ? language === "ta" ? "மின்னஞ்சல் முகவரியும் தொகுதியும் விருப்பத்தேர்வுகள். நீங்கள் அனுப்பும் விண்ணப்பத்தைப் பரிசீலிப்பதற்காக மட்டுமே உறுப்பினர் விவரங்கள் பயன்படும்." : "Email and constituency are optional. Membership details are used only to review your application." : language === "ta" ? "தொடர்பு விவரங்கள், தேதிகள் மற்றும் நிகழ்வுகள் உறுதிசெய்யப்பட்ட பிறகே தளத்தில் சேர்க்கப்பட வேண்டும்." : "Contact details, dates and events should be added to the site only after confirmation."}</p><p className="text-sm leading-8 text-muted-foreground">{language === "ta" ? "கொள்கையில் மாற்றம் ஏற்பட்டால், புதுப்பிக்கப்பட்ட விவரங்கள் இந்தப் பக்கத்தில் வெளியிடப்படும்." : "If this policy changes, the updated details will be published on this page."}</p></article></main><SiteFooter /></>;
}

export const siteMeta = {
  index: { title: "அகில இந்திய நம் நாடு மக்கள் கட்சி | AINNMK", description: "அகில இந்திய நம் நாடு மக்கள் கட்சியின் அதிகாரப்பூர்வ இணையதளம். ஒற்றுமை, சமத்துவம், மக்கள் நலன்." },
  about: { title: "எங்களைப் பற்றி | AINNMK", description: "2008 ஆம் ஆண்டு தொடங்கப்பட்ட அகில இந்திய நம் நாடு மக்கள் கட்சியின் நோக்கமும் வரலாறும்." },
  ideology: { title: "எங்கள் கொள்கைகள் | AINNMK", description: "அகில இந்திய நம் நாடு மக்கள் கட்சியின் சமூக ஒற்றுமை, சமத்துவம் மற்றும் மக்கள் நலக் கொள்கைகள்." },
  leadership: { title: "கட்சித் தலைமை | AINNMK", description: "அகில இந்திய நம் நாடு மக்கள் கட்சியின் அதிகாரப்பூர்வ தலைமை விவரங்கள்." },
  organization: { title: "கட்சியின் அமைப்பு | AINNMK", description: "மக்கள், மாணவர்கள், இளைஞர்கள், மகளிர் மற்றும் நிர்வாக அணிகள் அடங்கிய AINNMK அமைப்பு." },
  news: { title: "செய்திகள் மற்றும் ஊடகம் | AINNMK", description: "அகில இந்திய நம் நாடு மக்கள் கட்சியின் அதிகாரப்பூர்வ செய்திகள் மற்றும் பத்திரிகை வெளியீடுகள்." },
  events: { title: "கட்சியின் நிகழ்வுகள் | AINNMK", description: "அகில இந்திய நம் நாடு மக்கள் கட்சியின் அதிகாரப்பூர்வ கூட்டங்கள் மற்றும் நிகழ்வுகள்." },
  gallery: { title: "படத்தொகுப்பு | AINNMK", description: "அகில இந்திய நம் நாடு மக்கள் கட்சியின் அதிகாரப்பூர்வ புகைப்படப் படத்தொகுப்பு." },
  membership: { title: "உறுப்பினராக இணையுங்கள் | AINNMK", description: "அகில இந்திய நம் நாடு மக்கள் கட்சியில் உறுப்பினர் விண்ணப்பத்தைப் பாதுகாப்பாகச் சமர்ப்பிக்கவும்." },
  contact: { title: "தொடர்பு கொள்ளுங்கள் | AINNMK", description: "அகில இந்திய நம் நாடு மக்கள் கட்சியைத் தொடர்புகொள்ளுங்கள்." },
  privacy: { title: "தனியுரிமைக் கொள்கை | AINNMK", description: "AINNMK உறுப்பினர் மற்றும் தொடர்புப் படிவத் தகவல்களுக்கான தனியுரிமை விளக்கம்." },
  terms: { title: "விதிமுறைகள் | AINNMK", description: "அகில இந்திய நம் நாடு மக்கள் கட்சியின் அதிகாரப்பூர்வ இணையதளப் பயன்பாட்டு விதிமுறைகள்." },
};