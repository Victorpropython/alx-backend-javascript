export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021, // or the version you're using
      sourceType: "module",
    },
    rules: {
      "arrow-parens": ["error", "always"],
      "padded-blocks": ["error", "never"],
      "spaced-comment": ["error", "always"],
    },
  },
];

