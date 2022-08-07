module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
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
};
