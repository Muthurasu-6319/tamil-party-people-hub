export interface Leader {
  id: string;
  nameTa: string;
  nameEn: string;
  roleTa: string;
  roleEn: string;
  category: "state" | "wing" | "district";
  districtTa?: string;
  districtEn?: string;
  bioTa: string;
  bioEn: string;
  phone: string;
  email: string;
  quoteTa: string;
  quoteEn: string;
  imageKey: string;
}

export interface Wing {
  id: string;
  nameTa: string;
  nameEn: string;
  taglineTa: string;
  taglineEn: string;
  descriptionTa: string;
  descriptionEn: string;
  leaderTa: string;
  leaderEn: string;
  keyInitiativesTa: string[];
  keyInitiativesEn: string[];
  memberCount: string;
  imageKey: string;
  color: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  titleTa: string;
  titleEn: string;
  categoryTa: string;
  categoryEn: string;
  date: string;
  readTimeTa: string;
  readTimeEn: string;
  summaryTa: string;
  summaryEn: string;
  contentTa: string[];
  contentEn: string[];
  isFeatured?: boolean;
  imageKey: string;
}

export interface PartyEvent {
  id: string;
  titleTa: string;
  titleEn: string;
  categoryTa: string;
  categoryEn: string;
  date: string;
  time: string;
  locationTa: string;
  locationEn: string;
  districtTa: string;
  districtEn: string;
  status: "upcoming" | "completed";
  descriptionTa: string;
  descriptionEn: string;
  chiefGuestTa: string;
  chiefGuestEn: string;
  imageKey: string;
}

export interface GalleryItem {
  id: string;
  titleTa: string;
  titleEn: string;
  category: "rally" | "welfare" | "youth" | "meeting";
  categoryTa: string;
  categoryEn: string;
  date: string;
  locationTa: string;
  locationEn: string;
  descriptionTa: string;
  descriptionEn: string;
  imageKey: string;
}

export interface Pillar {
  id: string;
  number: string;
  titleTa: string;
  titleEn: string;
  taglineTa: string;
  taglineEn: string;
  descriptionTa: string;
  descriptionEn: string;
  keyPointsTa: string[];
  keyPointsEn: string[];
  icon: string;
}

export interface Milestone {
  year: string;
  titleTa: string;
  titleEn: string;
  descTa: string;
  descEn: string;
}

export const PARTY_INFO = {
  nameTa: "அகில இந்திய நம் நாடு மக்கள் கட்சி",
  nameEn: "Agila India Nam Nadu Makkal Katchi",
  shortName: "AINNMK",
  symbolTa: "நெற்கதிர்",
  symbolEn: "Paddy Crops (Sheaf of Grains)",
  foundedYear: "2008",
  founderTa: "அ. முன்னா பாஷா",
  founderEn: "A. Munna Basha",
  headquartersTa: "தலைமை அலுவலகம்: எண். 14, பாரதி சாலை, அண்ணா நகர் கிழக்கு, சென்னை - 600102, தமிழ்நாடு.",
  headquartersEn: "Headquarters: No. 14, Bharathi Salai, Anna Nagar East, Chennai - 600102, Tamil Nadu, India.",
  phone: "+91 94440 12345 / 044 2626 5500",
  email: "contact@ainnmk.org",
  adminEmail: "admin@ainnmk.org",
  pressEmail: "press@ainnmk.org",
  stats: {
    membersCount: "1,25,000+",
    districtsCovered: "38",
    activeWings: "6",
    welfareEvents: "650+",
    yearsOfService: "18+",
  },
};

