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
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
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
<<<<<<< HEAD:webpack.config.js
    port: 8081,
    publicPath: "http://localhost:8081/dist/",
    hotOnly: true
=======
    port: process.env.PORT || 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
    proxy: {
    '/api': { 
      target: 'http://localhost:5000/',
      secure: false
  }
    }   
>>>>>>> 26d58053a16b78a150b41741de98b6dbebd98ed4:app/webpack.config.js
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
