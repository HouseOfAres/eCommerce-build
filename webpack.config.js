// Code to build our code with webpack
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './client/App.jsx',
  mode: 'development',
  // Where files should be sent once they are bundled
 output: {
   path: path.join(__dirname, '/public'),
   filename: 'app.js'
 },
  // webpack 5 comes with devServer which loads in development mode
 devServer: {
   port: 3000,
   watchContentBase: true
 },
  // Rules of how webpack will take our files, compile & bundle them for the browser
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     },
     {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      use: 'file-loader',
      type: 'asset/resource',
    }
   ]
 },
}

