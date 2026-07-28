import React from "react";

import { createComponent } from "@lit/react";

import { CoreTable as CoreTableElement } from "@jhonatankennedy/ui-core";

/** Thin bridge to the `core-table` custom element. Prefer `Table` for app code. */
export const TablePrimitive = createComponent({
  react: React,
  tagName: "core-table",
  elementClass: CoreTableElement,
});
