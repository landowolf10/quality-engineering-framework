import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "playwright-report/**",
      "test-results/**",
      "coverage/**",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    extends: [js.configs.recommended, tseslint.configs.recommended, tseslint.configs.strict],
  },
]);