export const PILLARS: Pillar[] = [
  {
    id: "social-unity",
    number: "01",
    titleTa: "சாதி மத பேதமற்ற சமூக நல்லிணக்கம்",
    titleEn: "Social Unity Across Faiths & Castes",
    taglineTa: "மனிதநேயமே நமது முதல் கொள்கை",
    taglineEn: "Humanity is our primary creed",
    descriptionTa: "பிறப்பொக்கும் எல்லா உயிர்க்கும் என்ற வள்ளுவப் பெருந்தகையின் நெறிப்படி, சாதி, மத, மொழி மற்றும் இன வேறுபாடுகள் இன்றி அனைவரும் ஒரே தாய் மக்களாக வாழும் சமத்துவ சமுதாயத்தை உருவாக்குதல்.",
    descriptionEn: "Guided by the immortal words of Thiruvalluvar that all human beings are born equal, we stand for an inclusive society where brotherhood supersedes all divisions.",
    keyPointsTa: [
      "சமத்துவபுரங்கள் அமைப்பை விரிவுபடுத்துதல்",
      "ஜாதி மறுப்பு மற்றும் கலப்புத் திருமணத் தம்பதியினருக்குச் சிறப்பு நலத்திட்டங்கள்",
      "சமூக நல்லிணக்க அமைதிப் படைகள் உருவாக்குதல்",
    ],
    keyPointsEn: [
      "Expansion of integrated equality neighborhoods across districts",
      "Guaranteed state welfare and housing for inter-caste couples",
      "Establishment of volunteer community harmony corps in every ward",
    ],
    icon: "HeartHandshake",
  },
  {
    id: "farmer-protection",
    number: "02",
    titleTa: "உழவர் வாழ்வாதாரப் பாதுகாப்பு & நியாய விலை",
    titleEn: "Agrarian Dignity & Fair Crop Pricing",
    taglineTa: "உழவுக்கும் தொழிலுக்கும் வந்தனை செய்வோம்",
    taglineEn: "Honor the plow, sustain the nation",
    descriptionTa: "நமது கட்சியின் நெற்கதிர் சின்னம் உணர்த்துவது போல, நாட்டின் முதுகெலும்பான விவசாயிகளின் விளைபொருளுக்கு 1.5 மடங்கு நியாயமான கொள்முதல் விலை, தடையற்ற பாசனம் மற்றும் விவசாயக் கடன் நிவாரணம்.",
    descriptionEn: "Reflecting our sacred paddy symbol, we champion 1.5x minimum support pricing above comprehensive cost, uninterrupted free power, and complete agrarian water security.",
    keyPointsTa: [
      "நெல்லுக்கு குவிண்டாலுக்கு குறைந்தபட்சம் ₹3,200 நிர்ணயம்",
      "தமிழக ஆறுகள் மற்றும் ஏரிகளை இணைக்கும் நதிநீர் மேலாண்மைத் திட்டம்",
      "இயற்கை விவசாயத்திற்கு ஏக்கருக்கு ₹10,000 மானியம்",
    ],
    keyPointsEn: [
      "Minimum support price guarantee of ₹3,200 per quintal for paddy",
      "Comprehensive interlinking of local rivers and traditional lake revitalization",
      "Direct annual incentive of ₹10,000 per acre for organic cultivation",
    ],
    icon: "Sprout",
  },
  {
    id: "universal-education",
    number: "03",
    titleTa: "அனைவருக்கும் உலகத்தரம் வாய்ந்த இலவசக் கல்வி",
    titleEn: "World-Class Free Education & Health",
    taglineTa: "கல்வியே மாற்றத்தின் பேராயுதம்",
    taglineEn: "Education is the greatest catalyst for change",
    descriptionTa: "அரசுப் பள்ளிகளை சர்வதேசத் தரத்திற்கு உயர்த்தி, மழலையர் கல்வி முதல் உயர்கல்வி வரை தாய்மொழியிலும் ஆங்கிலத்திலும் சமமான இலவசக் கல்வி உத்தரவாதம் அளித்தல்.",
    descriptionEn: "Transforming government schools with state-of-the-art digital infrastructure and offering free quality bilingual education from kindergarten through universities.",
    keyPointsTa: [
      "அனைத்து அரசுப் பள்ளிகளிலும் நவீன ஸ்மார்ட் வகுப்பறைகள்",
      "நீட் போன்ற நுழைவுத் தேர்வுகளுக்கு அரசு வழியே இலவச சிறப்புப் பயிற்சி",
      "ஏழை மாணவர்களுக்கு 100% உயர் கல்வி உதவித்தொகை",
    ],
    keyPointsEn: [
      "Modern AI & smart classrooms across every village government school",
      "State-sponsored high caliber coaching and vocational mentoring",
      "Full fee waiver and scholarships for first-generation graduates",
    ],
    icon: "BookOpen",
  },
  {
    id: "women-empowerment",
    number: "04",
    titleTa: "மகளிர் பாதுகாப்பும் பொருளாதார தற்சார்பும்",
    titleEn: "Women's Safety & Economic Autonomy",
    taglineTa: "மாதர் தம்மை இழிவு செய்யும் மடமையைக் கொளுத்துவோம்",
    taglineEn: "Dignity, leadership, and financial independence for women",
    descriptionTa: "பெண்களின் கண்ணியம் மற்றும் பாதுகாப்பை உறுதி செய்வதுடன், சுயஉதவிக் குழுக்களுக்கு வட்டியற்ற சுழல்நிதி, அரசு மற்றும் தனியார் துறைகளில் 50% இடஒதுக்கீடு வழங்குதல்.",
    descriptionEn: "Ensuring uncompromising safety for women, 0% interest loans for self-help enterprises, and pioneering 50% representation in public leadership.",
    keyPointsTa: [
      "பெண்கள் பெயரில் பதிவு செய்யப்படும் குடும்ப நிலங்களுக்கு 100% பத்திரப்பதிவு கட்டணத் தள்ளுபடி",
      "கிராமப்புற மகளிர் சிறுவணிகத்திற்கு ₹1,00,000 வட்டியற்ற கடன்",
      "24 மணி நேர மகளிர் அவசர உதவி மற்றும் சட்ட ஆலோசனை மையங்கள்",
    ],
    keyPointsEn: [
      "Complete stamp duty exemption for land registered in women's names",
      "Zero-interest micro-enterprise loans of up to ₹1,00,000 for women",
      "24/7 Rapid Action safety squads and legal support in every block",
    ],
    icon: "Users",
  },
  {
    id: "youth-employment",
    number: "05",
    titleTa: "இளைஞர் வேலைவாய்ப்பும் புத்தாக்கத் தொழில்முனைவும்",
    titleEn: "Youth Employment & Innovation Ecosystem",
    taglineTa: "இளைஞர்களின் திறமையே நாட்டின் எதிர்காலம்",
    taglineEn: "Harnessing the creative powerhouse of Tamil youth",
    descriptionTa: "தமிழகத்தின் பட்டிதொட்டியெங்கும் தகவல் தொழில்நுட்பம் மற்றும் நவீன தொழிற்சாலைகளை பரவலாக்கி, உள்ளூர் இளைஞர்களுக்கு சொந்த ஊரிலேயே லட்சக்கணக்கான வேலைவாய்ப்புகள் உருவாக்குதல்.",
    descriptionEn: "Decentralizing IT parks, advanced manufacturing, and green-energy hubs across Tier-2 and Tier-3 towns so youth can thrive in their home soil.",
    keyPointsTa: [
      "மாவட்டந்தோறும் நவீன திறன் மேம்பாட்டு மற்றும் ஸ்டார்ட்-அப் தொழிற்பூங்கா",
      "அரசுப் பணிகளுக்கான காலியிடங்கள் உடனுக்குடன் நிரப்பப்படுதல்",
      "இளம் தொழில்முனைவோருக்கு ₹5,00,000 வரை முன்தொகையற்ற கடன்",
    ],
    keyPointsEn: [
      "Startup incubators and AI skill centers in all 38 district headquarters",
      "Zero backlog time-bound transparent state service recruitment",
      "Seed capital grants and collateral-free funding up to ₹5,00,000",
    ],
    icon: "Sparkles",
  },
  {
    id: "clean-governance",
    number: "06",
    titleTa: "ஊழலற்ற மக்கள் பங்கேற்பு மக்களாட்சி",
    titleEn: "Corruption-Free Participatory Governance",
    taglineTa: "வெளிப்படைத் தன்மையே அதிகாரத்தின் பலம்",
    taglineEn: "Transparency is the bedrock of democratic power",
    descriptionTa: "மக்கள் பணத்தில் ஒரு பைசா கூட வீணாகாமல், கிராம சபைகள் மற்றும் வார்டு கமிட்டிகள் மூலம் பொதுமக்களின் ஒப்புதலுடன் மட்டுமே திட்டங்களை நிறைவேற்றும் மக்களாட்சி தத்துவம்.",
    descriptionEn: "Complete digital transparency where every rupee of public spending is audited in real-time, placing decision-making directly into Gram Sabha citizens' hands.",
    keyPointsTa: [
      "அனைத்து அரசு சேவைகளும் 7 நாட்களில் வீட்டிற்கே வரும் டிஜிட்டல் சேவை",
      "ஊழல் தடுப்புச் சட்டங்களை விரைவுபடுத்த தனி மக்கள் தீர்ப்பாயங்கள்",
      "கிராம சபை முடிவுகளுக்கு சட்டப்பூர்வ இறுதி அதிகாரம்",
    ],
    keyPointsEn: [
      "100% digital citizen delivery guaranteeing certificates within 7 days",
      "Fast-track public tribunals to eliminate bureaucratic corruption",
      "Direct legislative veto power vested in Gram Sabha assemblies",
    ],
    icon: "Scale",
  },
];

