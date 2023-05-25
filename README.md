# twStyle

twStyle is a framework that allows you to easily create and combine **tailwind** class names

## Installation

```
npm i twStyle
```

## Using

basic usage

```jsx
import twStyle from "twStyle";

/**
 * twStyle will return "font-bold text-red"
 */
const style = twStyle`
  font-bold
  text-red
`;
```

you can use conditional styles

```jsx
import twStyle from "twStyle";

const isRed = false;

/**
 * twStyle will return "font-bold text-blue"
 */
const style = twStyle`
  font-bold
  ${isBlue ? "text-red" : "text-blue"}
`;
```

You can also use twStyle inside twStyle.

```jsx
import twStyle from "twStyle";

const isRed = false;
const textStyle = twStyle`text-white font-bold`;
/**
 * twStyle will return "bg-blue-500 hover:bg-red-500 text-white font-bold"
 */
const style = twStyle`
      bg-blue-500
      hover:bg-red-500
      ${textStyle}
    `;

/**
 * or use twStyle directly
 */

const style2 = twStyle`
      bg-blue-500
      hover:bg-red-500
      ${twStyle`text-white font-bold`}
    `;
```
