const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = (evl, argv) => {
  const isProduction = argv === "production";
  const config = {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /.s?css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /.js$/,
          use: ["babel-loader"],
        },
        {
          test: /.(png|jpg)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
                name: "[path][name].[ext]",
                outputPath: "images",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
  };
  if (isProduction) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "[name].css",
      })
    );
  }
  return config;
};
