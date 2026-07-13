import React from "react";

import { TabsPrimitive } from "./TabsPrimitive";
import type { TTabsProps } from "./Tabs.types";

export function Tabs({ tabs, active, defaultActive = 0, onTabChange }: TTabsProps) {
  const [uncontrolledActive, setUncontrolledActive] = React.useState(defaultActive);

  const isControlled = active !== undefined;
  const currentActive = isControlled ? active : uncontrolledActive;

  const handleTabChange = (event: Event) => {
    const index = (event as CustomEvent<{ index: number }>).detail.index;

    if (!isControlled) setUncontrolledActive(index);
    onTabChange?.(index);
  };

  return (
    <TabsPrimitive
      labels={tabs.map((tab) => tab.label)}
      active={currentActive}
      onTabChange={handleTabChange}
    >
      {tabs.map((tab, index) => (
        <div key={tab.label} slot={`panel-${index}`}>
          {tab.content}
        </div>
      ))}
    </TabsPrimitive>
  );
}