export const LEADERS: Leader[] = [
  {
    id: "munna-basha",
    nameTa: "அ. முன்னா பாஷா",
    nameEn: "A. Munna Basha",
    roleTa: "தேசிய நிறுவனர் தலைவர்",
    roleEn: "National Founder President",
    category: "state",
    districtTa: "சென்னை / தமிழ்நாடு",
    districtEn: "Chennai / Tamil Nadu",
    bioTa: "2008-ஆம் ஆண்டு எளிய மக்களின் உரிமைக்காகவும் உழவர் பெருமக்களின் வாழ்வாதாரத்திற்காகவும் அகில இந்திய நம் நாடு மக்கள் கட்சியைத் தொடங்கியவர். தொலைநோக்குப் பார்வை கொண்ட மக்கள் தலைவர் மற்றும் சமூக சீர்திருத்தவாதி.",
    bioEn: "Founded AINNMK in 2008 dedicated to the upliftment of farmers, marginalized communities, and social harmony. A visionary grassroots leader and social reformer.",
    phone: "+91 94440 12345",
    email: "president@ainnmk.org",
    quoteTa: "நாம் ஆட்சி அதிகாரத்தை நாடுவதன் நோக்கம் பதவிக்காக அல்ல; ஏழை எளிய மக்களின் கண்ணீரைத் துடைத்து, உழவனின் முகத்தில் புன்னகையைக் காண்பதற்கே!",
    quoteEn: "Our pursuit of democratic power is never for titles; it is solely to wipe the tears of the underprivileged and place a proud smile upon the farmer's face.",
    imageKey: "munna.png",
  },
  {
    id: "muthukumar",
    nameTa: "கே. முத்துக்குமார், M.Com., B.L.",
    nameEn: "K. Muthukumar, M.Com., B.L.",
    roleTa: "பொதுச்செயலாளர்",
    roleEn: "General Secretary",
    category: "state",
    districtTa: "மதுரை",
    districtEn: "Madurai",
    bioTa: "கட்சியின் கட்டமைப்பு மற்றும் மாவட்ட ஒருங்கிணைப்பில் 15 ஆண்டுகளுக்கும் மேலாக தலைமைப் பங்காற்றி வருபவர். தொழிலாளர் மற்றும் அடித்தட்டு மக்களின் உரிமைக் குரல்.",
    bioEn: "Over 15 years orchestrating the organizational framework and cadre mobilization across Southern Tamil Nadu. A tireless champion for labor rights.",
    phone: "+91 94441 54321",
    email: "gs@ainnmk.org",
    quoteTa: "களப்பணியே நமது வலிமை; தொண்டர்களின் வியர்வையே நமது இயக்கத்தின் மூச்சு!",
    quoteEn: "Fieldwork is our fortitude; the dedicated sweat of our volunteers is the very breath of this movement.",
    imageKey: "rally.jpg",
  },
  {
    id: "anbarasi",
    nameTa: "வழக்கறிஞர் எஸ். அன்பரசி, B.A., M.L.",
    nameEn: "Adv. S. Anbarasi, B.A., M.L.",
    roleTa: "மகளிர் அணி மாநிலத் தலைவர்",
    roleEn: "President, State Women's Wing",
    category: "wing",
    districtTa: "கோயம்புத்தூர்",
    districtEn: "Coimbatore",
    bioTa: "சென்னை உயர்நீதிமன்றத்தில் பெண்கள் மற்றும் குழந்தைகள் நலனுக்கான பொதுநல வழக்குகளை நடத்தி வரும் மனித உரிமை வழக்கறிஞர்.",
    bioEn: "Human rights advocate at the Madras High Court spearheading constitutional protections and economic empowerment projects for rural women.",
    phone: "+91 94442 87654",
    email: "womenwing@ainnmk.org",
    quoteTa: "பெண்களின் தன்னம்பிக்கையும் துணிவுமே ஒரு சமூகத்தின் உண்மையான சுதந்திரம்.",
    quoteEn: "The courage and economic independence of women constitute the true freedom of any nation.",
    imageKey: "women.jpg",
  },
  {
    id: "karthikeyan",
    nameTa: "பொறியாளர் இரா. கார்த்திகேயன், B.E., MBA",
    nameEn: "Er. R. Karthikeyan, B.E., MBA",
    roleTa: "இளைஞரணி மாநிலச் செயலாளர்",
    roleEn: "Secretary, State Youth Wing",
    category: "wing",
    districtTa: "திருச்சிராப்பள்ளி",
    districtEn: "Tiruchirappalli",
    bioTa: "தகவல் தொழில்நுட்பத் துறையில் அனுபவம் வாய்ந்தவர். கிராமப்புற இளைஞர்களுக்கு டிஜிட்டல் தொழில்நுட்பம் மற்றும் வேலைவாய்ப்புப் பயிற்சிகளை ஒருங்கிணைப்பவர்.",
    bioEn: "Former tech lead turned grassroots organizer mentoring over 20,000 students across Tamil Nadu in modern technological readiness and leadership.",
    phone: "+91 94443 11223",
    email: "youthwing@ainnmk.org",
    quoteTa: "இன்றைய இளைஞர்களின் உழைப்பும் சிந்தனையும் நாளைய தமிழகத்தின் பொற்காலம்.",
    quoteEn: "The intellect, creativity, and hard work of today's youth will forge tomorrow's golden era for Tamil Nadu.",
    imageKey: "youth.jpg",
  },
  {
    id: "selvam",
    nameTa: "விவசாயி வெ. செல்வம்",
    nameEn: "Farmer V. Selvam",
    roleTa: "உழவர் அணி மாநில அமைப்பாளர்",
    roleEn: "Organizer, State Farmers Wing",
    category: "wing",
    districtTa: "திருவாரூர்",
    districtEn: "Tiruvarur",
    bioTa: "காவிரி டெல்டா பகுதியில் இயற்கை விவசாயம் மற்றும் நீர்நிலைப் பாதுகாப்பிற்காகப் போராடி வரும் களப் போராளி.",
    bioEn: "Prominent Kaveri delta farmer activist leading campaigns on organic regenerative soil management and water body restoration.",
    phone: "+91 94444 33445",
    email: "farmerswing@ainnmk.org",
    quoteTa: "உழவன் வாழாவிட்டால் உலகம் அழியும்; நெற்கதிரே நமது உயிர்க்கதிர்!",
    quoteEn: "If the farmer falters, the world perishes. The golden ear of paddy is our very lifeline.",
    imageKey: "farmers.jpg",
  },
  {
    id: "marimuthu",
    nameTa: "டாக்டர் பி. மாரிமுத்து, MBBS, MD",
    nameEn: "Dr. P. Marimuthu, MBBS, MD",
    roleTa: "மக்கள் நல்வாழ்வுப் பிரிவு செயலாளர்",
    roleEn: "Secretary, Public Health Wing",
    category: "state",
    districtTa: "சேலம்",
    districtEn: "Salem",
    bioTa: "ஏழை எளிய மக்களுக்கு 20 ஆண்டுகளுக்கும் மேலாக இலவச மருத்துவ முகாம்களை நடத்தி வரும் மக்கள் நல மருத்துவர்.",
    bioEn: "Dedicated community physician having organized over 300 free village medical and pediatric health camps.",
    phone: "+91 94445 66778",
    email: "health@ainnmk.org",
    quoteTa: "ஆரோக்கியமான மக்களே ஒரு நாட்டின் வலிமையான மூலதனம்.",
    quoteEn: "A healthy, thriving populace is the greatest sovereign capital of any civilization.",
    imageKey: "social_service.jpg",
  },
];

