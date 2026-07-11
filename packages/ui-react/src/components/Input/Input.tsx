import React from "react";

import { createComponent } from "@lit/react";

import { CoreInput as CoreInputElement } from "@jhonatankennedy/ui-core";

export const Input = createComponent({
  react: React,
  tagName: "core-input",
  elementClass: CoreInputElement,
  events: {
    onInput: "input",
    onChange: "change",
  },
});
