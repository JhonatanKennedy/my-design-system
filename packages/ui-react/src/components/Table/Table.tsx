import React from "react";

import { createComponent } from "@lit/react";

import { CoreTable as CoreTableElement } from "@jhonatankennedy/ui-core";

export const Table = createComponent({
  react: React,
  tagName: "core-table",
  elementClass: CoreTableElement,
});
