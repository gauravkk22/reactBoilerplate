const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry : './main.js',
    output : {
        path : path.join(__dirname,'/bundle'),
        filename : 'index_bundle.js'
    },
    devServer : {
        port : 8001,
        watchContentBase: true
    },
    module : {
        rules: [{
            test : /\.(js|jsx)$/,
            exclude : /node_modules/,
            use: {
                loader : 'babel-loader',
            }
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
           }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './index.html'
        }),
        new MiniCssExtractPlugin()
    ]
}