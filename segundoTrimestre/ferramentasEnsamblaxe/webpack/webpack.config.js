const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), // dirname refírese ao directorio actual
    filename: "bundle.js",
  },
  devServer: {
    static: {
    directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    // open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: "Kalise Para Todos",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
}
