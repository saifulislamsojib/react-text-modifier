# textmodifier

A text-highlight and text-splitter component for `react`.It's a customizable textmodifier component

## install

`npm install textmodifier`
`yarn add textmodifier`

## Usage

```
const text =
    "Hello dfrsh fsrgdh \n adgfsrg rwgyj \n ret fdgj H dfs frt5h hyj7i \n yjuk8 jju7i \n yuko8, utko8";

    // text-splitter
    <TextModifier text={text} />

    // text-highlight
    <TextModifier
        text={text}
        highlight={"hello"}
        highlightClassName="text-5xl"
     />
```

#### Customize

```
  const text =
    "Hello dfrsh fsrgdh \n adgfsrg rwgyj \n ret fdgj H dfs frt5h hyj7i \n yjuk8 jju7i \n yuko8, utko8";

    // text-highlight
    <TextModifier
        text={text}
        as="p"
        className="bg-blue-400"
        renderSeparator={() => <hr />}
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

```
    const text = "Hello dfrsh fsrgdh adgfsrg rwgyj ret fdgj H dfs ";

    // text-splitter
    <TextModifier
       text={text}
       as="p"
       highlight={"hello"}
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
