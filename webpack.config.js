const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [

    new HtmlWebpackPlugin({

      template: './src/index.html',

    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {

    rules: [

      {

        test: /\.scss$/i,

        use: [
          'style-loader', 
          'css-loader',
          'sass-loader'],
      },
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

    ],

  },
};