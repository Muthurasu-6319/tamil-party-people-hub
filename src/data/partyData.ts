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
    id: "jai-babu",
    nameTa: "க. டில்லி பாபு (எ) ஜெய் பாபு",
    nameEn: "K. Dilli Babu (a) Jai Babu",
    roleTa: "தேசிய தலைவர்",
    roleEn: "National President",
    category: "state",
    districtTa: "சென்னை / தமிழ்நாடு",
    districtEn: "Chennai / Tamil Nadu",
    bioTa: "அகில இந்திய நம் நாடு மக்கள் கட்சியின் தேசிய தலைவராகப் பணியாற்றி, கட்சியின் தேசிய அளவிலான வளர்ச்சி, மக்கள் நலப் பணிகள் மற்றும் சமூக நீதித் திட்டங்களைத் தலைமையேற்று வழிநடத்தி வருபவர்.",
    bioEn: "Serving as the National President of Agila India Nam Nadu Makkal Katchi, leading nationwide organizational growth, public welfare initiatives, and social justice campaigns.",
    phone: "+91 97898 81717",
    email: "nationalpresident@ainnmk.org",
    quoteTa: "மக்களின் உரிமையும் சமத்துவ வாழ்வியலுமே நம் இயக்கத்தின் முதன்மை நோக்கம்; ஒற்றுமையே நம் வெற்றியின் அடித்தளம்!",
    quoteEn: "People's rights and an equal society are our primary mission; unity is the foundation of our victory!",
    imageKey: "jai-babu.jpg",
  },
  {
    id: "anand-ji",
    nameTa: "K. ஆறுமுகம் (எ) ஆனந்த் ஜி",
    nameEn: "K. Arumugam (a) Anand Ji",
    roleTa: "தேசிய செயலாளர்",
    roleEn: "National Secretary",
    category: "state",
    districtTa: "கரூர் மாவட்டம்",
    districtEn: "Karur District",
    bioTa: "அகில இந்திய நம் நாடு மக்கள் கட்சியின் தேசிய செயலாளராகப் பணியாற்றி, கரூர் மாவட்டம் மற்றும் தேசிய அளவிலான கட்சிப் பணிகள், தொண்டர் ஒருங்கிணைப்பு மற்றும் மக்கள் நலத் திட்டங்களை முன்னெடுத்து வருபவர்.",
    bioEn: "Serving as the National Secretary of Agila India Nam Nadu Makkal Katchi, spearheading organizational activities in Karur District and across the nation.",
    phone: "+91 97898 81717",
    email: "secretary@ainnmk.org",
    quoteTa: "மக்களுக்கான நேர்மையான சேவையும் தொண்டர்களின் ஒற்றுமையுமே நம் இயக்கத்தின் வலிமை!",
    quoteEn: "Honest service to the people and unity among our cadres are the true strength of our movement!",
    imageKey: "anand-ji.jpg",
  },
  {
    id: "pavan-ji",
    nameTa: "பி. புனித வேல் (எ) பவன் ஜி",
    nameEn: "P. Punitha Vel (a) Pavan Ji",
    roleTa: "தமிழ்நாடு மாநில பொதுச் செயலாளர்",
    roleEn: "Tamil Nadu State General Secretary",
    category: "state",
    districtTa: "சென்னை",
    districtEn: "Chennai",
    bioTa: "அகில இந்திய நம் நாடு மக்கள் கட்சியின் தமிழ்நாடு மாநில பொதுச் செயலாளராகப் பணியாற்றி, சென்னை மற்றும் தமிழகம் முழுவதும் கட்சிக் கட்டமைப்பை வலுப்படுத்தி மக்கள் பணியாற்றி வருபவர்.",
    bioEn: "Serving as the Tamil Nadu State General Secretary of Agila India Nam Nadu Makkal Katchi, strengthening organizational presence across Chennai and Tamil Nadu.",
    phone: "+91 97898 81717",
    email: "stategs@ainnmk.org",
    quoteTa: "தமிழகத்தின் கடைக்கோடி மக்களுக்கும் நீதியும் நலத்திட்டங்களும் சென்றடைய அயராது உழைப்போம்!",
    quoteEn: "We will work tirelessly to ensure justice and welfare reach every last citizen across Tamil Nadu!",
    imageKey: "pavan-ji.jpg",
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
    id: "news-price-control",
    slug: "ainnmk-demands-price-reduction-over-freebies",
    titleTa: "மக்களுக்கு இலவசம் வேண்டாம்; விலைவாசியை குறைக்க நடவடிக்கை — அகில இந்திய நம் நாடு மக்கள் கட்சி",
    titleEn: "People Don't Need Freebies, Reduce Cost of Living: AINNMK Urges Immediate Action",
    categoryTa: "பத்திரிகைச் செய்தி",
    categoryEn: "Press News",
    date: "13 நவம்பர் 2026",
    readTimeTa: "2 நிமிட வாசிப்பு",
    readTimeEn: "2 min read",
    summaryTa: "மக்களுக்கு தேவையற்ற இலவசங்கள் வழங்குவதை விட அத்தியாவசியப் பொருட்களின் விலைவாசியைக் குறைக்க அரசு உடனடியாக நடவடிக்கை எடுக்க வேண்டும் என அகில இந்திய நம் நாடு மக்கள் கட்சி வலியுறுத்தியுள்ளது.",
    summaryEn: "Published in Amma Daily (13.11.2026): AINNMK leadership urged the government to focus on bringing down essential commodity prices rather than distributing temporary freebies.",
    contentTa: [
      "அகில இந்திய நம் நாடு மக்கள் கட்சி சார்பில் தேசிய நிறுவனர் தலைவர் அ. முன்னா பாஷா, தேசிய தலைவர் க. டில்லி பாபு (எ) ஜெய் பாபு ஆகியோர் தலைமையில் வெளியிடப்பட்ட செய்தியில், மக்களுக்கு தேவையற்ற இலவசங்கள் வழங்குவதை விட அத்தியாவசியப் பொருட்களின் விலைவாசியைக் குறைக்க அரசு உடனடியாக நடவடிக்கை எடுக்க வேண்டும் என வலியுறுத்தப்பட்டுள்ளது.",
      "விலைவாசி உயர்வால் சாதாரண மற்றும் நடுத்தரக் குடும்பங்கள் கடுமையாகப் பாதிக்கப்பட்டு வரும் நிலையில், எரிபொருள், உணவுப் பொருட்கள் மற்றும் அன்றாடத் தேவைகளின் விலைகளைக் கட்டுப்படுத்தி மக்களின் வாழ்வாதாரத்தைப் பாதுகாக்க வேண்டும் என்று அகில இந்திய நம் நாடு மக்கள் கட்சி கோரிக்கை விடுத்துள்ளது. (வெளியீடு: அம்மா நாளிதழ் - 13.11.2026).",
    ],
    contentEn: [
      "In a press statement led by National Founder President A. Munna Basha and National President K. Dilli Babu (a) Jai Babu, AINNMK emphasized that reducing inflation and stabilizing essential commodity prices is far more vital than short-term freebies.",
      "With ordinary and middle-class families struggling under rising living costs, the party urged immediate policy action on fuel, food, and daily essentials. (Published in Amma Daily, 13.11.2026).",
    ],
    isFeatured: true,
    imageKey: "news-price-control.jpg",
  },
  {
    id: "news-party-equality",
    slug: "ainnmk-equality-and-cadre-ownership-vision",
    titleTa: "அகில இந்திய நம் நாடு மக்கள் கட்சி: சமத்துவக் கொள்கையும் தொண்டர்கள் உரிமைப் பார்வையும்",
    titleEn: "AINNMK's Vision: Equality Beyond Divisions & Every Member as an Owner of the Movement",
    categoryTa: "இதழ் கட்டுரை",
    categoryEn: "Editorial",
    date: "நவம்பர் 2026",
    readTimeTa: "3 நிமிட வாசிப்பு",
    readTimeEn: "3 min read",
    summaryTa: "2008-ஆம் ஆண்டு முதல் சாதி, மதம், மொழி, இனம் பாராமல் அனைவரும் சமம் என்ற கொள்கையோடு செயல்படும் AINNMK இயக்கத்தில், கட்சியில் உள்ள அனைவரும் உரிமையாளர்களாக இருக்க வேண்டும் என்பதே எங்கள் நோக்கம்.",
    summaryEn: "Featured in Sumaithangi (Nov 2026): Founded in 2008, AINNMK operates without caste, religious, or wealth discrimination, inviting youth, students, and women to join as equal owners of the party.",
    contentTa: [
      "அகில இந்திய நம் நாடு மக்கள் கட்சி 2008 ஆம் ஆண்டு தொடங்கிய கட்சி. நம் மக்கள் பணியாக சாதி, மத, மொழி, இனம் எதிர்பாராமல் நம் எல்லோரும் ஒரே சமம் என்ற சிறப்பான முறையில் செயல்பட்டுக் கொண்டு வருகிறது. ஏற்றத் தாழ்வு பார்க்காமல், ஏழை பணக்காரன் எனப் பார்க்காமல் மக்களுக்குத் தேவையான கருத்துக்களையும் நலத்திட்டங்களையும் முன்னெடுத்து வருகின்றோம்.",
      "அந்த அடிப்படையில் அனைவரும் ஆதரவாக அமைந்தால் நிச்சயமாக மக்கள் சேவை பலமாக செயல்பாட்டுக்கு வரும் என்று உறுதி கூறுகிறோம். மாணவரணி, இளைஞர் அணி, மகளிர் அணி என அனைவரும் நம் குடும்பம் என்று நினைத்து ஆதரவு தர வேண்டும் என்று கேட்டுக் கொள்ளப்படுகிறது.",
      "பல ஆண்டுகளாக சரியான முறையில் கட்டமைப்பு அமைய வேண்டும் என்பது எங்களுடைய கோரிக்கை. கட்சியில் இருப்பவர்கள் அனைவரும் உரிமையாளர்களாகவும் பொறுப்புதாரர்களாகவும் இருக்க வேண்டும் என்பதே எங்களுடைய நோக்கம். (வெளியீடு: சுமைதாங்கி இதழ் - நவம்பர் 2026).",
    ],
    contentEn: [
      "Founded in 2008, Agila India Nam Nadu Makkal Katchi works on the foundational belief that all citizens are equal regardless of caste, religion, language, or economic status.",
      "Inviting students, youth, and women's wings to join as one family, the leadership affirmed that building strong grassroots structures where every participant is a stakeholder and owner of the party remains its core mission. (Published in Sumaithangi Magazine, November 2026).",
    ],
    imageKey: "news-party-equality.jpg",
  },
  {
    id: "news-cm-demands",
    slug: "ainnmk-charter-of-demands-to-tamil-nadu-cm",
    titleTa: "முதல்வர் கவனிப்பாரா? — விவசாயிகள், வாகன ஓட்டுநர்கள், மீனவர்கள் நலன் & சாலை வசதி கோரிக்கைகள்",
    titleEn: "Will the Chief Minister Pay Attention? AINNMK Submits Key Welfare & Infrastructure Demands",
    categoryTa: "தலைமைச் செய்தி",
    categoryEn: "Headlines",
    date: "அக்டோபர் 2026",
    readTimeTa: "4 நிமிட வாசிப்பு",
    readTimeEn: "4 min read",
    summaryTa: "விவசாயிகள் கடன் தள்ளுபடி, வீடில்லாத ஏழைகளுக்கு வீட்டு வசதி, வாகன ஓட்டுநர்கள் மற்றும் நகைக் கடன் தள்ளுபடி, மீனவர் பாதுகாப்பு, தரமான சாலைகள் மற்றும் இருசக்கர வாகன சுங்கச்சாவடி சிரமம் நீக்கம் உள்ளிட்ட கோரிக்கைகளை AINNMK தலைவர்கள் விடுத்துள்ளனர்.",
    summaryEn: "Featured in Sumaithangi (Oct 2026): AINNMK leaders submitted comprehensive demands covering farm & driver loan waivers, housing for the poor, fishermen safety, road repairs, and two-wheeler toll relief.",
    contentTa: [
      "அகில இந்திய நம் நாடு மக்கள் கட்சி தேசிய நிறுவனர் தலைவர் அ. முன்னா பாஷா, தேசிய தலைவர் க. டில்லிபாபு (எ) ஜெய்பாபு, தமிழ்நாடு மாநில பொதுச் செயலாளர் வேலு (எ) பவன் ஜி மற்றும் நிர்வாகிகள் தமிழ்நாடு முதலமைச்சர் ஜோசப் விஜய்க்கு அகில இந்திய நம் நாடு மக்கள் கட்சி சார்பில் கோரிக்கைகள் விடுத்துள்ளனர்.",
      "தமிழகத்தில் உள்ள விவசாயிகளின் கடன்களை முழுவதுமாக தள்ளுபடி செய்ய வேண்டும், வீடில்லாத ஏழை மக்களுக்கு வீட்டு வசதியை ஏற்படுத்தித் தர வேண்டும், தேவையில்லாத இலவசச் செலவு செய்யாமல் மக்களுக்குத் தேவையான முக்கியமான நலத் திட்டங்களை ஆய்வு செய்து செயல்பட வேண்டும்.",
      "வாகன ஓட்டுநர்கள் கடன் மற்றும் ஏழை மக்களின் நகைக் கடனை தள்ளுபடி செய்ய வேண்டும். ஏழை மக்கள் வாழ்வாதாரம் மேம்பட சிறுதொழில்கள் உருவாக்க வங்கி மூலமாக மானியம் தர வேண்டும். முக்கியமாக மீனவர்கள் பாதுகாப்பைப் பலப்படுத்தி தேவையான வசதிகள் செய்து தர வேண்டும்.",
      "மேலும், சாலைகள் குண்டும் குழியுமாக இருப்பதால் மாணவர்கள், வேலைக்குச் செல்பவர்கள் மற்றும் பொதுமக்கள் சிரமப்படுகின்றனர்; சுங்கச்சாவடிகளில் (டோல்கேட்) இருசக்கர வாகனங்கள் செல்லவும் சிரமம் ஏற்படுகிறது. தேவையற்ற சட்டசபை விமர்சனங்களைத் தவிர்த்து மக்களுக்குத் தேவையான அடிப்படை வசதிகளைச் செய்து தர வேண்டும் எனக் கோரிக்கை வைத்துள்ளனர். (வெளியீடு: சுமைதாங்கி இதழ் - அக்டோபர் 2026).",
    ],
    contentEn: [
      "AINNMK National Founder President A. Munna Basha, National President K. Dilli Babu (a) Jai Babu, Tamil Nadu State General Secretary Pavan Ji, and office bearers submitted key demands to the Tamil Nadu Chief Minister.",
      "Key demands include complete waiver of farm loans, housing for homeless poor families, waivers for drivers' vehicle loans and poor citizens' jewel loans, bank subsidies for micro-enterprises, and enhanced protection for fishermen.",
      "The party also highlighted pothole-ridden roads causing severe traffic and commuter delays, two-wheeler difficulties at toll gates, and urged prioritizing essential public infrastructure. (Published in Sumaithangi Magazine, October 2026).",
    ],
    imageKey: "news-cm-demands.jpg",
  },
  {
    id: "news-2026-election",
    slug: "ainnmk-towards-2026-assembly-election",
    titleTa: "2026 தேர்தலை நோக்கி நம் அகில இந்திய நம் நாடு மக்கள் கட்சி",
    titleEn: "Towards 2026 Tamil Nadu Assembly Elections: Agila India Nam Nadu Makkal Katchi (AINNMK)",
    categoryTa: "பத்திரிகைச் செய்தி",
    categoryEn: "Press News",
    date: "12 ஜூன் 2025",
    readTimeTa: "3 நிமிட வாசிப்பு",
    readTimeEn: "3 min read",
    summaryTa: "வரும் 2026 சட்டமன்றத் தேர்தலில் தமிழ்நாட்டின் அனைத்து தொகுதிகளிலும் வேட்பாளர்களை நிறுத்தி, மக்கள் நலனில் அக்கறையோடு நேரடியாகத் தேர்தலில் பங்கேற்க அகில இந்திய நம் நாடு மக்கள் கட்சி முடிவெடுத்துள்ளது.",
    summaryEn: "Agila India Nam Nadu Makkal Katchi (AINNMK), founded in 2008 on the principles of equality beyond caste, religion, race, and language, has announced its decision to field candidates across all constituencies in the 2026 Tamil Nadu Assembly Elections.",
    contentTa: [
      "அகில இந்திய நம் நாடு மக்கள் கட்சி 2008-ம் ஆண்டு தொடங்கி மக்களுக்காக பல்வேறு சமூக நலப் பணிகளை மேற்கொண்டு வருகிறது. சாதி, மதம், இனம், மொழி என எந்த வேறுபாடும் இல்லாமல் எல்லோரும் சமமாக இருக்க வேண்டும் என்பதே கட்சியின் அடிப்படைக் கொள்கையாகும்.",
      "தமிழ்நாட்டில் மாநிலம் முழுவதும் அமைக்கப்பட்டுள்ள நிர்வாக அமைப்புகள்: மாநில செயலாளர்கள், மாவட்ட செயலாளர்கள், ஒன்றிய செயலாளர்கள், நகர செயலாளர்கள், மாநகராட்சி செயலாளர்கள், நகராட்சி செயலாளர்கள், ஊராட்சி செயலாளர்கள், பேரூராட்சி செயலாளர்கள், விவசாய அணிகள், மீனவர் அணி, மாணவர் அணி, இளைஞர் அணி, மருத்துவர் அணி, வழக்கறிஞர் அணி, கலை நிகழ்ச்சி அணி, வாகன ஓட்டுநர் அணி, சமூக ஆதரவாளர்கள், வட்டச் செயலாளர்கள், வார்டு செயலாளர்கள், வர்த்தக அணி, தொழிலாளி அணி மற்றும் மகளிர் அணிகள் ஆகியவை செயல்பட்டு வருகின்றன.",
      "இந்நிலையில் வரும் 2026 சட்டமன்றத் தேர்தலில், தமிழ்நாட்டின் அனைத்து தொகுதிகளிலும் வேட்பாளர்களை நிறுத்தி, நேரடியாக தேர்தலில் பங்கேற்க அகில இந்திய நம் நாடு மக்கள் கட்சி முடிவெடுத்துள்ளது, மக்கள் நலனில் அக்கறையோடு. (தொடர்புக்கு: munnabasha.a5@gmail.com | Pratha Pratigya நாளிதழ் - 12 June 2025).",
    ],
    contentEn: [
      "Agila India Nam Nadu Makkal Katchi (AINNMK), established in 2008, has been carrying out numerous social welfare initiatives with equality beyond caste, religion, race, and language as its core principle.",
      "Across Tamil Nadu, the party operates a comprehensive grassroots structure spanning state, district, union, town, corporation, municipality, panchayat, and ward secretaries, along with farmers, fishermen, students, youth, doctors, advocates, cultural, drivers, traders, workers, and women's wings.",
      "With deep commitment to public welfare, AINNMK has resolved to contest the upcoming 2026 Tamil Nadu Assembly Elections directly by fielding candidates across all constituencies. (Published in Pratha Pratigya Daily, 12 June 2025 | Contact: munnabasha.a5@gmail.com).",
    ],
    isFeatured: true,
    imageKey: "news-2026-election.jpg",
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

export interface ElectionPromise {
  number: string;
  titleTa: string;
  titleEn: string;
  categoryTa: string;
  categoryEn: string;
  fullTextTa: string;
  fullTextEn: string;
  highlightsTa: string[];
  highlightsEn: string[];
}

export const MANIFESTO_META = {
  partyShort: "AINNMK",
  partyNameTa: "அகில இந்திய நம் நாடு மக்கள் கட்சி",
  partyNameEn: "AGILA INDIA NAM NAADU MAKKAL KATCHI",
  founderNameTa: "அ. முன்னா பாஷா",
  founderNameEn: "A. Munna Basha",
  founderRoleTa: "தேசிய நிறுவனர் தலைவர்",
  founderRoleEn: "National Founder President",
  phones: ["9789881717", "9790917477"],
  email: "munnabashaa5@gmail.com",
  titleTa: "அகில இந்திய நம் நாடு மக்கள் கட்சியின் தேர்தல் வாக்குறுதி",
  titleEn: "Official Election Manifesto of Agila India Nam Nadu Makkal Katchi",
  signOffLine1Ta: "இப்படிக்கு",
  signOffLine2Ta: "அகில இந்திய நம் நாடு மக்கள் கட்சி",
  signOffLine3Ta: "தேசிய நிறுவனர் & தேசியத் தலைவர்",
};

export const ELECTION_PROMISES: ElectionPromise[] = [
  {
    number: "01",
    titleTa: "அனைவருக்கும் இலவசக் கல்வி & அரசுப் பள்ளி மாணவர்களுக்கு அரசு வேலை",
    titleEn: "Free Education from Grade 1 to Graduation & Guaranteed Government Jobs",
    categoryTa: "கல்வித் திட்டம்",
    categoryEn: "Education",
    fullTextTa:
      "முதலாம் வகுப்பு முதல் பட்டதாரி படிப்பு வரை இந்தியா முழுவதும் இலவச கல்வி திட்டம், 500/- மாணவர்கள் படிக்கும் பள்ளிக்கூடங்களில் பெண்களுக்கென்று ஆண்களுக்கென்று 100/- கழிப்பறைகள் கட்டியிருக்க வேண்டும் என்னும் சட்டம் கட்டாயப்படுத்தப்படும். அனைத்து மாணவர்களுக்கும் இலவச நோட்டு புத்தகங்கள், இலவச சீருடை, இலவச காலணிகள், இலவச மடிக்கணினி, இலவச மிதிவண்டி, காலை உணவு, மதிய உணவு கட்டாயம் வழங்கப்பட வேண்டும். அரசாங்க பள்ளியில் படிக்கும் மாணவர்களுக்கு கட்டாயம் அரசாங்க வேலை வாய்ப்பு ஏற்படுத்தித் தரப்படும். அரசாங்க வேலை செய்யும் அனைவரும் அரசு பள்ளியில் மட்டுமே அவர்கள் பிள்ளையை படிக்க வைக்க வேண்டும்; மீறினால் அரசாங்க வேலையை விட்டு வெளியேற்றப்படுவார்கள்.",
    fullTextEn:
      "Free education from Class 1 up to university graduation across India. Mandatory law requiring schools with 500 students to build 100 separate restrooms for girls and boys. Free notebooks, uniforms, footwear, laptops, bicycles, breakfast, and midday meals for all students. Guaranteed government job opportunities for students studying in government schools. All government employees must enroll their children exclusively in government schools; violations will result in dismissal from government service.",
    highlightsTa: [
      "1-ஆம் வகுப்பு முதல் பட்டதாரி வரை இலவச கல்வி",
      "இலவச மடிக்கணினி, மிதிவண்டி, காலை & மதிய உணவு",
      "அரசுப் பள்ளி மாணவர்களுக்கு கட்டாய அரசு வேலை",
    ],
    highlightsEn: [
      "Free education up to degree level",
      "Free laptops, bicycles & breakfast/lunch",
      "Guaranteed govt jobs for govt school students",
    ],
  },
  {
    number: "02",
    titleTa: "அனைவருக்கும் இலவச மருத்துவம் & 500 குடும்பத்திற்கு ஓர் அரசு மருத்துவமனை",
    titleEn: "Universal Free Healthcare & Government Hospital for Every 500 Families",
    categoryTa: "மருத்துவம் & சுகாதாரம்",
    categoryEn: "Healthcare",
    fullTextTa:
      "அனைத்து அரசாங்க மருத்துவமனையிலும் சிறிய அறுவை சிகிச்சை முதல் பெரிய அறுவை சிகிச்சை வரை அனைத்து சமூகத்திற்கும் இலவசமாக மருத்துவம் பார்க்கப்படும். சாதி, மதம், இனம், மொழி இவற்றைக் கடந்து அரசு மருத்துவர்கள் அவர்கள் பணியை நீதியுடன் நேர்மையுடன் செய்ய வேண்டும். அரசாங்க பணியில் உள்ள அனைவரும் அரசு மருத்துவமனையில் மட்டும் சிகிச்சை பெற வேண்டும்; மீறினால் அரசாங்க வேலையில் இருந்து நீக்கப்படுவார்கள். 500 குடும்பத்தினர் வசிக்கும் ஒரு ஊரில் கட்டாய ஒரு அரசு மருத்துவமனை அமைத்து தரப்படும். ஒரு அரசாங்க மருத்துவமனையில் 1000 பேர் மட்டுமே சிகிச்சை பெற வேண்டும். அவர்களுக்குத் தேவையான கழிப்பறைகள், உணவு, மருந்து, படுக்கை அறை அனைத்தும் இலவசமாக மட்டுமே அமைத்து தரப்படும். அரசு மருத்துவமனையில் சிகிச்சை பெறுபவர்களிடம் பணம் வாங்குபவர்கள் அரசு பணியில் இருந்து நீக்கப்படுவார்கள்; சட்டப்படி அவர்கள் மீது நடவடிக்கை எடுக்கப்படும்.",
    fullTextEn:
      "Completely free medical treatment from minor to major surgeries across all government hospitals for every community without caste, religious, racial, or linguistic bias. All government employees must seek treatment exclusively at government hospitals or face termination. One government hospital will be mandatorily established for every village with 500 families, capped at 1,000 patients per hospital, with free restrooms, food, medicines, and beds. Demanding bribes from patients will result in immediate dismissal and strict legal action.",
    highlightsTa: [
      "சிறிய முதல் பெரிய அறுவை சிகிச்சை வரை இலவசம்",
      "500 குடும்பங்களுக்கு 1 அரசு மருத்துவமனை",
      "உணவு, மருந்து, படுக்கை அனைத்தும் இலவசம்",
    ],
    highlightsEn: [
      "Free surgeries of all scales",
      "1 hospital per 500 families",
      "Free meals, medicines & hospital beds",
    ],
  },
  {
    number: "03",
    titleTa: "வீட்டிற்கு இருவருக்கு கட்டாய அரசாங்க வேலைவாய்ப்பு",
    titleEn: "Mandatory Government Jobs for Educated Graduates in Every Home",
    categoryTa: "வேலைவாய்ப்பு",
    categoryEn: "Employment",
    fullTextTa:
      "இந்தியாவில் இருக்கும் ஒவ்வொரு வீட்டிலும் படித்த பட்டதாரிகளுக்கு ஆண் பெண் இருவருக்கும் கட்டாய அரசாங்க வேலை தரப்படும். 20 வயதிலிருந்து 30 வயதிற்குள் உள்ளவர்களுக்கு மட்டும்; 30 வயதிற்கு மேல் அரசாங்க வேலை பெறாதவர்கள் அரசாங்கத்தின் கண்பார்வைக்கு எடுத்துச் சென்றால் வயதிற்கு ஏற்றாற்போல் அவர்களுக்கு தகுதியான அரசாங்க வேலை கொடுக்கப்படும். இவைகள் அரசாங்க ஆணையாக பிறப்பிக்கப்படும்.",
    fullTextEn:
      "Mandatory government employment will be provided to both male and female educated graduates in every household across India for ages 20 to 30. Those above 30 who have not received government employment can bring their case to the government's attention to receive suitable government roles matching their age. These measures will be issued as official government orders.",
    highlightsTa: [
      "வீட்டிலுள்ள ஆண்-பெண் பட்டதாரிகளுக்கு அரசு வேலை",
      "20–30 வயதினருக்கு உடனடி பணி",
      "30 வயதிற்கு மேற்பட்டோருக்கும் தகுதியான அரசுப் பணி",
    ],
    highlightsEn: [
      "Govt jobs for male & female graduates per home",
      "Priority placement for ages 20–30",
      "Age-appropriate govt jobs for 30+ citizens",
    ],
  },
  {
    number: "04",
    titleTa: "ஜி.எஸ்.டி (GST) வரி நீக்கம், தரக் கட்டுப்பாடு & எம்.ஆர்.பி (MRP) பாதுகாப்பு",
    titleEn: "Abolition of GST, Quality Enforcement & Strict MRP Pricing",
    categoryTa: "பொருளாதாரம் & வரி சீர்திருத்தம்",
    categoryEn: "Economy & Tax",
    fullTextTa:
      "நாம் இருவர் நமக்கு ஒருவர் என்ற குடும்ப கட்டுப்பாடு நீக்கப்படும்; அவரவர் விருப்பம்போல் பிள்ளைகளை பெற்றுக் கொள்ளலாம் என்ற அரசாங்க உத்தரவு அமுல்படுத்தப்படும். ஜி.எஸ்.டி (GST) வரி நீக்கப்படும். வாங்கும் உணவுப் பொருள் மற்றும் அனைத்து பொருட்களும் பொருளில் தரம் இல்லை என்றால் சட்டப்படி அதை வினியோகம் செய்தவர் மீது தகுந்த நடவடிக்கை எடுக்கப்படும். எம்.ஆர்.பி (MRP) விலை பத்து ரூபாய் என்றால் அதே விலைக்கு விற்க வேண்டும்; இது அனைத்து விநியோகஸ்தர்களுக்கும் பொருந்தும். இச்சட்டத்தை மீறுபவர்கள் மீது மக்கள் கொடுக்கும் புகாரின் மீது அரசாங்கம் தகுந்த நடவடிக்கை எடுக்கப்படும்.",
    fullTextEn:
      "Removal of restrictive family planning limits so families may have children by their own choice. Complete abolition of GST tax. Strict legal action against distributors of substandard food or consumer goods. Mandatory adherence to exact MRP pricing across all distributors, with prompt government action on citizen complaints against overcharging.",
    highlightsTa: [
      "ஜி.எஸ்.டி (GST) வரி முழுமையாக நீக்கம்",
      "குடும்பக் கட்டுப்பாடு கட்டாயம் நீக்கப்படும்",
      "MRP விலையை விட அதிகம் விற்றால் கடும் நடவடிக்கை",
    ],
    highlightsEn: [
      "Complete abolition of GST",
      "Removal of family size restrictions",
      "Strict enforcement of MRP & product quality",
    ],
  },
  {
    number: "05",
    titleTa: "மக்கள் ஒப்புதலுடன் மட்டுமே விலைவாசி & வரி நிர்ணயம்",
    titleEn: "People-Approved Price & Tax Regulation Across States",
    categoryTa: "விலைவாசி கட்டுப்பாடு",
    categoryEn: "Price Control",
    fullTextTa:
      "சமையல் எரிவாயு, பெட்ரோல் விலை, டீசல் விலை, உணவுப் பொருட்கள் விலை, அனைத்து வாகனங்கள் விலை, மருந்து பொருட்கள், வீட்டு வரி, குடிநீர் வரி, மின்சார வரி, வீடு கட்டுமான வரி அனைத்தும் ஒரு வருடத்திற்கு ஒரு முறை விலைவாசி உயர்வு சட்டம் அமல்படுத்தும் போது இந்திய மக்களிடம் ஒவ்வொரு மாநிலத்திலும் மக்கள் விருப்பம் தெரிவித்தால் மட்டும் விலைவாசி உயர்வு அமல்படுத்தப்படும். இச்சட்டம் ஒவ்வொரு மாநில முதலமைச்சர்களும் நடைமுறைப்படுத்த வேண்டும் என்ற அரசாணை சட்டம் ஏற்படுத்தப்படும். வாக்களித்த மக்களுக்கு இடையூறாக இருக்கும் மாநில முதலமைச்சர்கள் மீது மக்கள் குற்றம் தெரிவித்தால் மாநில அமைச்சரவை மக்களுக்கு ஏற்றாற்போல் மாற்றி அமைக்கப்படும்.",
    fullTextEn:
      "Annual revisions to cooking gas, petrol, diesel, food items, vehicles, medicines, property tax, water tax, electricity tariff, and building tax will only take effect if approved by the people of each state. Chief Ministers will be legally mandated to implement this ordinance, and cabinets acting against public welfare will be restructured as demanded by citizens.",
    highlightsTa: [
      "பெட்ரோல், டீசல், கேஸ், மருந்து விலை கட்டுப்பாடு",
      "மக்கள் ஒப்புதல் இன்றி வரி உயர்வு கிடையாது",
      "மக்கள் நலனுக்கு எதிரான நிர்வாகம் மாற்றியமைக்கப்படும்",
    ],
    highlightsEn: [
      "Controls on fuel, gas, food & medicine prices",
      "No tax or price hike without public consent",
      "Accountability for state administration",
    ],
  },
  {
    number: "06",
    titleTa: "இந்தியா முழுவதும் ஒரே ரேஷன் கார்டு & நியாயவிலைக் கடை சீர்திருத்தம்",
    titleEn: "Unified Ration Card System Across India",
    categoryTa: "பொது விநியோகத் திட்டம்",
    categoryEn: "Public Distribution",
    fullTextTa:
      "இந்தியா முழுவதும் ரேஷன் கடைகளில் அனைத்து தரப்பினருக்கும் ஒரே ரேஷன் கார்டு வழங்கப்படும். அவர்களுக்கு அனைத்து பொருள்களும் நியாயமான முறையில் சென்றடைய அரசாணை பிறப்பிக்கப்படும். ஐந்து மாதங்கள் மேல் ரேஷன் கடையில் எந்த ஒரு பொருளும் வாங்காமல் இருக்கும் ரேஷன் அட்டையை கண்டறிந்து இந்திய அரசாங்க சட்டப்படி நடவடிக்கை எடுக்கப்படும்.",
    fullTextEn:
      "A single unified Ration Card will be issued to all citizens across India ensuring fair and full distribution of all essential commodities through fair-price shops. Ration cards inactive for over five consecutive months will be audited and acted upon under Indian government law.",
    highlightsTa: [
      "அனைவருக்கும் ஒரே மாதிரியான ரேஷன் கார்டு",
      "அனைத்துப் பொருள்களும் நியாயமாகக் கிடைக்க அரசாணை",
      "செயலற்ற போலி அட்டைகள் மீது சட்ட நடவடிக்கை",
    ],
    highlightsEn: [
      "Uniform Ration Card for all citizens",
      "Fair delivery of all essential goods",
      "Audit of inactive ration cards",
    ],
  },
  {
    number: "07",
    titleTa: "விவசாயக் கடன் தள்ளுபடி, சுயதொழில் கடன் & பேரிடர் நிவாரணம்",
    titleEn: "Farmer Loan Waivers, Self-Employment Credit & Disaster Relief",
    categoryTa: "விவசாயம் & பேரிடர் நிவாரணம்",
    categoryEn: "Agriculture & Relief",
    fullTextTa:
      "இந்திய அரசியலமைப்பு சட்டம் படி விவசாயிகளுக்கு இந்திய வங்கியில் இருந்து கடன் உதவி வழங்கப்படும். விவசாயம் வளர்ச்சி அடைய அரசாங்கம் அனைத்து சலுகைகளும் செய்து தரப்படும் என்ற சட்டம் நிறைவேற்றப்படும். விவசாயிகள் பாதிக்கப்பட்டால் விவசாயி கடன் முழுமையாக ரத்து செய்யப்படும்; வருடத்திற்கு ஒருமுறை விவசாயிகளின் கோரிக்கையை ஏற்று அரசாணை பிறப்பிக்கப்படும். படித்த பட்டதாரிகள் சுய தொழில் தொடங்குவதற்கு அரசாங்கத்திலிருந்து கடன் உதவி செய்து தரப்படும்; சரியான முறையில் திரும்ப செலுத்துபவர்களுக்கு மீண்டும் கடன் உதவி அளிக்கப்படும். பேரிடர் காலங்களில் சேதமடையும் அனைத்து பொருள்களுக்கும் அரசாங்கம் பொறுப்பேற்று நிவாரண நிதி வழங்கப்படும். பேரிடர் காலங்களில் மக்கள் குறையை தீர்க்க அரசாங்கத்தில் இருந்து ஒவ்வொரு மாவட்டத்திற்கும் அரசாங்க பணியாளர்களைக் கொண்டு கணக்கெடுப்பு நடத்தப்பட்டு உரிய நிவாரண நிதி தரப்படும்.",
    fullTextEn:
      "Constitutional backing for bank loans and full agricultural incentives for farmers. Complete waiver of farm loans whenever farmers suffer crop or natural losses, plus annual government orders addressing farmers' demands. Government credit for educated graduates starting self-employment, with repeat financing upon timely repayment. Full government accountability, district-level official surveys, and full compensation for damages during natural disasters.",
    highlightsTa: [
      "பாதிக்கப்பட்ட விவசாயிகள் கடன் முழுமையாக ரத்து",
      "பட்டதாரிகளுக்கு சுயதொழில் தொடங்க அரசு கடன்",
      "பேரிடர் கால சேதங்களுக்கு 100% அரசு நிவாரண நிதி",
    ],
    highlightsEn: [
      "100% farm loan waiver during distress",
      "Self-employment loans for graduates",
      "Full govt compensation for disaster losses",
    ],
  },
  {
    number: "08",
    titleTa: "சட்டம் ஒழுங்கு பாதுகாப்பு & விருப்பத்தின் பேரில் ஆதார் பயன்பாடு",
    titleEn: "Strict Law & Order Enforcement & Voluntary Aadhaar Usage",
    categoryTa: "சட்டம் & குடிமக்கள் உரிமை",
    categoryEn: "Law & Civil Rights",
    fullTextTa:
      "இந்தியா முழுவதும் சட்டம் ஒழுங்கு சீர்குலைக்கும் யாராக இருந்தாலும் குற்றம் செய்பவர்கள் நிரூபிக்கப்பட்டால் அவர்கள் மீது சட்டப்படி நடவடிக்கை எடுத்து மக்கள் முன் தண்டனை நிறைவேற்றப்படும். இந்தியா முழுவதும் உள்ள அனைத்து துறைகளிலும் ஆதார் கார்டு உரிமையாளர்கள் அவர்கள் விருப்பப்பட்டால் மட்டும் கொடுக்கலாம் என்ற சட்டம் நிறைவேற்றப்படும்.",
    fullTextEn:
      "Strict legal enforcement and public accountability against anyone proven guilty of disrupting law and order anywhere in India. Legislation making Aadhaar card submission strictly voluntary across all departments, solely at the discretion of the cardholder.",
    highlightsTa: [
      "சட்டம் ஒழுங்கு சீர்குலைப்போர் மீது கடுமையான தண்டனை",
      "அனைத்துத் துறைகளிலும் ஆதார் கட்டாயம் நீக்கம்",
      "உரிமையாளர் விருப்பப்பட்டால் மட்டுமே ஆதார் சமர்ப்பிப்பு",
    ],
    highlightsEn: [
      "Zero tolerance for law & order violations",
      "Aadhaar made strictly voluntary across sectors",
    ],
  },
  {
    number: "09",
    titleTa: "போதைப் பொருள் ஒழிப்புச் சட்டம்",
    titleEn: "Complete Prohibition & Crackdown on Narcotics",
    categoryTa: "போதை ஒழிப்பு",
    categoryEn: "Anti-Narcotics",
    fullTextTa:
      "இந்தியா முழுவதும் போதைப் பொருட்கள் விற்பவர்கள் மீதும் வாங்குவோர்கள் மீதும் சட்டப்படி நடவடிக்கை எடுக்கப்படும் என்ற சட்டம் அரசாங்கம் மூலம் அமல்படுத்தப்படும்.",
    fullTextEn:
      "Nationwide enforcement of strict statutory action against both sellers and buyers of narcotic and intoxicating substances.",
    highlightsTa: [
      "போதைப் பொருள் விற்போர் மீது கடும் சட்ட நடவடிக்கை",
      "வாங்குவோர் மீதும் அரசாங்க சட்ட நடவடிக்கை",
    ],
    highlightsEn: [
      "Strict legal action against drug sellers & buyers",
      "Drug-free society enforcement nationwide",
    ],
  },
  {
    number: "10",
    titleTa: "தனியார் கந்துவட்டி வங்கி தடை & அரசு வங்கி கடன் சட்டம்",
    titleEn: "Ban on Private Bank Lending & Public Bank Credit Guarantee",
    categoryTa: "வங்கிச் சீர்திருத்தம்",
    categoryEn: "Banking Reform",
    fullTextTa:
      "இந்தியா முழுவதும் தனியார் வங்கியில் கடன் வாங்குவதும் கடன் கொடுப்பதும் சட்டப்படி குற்றமாகும் என்ற அரசாணை பிறப்பிக்கப்படும். இந்தியா முழுவதும் அரசாங்க வங்கியில் கடன் பெற்றுக் கொள்ளலாம் என்ற சட்டம் அமல்படுத்தப்படும். முறையாக கடனை திருப்பித் தருபவர்களுக்கு மீண்டும் கடன் வழங்கப்படும் என்ற அரசாணை நிறைவேற்றப்படும். கடன் வாங்கி திரும்ப செலுத்தாதவர்கள் மீது சட்டப்படி அவர்கள் நிலையை புரிந்து கொண்டு நடவடிக்கை எடுக்கப்படும்.",
    fullTextEn:
      "Government ordinance prohibiting private bank lending and borrowing to protect citizens from predatory interest rates. Universal access to credit through public government banks with guaranteed repeat credit for timely repayers, and empathetic legal assessment of defaulters' actual circumstances.",
    highlightsTa: [
      "தனியார் வங்கி கடன் வழங்கல் & பெறல் சட்டப்படி தடை",
      "அரசு வங்கிகள் மூலம் எளிய கடன் வசதி",
      "முறையாக திருப்பித் தருவோருக்கு மீண்டும் கடன்",
    ],
    highlightsEn: [
      "Ban on private lending exploitation",
      "Accessible loans via public sector banks",
      "Fair & empathetic repayment assessment",
    ],
  },
];


