// Rollup plugins
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import filesize from "rollup-plugin-filesize";
import sizes from "rollup-plugin-sizes";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";

import { babelOn } from "./build.env.mjs";

export default {
    input: "/home/cypher/proj/not-lib/not-user/test/testapp/front/tmpl/index.admin.mjs",
    output: {
        file: "/home/cypher/proj/not-lib/not-user/test/testapp/static/assets/admin.js",
        name: "notUserTestApp",
        format: "iife",
        sourcemap:
            false && (process.env.NODE_ENV === "production" ? false : "inline"),
    },
    plugins: [
        json(),
        svelte({
            emitCss: true,
        }),
        resolve({
            browser: true,
            preferBuiltins: true,
            dedupe: (importee) =>
                importee === "svelte" || importee.startsWith("svelte/"),
        }),
        commonjs({}),
        postcss({
            extract: true,
            minimize: true,
            use: [
                [
                    "sass",
                    {
                        includePaths: ["./src/styles/theme", "./node_modules"],
                    },
                ],
            ],
        }),
        babelOn() &&
            babel({
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            corejs: 3,
                            modules: false,
                            useBuiltIns: "usage",
                            targets: "> 2.5%, not dead",
                        },
                    ],
                ],
                babelHelpers: "bundled",
                plugins: [
                    "@babel/plugin-transform-class-properties",
                    "@babel/plugin-transform-private-methods",
                    "@babel/transform-arrow-functions",
                ],
                exclude: ["node_modules/**", "build/**"],
            }),
        sizes(),
        filesize(),
    ],
};
