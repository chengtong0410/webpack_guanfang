const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ENV = process.env.NODE_ENV;
module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    // chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // optimization: {
  //   runtimeChunk: "single",
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "vendors",
  //         chunks: "all",
  //       },
  //     },
  //   },
  // },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": path.resolve("src"),
    },
    modules: ["node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-runtime",
                {
                  corejs: 3,
                },
              ],
            ],
          },
        },
        exclude: /node_modules/, //排除 node_modules 目录
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/images",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "static/fonts",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new OptimizeCssPlugin(),
    new webpack.ProvidePlugin({
      _: "lodash",
    }),
    new webpack.DefinePlugin({
      __ENV__: JSON.stringify(ENV),
    }),
  ],
};
//   resolveLoader: {
//     modules: ["./node_modules", "./myloaders"],
//   },

// {
//   loader: "ct-style-loader",
// },
// {
//   loader: "ct-css-loader",
//   // options: { importLoaders: 2 },
// },
// {
//   loader: "ct-less-loader",
// },