export const WINGS: Wing[] = [
  {
    id: "farmers",
    nameTa: "உழவர் மற்றும் பொதுமக்கள் அணி",
    nameEn: "Farmers & Agrarian Welfare Wing",
    taglineTa: "உழவின் பெருமை, நாட்டின் உரிமை",
    taglineEn: "The pride of the plow, the foundation of our motherland",
    descriptionTa: "கட்சியின் இதயத்துடிப்பான இந்த அணி, தமிழகத்தின் 38 மாவட்டங்களிலும் உள்ள விவசாயிகளின் விளைபொருளுக்குக் கட்டுப்படியான விலை மற்றும் நதிநீர் உரிமைகளைப் பாதுகாக்க முன்னணியில் நிற்கிறது.",
    descriptionEn: "The heart of AINNMK, dedicated to safeguarding agricultural livelihoods, guaranteed procurement pricing, irrigation canal maintenance, and farmer welfare.",
    leaderTa: "விவசாயி வெ. செல்வம் (மாநில அமைப்பாளர்)",
    leaderEn: "Farmer V. Selvam (State Organizer)",
    keyInitiativesTa: [
      "ஆண்டுதோறும் 50,000 பாரம்பரிய விதைத் தானியங்கள் மற்றும் மரக்கன்றுகள் வழங்கல்",
      "கிராமப்புற விவசாயிகளுக்கான இலவச மண் பரிசோதனை முகாம்கள்",
      "ஏரி, குளம், கண்மாய்கள் தூர்வாரும் மக்கள் கூட்டுப்பணி இயக்கம்",
    ],
    keyInitiativesEn: [
      "Annual distribution of 50,000 indigenous heritage seeds and timber saplings",
      "Free scientific soil-testing camps for village farming collectives",
      "Community participatory desilting of heritage tanks and irrigation channels",
    ],
    memberCount: "38,000+ தொண்டர்கள்",
    imageKey: "farmers.jpg",
    color: "from-emerald-700 to-green-600",
  },
  {
    id: "youth",
    nameTa: "இளைஞர் எழுச்சி அணி",
    nameEn: "Youth Awakening Wing",
    taglineTa: "எழுமின், விழிமின், வென்று காட்டுமின்",
    taglineEn: "Arise, awaken, and build a modern equitable Tamil Nadu",
    descriptionTa: "கல்லூரி மாணவர்கள் மற்றும் இளைஞர்களை ஒன்றிணைத்து, அரசியல் விழிப்புணர்வு, வேலைவாய்ப்பு வழிகாட்டல், கணினித் திறன் மேம்பாடு மற்றும் சமூகத் தொண்டில் ஈடுபடுத்தும் இளைஞர் படை.",
    descriptionEn: "Channeling the dynamism of young professionals and students into public leadership, technical career readiness, sports festivals, and civic development.",
    leaderTa: "பொறியாளர் இரா. கார்த்திகேயன் (மாநிலச் செயலாளர்)",
    leaderEn: "Er. R. Karthikeyan (State Secretary)",
    keyInitiativesTa: [
      "மாவட்டங்கள் தோறும் 'கலாம் இளைஞர் திறன் மேம்பாட்டு முகாம்கள்'",
      "அரசுப் போட்டித் தேர்வுகளுக்கான (TNPSC, UPSC, SSC) இலவசப் பயிற்சி",
      "கிராமப்புற விளையாட்டுகளுக்கு புத்துயிரூட்டும் 'AINNMK கோப்பை' விளையாட்டுப் போட்டிகள்",
    ],
    keyInitiativesEn: [
      "Dr. Kalam Youth Technology & Digital Training Camps in all districts",
      "Complimentary coaching and study material for civil services and state exams",
      "Annual district-level AINNMK Championship trophy for village athletic talents",
    ],
    memberCount: "42,000+ இளைஞர்கள்",
    imageKey: "youth.jpg",
    color: "from-amber-600 to-yellow-500",
  },
  {
    id: "women",
    nameTa: "வீரத்தாய் மகளிர் அணி",
    nameEn: "Veerathai Women's Leadership Wing",
    taglineTa: "மகளிர் உரிமை, சமூகத்தின் விடிவெள்ளி",
    taglineEn: "Women's dignity illuminates society's progressive dawn",
    descriptionTa: "குடும்பத் தலைவிகள், கிராமப்புற மகளிர் மற்றும் பணிபுரியும் பெண்களின் நலன் காக்கவும், அவர்களின் பொருளாதாரத் தற்சார்பை உறுதி செய்யவும் செயல்படும் மாபெரும் மகளிர் இயக்கம்.",
    descriptionEn: "Fostering economic sovereignty, legal awareness, micro-enterprise support, and zero-tolerance safety infrastructure for every woman in Tamil Nadu.",
    leaderTa: "வழக்கறிஞர் எஸ். அன்பரசி (மாநிலத் தலைவர்)",
    leaderEn: "Adv. S. Anbarasi (State President)",
    keyInitiativesTa: [
      "சுயஉதவிக் குழுக்களுக்கான சிறுதொழில் பயிற்சி மற்றும் சந்தை வாய்ப்புகள்",
      "இலவச சட்ட ஆலோசனை மற்றும் குடும்ப நலக் கவுன்சிலிங் மையங்கள்",
      "கிராமப்புறப் பெண் குழந்தைகளுக்கு உயர்கல்வி உதவித்தொகைத் திட்டம்",
    ],
    keyInitiativesEn: [
      "Micro-cottage enterprise bootcamps and direct consumer market linkups",
      "Free confidential legal guidance clinics and family mediation desks",
      "Higher education scholarship grants for rural girl children",
    ],
    memberCount: "35,000+ தாய்மார்கள்",
    imageKey: "women.jpg",
    color: "from-purple-800 to-indigo-700",
  },
  {
    id: "students",
    nameTa: "மாணவர் மற்றும் அறிவுசார் அணி",
    nameEn: "Students & Intellectual Wing",
    taglineTa: "அறிவே ஆற்றல், கல்வியே செல்வம்",
    taglineEn: "Knowledge is true power, education the immortal wealth",
    descriptionTa: "பள்ளி மற்றும் கல்லூரி மாணவர்களின் கல்வி உரிமைகளுக்காகக் குரல் கொடுப்பதுடன், அறிவியல் மனப்பான்மையையும் சமூகச் சிந்தனையையும் வளர்க்கும் அணி.",
    descriptionEn: "Championing students' educational rights, promoting scientific temper, critical thinking, and student welfare initiatives across universities.",
    leaderTa: "பேராசிரியர் கோ. செல்வராஜ், M.Sc., M.Phil.",
    leaderEn: "Prof. G. Selvaraj, M.Sc., M.Phil.",
    keyInitiativesTa: [
      "ஆண்டுதோறும் 10,000 ஏழை மாணவர்களுக்கு இலவச நோட்டுப் புத்தகங்கள் வழங்கல்",
      "அறிவியல் கண்காட்சிகள் மற்றும் கட்டுரைப் போட்டிகள்",
      "மாணவர் மனஅழுத்த ஆலோசனை மற்றும் வழிகாட்டல் உதவி எண்",
    ],
    keyInitiativesEn: [
      "Annual donation of school supplies and notebooks to 10,000 rural students",
      "Statewide science fairs, elocution debates, and literary competitions",
      "Confidential student mental wellness and exam-prep helpline",
    ],
    memberCount: "18,000+ மாணவர்கள்",
    imageKey: "youth.jpg",
    color: "from-sky-700 to-cyan-600",
  },
  {
    id: "social_service",
    nameTa: "மக்கள் சேவை மற்றும் பேரிடர் மீட்புப் பிரிவு",
    nameEn: "Civic Relief & Disaster Response Wing",
    taglineTa: "துயர் துடைப்பதே நமது தலையாய தர்மம்",
    taglineEn: "Relieving human distress is our foremost duty",
    descriptionTa: "மழை, வெள்ளம், புயல் போன்ற பேரிடர் காலங்களில் களத்தில் இறங்கி உணவு, உடை, மருத்துவ வசதிகளை உடனடியாய் பாதிக்கப்பட்ட மக்களுக்கு வழங்கும் தியாகத் தொண்டர்கள் அணி.",
    descriptionEn: "Trained humanitarian task force delivering rapid food provisions, clothing, medical triage, and flood recovery directly to crisis-hit communities.",
    leaderTa: "எஸ். பழனிவேல் (மாநிலத் தளபதி)",
    leaderEn: "S. Palanivel (State Commander)",
    keyInitiativesTa: [
      "பேரிடர் காலங்களில் 24/7 நடமாடும் மக்கள் சமையற்கூடம் மற்றும் மருத்துவக் குழு",
      "வருடந்தோறும் 100+ இலவச இரத்ததான முகாம்கள்",
      "முதியோர் மற்றும் ஆதரவற்றோருக்கான மாதாந்திர உணவுப் பொருட்கள் வழங்கல்",
    ],
    keyInitiativesEn: [
      "24/7 Mobile disaster kitchens serving over 50,000 hot meals during floods",
      "Over 100 voluntary blood donation camps conducted annually",
      "Monthly grocery distribution kits for elderly widows and destitute families",
    ],
    memberCount: "15,000+ தன்னார்வலர்கள்",
    imageKey: "social_service.jpg",
    color: "from-rose-700 to-red-600",
  },
  {
    id: "media_it",
    nameTa: "ஊடகம் மற்றும் சமூக ஊடகத் தொடர்பு அணி",
    nameEn: "Media & Digital Outreach Wing",
    taglineTa: "உண்மையை உரக்கச் சொல்வோம், மக்கள் குரலை உலகிற்குச் சேர்ப்போம்",
    taglineEn: "Voicing truth fearlessly, amplifying people's aspirations globally",
    descriptionTa: "கட்சியின் மக்கள் நலக் கொள்கைகளையும், களப் போராட்டங்களையும் உலகெங்கும் வாழும் தமிழர்களிடம் கொண்டு சேர்க்கும் நவீன டிஜிட்டல் ஊடகப் பிரிவு.",
    descriptionEn: "Deploying innovative digital channels, bilingual press communiques, and social campaigns to carry AINNMK's pro-people vision to Tamilians globally.",
    leaderTa: "எம். விவேக், B.Tech.",
    leaderEn: "M. Vivek, B.Tech.",
    keyInitiativesTa: [
      "யூடியூப், ஃபேஸ்புக், இன்ஸ்டாகிராம் நேரலை விவாதங்கள் மற்றும் செய்திகள்",
      "மக்களின் குறைகளை நேரடியாகக் கேட்கும் வாட்ஸ்அப் மக்கள் உதவி மையம்",
      "அரசியல் நையாண்டி மற்றும் விழிப்புணர்வு காணொளிகள் தயாரிப்பு",
    ],
    keyInitiativesEn: [
      "Live broadcasts of party rallies, press meets, and grassroots documentaries",
      "Direct citizen grievance intake through our verified WhatsApp Helpline",
      "Interactive digital infographics clarifying government policies and welfare rights",
    ],
    memberCount: "8,500+ தகவல் தொழில்நுட்பப் பணியாளர்கள்",
    imageKey: "rally.jpg",
    color: "from-indigo-700 to-violet-600",
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "news-1",
    slug: "farmers-welfare-march-trichy",
    titleTa: "திருச்சியில் நடைபெற்ற பிரம்மாண்ட உழவர் உரிமை எழுச்சி மாநாடு: தேசிய நிறுவனர் தலைவர் அ. முன்னா பாஷா சூளுரை!",
    titleEn: "Massive Farmers' Rights Convention in Tiruchirappalli: National Founder President A. Munna Basha Demands 1.5x MSP!",
    categoryTa: "தலைமைச் செய்தி",
    categoryEn: "Headlines",
    date: "14 மார்ச் 2026",
    readTimeTa: "4 நிமிட வாசிப்பு",
    readTimeEn: "4 min read",
    summaryTa: "தமிழகத்தின் பல்லாயிரக்கணக்கான உழவர்கள் பங்கேற்ற எழுச்சி மாநாட்டில், நெல்லுக்கு ₹3,200 குறைந்தபட்ச ஆதார விலையும், கூட்டுறவு பயிர்க்கடன் தள்ளுபடியும் செய்யப்பட வேண்டும் என AINNMK வலியுறுத்தியது.",
    summaryEn: "Addressing a packed stadium in Trichy, National Founder President A. Munna Basha underscored that agriculture is the sovereign backbone of India and demanded an immediate guarantee of ₹3,200 per quintal for paddy.",
    contentTa: [
      "அகில இந்திய நம் நாடு மக்கள் கட்சியின் சார்பில் திருச்சிராப்பள்ளியில் நடைபெற்ற வரலாற்றுச் சிறப்புமிக்க உழவர் உரிமை எழுச்சி மாநாட்டில் பல்லாயிரக்கணக்கான விவசாயிகள் மற்றும் பொதுமக்கள் கலந்து கொண்டனர்.",
      "மாநாட்டில் உரையாற்றிய கட்சியின் தேசிய நிறுவனர் தலைவர் அ. முன்னா பாஷா அவர்கள்: 'விவசாயி கையேந்தி நிற்கும் நிலையை மாற்றி, அவன் தலையெடுத்து வாழ வைப்பதே நம் நாடு மக்கள் கட்சியின் தலையாய இலக்கு. மத்திய மாநில அரசுகள் உழவர்களின் வியர்வைக்குரிய நியாயமான விலையைத் தர வேண்டும்' என்று முழங்கினார்.",
      "இம்மாநாட்டில் காவிரி டெல்டா மாவட்டங்களின் நீர் மேலாண்மைத் திட்டத்தை உடனே போர்க்கால அடிப்படையில் செயல்படுத்த வேண்டும் என்ற 5 தீர்மானங்கள் ஒருமனதாக நிறைவேற்றப்பட்டன.",
    ],
    contentEn: [
      "A massive crowd of over 30,000 farmers and grassroots cadres converged in Tiruchirappalli for AINNMK's landmark Agrarian Rights Convention.",
      "Party National Founder President A. Munna Basha declared: 'The day a farmer no longer has to plead for fair price is the day true freedom arrives in our fields. AINNMK will spearhead an uncompromising movement until every farmer receives dignified remuneration.'",
      "The convention unanimously ratified five key resolutions, including statutory MSP enforcement and immediate restoration of Kaveri tributary canal networks.",
    ],
    isFeatured: true,
    imageKey: "rally.jpg",
  },
  {
    id: "news-2",
    slug: "women-entrepreneurship-expo-coimbatore",
    titleTa: "கோவை மகளிர் சுயஉதவிக் குழுக்கள் தயாரித்த பொருட்களின் மாபெரும் கண்காட்சி: AINNMK சாதனைப் பணி",
    titleEn: "Grand Women's Cooperative Artisan Exhibition in Coimbatore Championed by AINNMK",
    categoryTa: "மகளிர் அணி",
    categoryEn: "Women's Wing",
    date: "08 மார்ச் 2026",
    readTimeTa: "3 நிமிட வாசிப்பு",
    readTimeEn: "3 min read",
    summaryTa: "சர்வதேச மகளிர் தினத்தை முன்னிட்டு 2,000-க்கும் மேற்பட்ட கிராமப்புற மகளிர் தயாரித்த இயற்கை கைவினைப் பொருட்கள் மற்றும் உணவுப் பொருட்களின் மூன்று நாள் விற்பனை கண்காட்சி கோவையில் தொடங்கியது.",
    summaryEn: "Marking International Women's Day, AINNMK's Veerathai Wing inaugurated a 3-day exhibition providing direct market access for 2,000+ rural women cottage producers.",
    contentTa: [
      "மகளிர் அணி மாநிலத் தலைவர் வழக்கறிஞர் எஸ். அன்பரசி தலைமையில் நடைபெற்ற இக்கண்காட்சியில் பாரம்பரிய சிறுதானிய உணவுகள், கைத்தறி ஆடைகள் மற்றும் பனை ஓலைப் பொருட்கள் காட்சிப்படுத்தப்பட்டன.",
      "கண்காட்சியில் பங்குபெற்ற 150 சிறந்த மகளிர் சுயஉதவிக் குழுக்களுக்கு தலா ₹25,000 வீதம் சுழல்நிதி உதவித்தொகை வழங்கி ஊக்குவிக்கப்பட்டது.",
    ],
    contentEn: [
      "Inaugurated by Women's Wing President Adv. S. Anbarasi, the expo highlighted eco-friendly millet goods, handloom textiles, and palm-leaf crafts directly benefiting grassroots craftswomen.",
      "Over ₹37.5 Lakhs in interest-free revolving funds were distributed to 150 standout self-help collectives to expand their local operations.",
    ],
    imageKey: "women.jpg",
  },
  {
    id: "news-3",
    slug: "youth-digital-skills-camp-madurai",
    titleTa: "மதுரையில் 5,000 மாணவர்களுக்கு இலவச செயற்கை நுண்ணறிவு (AI) மற்றும் கணினிப் பயிற்சி முகாம்",
    titleEn: "5,000 Students Complete AINNMK Free Artificial Intelligence & Coding Workshop in Madurai",
    categoryTa: "இளைஞரணி",
    categoryEn: "Youth Wing",
    date: "28 பிப்ரவரி 2026",
    readTimeTa: "3 நிமிட வாசிப்பு",
    readTimeEn: "3 min read",
    summaryTa: "கிராமப்புற அரசுப் பள்ளி மற்றும் கல்லூரி மாணவர்கள் நவீன தொழில்நுட்பங்களில் தேர்ச்சி பெற AINNMK இளைஞரணி சார்பில் 7 நாள் தீவிர பயிற்சிப் பட்டறை வெற்றிகரமாக நிறைவுற்றது.",
    summaryEn: "AINNMK's Youth Awakening Wing concluded a comprehensive 7-day technical masterclass providing rural students access to cutting-edge AI software and data engineering.",
    contentTa: [
      "இளைஞரணி மாநிலச் செயலாளர் பொறியாளர் இரா. கார்த்திகேயன் தலைமையில் நடைபெற்ற இந்த முகாமில் பெங்களூரு மற்றும் சென்னையைச் சேர்ந்த முன்னணி தகவல் தொழில்நுட்ப வல்லுநர்கள் வகுப்புகளை நடத்தினர்.",
      "பயிற்சியில் சிறந்து விளங்கிய 200 மாணவர்களுக்கு லேப்டாப் மற்றும் மென்பொருள் நிறுவனங்களில் வேலைவாய்ப்பு நேர்காணல் வாய்ப்புகள் ஏற்பாடு செய்யப்பட்டன.",
    ],
    contentEn: [
      "Spearheaded by Er. R. Karthikeyan, industry engineers from Chennai and Bangalore delivered hands-on coding training, resume building, and soft skills mentoring.",
      "Two hundred outstanding first-generation students received free high-performance laptops alongside guaranteed corporate interview placements.",
    ],
    imageKey: "youth.jpg",
  },
  {
    id: "news-4",
    slug: "flood-relief-delta-districts",
    titleTa: "டெல்டா மாவட்டங்களில் மழையால் பாதிக்கப்பட்ட 10,000 குடும்பங்களுக்கு AINNMK நிவாரணப் பொருட்கள் வழங்கல்",
    titleEn: "AINNMK Relief Force Distributes Survival Kits to 10,000 Flood-Affected Delta Families",
    categoryTa: "மக்கள் சேவை",
    categoryEn: "Civic Relief",
    date: "19 பிப்ரவரி 2026",
    readTimeTa: "2 நிமிட வாசிப்பு",
    readTimeEn: "2 min read",
    summaryTa: "திடீர் பருவகால கனமழையால் பாதிக்கப்பட்ட கடலூர், மயிலாடுதுறை மற்றும் திருவாரூர் பகுதிகளில் AINNMK தொண்டர்கள் நேரடியாகச் சென்று அரிசி, மருந்து மற்றும் உடைகளை வழங்கினர்.",
    summaryEn: "Deploying its Disaster Response units, AINNMK teams delivered essential groceries, baby nutrition, and medical supplies directly into waterlogged hamlets.",
    contentTa: [
      "கட்சியின் தேசிய நிறுவனர் தலைவர் அ. முன்னா பாஷா அவர்களின் நேரடி வழிகாட்டுதலில் 500-க்கும் மேற்பட்ட தன்னார்வலர்கள் 12 நாட்களாக மீட்புப் பணிகளில் ஈடுபட்டனர்.",
      "பாதிக்கப்பட்ட பகுதிகளில் நடமாடும் மருத்துவ வாகனங்கள் மூலம் 8,000-க்கும் மேற்பட்ட பொதுமக்களுக்கு இலவச பரிசோதனைகளும் மருந்துகளும் வழங்கப்பட்டன.",
    ],
    contentEn: [
      "Under the direct guidance of Party National Founder President A. Munna Basha, over 500 cadre volunteers maintained around-the-clock community kitchens and dry ration delivery.",
      "Mobile medical vans treated over 8,000 residents for seasonal ailments and distributed water purification tablets across 42 villages.",
    ],
    imageKey: "social_service.jpg",
  },
];

