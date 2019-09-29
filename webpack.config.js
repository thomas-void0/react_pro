//  向外暴露一个打包的配置对象：
// 因为webpack是基于node构建的；所以webpack支持所有的Node API和语法
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');//导入在内存中自动生成 index页面的插件
//创建一个插件的示例对象 ,将首页放置到内存中 
const htmlPlugin = new HtmlWebPackPlugin({
    template:path.join(__dirname,'./index.html'), //源文件
    filename:'index.html'//生成的内存中首页的名称
})
//webpack 只能默认打包js后缀类型的文件。
module.exports = { //这个才是node api
    mode:'development',//mode是必选项
    //在webpack 4.x中，有一个很大的特性，就是约定大于配置。默认的打包入口路径是src->index.js
    //默认的输出文件是dist->main  
    plugins:[
        htmlPlugin
    ],
    module:{//所有第三方模块的配置规则
        rules:[//第三方匹配规则
            {test:/\.js|jsx$/,use:"babel-loader",exclude:/node_modules/},//一定要添加exclude
            //exclude 排除项
            {
                test:/\.css$/i,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader',
                    options:{
                        modules:{
                            localIdentName:'[path][name]__[local]--[hash:base64:5]'
                        },
                    },}
                ],
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            // 自己规定，第三方的样式表都是以.css结尾 自己的文件为.less 或者.scss启用模块化
            // 再css-loader 之后通过?追加参数，其中有一个固定的参数modules，表示为普通的css样式表启用模块化
            {test:/\.ttf|woff|woff2|eot|svg$/,use:"url-loader"}//针对第三方字体文件
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.json'], //表示着几个文件的后缀名可以省略不写
        alias:{//表示别名
            '@':path.join(__dirname,'./src/img') //这样@就表示项目根目录中src/components这一层的路径
        }
    }
}
