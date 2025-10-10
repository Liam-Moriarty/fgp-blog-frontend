import type { CoreValues, Engagement, NavLink } from "@/interfaces";

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
