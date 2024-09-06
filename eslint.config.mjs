import promise from "eslint-plugin-promise";
import globals from "globals";
import babelParser from "@babel/eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: ["node_modules/**/*", "coverage/**/*", "docs/**/*"],
    },
    ...compat.extends(
        "eslint:recommended",
        // "plugin:sonarjs/recommended",
        "plugin:promise/recommended"
    ),
    {
        plugins: {
            promise,
        },

        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.mongo,
                ...globals.browser,
                ...globals.mocha,
            },

            parser: babelParser,
            ecmaVersion: 2022,
            sourceType: "module",

            parserOptions: {
                requireConfigFile: false,
                allowImportExportEverywhere: false,

                ecmaFeatures: {
                    globalReturn: false,
                },
            },
        },

        rules: {
            indent: ["error", 4],
            "linebreak-style": ["error", "unix"],
            semi: ["error", "always"],
            "no-useless-escape": [0],
        },
    },
];
