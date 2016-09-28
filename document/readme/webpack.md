### webpack配置说明

```javascript
var webpack = require('webpack');
//提取webpack公共业务
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var CopyWebpackPlugin = require('copy-webpack-plugin');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
//work dir
//edit this to work
var myworkpath="index";
module.exports = {
    //插件项
    //plugins: [commonsPlugin],
    plugins: [
        new CopyWebpackPlugin([
            //to 是相对output的路径
            { from: 'front/en/page/'+myworkpath, to: '../../../page/'+myworkpath },
            { from: 'front/plugin', to: '../../../../plugin' },
            { from: 'front/en/source/img/'+myworkpath, to: '../../../source/img/'+myworkpath }
        ], {ignore: ['*.txt']}),
        //new ExtractTextPlugin("../../css/"+myworkpath+"/[name].css"),
    ],
    //页面入口文件配置
    entry: {
        index:['./front/en/source/js/'+myworkpath+'/mytest.js']
    },
    //入口文件输出配置
    output: {
       path: './static/en/source/js/'+myworkpath+'/',
        filename: '[name].js'
    },
    //外部
    //externals: {'react': 'React'},
    module: {
        //加载器配置
        loaders: [
            //.js 文件使用 jsx-loader 来编译处理
            { test: /\.js$/, loader: 'jsx?babel' },
            //.scss 文件使用 style-loader、css-loader 和 less-loader 来编译处理
            //{ test:/\.less$/, loader: ExtractTextPlugin.extract("style", "css!less")},
            { test: /\.less$/, loader: 'style!css!less' },
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            //{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
            //pic loader
            //{ test: /\.(png|jpg|jpeg|gif)$/, loader: "file-loader?name=../../img/"+myworkpath+"/[hash:8].[name].[ext]" }
        ]
    }
};

关于webpack的一些说明：
1.CopyWebpackPlugin是一个复制插件，用来将不需要编译的文件拷贝到static下
2.commonsPlugin是用来提取共用文件的插件
3.ExtractTextPlugin是用来分离出less编译的css文件，这里我们不需要用到
4.日常工作只需要将myworkpath设置到你的page下对应的开发目录就行了。
```
