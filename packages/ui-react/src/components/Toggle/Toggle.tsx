import React from "react";

import { createComponent } from "@lit/react";

import { CoreToggle as CoreToggleElement } from "@my-design-system/ui-core";

export const Toggle = createComponent({
  react: React,
  tagName: "core-toggle",
  elementClass: CoreToggleElement,
  events: {
    onChange: "change",
  },
});
