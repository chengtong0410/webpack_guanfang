const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  // entry: {
  //   another: "./src/another-module.js",
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /src/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: "../",
            },
          },
          // {
          //   loader: "style-loader",
          // },
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          // {
          //   loader: "postcss-loader",
          // },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
});

console.log("2222", MiniCssExtractPlugin);
