import React, { createContext, ElementType, Fragment, useContext } from "react";

const uniqueId = (prefix = "id-") =>
  prefix + Math.random().toString(32).slice(-4);

interface TextModifierProps extends React.HTMLAttributes<HTMLElement> {
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

interface IContext {
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

interface IRender {
  splittedText: string;
  index: number;
}

const context = createContext<IContext>({} as IContext);

const Render = ({ splittedText = "", index }: IRender): JSX.Element => {
  const {
    lastIndex,
    newHighlight,
    highlightSeparator,
    renderText,
    renderHighlight,
    renderNonHighlight,
    highlightClassName,
    caseOff,
  } = useContext(context);

  const newT = splittedText.trim();
  const lowerT = caseOff ? newT : newT.toLowerCase();
  let isHave =
    typeof newHighlight === "string"
      ? lowerT.includes(newHighlight)
      : newHighlight.find((it) =>
          caseOff
            ? lowerT.includes(it)
            : lowerT.toLowerCase().includes(it.toLowerCase())
        );
  if (newHighlight.length && isHave) {
    if (typeof newHighlight === "string" && lowerT === newHighlight) {
      return (
        <>{renderHighlight(newT, index === lastIndex, highlightClassName)}</>
      );
    }
    const highlightInArr = newT.split(highlightSeparator);
    const highlightInArrLast = highlightInArr.length - 1;
    return (
      <>
        {highlightInArr.map((st, j) => (
          <Fragment key={j}>
            {typeof newHighlight === "string" &&
            (caseOff ? st : st.toLowerCase()) === newHighlight
              ? renderHighlight(
                  st,
                  highlightInArrLast === j,
                  highlightClassName
                )
              : typeof newHighlight !== "string" &&
                newHighlight.find((it) =>
                  caseOff ? st === it : st.toLowerCase() === it.toLowerCase()
                )
              ? renderHighlight(
                  st,
                  highlightInArrLast === j,
                  highlightClassName
                )
              : renderNonHighlight(st, highlightInArrLast === j)}
            {highlightSeparator}
          </Fragment>
        ))}
      </>
    );
  }
  return <>{renderText(newT, index === lastIndex)}</>;
};

const TextSplitItem = ({ splittedText = "", index }: IRender) => {
  const { lastIndex, renderSeparator } = useContext(context);

  return (
    <Fragment>
      <Render splittedText={splittedText} index={index} />{" "}
      {index !== lastIndex && renderSeparator()}
    </Fragment>
  );
};

const TextSplit = ({
  text = "",
  separator = "\n",
  children = "",
  highlight = "",
  highlightSeparator = " ",
  highlightClassName = "",
  as: Tag = Fragment,
  renderText = (text = "") => text,
  renderSeparator = () => <br />,
  renderHighlight = (highlightedText = "") => (
    <span className={highlightClassName}>{highlightedText}</span>
  ),
  renderNonHighlight = (nonHighlightedText = "") => nonHighlightedText,
  caseOff = false,
  ...props
}: TextModifierProps) => {
  const newText = children || text;

  if (!newText.includes(separator) && !highlight) {
    return <Tag {...props}>{newText}</Tag>;
  }

  const arr = newText.split(separator);
  const lastIndex = arr.length - 1;
  let newHighlight = highlight;
  if (typeof highlight === "string" && !caseOff) {
    newHighlight = highlight.toLowerCase();
  }

  const contextValue = {
    lastIndex,
    newHighlight,
    highlightSeparator,
    renderText,
    renderSeparator,
    renderHighlight,
    renderNonHighlight,
    highlightClassName,
    caseOff,
  };

  return (
    <context.Provider value={contextValue}>
      <Tag {...props}>
        {arr.map((splittedText, index) => (
          <TextSplitItem
            key={uniqueId()}
            index={index}
            splittedText={splittedText}
          />
        ))}
      </Tag>
    </context.Provider>
  );
};

export default TextSplit;
