const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    path.resolve(__dirname+'/src/main.js')
  ],
  output: {
    path: path.resolve(__dirname+'/dist'),
    publicPath: '/dist',
    filename: 'build.js'
  },
  module: {
    rules: [
      //转化ES6语法
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel'
          }
        ],
        exclude: /node_modules/
      },
      //解析.vue文件
      {
        test:/\.vue$/,
        /*use 多个loader的写法*/
        use:['vue-loader'],
        /* or
        use:[
          {
            loader:'vue'
          }
        ]*/
      },
      //图片转化，小于8K自动转化为base64的编码
      {
        test: /\.(png|jpg|gif)$/,
        use:[
          {
            loader:'url-loader?limit=8192'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolveLoader:{
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