import React from "react";

import { createComponent } from "@lit/react";

import { CoreSelect as CoreSelectTitleElement } from "@jhonatankennedy/ui-core";

export const Select = createComponent({
  react: React,
  tagName: "core-select",
  elementClass: CoreSelectTitleElement,
  events: {
    onChange: "change",
  },
});
