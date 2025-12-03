/** @type {import("prettier").Config} */
module.exports = {
  semi: true, // <-- add semicolons
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 100,
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  singleAttributePerLine: true,

  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],

  importOrder: [
    "^(react|next(/.*)?)$",
    "<THIRD_PARTY_MODULES>",
    "^@/components/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/styles/(.*)$",
    "^@/types/(.*)$",
    "^@/(.*)$",
    "^[./]",
  ],

  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
