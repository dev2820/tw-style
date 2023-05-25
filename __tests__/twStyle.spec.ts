import { it, expect, describe } from "@jest/globals";
import twStyle from "../src";

describe("twStyle", () => {
  it("return tailwind strings to classname", () => {
    const result = twStyle`
      bg-blue-500
      hover:bg-blue-700
      text-white
      font-bold
    `;

    expect(result).toBe("bg-blue-500 hover:bg-blue-700 text-white font-bold");
  });

  it("return tailwind strings to classname", () => {
    const result = twStyle`
      ${"bg-blue-500"}
      ${"hover:bg-blue-700"}
    `;

    expect(result).toBe("bg-blue-500 hover:bg-blue-700");
  });

  it("can attach variables by literal", () => {
    const isWhite = false;
    const result = twStyle`
      bg-blue-500
      hover:bg-blue-700
      ${isWhite ? "text-white" : "text-black"}
      font-bold
    `;

    expect(result).toBe("bg-blue-500 hover:bg-blue-700 text-black font-bold");
  });

  it("can write twStyle together internally.", () => {
    const textStyle = twStyle`text-white font-bold`;
    const style = twStyle`
      bg-blue-500
      hover:bg-red-500
      ${textStyle}
    `;

    expect(style).toBe("bg-blue-500 hover:bg-red-500 text-white font-bold");
  });

  it("can write twStyle directly inside twStyle.", () => {
    const style = twStyle`
      bg-blue-500
      hover:bg-red-500
      ${twStyle`text-white font-bold`}
    `;

    expect(style).toBe("bg-blue-500 hover:bg-red-500 text-white font-bold");
  });
});
