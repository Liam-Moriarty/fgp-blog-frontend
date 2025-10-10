import ecommerce from "@/assets/offer/Ecommerce web page-amico.png";
import trade from "@/assets/offer/International trade-rafiki.png";
import operation from "@/assets/offer/Operating system upgrade-amico (1).png";
import project from "@/assets/offer/Projections-bro.png";

import type {
  Accordion,
  CoreValues,
  Engagement,
  NavLink,
  OfferCards,
} from "@/interfaces";

import {
  LuFolderOpen,
  LuFiles,
  LuFlag,
  LuChartColumnIncreasing,
  LuImage,
} from "react-icons/lu";

export const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#chairman", label: "Chairman" },
  { path: "/announcement", label: "Announcement" },
];

export const engagementStats: Engagement[] = [
  { label: "Total Views", count: 521 },
  { label: "Total Visitors", count: 235 },
  { label: "Today's Views", count: 52 },
  { label: "Today's Visitors", count: 21 },
];

export const coreValues: CoreValues[] = [
  { title: "Core Values" },
  {
    icon: LuFolderOpen,
    title: "Integrity",
    description:
      "Building trust through ethical and transparent business practices.",
  },
  {
    icon: LuFiles,
    title: "Professionalism",
    description: "Delivering excellence at every stage of operation.",
  },
  {
    icon: LuFlag,
    title: "Innovation",
    description:
      "Creating cutting-edge solutions that anticipate future needs.",
  },
  {
    icon: LuChartColumnIncreasing,
    title: "Collaboration",
    description: "Empowering partnerships that achieve shared success.",
  },
  {
    icon: LuImage,
    title: "Sustainability",
    description:
      "Investing in projects that benefit both economy and environment.",
  },
];

export const cards: OfferCards[] = [
  { src: ecommerce, alt: "Ecommerce Illustration", label: "Ecommerce" },
  { src: trade, alt: "Trade Illustration", label: "International Trade" },
  {
    src: project,
    alt: "Project Illustration",
    label: "Project and Investment",
  },
  {
    src: operation,
    alt: "Operation Illustration",
    label: "Turn Key Operation",
  },
];

export const whyFgp: Accordion[] = [
  {
    title: "Proven Market Roots",
    description: "30+ years of business leadership in the Philippines.",
    item: "1",
  },
  {
    title: "Diversified Portfolio",
    description: "From commodities to e-commerce to infrastructure",
    item: "2",
  },
  {
    title: "Cross-Border Expertise",
    description: "Bridging Asia-Pacific resources with local needs.",
    item: "3",
  },
  {
    title: "Sustainability Driven",
    description: "Aligning profit with environmental and social impact.",
    item: "4",
  },
  {
    title: "Future Ready",
    description: "AI, live-commerce, and digital-first business models.",
    item: "5",
  },
];

export const keyAdvantage: Accordion[] = [
  {
    title: "Dual-Engine Strategy",
    description:
      "Balancing import flows from China and export flows from the Philippines.",
    item: "1",
  },
  {
    title: "Cost-Optimized Logistics",
    description:
      "Bundled shipping & customs clearance reduce costs by up to 30%.",
    item: "2",
  },
  {
    title: "Membership-Driven Growth",
    description:
      "High-retention loyalty programs with recurring revenue model.",
    item: "3",
  },
  {
    title: "Trust & Transparency",
    description: "End-to-end transaction protection and real-time tracking.",
    item: "4",
  },
  {
    title: "Scalability",
    description:
      "Adaptable for retail, wholesale, and cross-border operations.",
    item: "5",
  },
];
