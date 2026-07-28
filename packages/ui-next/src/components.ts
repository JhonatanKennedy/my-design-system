import type { ComponentProps } from "react";
import type * as UiReact from "@jhonatankennedy/ui-react";
import { clientOnlyComponent } from "./lazy";

// One clientOnlyComponent() per ui-react export. Each import(...) call keeps
// its own dynamic import so components code-split independently and a page
// using only <Button> doesn't pull in <Tabs>'s code too.

export const Alert = clientOnlyComponent<ComponentProps<typeof UiReact.Alert>>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Alert)
);

export const Avatar = clientOnlyComponent<ComponentProps<typeof UiReact.Avatar>>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Avatar)
);

export const Badge = clientOnlyComponent<ComponentProps<typeof UiReact.Badge>>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Badge)
);

export const Button = clientOnlyComponent<ComponentProps<typeof UiReact.Button>>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Button)
);

export const Card = clientOnlyComponent<ComponentProps<typeof UiReact.Card>>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Card)
);

export const Checkbox = clientOnlyComponent<ComponentProps<typeof UiReact.Checkbox>>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Checkbox)
);

export const Input = clientOnlyComponent<ComponentProps<typeof UiReact.Input>>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Input)
);

export const Progress = clientOnlyComponent<ComponentProps<typeof UiReact.Progress>>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Progress)
);

export const SectionTitle = clientOnlyComponent<ComponentProps<typeof UiReact.SectionTitle>>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.SectionTitle)
);

export const Select = clientOnlyComponent<ComponentProps<typeof UiReact.Select>>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Select)
);

export const SpeechBubble = clientOnlyComponent<ComponentProps<typeof UiReact.SpeechBubble>>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.SpeechBubble)
);

export const Table = clientOnlyComponent<ComponentProps<typeof UiReact.Table>>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Table)
);

export const Tabs = clientOnlyComponent<ComponentProps<typeof UiReact.Tabs>>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Tabs)
);

export const Toggle = clientOnlyComponent<ComponentProps<typeof UiReact.Toggle>>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Toggle)
);

export const Tooltip = clientOnlyComponent<ComponentProps<typeof UiReact.Tooltip>>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Tooltip)
);
