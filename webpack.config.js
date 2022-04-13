/* eslint-disable @typescript-eslint/no-var-requires */
const nodeExternals = require("webpack-node-externals");
const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/main.ts",
  externals: [nodeExternals()],
  mode: 'production',
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devtool: false,
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.SourceMapDevToolPlugin({}),
  ],
  target: "node",
  cache: true,
  context: __dirname,
  resolve: {
    extensions: ["*", ".ts",  ".js"],
  },
  module: {
    rules: [
      {
        exclude: [/node_modules/, /__test__/],
        loader: "ts-loader",
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        },
        test: /\.tsx?$/,
      },
    ]
  }
};
