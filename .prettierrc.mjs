/**
 * @type {import("prettier").Config}
 */
const config = {
  semi: false,
  singleQuote: true,
  trailingComma: "all",
  tabWidth: 2,
  plugins: ["prettier-plugin-organize-imports"],
};

export default config;
