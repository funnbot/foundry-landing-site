// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const dist = path.resolve(__dirname, "dist");
const src = path.resolve(__dirname, "src");
const root = path.resolve(__dirname);

const config = {
    context: src,
    entry: {
        index: {
            import: "./js/index.js",
            filename: "./index.[contenthash].js",
        }
    },
    output: {
        path: dist,
        publicPath: "/",
        clean: true,
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new CopyPlugin({
            patterns: [
                `${root}/public/`
            ]
        })

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env"]
                }
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    optimization: {
        minimizer: [
            "...",
            new CssMinimizerPlugin(),
        ]
    }
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';

        config.plugins.push(new MiniCssExtractPlugin());

    } else {
        config.mode = 'development';
    }
    return config;
};
