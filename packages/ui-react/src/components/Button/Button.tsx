import React from "react";

import { createComponent } from "@lit/react";

import { CoreButton as CoreButtonElement } from "@jhonatankennedy/ui-core";

export const Button = createComponent({
  react: React,
  tagName: "core-button",
  elementClass: CoreButtonElement,
  events: {
    onClick: "click",
  },
});
