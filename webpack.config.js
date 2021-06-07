const path = require('path');
const webpack = require('webpack');

module.exports = {
    name : 'hello-world',
    mode : 'development',
    devtool: 'eval',
    resolve : {
        extensions : ['.js','.jsx']
    },
    devServer : {
        contentBase: __dirname + "dist",
        inline: true,
        hot: true,
        host: "localhost",
        port: 5500
    },
    entry : {
        app : ['./client'],
    },
    module : {
        rules: [{
            test : /\.jsx?$/,
            loader : 'babel-loader', 
            options : {
                presets : [
                    ['@babel/preset-env',{
                        targets : {
                            browsers:['> 1% in KR'],
                        },
                        debug : true,
                    }],
                    '@babel/preset-react',
                ],
                plugins: [],
            },
        }],
    },
    plugins : [
        new webpack.LoaderOptionsPlugin({debug: true}),
    ], 
    output : { 
        path : path.join(__dirname, 'dist'),
        filename : 'app.js'
    },
}