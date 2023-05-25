export default function twStyle(
  strings: TemplateStringsArray,
  ...keys: string[]
) {
  const result = strings.reduce((acc, str, idx) => {
    return `${acc} ${str} ${keys.length > idx ? keys[idx] : ""}`;
  }, "");

  return result.trim().replace(/\s{2,}/g, " ");
}
