import commonjs from "rollup-plugin-commonjs";
import svelte from 'rollup-plugin-svelte';
import postcss from 'rollup-plugin-postcss';
import resolve from "rollup-plugin-node-resolve";

export default {
  input: 'src/controllers/root/index.js',
  output: {
    name: 'notUser',
    format: 'iife',
    file: 'dist/notUser.root.js',
    sourcemap: false,
  },
  plugins: [
    svelte({
      emitCss: true
    }),
    resolve({
      browser: true,
      dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
    }),
    commonjs(),
    postcss({
      extract: true,
      minimize: true,
      use: [
        ['sass', {
          includePaths: [
            './node_modules'
          ]
        }]
      ]
    })
  ]
};
