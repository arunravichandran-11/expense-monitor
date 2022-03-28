import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import scss from 'rollup-plugin-scss';
import sass from 'rollup-plugin-sass';
import autoprefixer from 'autoprefixer';
// import postcss from 'postcss';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';


export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      extensions: [".js"],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' ),
      preventAssignment: true
    }),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: 'bundled'
    }),
    commonjs(),
    image(),
    // postcss({
    //     extract: true,
    //     modules: true,
    //     use: ['sass'],
    //     plugins: [
    //         autoprefixer(),
    //     ],
    // }),
    postcss({
        plugins: [autoprefixer()],
        sourceMap: true,
        extract: false,
        minimize: true
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "public"],
      host: "localhost",
      port: 4000,
    }),
    livereload({ watch: "dist" }),
  ]
};
