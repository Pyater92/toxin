const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loader = require('mini-css-extract-plugin/types/loader');
const { sourceMapsEnabled } = require('process');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist'
  },

  module: {
    rules: [{ 
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, { 
      test: /\.scss$/,
      use: [ 
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap:true }
        }, {
          loader: 'sass-loader',
          options: { sourceMap:true }
        }
      ] 
    },{
      test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
        "css-loader"
        ],
      },
    ]
  },

  devServer: {
    overlay: true
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      
    })
  ],
}

  /*devServer: {
    overlay: true
  },
    static: {
      directory: path.join(__dirname, 'dist'), // Каталог для статики
    },
    open: true, // Автоматически открывать браузер
  },

  mode: 'development', // Режим сборки
};*/