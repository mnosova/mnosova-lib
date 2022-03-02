import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import path from 'path';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import nodeResolve from '@rollup/plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';
// import esbuild from 'rollup-plugin-esbuild';

/**
 * based on https://github.com/palmerhq/tsdx/blob/master/src/createRollupConfig.ts
 */
// const esbuildOptions = {
//   include: /\.[jtm]sx?$/,
//   pure:true,
//   exclude: /node_modules/,
//   sourceMap: false,
//   target: 'chrome72',
//   loaders: {
//     '.json': 'json',
//     '.js': 'jsx',
//   },
// };

const babelOptions = () => ({
  exclude: /node_modules/,
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.es', '.mjs', '.json'],
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: '3',
        loose: true,
      },
    ],
  ],
  plugins: [
    require.resolve('babel-plugin-annotate-pure-calls'),
    require.resolve('babel-plugin-dev-expression'),
  ],
});

function createConfig(
  format, //: 'cjs' | 'umd' | 'es',
  env, //: 'development' | 'production',
  opts //: { input: string; name: string; target: 'node' | 'browser' }
) {
  return {
    input: opts.input,
    external: (id) => {
      // external modules except local and absolute
      return (
        !(id.startsWith('./') || id.startsWith('../')) && !path.isAbsolute(id)
      );
    },
    output: {
      file: `build/react-ui.${format}.${env}.js`,
      format,
      freeze: false,
      esModule: false,

      name: opts.name,
      sourcemap: true,
      // exports: 'named',
    },
    plugins: [
      url({
        include: ['**/*.woff', '**/*.woff2'],
        limit: Infinity,
      }),
      peerDepsExternal(),
      nodeResolve({
        mainFields: ['module', 'jsnext', 'main'],
        browser: format !== 'cjs',
      }),
      format === 'umd' &&
      commonjs({
        include: /\/node_modules\//,
      }),
      json(),
      // esbuild(esbuildOptions),
      babel(babelOptions(format)),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
      sourceMaps(),
      sizeSnapshot({
        printInfo: false,
      }),
      env === 'production' &&
      terser({
        output: { comments: false },
        compress: {
          keep_infinity: true,
          pure_getters: true,
          // collapse_vars: false,
        },
        ecma: 5,
        toplevel: format === 'es' || format === 'cjs',
        warnings: true,
      }),
      url({
        limit: Infinity,
      }),
      svgr(),
    ],
  };
}

export default [
  createConfig('cjs', 'development', {
    input: './out/index.js',
  }),
  createConfig('cjs', 'production', {
    input: './out/index.js',
  }),
  createConfig('es', 'production', {
    input: './out/index.js',
  }),
  createConfig('umd', 'development', {
    input: './out/index.js',
    name: 'ReactUI',
  }),
  createConfig('umd', 'production', {
    input: './out/index.js',
    name: 'ReactUI',
  }),
];
