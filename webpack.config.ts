/* eslint-disable import/no-extraneous-dependencies */

// import path from 'path';
// import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        // options: {
        //   transpileOnly: true
        // }
      },
    ],
  
  },
  // plugins: [new ForkTsCheckerWebpackPlugin()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};