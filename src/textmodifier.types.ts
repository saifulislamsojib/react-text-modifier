/* eslint-disable no-unused-vars */
import { ElementType, HTMLAttributes } from "react";

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

export interface IContext {
  lastIndex: number;
  newHighlight: string | string[];
  highlightSeparator: string;
  renderText: (text: string, isLast: boolean) => JSX.Element | string;
  renderSeparator: () => JSX.Element | string;
  renderHighlight: (
    highlightedText: string,
    isLast: boolean,
    className: string
  ) => JSX.Element | string;
  renderNonHighlight: (
    nonHighlightedText: string,
    isLast: boolean
  ) => JSX.Element | string;
  highlightClassName: string;
  caseOff?: boolean;
}

export interface IRender {
  splittedText: string;
  index: number;
}
