import type React from "react";

export type TTabItem = {
  label: string;
  content: React.ReactNode;
};

export type TTabsProps = {
  tabs: TTabItem[];
  /** Controlled active index. Omit to let Tabs manage its own state. */
  active?: number;
  /** Initial active index when uncontrolled. Defaults to 0. */
  defaultActive?: number;
  onTabChange?: (index: number) => void;
};
