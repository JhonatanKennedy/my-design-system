import React from "react";

import { createComponent } from "@lit/react";

import { CoreAvatar as CoreAvatarElement } from "@jhonatankennedy/ui-core";

export const Avatar = createComponent({
  react: React,
  tagName: "core-avatar",
  elementClass: CoreAvatarElement,
});
