module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "react-app",
    "react-app/jest",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-console": "error",
    "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index", "object", "type"],
        pathGroups: [
          {
            pattern: "@alias/**",
            group: "type",
            position: "after",
          },
        ],
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "always",
      },
    ],
  },
};
