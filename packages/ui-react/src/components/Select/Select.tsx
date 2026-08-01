import React from "react";

import { createComponent } from "@lit/react";

import { CoreSelect as CoreSelectElement } from "@jhonatankennedy/ui-core";

export const Select = createComponent({
  react: React,
  tagName: "core-select",
  elementClass: CoreSelectElement,
  events: {
    onChange: "change",
  },
});
