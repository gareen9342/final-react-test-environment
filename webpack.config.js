const path = require('path');
const webpack = require('webpack');

module.exports = {
    name : 'hello-world',
    mode : 'development',
    devtool: 'eval',
    resolve : {
        extensions : ['.js','.jsx']
    },

    devServer: {
        host: 'localhost',  // 개발 서버의 url
        port: 2021,   // basically 3000
        open: true,   // 서버 실행시 브라우저 자동 실행할건지
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