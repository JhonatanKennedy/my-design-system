import React from "react";

import { createComponent } from "@lit/react";

import { CoreAlert as CoreAlertElement } from "@my-design-system/ui-core";

export const Alert = createComponent({
  react: React,
  tagName: "core-alert",
  elementClass: CoreAlertElement,
  events: {
    onDismiss: "dismiss",
  },
});
