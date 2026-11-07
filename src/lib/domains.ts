import { GraduationCap, HeartPulse, Leaf, LifeBuoy, Sprout, Trophy } from "lucide-react";

// bg/fg run from deep water to the surface across the six domains.
export const domains = [
  { slug: "education", name: "Education", icon: GraduationCap, photo: "/img/students.jpg", bg: "#1f6a9c", fg: "#ffffff",
    alt: "Smiling students in a rural schoolyard",
    line: "Schools, scholarships and learning that reaches every district.",
    scope: ["School construction and repair", "Scholarships and stipends", "Digital classrooms and learning materials", "Teacher training"] },
  { slug: "health", name: "Health", icon: HeartPulse, photo: "/img/midwife.jpg", bg: "#0a0a0a", fg: "#ffffff",
    alt: "A smiling midwife in a bright headscarf holds a newborn baby",
    line: "Care close to home, from village clinics to mother and child health.",
    scope: ["Primary care and medical camps", "Maternal and child health", "Clean water and sanitation", "Medical equipment for local clinics"] },
  { slug: "environment", name: "Environment and climate", icon: Leaf, photo: "/img/sundarbans.jpg", bg: "#1f6a9c", fg: "#ffffff",
    alt: "A mangrove-lined river in the Sundarbans forest",
    line: "Protecting rivers, forests and coastlines that people live from.",
    scope: ["Tree planting and forest cover", "Clean energy and waste management", "River and wetland restoration", "Climate adaptation for coastal communities"] },
  { slug: "disaster", name: "Disaster response", icon: LifeBuoy, photo: "/img/flood.jpg", bg: "#0a0a0a", fg: "#ffffff",
    alt: "Women and a child wade through a flooded village",
    line: "Relief when floods and cyclones hit, and readiness before they do.",
    scope: ["Flood and cyclone relief", "Early warning and shelters", "Rebuilding homes and roads", "Emergency food and medicine"] },
  { slug: "livelihood", name: "Livelihood and inclusion", icon: Sprout, photo: "/img/loom.jpg", bg: "#1f6a9c", fg: "#ffffff",
    alt: "A woman weaves cloth on a traditional handloom",
    line: "Skills, tools and small enterprise that lift families for good.",
    scope: ["Skills and vocational training", "Small enterprise support", "Women-led work and cooperatives", "Support for people with disabilities"] },
  { slug: "sports-culture", name: "Sports and culture", icon: Trophy, photo: "/img/village-play.jpg", bg: "#0a0a0a", fg: "#ffffff",
    alt: "Children play together outside a village home",
    line: "Playgrounds, teams, music and heritage that hold a community together.",
    scope: ["Youth sports and playgrounds", "Arts and performance", "Heritage preservation", "Community festivals and libraries"] },
] as const;

export const credits = [
  ["Joyful Bangladeshi Boys on Playground", "Mijanur Rahman Niloy", "https://www.pexels.com/photo/joyful-bangladeshi-boys-on-playground-29119410/"],
  ["Forest in the mist (Unsplash)", "Marita Kavelashvili", "https://unsplash.com/photos/ugnrXk1129g"],
  ["Serene Sunrise Over Bangladesh Wetlands", "Shamim Hossain", "https://www.pexels.com/photo/serene-sunrise-over-bangladesh-wetlands-31989599/"],
  ["Smiling Students in Rural Bangladesh Schoolyard", "Ian Taylor", "https://www.pexels.com/photo/smiling-students-in-rural-bangladesh-schoolyard-37249876/"],
  ["Tania is a midwife for UNFPA in Kutapalong refugee camp (Wikimedia Commons, CC BY 2.0)", "DFID - UK Department for International Development", "https://commons.wikimedia.org/wiki/File:Tania_is_a_midwife_for_UNFPA_in_Kutapalong_refugee_camp._Every_day_around_30_women_come_to_the_clinic_for_check-ups.jpg"],
  ["Scenic Sundarbans Mangrove Forest in Khulna", "Md.Omar Faruk Hemal", "https://www.pexels.com/photo/scenic-sundarbans-mangrove-forest-in-khulna-bangladesh-33337866/"],
  ["Women Wearing Traditional Clothing standing with Kids in a Flooded Village", "Kuntal Biswas", "https://www.pexels.com/photo/women-wearing-traditional-clothing-standing-with-kids-in-a-flooded-village-17935458/"],
  ["Traditional Handloom Weaving in Bangladesh", "MD Monsurul Azam", "https://www.pexels.com/photo/traditional-handloom-weaving-in-bangladesh-35195886/"],
  ["Children Playing Outside in Rural Village", "MD. Mahamudul Hasan Ratul", "https://www.pexels.com/photo/children-playing-outside-in-rural-village-36878247/"],
  ["People on Fishing Boat in Village", "Ferdous Hasan", "https://www.pexels.com/photo/people-on-fishing-boat-in-village-18297178/"],
  ["Boy on Boat on Rice Field", "Rakin Raihan", "https://www.pexels.com/photo/boy-on-boat-on-rice-field-15861341/"],
] as const;
