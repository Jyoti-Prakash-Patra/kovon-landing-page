import { NavItem } from "@/types";

import PublicIcon from "@mui/icons-material/Public";
import WorkIcon from "@mui/icons-material/Work";
import VerifiedIcon from "@mui/icons-material/Verified";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Feature } from "@/types";

import { ProcessStep } from "@/types";



export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How Works", href: "#how_it_works" },
  { label: "Contact", href: "#contact" },
];

export const HERO_CONTENT = {
  title: "Connecting Talent to Global Opportunities",
  subtitle:
    "Kovon empowers skilled professionals to access trusted international careers, unlocking a world of growth, stability, and success.",
  primaryCTA: "Get Started",
  secondaryCTA: "Learn More",
};


export const FEATURES: Feature[] = [
  {
    title: "Global Access",
    description:
      "Connect skilled professionals with international employers through a seamless digital platform.",
    icon: PublicIcon,
  },
  {
    title: "Verified Opportunities",
    description:
      "All job listings are carefully screened to ensure authenticity and reliability.",
    icon: VerifiedIcon,
  },
  {
    title: "Seamless Hiring",
    description:
      "Simplified onboarding and documentation process for both employers and candidates.",
    icon: WorkIcon,
  },
  {
    title: "Dedicated Support",
    description:
      "24/7 assistance for candidates and employers throughout the hiring journey.",
    icon: SupportAgentIcon,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Create Profile",
    description:
      "Candidates register and complete their professional profile with verified credentials.",
  },
  {
    step: 2,
    title: "Explore Opportunities",
    description:
      "Browse curated international job listings tailored to skills and experience.",
  },
  {
    step: 3,
    title: "Apply & Get Matched",
    description:
      "Employers review applications and connect with suitable opportunities efficiently.",
  },
  {
    step: 4,
    title: "Onboard Globally",
    description:
      "Seamless documentation and onboarding process for international placements.",
  },
  {
    step: 5,
    title: "Receive Offer",
    description:
      "Receive confirmed job offers and take the next step in the career.",
  },
];


export const FOOTER_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },           
  { label: "Services", href: "#services" },      
  { label: "How Works", href: "#how_it_works" }, 
  { label: "Contact", href: "#contact" },        
];
