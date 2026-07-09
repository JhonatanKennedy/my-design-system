import React from "react";

import { createComponent } from "@lit/react";

import { CoreCard as CoreCardElement } from "@my-design-system/ui-core";

export const Card = createComponent({
  react: React,
  tagName: "core-card",
  elementClass: CoreCardElement,
});
