import React from "react";

import { createComponent } from "@lit/react";

import { CoreSpeechBubble as CoreSpeechBubbleElement } from "@jhonatankennedy/ui-core";

export const SpeechBubble = createComponent({
  react: React,
  tagName: "core-speech-bubble",
  elementClass: CoreSpeechBubbleElement,
});