export const EVENTS: PartyEvent[] = [
  {
    id: "event-1",
    titleTa: "AINNMK 18-ஆம் ஆண்டு தொடக்க விழா & பொது மாநாடு",
    titleEn: "AINNMK 18th Anniversary Foundation Day & State General Council",
    categoryTa: "கட்சி மாநாடு",
    categoryEn: "State Conference",
    date: "25 ஏப்ரல் 2026",
    time: "மாலை 4:00 மணி முதல்",
    locationTa: "ஒய்.எம்.சி.ஏ மைதானம், நந்தனம், சென்னை",
    locationEn: "YMCA Grounds, Nandanam, Chennai",
    districtTa: "சென்னை",
    districtEn: "Chennai",
    status: "upcoming",
    descriptionTa: "கட்சி தோற்றுவிக்கப்பட்ட 18-ஆம் ஆண்டை முன்னிட்டு, தமிழகம் முழுவதிலுமிருந்து ஒரு லட்சம் தொண்டர்கள் பங்கேற்கும் பிரம்மாண்ட மாநாடு மற்றும் 2026 மக்கள் நலப் பிரகடன வெளியீடு.",
    descriptionEn: "Commemorating 18 triumphant years of steadfast public service, featuring the historic unveiling of the 2026 People's Welfare Charter before 100,000 attendees.",
    chiefGuestTa: "தேசிய நிறுவனர் தலைவர் அ. முன்னா பாஷா & தோழமைக் கட்சித் தலைவர்கள்",
    chiefGuestEn: "National Founder President A. Munna Basha & Allied Civil Society Leaders",
    imageKey: "rally.jpg",
  },
  {
    id: "event-2",
    titleTa: "மாநில அளவிலான இயற்கை உழவர் கருத்தரங்கம் மற்றும் கண்காட்சி",
    titleEn: "Statewide Organic Agriculture Symposium & Farm Tech Exhibition",
    categoryTa: "விவசாயக் கருத்தரங்கம்",
    categoryEn: "Agricultural Seminar",
    date: "10 மே 2026",
    time: "காலை 9:30 மணி முதல் மாலை 5:00 வரை",
    locationTa: "வ.உ.சி மைதானம், பாளையங்கோட்டை, திருநெல்வேலி",
    locationEn: "VOC Grounds, Palayamkottai, Tirunelveli",
    districtTa: "திருநெல்வேலி",
    districtEn: "Tirunelveli",
    status: "upcoming",
    descriptionTa: "மண் வளம் காத்தல், குறைந்த நீர் பாசன உத்திகள், மற்றும் இயற்கை உரங்கள் தயாரிப்பு குறித்த செய்முறைப் பயிற்சி முகாம்.",
    descriptionEn: "Comprehensive hands-on workshop highlighting regenerative soil enrichment, drip irrigation automation, and cooperative crop marketing.",
    chiefGuestTa: "விவசாயி வெ. செல்வம் & வேளாண்மை விஞ்ஞானிகள்",
    chiefGuestEn: "Agronomist V. Selvam & Agricultural Scientists",
    imageKey: "farmers.jpg",
  },
  {
    id: "event-3",
    titleTa: "தமிழக இளைஞர் எழுச்சி நடைபயணம் மற்றும் வேலைவாய்ப்பு விழிப்புணர்வு",
    titleEn: "Tamil Nadu Youth Empowerment Padayatra & Employment Conclave",
    categoryTa: "இளைஞர் இயக்கம்",
    categoryEn: "Youth Campaign",
    date: "01 ஜூன் 2026",
    time: "காலை 7:00 மணி முதல்",
    locationTa: "காந்தி மண்டபம் முதல் காமராஜர் அரங்கம், சேலம்",
    locationEn: "Gandhi Mandapam to Kamarajar Hall, Salem",
    districtTa: "சேலம்",
    districtEn: "Salem",
    status: "upcoming",
    descriptionTa: "கிராமப்புற இளைஞர்களின் வேலைவாய்ப்பை உறுதி செய்யவும் போதைப்பொருள் விழிப்புணர்வு ஏற்படுத்தவும் 15 கி.மீ நடைபயணம்.",
    descriptionEn: "15 km youth solidarity walk emphasizing zero-tolerance against narcotics, transparent employment opportunities, and sports facilities in villages.",
    chiefGuestTa: "பொறியாளர் இரா. கார்த்திகேயன்",
    chiefGuestEn: "Er. R. Karthikeyan",
    imageKey: "youth.jpg",
  },
  {
    id: "event-4",
    titleTa: "சர்வதேச மகளிர் தின விழா & சாதனைப் பெண்கள் கௌரவிப்பு",
    titleEn: "International Women's Day Gala & Grassroots Achievers Awards",
    categoryTa: "மகளிர் விழா",
    categoryEn: "Women's Gala",
    date: "08 மார்ச் 2026",
    time: "காலை 10:00 மணி",
    locationTa: "பி.எஸ்.ஜி கலையரங்கம், பீளமேடு, கோயம்புத்தூர்",
    locationEn: "PSG Auditorium, Peelamedu, Coimbatore",
    districtTa: "கோயம்புத்தூர்",
    districtEn: "Coimbatore",
    status: "completed",
    descriptionTa: "கிராமப்புறங்களில் சாதித்த 100 பெண் தொழில்முனைவோர் மற்றும் விவசாயத் தாய்மார்களுக்கு விருதுகள் வழங்கப்பட்டன.",
    descriptionEn: "Over 100 grassroots women agri-pioneers and entrepreneurs honored with prestigious state recognition medals and grants.",
    chiefGuestTa: "வழக்கறிஞர் எஸ். அன்பரசி",
    chiefGuestEn: "Adv. S. Anbarasi",
    imageKey: "women.jpg",
  },
];

