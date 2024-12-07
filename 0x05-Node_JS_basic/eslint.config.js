// eslint.config.js
export default [
  {
    ignores: ["node_modules/**", "dist/**"], // Optional: Directories to ignore
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022, // Use the appropriate ECMAScript version
      sourceType: "module", // Or "script" for non-modular files
    },
    rules: {
      // Add your rules here
      "no-console": "warn", // Example: Warn for console statements
    },
  },
];

