import React from "react";

import { createComponent } from "@lit/react";

import { CoreSectionTitle as CoreSectionTitleElement } from "@my-design-system/ui-core";

export const SectionTitle = createComponent({
  react: React,
  tagName: "core-section-title",
  elementClass: CoreSectionTitleElement,
});
