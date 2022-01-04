const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  // entry: {
  //   index: "./src/index.js",
  // },
  module: {
    rules: [
      {
        test: /(\.css|\.less)$/,
        use: [
          {
            loader: "style-loader",
            options: {},
          },
          {
            loader: "css-loader",
            options: { importLoaders: 2 },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "less-loader",
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(), new webpack.HotModuleReplacementPlugin()],
  devtool: "inline-source-map",
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://www.baidu.com",
        pathRewrite: { "^/api": "/api" },
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
