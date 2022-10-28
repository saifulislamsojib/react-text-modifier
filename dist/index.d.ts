import type { ElementType, HTMLAttributes } from "react";

export interface TextModifierProps extends HTMLAttributes<HTMLElement> {
  text?: string;
  separator?: string;
  children?: string;
  highlight?: string | string[];
  highlightSeparator?: string;
  renderNonHighlight?: (
    nonHighlightedText: string,
    isLast: boolean
  ) => JSX.Element | string;
  as?: ElementType;
  renderHighlight?: (
    highlightedText: string,
    isLast: boolean,
    className: string
  ) => JSX.Element | string;
  caseOff?: boolean;
  highlightClassName?: string;
  renderText?: (text?: string, isLast?: boolean) => JSX.Element | string;
  renderSeparator?: () => JSX.Element;
}

declare function TextModifier(props: TextModifierProps): JSX.Element;

export default TextModifier;
