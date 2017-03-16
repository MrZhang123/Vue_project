const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  // entry: [
  //   path.resolve(__dirname + '/src/main.js')
  // ],
  entry:{
    app: ['./src/main.js'],
    vendor: [
      'lodash',
      'axios',
      'vue',
      'vue-router'
    ]
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    publicPath: '/dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      //转化ES6语法
      {
        test: /\.js$/,
        loader: 'babel',
        /*以上为简写
        use: [
          {
            loader: 'babel'
          }
          //or
          'babel'
        ],*/
        exclude: /node_modules/
      },
      //解析.vue文件
      {
        test: /\.vue$/,
        loader: 'vue',
        options: {
          loaders:{
            css: extractTextPlugin.extract({
              loader: 'css-loader',
              fallbackLoader: 'vue-style-loader'
            })
          }
        }
      },
      //图片转化，小于8K自动转化为base64的编码
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url',
        options: {
          limit: 8192
        }
      }
    ]
  },
  //禁止显示webpack的build.js太大的提示
  performance: {
    hints: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new htmlWebpackPlugin({
      filename: 'assets/admin.html'
    }),
    new extractTextPlugin({
      filename:'/style.css',
      allChunks:true
    })
  ],
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  resolve: {
    // require时省略的扩展名，如：require('app') 不需要app.js
    extensions: ['.js', '.vue'],
    // 别名，可以直接使用别名来代表设定的路径以及其他
    alias: {
      filter: path.join(__dirname, './src/filters'),
      'vue$': 'vue/dist/vue.common.js',
      components: path.join(__dirname, './src/components')
    }
  }
}
