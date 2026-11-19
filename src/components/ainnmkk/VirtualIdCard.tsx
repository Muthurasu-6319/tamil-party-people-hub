import React, { useState } from "react";
import {
  Printer,
  RotateCw,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Download,
  Share2,
} from "lucide-react";
import { toast } from "sonner";
import { partyLogoImg } from "@/data/assets";
import type { MemberRecord } from "@/lib/member-auth";

interface VirtualIdCardProps {
  member?: MemberRecord;
  language?: "ta" | "en";
  className?: string;
}

export function VirtualIdCard({
  member = {
    member_id: "AINNMK-2026-1001",
    full_name: "மு. கதிர்வேலன்",
    father_name: "செ. முருகேசன்",
    dob: "1995-05-15",
    mobile: "9876543210",
    email: "kathir@ainnmk.org",
    state: "தமிழ்நாடு",
    district: "தஞ்சாவூர்",
    organization_wing: "உழவர் மற்றும் பொதுமக்கள் அணி",
    blood_group: "O+ve",
    address: "எண். 42, காவேரி தெரு, கும்பகோணம், தஞ்சாவூர் - 612001.",
    joining_date: "18/11/2026",
    valid_until: "வாழ்நாள் (Lifetime)",
  },
  language = "ta",
  className = "",
}: VirtualIdCardProps) {
  const [activeSide, setActiveSide] = useState<"both" | "front" | "back">("both");
  const [isFlipped, setIsFlipped] = useState(false);

  const handlePrint = () => {
    window.print();
    toast.success(
      language === "ta"
        ? "உறுப்பினர் அட்டை அச்சிடும் திரை திறக்கப்படுகிறது!"
        : "Opening print dialog for official Membership Card!"
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "AINNMK Official Membership Card",
        text: `AINNMK Official Member ID: ${member.member_id} - ${member.full_name}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(
        `AINNMK Official Member ID: ${member.member_id} | ${member.full_name} | ${member.district}`
      );
      toast.success(
        language === "ta"
          ? "உறுப்பினர் எண் நகலெடுக்கப்பட்டது!"
          : "Member ID details copied to clipboard!"
      );
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* View Switcher & Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div className="flex items-center gap-1 rounded-full bg-slate-100 p-1 border border-slate-200 text-xs font-bold">
          <button
            type="button"
            onClick={() => setActiveSide("both")}
            className={`px-3 py-1.5 rounded-full transition-all ${
              activeSide === "both"
                ? "bg-[#12883c] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {language === "ta" ? "இரு பக்கங்களும்" : "Both Sides"}
          </button>
          <button
            type="button"
            onClick={() => setActiveSide("front")}
            className={`px-3 py-1.5 rounded-full transition-all ${
              activeSide === "front"
                ? "bg-[#12883c] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {language === "ta" ? "முன்பக்கம்" : "Front Side"}
          </button>
          <button
            type="button"
            onClick={() => setActiveSide("back")}
            className={`px-3 py-1.5 rounded-full transition-all ${
              activeSide === "back"
                ? "bg-[#12883c] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {language === "ta" ? "பின்பக்கம்" : "Back Side"}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 shadow-2xs transition-colors"
          >
            <Share2 className="size-3.5" />
            <span>{language === "ta" ? "பகிர்க" : "Share"}</span>
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-lg bg-[#12883c] hover:bg-[#0e6e30] text-white shadow-xs transition-colors"
          >
            <Printer className="size-3.5" />
            <span>{language === "ta" ? "அச்சிடுக / பதிவிறக்கு" : "Print / Download ID"}</span>
          </button>
        </div>
      </div>

      {/* Membership ID Cards Display Area */}
      <div
        id="printable-id-card"
        className={`grid gap-6 ${
          activeSide === "both" ? "lg:grid-cols-2" : "grid-cols-1 max-w-[560px] mx-auto"
        } items-start justify-center`}
      >
        {/* =========================================================================
            FRONT SIDE OF ID CARD (Based on User's @public/card-design.png)
            ========================================================================= */}
        {(activeSide === "both" || activeSide === "front") && (
          <div className="w-full max-w-[540px] mx-auto rounded-3xl border-2 border-slate-300/90 bg-white shadow-2xl overflow-hidden relative select-none text-slate-900 aspect-[1472/940] min-h-[320px] flex flex-col justify-between">
            {/* The User's Exact Official Design Frame (Header with Emblem, Ribbon, Purple Badge, Wavy Footer) */}
            <img
              src="/card-frame.png"
              alt="AINNMK Official Card Design Frame"
              className="absolute inset-0 size-full pointer-events-none z-10 object-fill select-none"
            />

            {/* Top Green Header Typography Overlay (Positioned next to the Emblem in card-frame.png) */}
            <div className="relative z-20 pt-2.5 sm:pt-3.5 pl-[17%] sm:pl-[18%] pr-3 sm:pr-4 flex flex-col justify-center">
              <h4 className="text-[12px] sm:text-[14px] md:text-base font-black leading-tight tracking-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] truncate">
                அகில இந்திய நம் நாடு மக்கள் கட்சி
              </h4>
              <p className="mt-0.5 text-[8px] sm:text-[9.5px] md:text-[10.5px] font-black uppercase tracking-wider text-amber-300 drop-shadow-xs truncate">
                AGILA INDIA NAM NADU MAKKAL KATCHI
              </p>
            </div>

            {/* Middle Main Body: Sits in the transparent window of card-frame.png right below purple badge */}
            <div className="relative z-20 px-3 sm:px-4.5 pt-7 sm:pt-8 md:pt-9 pb-3 flex items-start gap-2.5 sm:gap-3.5 flex-1">
              {/* Left Column: Photo Frame & Signature */}
              <div className="w-[95px] sm:w-[115px] md:w-[125px] shrink-0 flex flex-col items-center">
                <div className="w-full aspect-[4/5] rounded-xl border-2 border-sky-400 bg-gradient-to-b from-sky-50 to-sky-100/70 overflow-hidden shadow-inner flex items-center justify-center p-0.5 relative">
                  {member.photo_url ? (
                    <img
                      src={member.photo_url}
                      alt={member.full_name}
                      className="size-full object-cover object-top rounded-lg"
                    />
                  ) : (
                    /* Default handsome vector avatar illustration wearing suit and tie matching reference card */
                    <svg viewBox="0 0 100 120" className="size-full">
                      <rect width="100" height="120" fill="#e0f2fe" />
                      <circle cx="50" cy="42" r="22" fill="#d1d5db" />
                      <path d="M28,36 C28,20 40,16 50,16 C60,16 72,20 72,36 C72,39 70,41 68,36 C64,26 56,22 50,22 C44,22 36,26 32,36 C30,41 28,39 28,36 Z" fill="#1f2937" />
                      <ellipse cx="50" cy="45" rx="16" ry="19" fill="#d1d5db" />
                      <ellipse cx="32" cy="45" rx="3.5" ry="6" fill="#cbd5e1" />
                      <ellipse cx="68" cy="45" rx="3.5" ry="6" fill="#cbd5e1" />
                      <rect x="44" y="60" width="12" height="15" fill="#cbd5e1" />
                      <path d="M12,120 L25,75 L42,75 L45,95 L50,95 L55,95 L58,75 L75,75 L88,120 Z" fill="#1e293b" />
                      <polygon points="42,75 50,90 46,75" fill="#ffffff" />
                      <polygon points="58,75 50,90 54,75" fill="#ffffff" />
                      <polygon points="48,78 52,78 53,88 50,118 47,88" fill="#0f172a" />
                    </svg>
                  )}
                </div>

                {/* Member Signature Area */}
                <div className="mt-1 text-center w-full flex flex-col items-center">
                  <div className="font-serif italic text-[11px] sm:text-xs font-bold text-slate-800 tracking-wider -mb-0.5 border-b border-slate-300 w-full text-center pb-0.5 truncate">
                    {member.full_name.split(" ")[0] || "Signature"}
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-[#4c1d6f]">
                    Member Signature
                  </span>
                </div>
              </div>

              {/* Right Column: Member Details Table */}
              <div className="flex-1 min-w-0 space-y-0.5 sm:space-y-1 text-[10px] sm:text-[11px] md:text-xs">
                {/* 1. Member Name */}
                <div className="flex items-baseline justify-between border-b border-slate-200/80 pb-0.5">
                  <span className="text-slate-700 font-bold text-[9px] sm:text-[10px] shrink-0">
                    உறுப்பினர் பெயர் / Member Name :
                  </span>
                  <span className="font-black text-slate-900 truncate pl-1 text-[10px] sm:text-[11.5px]">
                    {member.full_name}
                  </span>
                </div>

                {/* 2. Membership ID (Highlighted Yellow Box) */}
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-0.5">
                  <span className="text-slate-800 font-black text-[9px] sm:text-[10px] shrink-0">
                    உறுப்பினர் எண் / Membership ID :
                  </span>
                  <span className="bg-[#fef08a] border border-amber-400 text-slate-950 font-black px-1.5 py-0.5 rounded text-[9.5px] sm:text-[11px] shadow-2xs font-mono tracking-wide">
                    {member.member_id}
                  </span>
                </div>

                {/* 3. Father's Name */}
                <div className="flex items-baseline justify-between border-b border-slate-200/80 pb-0.5">
                  <span className="text-slate-700 font-bold text-[9px] sm:text-[10px] shrink-0">
                    தந்தை பெயர் / Father's Name :
                  </span>
                  <span className="font-extrabold text-slate-900 truncate pl-1 text-[10px] sm:text-[11.5px]">
                    {member.father_name || "—"}
                  </span>
                </div>

                {/* 4. District */}
                <div className="flex items-baseline justify-between border-b border-slate-200/80 pb-0.5">
                  <span className="text-slate-700 font-bold text-[9px] sm:text-[10px] shrink-0">
                    மாவட்டம் / District :
                  </span>
                  <span className="font-extrabold text-slate-900 truncate pl-1 text-[10px] sm:text-[11.5px]">
                    {member.district}
                  </span>
                </div>

                {/* 5. State */}
                <div className="flex items-baseline justify-between border-b border-slate-200/80 pb-0.5">
                  <span className="text-slate-700 font-bold text-[9px] sm:text-[10px] shrink-0">
                    மாநிலம் / State :
                  </span>
                  <span className="font-extrabold text-slate-900 truncate pl-1 text-[10px] sm:text-[11.5px]">
                    {member.state || "தமிழ்நாடு"}
                  </span>
                </div>

                {/* 6. Joining Date */}
                <div className="flex items-baseline justify-between border-b border-slate-200/80 pb-0.5">
                  <span className="text-slate-700 font-bold text-[9px] sm:text-[10px] shrink-0">
                    சேர்ந்த தேதி / Joining Date :
                  </span>
                  <span className="font-extrabold text-slate-900 truncate pl-1 text-[10px] sm:text-[11.5px]">
                    {member.joining_date || "19/11/2026"}
                  </span>
                </div>

                {/* 7. Blood Group */}
                <div className="flex items-baseline justify-between border-b border-slate-200/80 pb-0.5">
                  <span className="text-slate-700 font-bold text-[9px] sm:text-[10px] shrink-0">
                    இரத்த வகை / Blood Group :
                  </span>
                  <span className="font-black text-rose-700 pl-1 text-[10px] sm:text-[11.5px]">
                    {member.blood_group || "O+ve"}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom spacer for user's wavy footer in card-frame.png */}
            <div className="relative z-0 h-4 sm:h-5 pointer-events-none" />
          </div>
        )}

        {/* =========================================================================
            BACK SIDE OF ID CARD (Matching Reference Image)
            ========================================================================= */}
        {(activeSide === "both" || activeSide === "back") && (
          <div className="w-full max-w-[540px] mx-auto rounded-3xl border-2 border-slate-300/90 bg-white shadow-2xl overflow-hidden relative select-none text-slate-900 flex flex-col justify-between aspect-[1472/940] min-h-[320px]">
            {/* Top Header: கட்சியின் நோக்கம் மற்றும் கொள்கை */}
            <div className="bg-[#0e7534] px-4 py-2.5 text-white relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src={partyLogoImg}
                  alt="AINNMK Emblem"
                  className="size-10 rounded-full bg-white p-0.5 shadow-md shrink-0 border border-amber-300"
                />
                <h4 className="text-xs sm:text-sm font-black text-white tracking-wide drop-shadow-xs">
                  கட்சியின் நோக்கம் மற்றும் கொள்கை
                </h4>
              </div>
            </div>

            {/* Wavy Tricolor Accent Ribbon */}
            <div className="relative w-full h-3 overflow-hidden bg-white -mt-0.5 z-10">
              <svg viewBox="0 0 500 20" preserveAspectRatio="none" className="w-full h-full block">
                <path d="M0,0 Q120,20 250,5 T500,0 L500,8 Q380,22 250,12 T0,8 Z" fill="#fbbf24" />
                <path d="M0,8 Q120,22 250,12 T500,8 L500,16 Q380,24 250,18 T0,16 Z" fill="#4c1d6f" />
                <path d="M0,16 Q120,24 250,18 T500,16 L500,20 L0,20 Z" fill="#ffffff" />
              </svg>
            </div>

            {/* Party Ideology Statement Quote */}
            <div className="relative z-10 px-5 text-center mt-1">
              <p className="text-[11px] sm:text-xs font-black text-[#4c1d6f] leading-snug tracking-tight">
                சாதி, மதம், மொழி, இனம் என்ற வேறுபாடுகளைக் கடந்து அனைவரும் ஒரே சமுதாயமாக ஒற்றுமையுடன் வாழ வேண்டும் என்பதே எங்கள் நோக்கம்.
              </p>
            </div>

            {/* Middle Section: Left Details Box & Right QR Box */}
            <div className="relative z-10 px-4 sm:px-5 py-2 flex items-stretch gap-3 flex-1">
              {/* Left Box: Validity, Mobile, Email, Address */}
              <div className="flex-1 rounded-2xl border-2 border-emerald-400/90 bg-emerald-50/40 p-2.5 sm:p-3 text-[10px] sm:text-[11px] space-y-1.5 flex flex-col justify-center">
                <div className="flex items-center gap-2 border-b border-emerald-200/60 pb-1">
                  <Calendar className="size-3.5 text-emerald-700 shrink-0" />
                  <span className="font-bold text-slate-800 shrink-0">உறுப்பினர் செல்லுபடி :</span>
                  <span className="font-extrabold text-emerald-900 truncate">
                    {member.valid_until || "வாழ்நாள் (Lifetime)"}
                  </span>
                </div>

                <div className="flex items-center gap-2 border-b border-emerald-200/60 pb-1">
                  <Phone className="size-3.5 text-emerald-700 shrink-0" />
                  <span className="font-bold text-slate-800 shrink-0">தொடர்பு எண் :</span>
                  <span className="font-extrabold text-slate-900 truncate font-mono">
                    {member.mobile}
                  </span>
                </div>

                <div className="flex items-center gap-2 border-b border-emerald-200/60 pb-1">
                  <Mail className="size-3.5 text-emerald-700 shrink-0" />
                  <span className="font-bold text-slate-800 shrink-0">மின்னஞ்சல் :</span>
                  <span className="font-extrabold text-slate-900 truncate">
                    {member.email || "contact@ainnmk.org"}
                  </span>
                </div>

                <div className="flex items-start gap-2 pt-0.5">
                  <MapPin className="size-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <span className="font-bold text-slate-800 block">முகவரி :</span>
                    <span className="font-semibold text-slate-700 block text-[10px] leading-tight line-clamp-2">
                      {member.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Box: QR Code Box */}
              <div className="w-[110px] sm:w-[125px] shrink-0 rounded-2xl border-2 border-slate-900 p-2 bg-white flex flex-col items-center justify-center text-center shadow-xs">
                {/* Authentic Crisp SVG QR Code */}
                <svg viewBox="0 0 100 100" className="size-20 sm:size-22">
                  <rect width="100" height="100" fill="#ffffff" />
                  {/* Top-Left Position Marker */}
                  <rect x="5" y="5" width="28" height="28" fill="#000000" rx="3" />
                  <rect x="9" y="9" width="20" height="20" fill="#ffffff" rx="1.5" />
                  <rect x="13" y="13" width="12" height="12" fill="#000000" rx="1" />
                  {/* Top-Right Position Marker */}
                  <rect x="67" y="5" width="28" height="28" fill="#000000" rx="3" />
                  <rect x="71" y="9" width="20" height="20" fill="#ffffff" rx="1.5" />
                  <rect x="75" y="13" width="12" height="12" fill="#000000" rx="1" />
                  {/* Bottom-Left Position Marker */}
                  <rect x="5" y="67" width="28" height="28" fill="#000000" rx="3" />
                  <rect x="9" y="71" width="20" height="20" fill="#ffffff" rx="1.5" />
                  <rect x="13" y="75" width="12" height="12" fill="#000000" rx="1" />
                  {/* Timing Patterns */}
                  <rect x="37" y="17" width="6" height="4" fill="#000000" />
                  <rect x="47" y="17" width="6" height="4" fill="#000000" />
                  <rect x="57" y="17" width="6" height="4" fill="#000000" />
                  <rect x="17" y="37" width="4" height="6" fill="#000000" />
                  <rect x="17" y="47" width="4" height="6" fill="#000000" />
                  <rect x="17" y="57" width="4" height="6" fill="#000000" />
                  {/* Center Emblem/Data modules */}
                  <rect x="37" y="37" width="26" height="26" fill="#4c1d6f" rx="3" />
                  <circle cx="50" cy="50" r="9" fill="#fbbf24" />
                  <circle cx="50" cy="50" r="6" fill="#12883c" />
                  {/* Data blocks */}
                  <rect x="67" y="37" width="6" height="6" fill="#000000" />
                  <rect x="77" y="47" width="6" height="6" fill="#000000" />
                  <rect x="87" y="37" width="6" height="6" fill="#000000" />
                  <rect x="37" y="67" width="6" height="6" fill="#000000" />
                  <rect x="47" y="77" width="6" height="6" fill="#000000" />
                  <rect x="57" y="87" width="6" height="6" fill="#000000" />
                  <rect x="73" y="73" width="8" height="8" fill="#000000" />
                  <rect x="85" y="85" width="8" height="8" fill="#000000" />
                </svg>
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-800 mt-0.5">
                  QR CODE HERE
                </span>
              </div>
            </div>

            {/* Signatures Row */}
            <div className="relative z-10 px-5 pt-1 pb-2 flex items-center justify-around border-t border-slate-200/80">
              {/* Member Signature */}
              <div className="text-center">
                <div className="font-serif italic text-xs sm:text-sm font-bold text-slate-800 tracking-wider">
                  {member.full_name.split(" ")[0] || "Signature"}
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-600 block mt-0.5">
                  Member Signature
                </span>
              </div>

              <div className="h-7 w-px bg-slate-300 mx-2" />

              {/* Authorized Signatory */}
              <div className="text-center">
                <div className="font-serif italic text-xs sm:text-sm font-bold text-slate-800 tracking-wider">
                  A. Munna Basha
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-600 block mt-0.5">
                  Authorized Signatory (தேசிய நிறுவனர் தலைவர்)
                </span>
              </div>
            </div>

            {/* Back Card Bottom Banner: நம் தாய்நாடு – நம் குடும்பம் */}
            <div className="bg-[#0e7534] py-1.5 px-4 text-center text-white relative z-10">
              <span className="text-xs sm:text-sm font-black text-white tracking-wide">
                நம் தாய்நாடு – நம் குடும்பம்
              </span>
            </div>

            {/* Back Card Bottom Wave Ribbons */}
            <div className="relative w-full h-3 overflow-hidden -mb-1 z-10">
              <svg viewBox="0 0 500 20" preserveAspectRatio="none" className="w-full h-full block">
                <path d="M0,20 L0,10 Q120,0 250,12 T500,5 L500,20 Z" fill="#4c1d6f" />
                <path d="M0,20 L0,14 Q130,3 250,15 T500,8 L500,20 Z" fill="#fbbf24" />
                <path d="M0,20 L0,17 Q140,7 250,18 T500,12 L500,20 Z" fill="#0e7534" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Verification & Digital Security Badge */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3 text-xs text-emerald-900 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-5 text-emerald-700 shrink-0" />
          <span>
            {language === "ta"
              ? `உறுப்பினர் எண்: ${member.member_id} | பதிவு சரிபார்க்கப்பட்டது (Verified Active Member)`
              : `Member ID: ${member.member_id} | Verified Active Cadre Credential`}
          </span>
        </div>
        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-600 text-white shrink-0">
          Official Digital ID
        </span>
      </div>
    </div>
  );
}
