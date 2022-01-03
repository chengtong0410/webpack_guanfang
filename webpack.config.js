const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // entry: "./src/index.js",
  // mode: "development",
  mode: 'production',
  entry: {
    app: "./src/index.js",
    // print: "./src/print.js",
  },
  output: {
    // filename: "bundle.js",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      title: "模块热替换",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
