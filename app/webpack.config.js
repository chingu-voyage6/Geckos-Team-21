const path      = require("path");
const webpack   = require("webpack");
var port        = process.env.PORT;
var nport       = process.env.NODE_PORT;

module.exports = {
  entry: "./src/index.js",  
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
    disableHostCheck: true,
    contentBase: path.join(__dirname, "views/"),
    port: port,
    publicPath: 'http://localhost:' + port +'/dist/',
    host: '0.0.0.0',
    hotOnly: true,
    proxy: {
    '/api': { 
      target: 'http://localhost:' + nport + '/',
      secure: false}    
    }   
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
