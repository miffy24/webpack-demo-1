const path = require('path');

module.exports = {
  entry: './src/js/app.js', // 这里应用程序开始执行,webpack 开始打包
  output: {
    // webpack 如何输出结果的相关选项
    filename: 'bundle.js',//输出资源块的名字(asset chunk)
    path: path.resolve(__dirname, 'dist/js') // 所有输出文件的目标路径,我的就是./dist/bundle.js
  },
module: {
  //这是关于模块的配置
  rules: [
    //模块规则（配置 loader、解析器等选项）
    {
      test: /\.js$/, //使用正则判断后缀是js的文件
      exclude: /(node_modules|bower_components)/, 
      //除了这两目录下的node_modules|bower_components
      use: {
        loader: 'babel-loader', //用这个loader处理.js的文件
        options: {
          presets: ['env'] //选项，还记得单独使用babel的时候建立的那个.babelrc嘛，就是那个作用。
        }
      }
    },
{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }  ]
}
};
