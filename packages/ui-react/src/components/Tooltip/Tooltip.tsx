import React from "react";

import { createComponent } from "@lit/react";

import { CoreTooltip as CoreTooltipElement } from "@jhonatankennedy/ui-core";

export const Tooltip = createComponent({
  react: React,
  tagName: "core-tooltip",
  elementClass: CoreTooltipElement,
});
