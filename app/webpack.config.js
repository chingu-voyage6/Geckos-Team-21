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
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
            }
          }
        ]
      }
      // ,
      // {
      //   test: /\.(gif|jpe?g|png|ico)$/,
      //   loader: 'url-loader?limit=10000'
      // }
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
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true,
    proxy: {
    '/api': { 
      target: 'http://localhost:5000/',
      secure: false}    
    }   
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
