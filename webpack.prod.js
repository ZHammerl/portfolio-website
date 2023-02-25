const path = require("path");
const {
  CleanWebpackPlugin,
} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: "source-map",
  entry: { index: "./src/index.js" },
  mode: "production",
  output: {
    filename: "[name].[hash:20].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        // https://webpack.js.org/guides/asset-modules/#resource-assets
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        // https://webpack.js.org/guides/asset-modules/#replacing-inline-loader-syntax
        resourceQuery: /raw/,
        type: "asset/source",
      },
      {
        // https://webpack.js.org/loaders/html-loader/#usage
        resourceQuery: /template/,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/contact.html",
      inject: true,
      chunks: ["index"],
      filename: "contact.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/projects.html",
      inject: true,
      chunks: ["index"],
      filename: "projects.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/impressum.html",
      inject: true,
      chunks: ["index"],
      filename: "impressum.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
  ],
  // https://webpack.js.org/configuration/optimization/
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin({}),
    ],
  },
};
