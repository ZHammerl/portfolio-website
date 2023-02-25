const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { index: "./src/index.js" },
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 8080,
  },
  plugins: [
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
  ],
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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
};
