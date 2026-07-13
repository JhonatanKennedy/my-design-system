import React from "react";

import { createComponent } from "@lit/react";

import { CoreCheckbox as CoreCheckboxElement } from "@jhonatankennedy/ui-core";

export const Checkbox = createComponent({
  react: React,
  tagName: "core-checkbox",
  elementClass: CoreCheckboxElement,
  events: {
    onChange: "change",
  },
});
