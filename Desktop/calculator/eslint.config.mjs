import { defineConfig } from "@shayanthenerd/eslint-config";

export default defineConfig({
  configs: {
    typescript: {
      typeDefinitionStyle: "type",
      overrides: {
        rules: {
          "@typescript-eslint/no-unsafe-type-assertion": "off",
          "class-methods-use-this": "off",
        },
      },
    },
  },
});
