const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    serviceWorker: path.resolve(__dirname, "src", "serviceWorker.ts"),
    contentScript: path.resolve(__dirname, "src", "contentScript.ts"),
    options: path.resolve(__dirname, "src", "options.ts"),
    popup: path.resolve(__dirname, "src", "popup.ts"),
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CopyPlugin({
      // Copy all html files to dist folder
      patterns: [
        { from: "src/*.html", to: "[name][ext]" },
        { from: "assets/*.*", to: "assets/[name][ext]" },
        {
          from: "manifest.json",
          to: "manifest.json",
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
