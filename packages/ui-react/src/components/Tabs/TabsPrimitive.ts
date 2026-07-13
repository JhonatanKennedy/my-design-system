import React from "react";

import { createComponent } from "@lit/react";

import { CoreTabs as CoreTabsElement } from "@jhonatankennedy/ui-core";

/** Thin bridge to the `core-tabs` custom element. Prefer `Tabs` for app code. */
export const TabsPrimitive = createComponent({
  react: React,
  tagName: "core-tabs",
  elementClass: CoreTabsElement,
  events: {
    onTabChange: "tab-change",
  },
});
