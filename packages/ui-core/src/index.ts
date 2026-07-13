import "./styles/index.scss";

export { CoreButton } from "./components/Button";
export { CoreAlert } from "./components/Alert";
export { CoreAvatar } from "./components/Avatar";
export { CoreBadge } from "./components/Badge";
export { CoreCard } from "./components/Card";
export { CoreCheckbox } from "./components/Checkbox";
export { CoreInput } from "./components/Input";
export { CoreSpeechBubble } from "./components/SpeechBubble";
export { CoreTabs } from "./components/Tabs";
export { CoreTooltip } from "./components/Tooltip";
export { CoreToggle } from "./components/Toggle";
export { CoreSelect } from "./components/Select";
export { CoreSectionTitle } from "./components/SectionTitle";
export { CoreProgress } from "./components/Progress";

// TYPES
export type {
  TCoreButtonProps,
  TCoreButtonSize,
  TCoreButtonVariant,
} from "./components/Button/Button.types";

export type { TAlertCoreVariant, TCoreAlertProps } from "./components/Alert/Alert.types";
export type { TCoreAvatarStatus, TCoreAvatarProps } from "./components/Avatar/Avatar.types";
export type { TCoreBadgeVariant, TBadgeProps } from "./components/Badge/Badge.types";
export type { TCardProps } from "./components/Card/Card.types";
export type { TCoreCheckboxProps } from "./components/Checkbox/Checkbox.types";
export type { TCoreTabsProps } from "./components/Tabs/Tabs.types";
export type {
  TCoreInputProps,
  TCoreInputType,
  TCoreInputAutocomplete,
} from "./components/Input/Input.types";
export type {
  TCoreSpeechBubbleDirection,
  TCoreSpeechBubbleProps,
} from "./components/SpeechBubble/SpeechBubble.types";
export type { TCoreTooltipProps } from "./components/Tooltip/Tooltip.types";
export type { TCoreToggleProps } from "./components/Toggle/Toggle.types";
export type { TCoreSelectProps } from "./components/Select/Select.types";
export type { TCoreSectionTitleProps } from "./components/SectionTitle/SectionTitle.types";
export type {
  TCoreProgressVariant,
  TCoreProgressProps,
} from "./components/Progress/Progress.types";
