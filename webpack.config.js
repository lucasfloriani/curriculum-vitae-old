const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  cache: false,
  mode: 'development',
  entry: {
    home: './src/js/home.js'
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: [
                ['env', {
                  targets: {
                    browsers: ['last 4 versions', 'safari >= 7', 'ie >= 11']
                  }
                }
                ]
              ]
            }
          },
          'eslint-loader'
        ]
      },
      {
        test: /\.(s?[ac]ss|css)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: {
                safe: true
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              autoprefixer: {
                browsers: ['last 4 versions', '> 1%']
              },
              plugins: () => [
                autoprefixer
              ]
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
};
