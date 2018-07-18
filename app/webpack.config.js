const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "views/"),
    port: process.env.PORT || 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
    proxy: {
    '/api': { 
      target: 'http://localhost:5000/',
      secure: false
  }
    }   
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
