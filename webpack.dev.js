const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  // entry: {
  //   index: "./src/index.js",
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              // publicPath: "../../",
            },
          },
          {
            loader: "css-loader",
            options: { importLoaders: 2 },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
});