export const GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    titleTa: "திருச்சி உழவர் உரிமைப் பேரணியில் திரண்ட லட்சக்கணக்கான மக்கள்",
    titleEn: "Overwhelming turnout at the Trichy Farmers' Sovereignty Rally",
    category: "rally",
    categoryTa: "பொதுக்கூட்டங்கள்",
    categoryEn: "Rallies",
    date: "மார்ச் 2026",
    locationTa: "திருச்சிராப்பள்ளி",
    locationEn: "Tiruchirappalli",
    descriptionTa: "கட்சிக் கொடிகளை ஏந்தி உழவர்களின் நியாய விலைக் கோரிக்கையை முழங்கிய மக்கள் பெருந்திரள்.",
    descriptionEn: "Passionate citizens raising the party's green, yellow, and purple banners in solid solidarity.",
    imageKey: "rally.jpg",
  },
  {
    id: "gal-2",
    titleTa: "டெல்டா விவசாயிகளுக்கு மரக்கன்றுகள் மற்றும் இயற்கை உரம் வழங்கல்",
    titleEn: "Free Distribution of Saplings and Organic Nutrients in Delta Hamlets",
    category: "welfare",
    categoryTa: "நலத்திட்டங்கள்",
    categoryEn: "Welfare",
    date: "பிப்ரவரி 2026",
    locationTa: "தஞ்சாவூர்",
    locationEn: "Thanjavur",
    descriptionTa: "இயற்கை விவசாயத்தை ஊக்குவிக்கும் வண்ணம் உழவர்களுக்கு நேரடி உதவிப் பொருட்கள் வழங்கப்பட்டன.",
    descriptionEn: "Delivering regenerative farming inputs directly into the hands of resilient delta cultivators.",
    imageKey: "farmers.jpg",
  },
  {
    id: "gal-3",
    titleTa: "வீரத்தாய் மகளிர் அணியின் கிராமப்புறத் தொழில்முனைவோர் மாநாடு",
    titleEn: "Veerathai Women's Wing Rural Micro-Enterprise Conference",
    category: "meeting",
    categoryTa: "மகளிர் இயக்கம்",
    categoryEn: "Women's Initiatives",
    date: "மார்ச் 2026",
    locationTa: "கோயம்புத்தூர்",
    locationEn: "Coimbatore",
    descriptionTa: "தன்னம்பிக்கையுடன் சிறுதொழில் தொடங்கும் தாய்மார்களுக்கான நிதி ஆலோசனைக் கூட்டம்.",
    descriptionEn: "Empowering rural women collectives with seed funding, marketing guidance, and legal autonomy.",
    imageKey: "women.jpg",
  },
  {
    id: "gal-4",
    titleTa: "மாணவர்களுக்கு செயற்கை நுண்ணறிவு மற்றும் லேப்டாப் வழங்கிய தருணம்",
    titleEn: "Empowering Rural Students with Laptops and Advanced AI Toolkits",
    category: "youth",
    categoryTa: "இளைஞர் மற்றும் கல்வி",
    categoryEn: "Youth & Education",
    date: "பிப்ரவரி 2026",
    locationTa: "மதுரை",
    locationEn: "Madurai",
    descriptionTa: "எளிய குடும்பத்துப் பிள்ளைகளுக்கு சமமான டிஜிட்டல் வாய்ப்புகளை உருவாக்கிய மகிழ்ச்சியான கணம்.",
    descriptionEn: "Bridging the digital divide for first-generation learners with high-performance laptops.",
    imageKey: "youth.jpg",
  },
  {
    id: "gal-5",
    titleTa: "பேரிடர் காலங்களில் ஏழை எளிய மக்களுக்கு உணவு வழங்கிய தியாகப் பணி",
    titleEn: "Volunteer Disaster Response Team Distributing Hot Meals to Stranded Residents",
    category: "welfare",
    categoryTa: "நலத்திட்டங்கள்",
    categoryEn: "Welfare",
    date: "ஜனவரி 2026",
    locationTa: "கடலூர்",
    locationEn: "Cuddalore",
    descriptionTa: "மழை வெள்ளத்தில் பாதிக்கப்பட்ட முதியோர்களுக்கும் குழந்தைகளுக்கும் உடனுக்குடன் சமைத்த உணவு வழங்கப்பட்டது.",
    descriptionEn: "Cadres serving warm nutritious meals around the clock to families marooned by heavy rains.",
    imageKey: "social_service.jpg",
  },
  {
    id: "gal-6",
    titleTa: "கட்சி தேசிய நிறுவனர் தலைவர் அ. முன்னா பாஷா அவர்கள் மக்கள் சந்திப்பு",
    titleEn: "National Founder President A. Munna Basha Engaging with Grassroots Citizens",
    category: "meeting",
    categoryTa: "தலைமைப் பயணம்",
    categoryEn: "Leadership",
    date: "ஜனவரி 2026",
    locationTa: "சென்னை",
    locationEn: "Chennai",
    descriptionTa: "மக்களின் குறைகளை நேரில் கேட்டு உடனுக்குடன் களத்தில் தீர்வு காணும் மக்கள் தலைவர்.",
    descriptionEn: "Listening directly to the lived concerns of working-class families and initiating rapid support.",
    imageKey: "munna.png",
  },
];

