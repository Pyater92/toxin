const PugPlugin = require('pug-plugin');
const path = require('path');
const postcss = require('postcss/lib/postcss');
const loader = require('sass-loader');
const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : 'undefined';

module.exports = {
  mode: 'development',
  entry: {
    // define many page templates here
    index: path.resolve(__dirname, './src/blocks/index/index.pug'),
    uikit: path.resolve(__dirname, './src/blocks/pages/uikit/uikit.pug'),
    landing: path.resolve(__dirname, './src/blocks/pages/landing-page/landing.pug'),
    
  },
  plugins: [
    new PugPlugin({
      
      js: {
        // JS output filename
        filename: 'js/[name].[contenthash:8].js',
      },
      css: {
        // CSS output filename
        filename: 'css/[name].[contenthash:8].css',
      },  
      
    }),
  ],
module: {
  rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    },
    {
    test: /\.woff2?$/i,
    type: 'asset/resource',
    generator: {
      filename: 'fonts/[name].[ext]'
    }
    },
    {
      test: /\.(ico|png|jp?g|webp|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext][query]',
        }, 
    },  
    {
      test: /\.(s?css|sass)$/,
      use: ['css-loader', 'sass-loader'],
    },
  ],
},


devServer: {
  static: {
    directory: path.join(__dirname, 'dist'), // Каталог для статики
  },
  open: true, // Автоматически открывать браузер
},

};