export interface MemberRecord {
  member_id: string; // e.g. "AINNMK-2026-1001"
  full_name: string;
  father_name: string;
  dob: string; // YYYY-MM-DD
  mobile: string;
  email?: string;
  state: string; // "தமிழ்நாடு"
  district: string;
  organization_wing: string;
  blood_group: string;
  address: string;
  photo_url?: string;
  joining_date: string; // "19/11/2026"
  valid_until: string; // "வாழ்நாள் (Lifetime)"
}

export const DEMO_MEMBERS: MemberRecord[] = [
  {
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
  {
    member_id: "AINNMK-2026-2002",
    full_name: "க. செந்தமிழ்ச் செல்வி",
    father_name: "வ. கந்தசாமி",
    dob: "1998-08-22",
    mobile: "9444123456",
    email: "selvi@ainnmk.org",
    state: "தமிழ்நாடு",
    district: "மதுரை",
    organization_wing: "வீரத்தாய் மகளிர் அணி",
    blood_group: "B+ve",
    address: "எண். 15, மீனாட்சி நகர், சிம்மக்கல், மதுரை - 625001.",
    joining_date: "19/11/2026",
    valid_until: "வாழ்நாள் (Lifetime)",
  },
];

const STORAGE_KEY = "ainnmk_members_registry";
const ACTIVE_SESSION_KEY = "ainnmk_active_member";

export function generateMemberId(): string {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `AINNMK-2026-${randomNum}`;
}

export function getStoredMembers(): MemberRecord[] {
  if (typeof window === "undefined") return DEMO_MEMBERS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(DEMO_MEMBERS));
      return DEMO_MEMBERS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(DEMO_MEMBERS));
    return DEMO_MEMBERS;
  } catch {
    return DEMO_MEMBERS;
  }
}

export function saveMember(member: MemberRecord): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getStoredMembers();
    const filtered = existing.filter(
      (m) => m.member_id.toUpperCase() !== member.member_id.toUpperCase()
    );
    const updated = [member, ...filtered];
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.localStorage.setItem(ACTIVE_SESSION_KEY, JSON.stringify(member));
    window.dispatchEvent(new Event("ainnmk-member-auth-changed"));
  } catch (err) {
    console.error("Error saving member to registry:", err);
  }
}

export function loginMember(memberId: string, dob: string): MemberRecord | null {
  const members = getStoredMembers();
  const cleanId = memberId.trim().toUpperCase();
  const cleanDob = dob.trim();

  const found = members.find((m) => {
    const idMatch = m.member_id.trim().toUpperCase() === cleanId;
    const dobMatch = m.dob.trim() === cleanDob;
    return idMatch && dobMatch;
  });

  if (found && typeof window !== "undefined") {
    window.localStorage.setItem(ACTIVE_SESSION_KEY, JSON.stringify(found));
    window.dispatchEvent(new Event("ainnmk-member-auth-changed"));
    return found;
  }
  return null;
}

export function getActiveMember(): MemberRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(ACTIVE_SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as MemberRecord;
  } catch {
    return null;
  }
}

export function logoutMember(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(ACTIVE_SESSION_KEY);
    window.dispatchEvent(new Event("ainnmk-member-auth-changed"));
  } catch (err) {
    console.error("Error logging out member:", err);
  }
}