export const TIMELINE: Milestone[] = [
  {
    year: "2008",
    titleTa: "கட்சியின் உதயம் (Foundation)",
    titleEn: "Genesis of the Movement",
    descTa: "சாதி, மத வேறுபாடற்ற சமத்துவ தமிழகத்தை உருவாக்க வேண்டும் என்ற உன்னத நோக்கத்துடன் சென்னையில் அ. முன்னா பாஷா அவர்களால் கட்சி தொடங்கப்பட்டது.",
    descEn: "Founded in Chennai by A. Munna Basha on the inviolable principles of communal brotherhood, universal justice, and agrarian preservation.",
  },
  {
    year: "2012",
    titleTa: "டெல்டா உழவர் எழுச்சி நடைபயணம்",
    titleEn: "Delta Agrarian Solidarity March",
    descTa: "காவிரி நீர் உரிமை மற்றும் குறுவை சாகுபடிப் பாதுகாப்பிற்காக தஞ்சை முதல் திருச்சி வரை 120 கி.மீ வரலாற்றுச் சிறப்புமிக்க நடைபயணம்.",
    descEn: "A 120 km historic march mobilizing over 40,000 farmers demanding equitable irrigation release and zero crop confiscations.",
  },
  {
    year: "2016",
    titleTa: "வீரத்தாய் மகளிர் அணி உருவாக்கம்",
    titleEn: "Launch of Veerathai Women's Wing",
    descTa: "பெண்களின் சம உரிமை, மதுவிலக்குப் போராட்டம் மற்றும் கிராமப்புறப் பொருளாதார முன்னேற்றத்திற்காக மகளிர் அணி தனி அமைப்பாக விரிவாக்கம் பெற்றது.",
    descEn: "Formal establishment of a dedicated women's wing organizing grassroots campaigns against alcoholism and fostering financial literacy.",
  },
  {
    year: "2020",
    titleTa: "கொரோனா பெருந்தொற்று மக்கள் உதவி இயக்கம்",
    titleEn: "Pandemic Humanitarian Relief Campaign",
    descTa: "ஊரடங்கு காலத்தில் தமிழகம் முழுவதும் 5 லட்சத்திற்கும் மேற்பட்ட குடும்பங்களுக்கு மளிகைப் பொருட்கள், உணவு மற்றும் மருந்துகள் இலவசமாக வழங்கப்பட்டன.",
    descEn: "Comprehensive pandemic relief providing ration kits, cooked meals, and oxygen concentrators to over 500,000 families statewide.",
  },
  {
    year: "2024",
    titleTa: "டிஜிட்டல் இளைஞர் எழுச்சி மாநாடு",
    titleEn: "Digital Youth Conclave",
    descTa: "38 மாவட்டங்களிலும் இளம் தலைமுறையினரைத் தயார்படுத்தும் 'கலாம் டிஜிட்டல் பயிற்சிப் பூங்கா' திட்டங்கள் தொடங்கப்பட்டன.",
    descEn: "Inauguration of youth technology bootcamps across all 38 districts to train graduates in contemporary digital careers.",
  },
  {
    year: "2026",
    titleTa: "18-ஆம் ஆண்டு மக்கள் நலப் பிரகடனம்",
    titleEn: "18-Year People's Welfare Charter",
    descTa: "1,25,000-க்கும் மேற்பட்ட உறுதியான தொண்டர்களுடன் தமிழகத்தின் முன்னணி மக்கள் இயக்கமாக வீறுநடை போடுகிறது AINNMK.",
    descEn: "Marching forward with 125,000+ active cadres, presenting a comprehensive socio-economic manifesto for a self-sufficient Tamil Nadu.",
  },
];

