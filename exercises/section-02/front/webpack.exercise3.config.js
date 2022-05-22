const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  entry: `./src/main3.js`,
  output: {
    filename: "main.js",
    path: path.join(__dirname, "dist")
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `./src/exercise3.html`,
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/images", to: "images", noErrorOnMissing: true, globOptions: { ignore: ["**/.gitignore"] } },
      ]
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    port: 9990,
  }
};
