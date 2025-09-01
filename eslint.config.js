import js from "@eslint/js";
import { globalIgnores } from "eslint/config";
import perfectionist from "eslint-plugin-perfectionist";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config([
  eslintPluginPrettierRecommended,
  globalIgnores(["dist"]),
  {
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      perfectionist,
      "simple-import-sort": simpleImportSort,
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "arrow-body-style": ["error", "as-needed"],
      complexity: ["error"],
      eqeqeq: "error",
      "max-depth": "error",
      "max-lines": ["error", 400],
      "max-params": ["warn", 5],
      "no-alert": "error",
      "no-console": [
        "error",
        {
          allow: ["warn", "error"],
        },
      ],
      "no-duplicate-imports": ["error", { includeExports: true }],
      "no-else-return": "error",
      "no-implied-eval": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-useless-assignment": "error",
      "perfectionist/sort-enums": [
        "error",
        {
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-interfaces": [
        "error",
        {
          groups: [
            "unknown",
            "property",
            "method",
            "multiline-member",
            "optional-property",
            "optional-method",
            "optional-multiline-member",
          ],
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-jsx-props": [
        "error",
        {
          type: "natural",
        },
      ],
      "perfectionist/sort-modules": [
        "warn",
        {
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-named-exports": [
        "error",
        {
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-named-imports": [
        "error",
        {
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-object-types": [
        "error",
        {
          groups: [
            "unknown",
            "property",
            "method",
            "multiline-member",
            "optional-property",
            "optional-method",
            "optional-multiline-member",
          ],
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-objects": [
        "error",
        {
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-union-types": [
        "error",
        {
          type: "alphabetical",
        },
      ],
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // 1. Side effects
            ["^\\u0000"],
            // 2. React and packages
            ["^react$", "^@?\\w"],
            // 3. Chakra-specific group for clarity
            ["^@chakra-ui/.*"],
            // 4. Anything not matched in another group.
            ["^@"],
            // 5. Style module imports
            ["^.+\\.(module.css|module.scss)$"],
            // 6. media imports
            ["^.+\\.(gif|png|svg|jpg)$"],
            // 7. Anything that starts with a dot
            ["^\\."],
          ],
        },
      ],
      "unicorn/better-regex": "warn",
      "unicorn/consistent-destructuring": "warn",
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            kebabCase: true,
          },
        },
      ],
      "unicorn/no-empty-file": "error",
      "unicorn/no-negated-condition": "error",
      "unicorn/no-unnecessary-await": "warn",
    },
  },
]);