export const FLAG_SYMBOL_INFO = {
  flag: {
    colors: [
      {
        color: "bg-emerald-600",
        nameTa: "பச்சை நிறம் (Green)",
        nameEn: "Emerald Green",
        meaningTa: "பசுமை, விவசாயம், உழவர் வாழ்வாதாரம் மற்றும் தமிழகத்தின் வளம்.",
        meaningEn: "Fertile soils, agricultural sovereignty, ecological harmony, and agrarian prosperity.",
      },
      {
        color: "bg-amber-400",
        nameTa: "மஞ்சள் நிறம் (Yellow)",
        nameEn: "Golden Yellow",
        meaningTa: "மங்களம், அறிவு, விடியல் மற்றும் புதிய எதிர்காலத்தின் நம்பிக்கை.",
        meaningEn: "Wisdom, auspicious dawn, enlightenment, and unshakeable hope for a brighter future.",
      },
      {
        color: "bg-purple-700",
        nameTa: "ஊதா நிறம் (Purple)",
        nameEn: "Royal Purple",
        meaningTa: "சமத்துவம், கண்ணியம், தியாகம் மற்றும் சாதி மதமற்ற மக்கள் ஒற்றுமை.",
        meaningEn: "Human dignity, selfless sacrifice, equal respect, and united social harmony.",
      },
    ],
  },
  symbol: {
    nameTa: "செழித்து வளரும் நெற்கதிர் (Paddy Crops)",
    nameEn: "The Golden Sheaf of Paddy Crops",
    descriptionTa: "நெற்கதிர் என்பது வெறும் பயிர் அல்ல; அது கோடான கோடி தமிழர்களின் பசிப்பிணி போக்கும் தாய்ப்பால் போன்றது. உழவன் கையில் நெற்கதிர் செழித்தால் மட்டுமே நாடு செழிக்கும் என்ற உயர்ந்த தத்துவத்தின் அடையாளம்.",
    descriptionEn: "The paddy crop is the sacred emblem of life, sustenance, and unyielding resilience. It signifies that the prosperity of any civilization is intrinsically anchored in the honor of the farmer.",
  },
};

