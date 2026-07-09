import React from "react";

import { createComponent } from "@lit/react";

import { CoreSpeechBubble as CoreSpeechBubbleElement } from "@my-design-system/ui-core";

export const SpeechBubble = createComponent({
  react: React,
  tagName: "core-speech-bubble",
  elementClass: CoreSpeechBubbleElement,
});
