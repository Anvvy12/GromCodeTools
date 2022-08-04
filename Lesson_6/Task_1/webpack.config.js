module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /.(css|scss)$/,
        use: ["style-loader", "css-loader"],
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
