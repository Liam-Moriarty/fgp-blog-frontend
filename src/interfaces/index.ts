import type { IconType } from "react-icons";

export interface NavLink {
  path: string;
  label: string;
}

export interface Engagement {
  label: string;
  count: number;
}

export interface CoreValues {
  icon?: IconType;
  title: string;
  description?: string;
}
