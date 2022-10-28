# textmodifier

A text-highlight and text-splitter component for `react`.It's a customizable textmodifier component

## install

```
npm install textmodifier

yarn add textmodifier
```

## Usage

```
    const text = "Contrary to popular belief \n Lorem Ipsum is not simply random text \n It has roots in a piece of classical \n Latin Lorem literature from 45 BC";

    // text-splitter
    <TextModifier text={text} />

    // text-highlight
    <TextModifier
        text={text}
        highlight={"Lorem"}
        highlightClassName="text-5xl"
     />
```

#### Customize

##### Text-Splitter

```
    const text = "Contrary to popular belief \n Lorem Ipsum is not simply random text \n It has roots in a piece of classical \n Latin Lorem literature from 45 BC";

    <TextModifier
        text={text}
        as="p"
        className="bg-blue-400"
        renderSeparator={() => <br />}
        separator="\n"
        renderText={(text, isLast) => {
          return (
            <span className="text-xl">
              {isLast ? text + "..." : text + "."}
            </span>
          );
        }}
    />

```

##### Text-Highlight

```
    const text = "Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classical. Latin Lorem literature from 45 BC";

    <TextModifier
       text={text}
       as="p"
       highlight={"Lorem"} // or you can use an array of highlight like ["Lorem", "random"]
       highlightClassName="text-5xl"
       highlightSeparator=" "
       caseOff
        renderNonHighlight={(text, isLast) => {
            return (
            <span className="text-blue-500">
                {text}
                {isLast ? "." : ""}
            </span>
            );
        }}
        renderHighlight={(highlightedText, isLast, className) => {
            return (
                <>
                    <span className={className}>
                        {highlightedText} {count}
                    </span>
                    {isLast ? "." : ""}
                </>
                );
            }}
    />
```

##### You can also use both of this in a text.
