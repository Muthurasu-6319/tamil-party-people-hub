import React, { useState } from "react";
import { Download, Printer, QrCode, Shield, Sparkles, UserCheck } from "lucide-react";
import { toast } from "sonner";
import { partyLogoImg } from "@/data/assets";

interface VirtualIdCardProps {
  initialName?: string;
  initialMobile?: string;
  initialDistrict?: string;
  initialWing?: string;
  language: "ta" | "en";
}

export function VirtualIdCard({
  initialName = "",
  initialMobile = "",
  initialDistrict = "சென்னை (Chennai)",
  initialWing = "பொதுமக்கள் அணி (People's Wing)",
  language = "ta",
}: VirtualIdCardProps) {
  const [name, setName] = useState(initialName || (language === "ta" ? "மு. கதிர்வேலன்" : "M. Kathirvelan"));
  const [district, setDistrict] = useState(initialDistrict);
  const [wing, setWing] = useState(initialWing);
  const [bloodGroup, setBloodGroup] = useState("O+ve");
  const [memberId] = useState(() => `AINNMK-2026-${Math.floor(1000 + Math.random() * 9000)}`);

  const handlePrint = () => {
    window.print();
    toast.success(
      language === "ta"
        ? "அடையாள அட்டை அச்சிடும் பக்கம் திறக்கப்படுகிறது!"
        : "Opening print dialog for your Party ID Card!"
    );
  };

  return (
    <div className="grid gap-8 lg:grid-cols-12 items-start">
      {/* Interactive Controls */}
      <div className="lg:col-span-5 rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-2 pb-4 border-b border-border">
          <Sparkles className="size-5 text-primary" />
          <h3 className="font-bold text-base text-foreground">
            {language === "ta" ? "டிஜிட்டல் உறுப்பினர் அட்டை உருவாக்கம்" : "Live Digital ID Card Customizer"}
          </h3>
        </div>
        <p className="mt-3 text-xs text-muted-foreground leading-5">
          {language === "ta"
            ? "உங்கள் விவரங்களை உள்ளிட்டு உங்கள் மெய்நிகர் கட்சி உறுப்பினர் அடையாள அட்டையை உடனடியாகப் பெற்றுக்கொள்ளுங்கள்."
            : "Enter your details below to see your personalized official AINNMK membership card in real-time."}
        </p>

        <div className="mt-5 space-y-4">
          <div>
            <label className="text-xs font-semibold text-foreground">
              {language === "ta" ? "முழுப் பெயர் (Full Name)" : "Full Name"}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              placeholder={language === "ta" ? "உங்கள் பெயர்" : "Your Name"}
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-foreground">
              {language === "ta" ? "மாவட்டம் (District)" : "District"}
            </label>
            <input
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              placeholder="சென்னை / மதுரை / திருச்சி"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-foreground">
                {language === "ta" ? "அமைப்பு அணி" : "Wing"}
              </label>
              <select
                value={wing}
                onChange={(e) => setWing(e.target.value)}
                className="mt-1 h-10 w-full rounded-md border border-input bg-background px-2 text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              >
                <option value="உழவர் அணி">உழவர் அணி (Farmers)</option>
                <option value="இளைஞர் எழுச்சி அணி">இளைஞரணி (Youth)</option>
                <option value="வீரத்தாய் மகளிர் அணி">மகளிர் அணி (Women)</option>
                <option value="மாணவரணி">மாணவரணி (Students)</option>
                <option value="பொதுமக்கள் அணி">பொது அணி (General)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground">
                {language === "ta" ? "இரத்த வகை" : "Blood Group"}
              </label>
              <select
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                className="mt-1 h-10 w-full rounded-md border border-input bg-background px-2 text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              >
                <option value="O+ve">O +ve</option>
                <option value="A+ve">A +ve</option>
                <option value="B+ve">B +ve</option>
                <option value="AB+ve">AB +ve</option>
                <option value="O-ve">O -ve</option>
                <option value="A-ve">A -ve</option>
                <option value="B-ve">B -ve</option>
              </select>
            </div>
          </div>

          <div className="pt-2 flex gap-3">
            <button
              onClick={handlePrint}
              type="button"
              className="flex-1 inline-flex items-center justify-center gap-2 h-10 rounded-md bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-colors shadow-sm"
            >
              <Printer className="size-4" />
              {language === "ta" ? "அச்சிடுக / பதிவிறக்கு" : "Print / Download ID"}
            </button>
          </div>
        </div>
      </div>

      {/* Live Realistic PVC ID Card Visual */}
      <div className="lg:col-span-7 flex flex-col items-center">
        <div className="w-full max-w-[480px] rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-white via-slate-50 to-emerald-50/40 p-5 shadow-2xl text-slate-800 relative overflow-hidden transition-all duration-300">
          {/* Top Tricolor Strip */}
          <div className="absolute top-0 inset-x-0 h-2.5 flex">
            <div className="w-1/3 bg-emerald-600" />
            <div className="w-1/3 bg-amber-400" />
            <div className="w-1/3 bg-purple-700" />
          </div>

          {/* Card Header with Party Logo */}
          <div className="mt-2 flex items-center justify-between border-b border-slate-200/80 pb-3">
            <div className="flex items-center gap-3">
              <img
                src={partyLogoImg}
                alt="AINNMK Logo"
                className="size-12 rounded-full object-contain drop-shadow"
              />
              <div>
                <h4 className="font-extrabold text-xs sm:text-sm text-emerald-950 leading-tight">
                  அகில இந்திய நம் நாடு மக்கள் கட்சி
                </h4>
                <p className="text-[10px] font-semibold text-emerald-800 tracking-wider">
                  AGILA INDIA NAM NADU MAKKAL KATCHI
                </p>
                <span className="text-[9px] font-bold text-purple-700">
                  உறுப்பினர் அடையாள அட்டை · OFFICIAL MEMBERSHIP CARD
                </span>
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="mt-4 grid grid-cols-12 gap-3 items-center">
            {/* Member Photo Box */}
            <div className="col-span-4 flex flex-col items-center">
              <div className="size-24 sm:size-28 rounded-xl border-2 border-primary bg-emerald-100/60 p-1 relative flex items-center justify-center overflow-hidden shadow-inner">
                <div className="size-full rounded-lg bg-emerald-900/10 flex flex-col items-center justify-center text-primary">
                  <UserCheck className="size-10 sm:size-12 text-primary/80" />
                  <span className="text-[8px] font-bold mt-1 text-primary">AINNMK</span>
                </div>
                {/* Hologram Badge */}
                <div className="absolute bottom-1 right-1 rounded-full bg-gradient-to-tr from-amber-300 to-yellow-500 p-0.5 shadow">
                  <Shield className="size-3.5 text-emerald-950" />
                </div>
              </div>
              <span className="mt-1 text-[9px] font-bold text-slate-500">
                VERIFIED MEMBER
              </span>
            </div>

            {/* Member Details */}
            <div className="col-span-8 pl-1 space-y-1.5 text-left text-xs">
              <div>
                <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                  பெயர் / Member Name
                </span>
                <span className="font-extrabold text-sm text-slate-900 block truncate">
                  {name || "AINNMK Member"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div>
                  <span className="text-[9px] text-slate-400 block">அட்டை எண் / ID</span>
                  <span className="font-bold text-primary font-mono">{memberId}</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 block">இரத்த வகை / Blood</span>
                  <span className="font-bold text-rose-600">{bloodGroup}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div>
                  <span className="text-[9px] text-slate-400 block">மாவட்டம் / District</span>
                  <span className="font-semibold text-slate-800 truncate block">{district}</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 block">அணி / Wing</span>
                  <span className="font-semibold text-purple-800 truncate block">{wing}</span>
                </div>
              </div>

              <div>
                <span className="text-[9px] text-slate-400 block">வழங்கப்பட்ட தேதி / Issued</span>
                <span className="text-[10px] font-medium text-slate-600">
                  18-Nov-2026 · வாழ்நாள் உறுப்பினர்
                </span>
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div className="mt-4 pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-1.5 text-slate-500">
              <QrCode className="size-6 text-slate-800" />
              <span className="text-[8px] font-mono leading-tight">
                SECURE AUTH<br />ID-CERTIFIED
              </span>
            </div>

            <div className="text-center font-bold text-[9px] text-emerald-800">
              ஒற்றுமை · சமத்துவம் · மக்கள் நலன்
            </div>

            <div className="text-right">
              <div className="font-serif italic text-[11px] font-bold text-slate-800 leading-none">
                Dr. N. Dharmaraj
              </div>
              <span className="text-[8px] text-slate-400 uppercase tracking-tight">
                மாநிலத் தலைவர் கையொப்பம்
              </span>
            </div>
          </div>

          {/* Bottom Tricolor Strip */}
          <div className="absolute bottom-0 inset-x-0 h-1.5 flex">
            <div className="w-1/3 bg-emerald-600" />
            <div className="w-1/3 bg-amber-400" />
            <div className="w-1/3 bg-purple-700" />
          </div>
        </div>

        <div className="mt-3 text-center text-xs text-muted-foreground flex items-center gap-2">
          <Shield className="size-3.5 text-primary" />
          <span>
            {language === "ta"
              ? "இந்த அட்டை அதிகாரப்பூர்வ இணையவழி உறுப்பினர் சரிபார்ப்பிற்கு உட்பட்டது."
              : "This official digital membership credential is automatically verifiable."}
          </span>
        </div>
      </div>
    </div>
  );
}

