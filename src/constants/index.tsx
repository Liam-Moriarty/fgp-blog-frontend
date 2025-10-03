import type { Engagement, NavLink } from "@/interfaces";

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
