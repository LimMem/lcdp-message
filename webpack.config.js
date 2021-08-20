const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "lcdpmessage.min.js",
    library: "LcdpMessage",
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx|mjs)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-typescript",
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "entry",
                },
              ],
            ],
          },
        },
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
      },
      // {
      //   test: /\.tsx?$/,
      //   use: "ts-loader",
      //   exclude: /node_modules/,
      //   include: path.resolve(__dirname, "src"),
      // },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
