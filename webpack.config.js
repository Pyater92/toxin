const HtmlWebpackPlugin = require('html-webpack-plugin');

/*const PAGES_DIR = `${PATHS.src}/pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))*/

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const postcss = require('postcss/lib/postcss');
const loader = require('sass-loader');
const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : 'undefined';

module.exports = {
  mode,
  target,
  devtool: 'inline-source-map',
  entry: ['@babel/polyfill', path.resolve(__dirname,'src', 'index.js')],
  
  output: {    
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext]' 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.pug'), /*template: './src/index.html' */
        filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    }),
    /*...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    }))*/    
  ],
module: {
  rules: [
    {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        },
      },
    },
    {
    test: /\.woff2?$/i,
    type: 'asset/resource',
    generator: {
      filename: 'fonts/[name].[ext]'
    }
    },
    {
      test: /\.pug$/,
      loader: 'pug-loader',
      
    },
    {
      test: /\.(jpg|png|webp|gif|svg)$/i,
      use : [{
        loader: 'image-webpack-loader',
        options: {
          name: '[name].[ext]',
          type: 'asset/resource',   
          mozjpeg: {
            progressive: true,
          },
          // optipng.enabled: false will disable optipng
          optipng: {
            enabled: false,
          },
          pngquant: {
            quality: [0.65, 0.90],
            speed: 4
          },
          gifsicle: {
            interlaced: false,
          },
          // the webp option will enable WEBP
          webp: {
            quality: 75
          }
        }
      },
      ], 
    type: 'asset/resource',
    },  
    {
      test: /\.html$/i,
      loader: 'html-loader',
    },
    {
      test: /\.(c|sa|sc)ss$/i,
      use: [        
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('postcss-preset-env')]
            }
          }
        },
        {
          loader: 'resolve-url-loader',
        },
        {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
        },
      ],
    },
  ]
},


devServer: {
  static: {
    directory: path.join(__dirname, 'dist'), // Каталог для статики
  },
  open: true, // Автоматически открывать браузер
},

};