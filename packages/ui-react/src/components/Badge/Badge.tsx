import React from "react";

import { createComponent } from "@lit/react";

import { CoreBadge as CoreBadgeElement } from "@my-design-system/ui-core";

export const Badge = createComponent({
  react: React,
  tagName: "core-badge",
  elementClass: CoreBadgeElement,
});
