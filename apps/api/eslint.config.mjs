import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginN from "eslint-plugin-n";

export default [
  {
    ignores: ["dist/**"],
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        projectService: true,
        project: "./tsconfig.json"
      }
    },
    plugins: {
      "@typescript-eslint": tseslint,
      import: eslintPluginImport,
      n: eslintPluginN
    },
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "import/order": [
        "error",
        {
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          },
          "newlines-between": "always",
          "groups": [["builtin", "external"], "internal", "parent", "sibling", "index"],
          "pathGroups": [
            {
              "pattern": "@echara/**",
              "group": "internal"
            }
          ],
          "pathGroupsExcludedImportTypes": ["builtin"]
        }
      ],
      "n/no-missing-import": "off"
    }
  }
];
