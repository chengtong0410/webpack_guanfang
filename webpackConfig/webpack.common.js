const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ENV = process.env.NODE_ENV;
module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "static/js/[name].bundle.js",
    chunkFilename: "static/js/[name].bundle.js",
    path: path.resolve(__dirname, "../", "dist"),
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
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
              "dynamic-import-webpack",
            ],
          },
        },
        exclude: /node_modules/,
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
              name: "[name].[ext]",
              outputPath: "static/fonts",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "index.html",
      template: "index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new webpack.HashedModuleIdsPlugin(),
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
console.log(
  ' path.resolve(__dirname, "../", "index.html")',
  path.resolve(__dirname, "../", "index.html")
);
