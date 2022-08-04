module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.(png|jpg)$/,
        use: ["url-loader"],
      },
    ],
  },
};
