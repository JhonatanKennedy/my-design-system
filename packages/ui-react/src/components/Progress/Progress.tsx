import React from "react";

import { createComponent } from "@lit/react";

import { CoreProgress as CoreProgressElement } from "@jhonatankennedy/ui-core";

export const Progress = createComponent({
  react: React,
  tagName: "core-progress",
  elementClass: CoreProgressElement,
});
