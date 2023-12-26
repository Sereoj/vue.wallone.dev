const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /.s[ac]ss$/i,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            minimize: true,
                            sassOptions: {
                                outputStyle: "compressed",
                            },
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new SVGSpritemapPlugin(path.resolve("src/images/*.svg"), {
            styles: path.resolve('src/assets/style/_sprites.scss'),
            sprite: {
                prefix: 'i-',
                generate: {
                    use: true
                }
            }
        })
    ]
};