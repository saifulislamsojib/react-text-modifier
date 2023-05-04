# react-text-modifier

A text-highlight and text-splitter component for `react`. It's a highly customizable text-modifier component.

## Install

```
npm install react-text-modifier
or
yarn add react-text-modifier
```

## Usage

```jsx
import TextModifier from "react-text-modifier";

const App = () => {
  const text =
    "Contrary to popular belief \n Lorem Ipsum is not simply random text \n It has roots in a piece of classical \n Latin Lorem literature from 45 BC";

  return (
    <div>
      {/* text-splitter */}
      <TextModifier text={text} />

      {/* text-highlight */}
      <TextModifier
        text={text}
        highlight={"Lorem"} // you can also use an array of highlight like ["Lorem", "random"]
        highlightClassName="text-5xl"
      />
    </div>
  );
};

export default App;
```

### Customize

#### Text-Splitter

```jsx
import TextModifier from "react-text-modifier";

const App = () => {
  const text =
    "Contrary to popular belief \n Lorem Ipsum is not simply random text \n It has roots in a piece of classical \n Latin Lorem literature from 45 BC";

  return (
    <TextModifier
      // main text for modify
      text={text}
      // warper element(any html element or component)
      as="p"
      //if you use `as` prop for render any html element or component you can use that`s props here
      className="bg-blue-400"
      // you can provide which element will separate
      renderSeparator={() => <br />}
      // you can provide which text will use for separator
      separator="\n"
      // you can render the separator text's for customizations
      renderText={(text, isLast) => {
        return (
          <span className="text-xl">{isLast ? text + "..." : text + "."}</span>
        );
      }}
    />
  );
};

export default App;
```

#### Text-Highlight

```jsx
import TextModifier from "react-text-modifier";

const App = () => {
  const text =
    "Contrary to popular belief \n Lorem Ipsum is not simply random text \n It has roots in a piece of classical \n Latin Lorem literature from 45 BC";

  return (
    <TextModifier
      // main text for modify
      text={text}
      // warper element(any html element or component)
      as="p"
      //if you use `as` prop for render any html element or component you can use that`s props here
      className="bg-blue-400"
      // you can use single highlight or an array of highlight like ["Lorem", "random"]
      highlight={["Lorem", "random"]}
      // className for highlight
      highlightClassName="text-5xl"
      // highlight Separator
      highlightSeparator=" "
      // for case sensitive
      caseOff
      // render those are highlighted for customizations
      renderHighlight={(highlightedText, isLast, className) => {
        return (
          <span className={className}>
            {highlightedText}
            {isLast ? "." : " - "}
          </span>
        );
      }}
      // render those are not highlighted for customizations
      renderNonHighlight={(text, isLast) => {
        return (
          <span className="text-blue-500">
            {text}
            {isLast ? "." : ""}
          </span>
        );
      }}
    />
  );
};

export default App;
```

#### You can also use both of this `Splitter` & `Highlight` in a text.
