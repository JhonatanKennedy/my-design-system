import type { ComponentProps } from "react";
import type * as UiReact from "@jhonatankennedy/ui-react";
import { clientOnlyComponent } from "./lazy";

// One clientOnlyComponent() per ui-react export. Each import(...) call keeps
// its own dynamic import so components code-split independently and a page
// using only <Button> doesn't pull in <Tabs>'s code too.
//
// Each component's prop type is also named and exported here (AlertProps,
// ButtonProps, ...). Previously the type only existed inline as the generic
// argument to clientOnlyComponent(), so it was never part of this package's
// public type surface - consumers had no way to import e.g. `ButtonProps`
// from "@jhonatankennedy/ui-next" to type their own wrapper components.

export type AlertProps = ComponentProps<typeof UiReact.Alert>;
export const Alert = clientOnlyComponent<AlertProps>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Alert)
);

export type AvatarProps = ComponentProps<typeof UiReact.Avatar>;
export const Avatar = clientOnlyComponent<AvatarProps>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Avatar)
);

export type BadgeProps = ComponentProps<typeof UiReact.Badge>;
export const Badge = clientOnlyComponent<BadgeProps>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Badge)
);

export type ButtonProps = ComponentProps<typeof UiReact.Button>;
export const Button = clientOnlyComponent<ButtonProps>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Button)
);

export type CardProps = ComponentProps<typeof UiReact.Card>;
export const Card = clientOnlyComponent<CardProps>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Card)
);

export type CheckboxProps = ComponentProps<typeof UiReact.Checkbox>;
export const Checkbox = clientOnlyComponent<CheckboxProps>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Checkbox)
);

export type InputProps = ComponentProps<typeof UiReact.Input>;
export const Input = clientOnlyComponent<InputProps>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Input)
);

export type ProgressProps = ComponentProps<typeof UiReact.Progress>;
export const Progress = clientOnlyComponent<ProgressProps>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Progress)
);

export type SectionTitleProps = ComponentProps<typeof UiReact.SectionTitle>;
export const SectionTitle = clientOnlyComponent<SectionTitleProps>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.SectionTitle)
);

export type SelectProps = ComponentProps<typeof UiReact.Select>;
export const Select = clientOnlyComponent<SelectProps>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Select)
);

export type SpeechBubbleProps = ComponentProps<typeof UiReact.SpeechBubble>;
export const SpeechBubble = clientOnlyComponent<SpeechBubbleProps>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.SpeechBubble)
);

// Table and Tabs already have canonical, hand-written prop types in
// ui-react (TTableProps, TTabsProps) - re-export those as-is from ./types
// instead of minting a second, redundant name for the same shape.
export const Table = clientOnlyComponent<UiReact.TTableProps>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Table)
);

export const Tabs = clientOnlyComponent<UiReact.TTabsProps>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Tabs)
);

export type ToggleProps = ComponentProps<typeof UiReact.Toggle>;
export const Toggle = clientOnlyComponent<ToggleProps>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Toggle)
);

export type TooltipProps = ComponentProps<typeof UiReact.Tooltip>;
export const Tooltip = clientOnlyComponent<TooltipProps>(() =>
  import("@jhonatankennedy/ui-react").then((m) => m.Tooltip)
);
