const path = require('path');

const isProduction = process.env.npm_lifecycle_script.includes('production');

module.exports = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'source-map',
    entry: {
        'index': path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'static/'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                resolve: {
                    extensions: [".js", ".jsx"]
                },
                options: {
                    presets: [
                        ['@babel/preset-react', {"runtime": "automatic"}]
                    ]
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(svg|ico|png|gif|jpg|jpeg)(\?|$)/,
                loader: 'file-loader'
            }
        ]
    },
    cache: true
}