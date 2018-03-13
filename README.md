# webpack-demo-1
### 一、 webpack4.0之前的使用：
1. 安装
```
mkdir webpack-demo-1
cd webpack-demo-1
npm init -y //生成package.json
npm install --save-dev webpack@3.10.0 //安装到开发环境里面(devDependicies)
```
2. webpack基本配置文件
```
touch webpack.config.js
vi webpack.config.js
```
配置文件内容如下：
```javasrcipt
const path = require('path');

module.exports = {
  entry: './src/index.js', // 这里应用程序开始执行,webpack 开始打包
  output: {
    // webpack 如何输出结果的相关选项
    filename: 'bundle.js',//输出资源块的名字(asset chunk)
    path: path.resolve(__dirname, 'dist') // 所有输出文件的目标路径,我的就是./dist/bundle.js
  }
};

```

3. 使用
- 运行`./node_modules/.bin/webpack `
- 运行 `npx webpack `
  
### 二、把ES6或者其他ES版本js转换成通用的js代码
使用bebel-loader，loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。
```
npm install --save-dev babel-loader babel-core babel-preset-env webpack
```
配置文件
```
//依然属于webpack.config.js配置的一部分，
module: {
  //这是关于模块的配置
  rules: [
    //模块规则（配置 loader、解析器等选项）
    {
      test: /\.js$/, //使用正则判断后缀是js的文件
      exclude: /(node_modules|bower_components)/, //除了这两目录下的node_modules|bower_components
      use: {
        loader: 'babel-loader', //用这个loader处理.js的文件
        options: {
          presets: ['env'] //选项，还记得单独使用babel的时候建立的那个.babelrc嘛，就是那个作用。
        }
      }
    }
  ]
}
```
### 把scss文件变成css并加入到html里面

1. `npm install sass-loader node-sass webpack --save-dev`

```
2. 配置文件
// webpack.config.js
module.exports = {
	...
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
};
```
3. 运行`./node_modules/.bin/webpack ` 若报错缺什么`npm install 什么`





