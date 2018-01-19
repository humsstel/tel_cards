const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ExtractTextPluginConfig = new ExtractTextPlugin({
    filename: '[name].css',
})
const AppHtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body',
    chunks: ['app']
})

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        app: './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        sourceMapFilename: '[name].map',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src/templates'),
                use: {
                    loader: 'svelte-loader',
                    options: {
                        emitCSS: true,
                    },
                },
            },
            {
                test: /(\.sass|\.scss)$/,
                use: ExtractTextPluginConfig.extract({
                    use: [
                        'css-loader',
                        'sass-loader',
                    ],
                }),
            },
            {
                test: /(\.css)$/,
                use: ExtractTextPluginConfig.extract({
                    use: [
                        'css-loader',
                    ],
                }),
            },
            {
                test: /\.(gif|jpg|png)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                },
            }
        ],
    },
    plugins: [
        ExtractTextPluginConfig,
        AppHtmlWebpackPluginConfig,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
    ],
    watchOptions: {
        ignored: /node_modules/,
    },
}