const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        }]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './index.html'
        })
    ]
}