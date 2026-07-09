import React from "react";

import { createComponent } from "@lit/react";

import { CoreTooltip as CoreTooltipElement } from "@my-design-system/ui-core";

export const Tooltip = createComponent({
  react: React,
  tagName: "core-tooltip",
  elementClass: CoreTooltipElement,
});
