const path = require("path");
const webpack = require("webpack");
const packageJson = require("./package.json");

function packageConfig(mode = "production") {
  const targetVal = {
    mode,
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, `dist/${packageJson.version}`),
      filename: mode === "production" ? "lcdpmessage.min.js" : "lcdpmessage.js",
      library: "LcdpMessage",
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: mode === "production",
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
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  };
  return targetVal;
}

module.exports = packageConfig;
