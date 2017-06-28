const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.common');

module.exports = merge({
	entry: [
		"react-hot-loader/patch",
	],

	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],

	devtool: "eval",

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{
				test: /\.tsx?$/,
				loaders: [
					"react-hot-loader/webpack",
					"awesome-typescript-loader"
				],
				exclude: path.resolve(__dirname, 'node_modules'),
				include: path.resolve(__dirname, "src"),
			},
			// This will cause the compiled CSS (and sourceMap) to be
			// embedded within the compiled javascript bundle and added
			// as a blob:// uri at runtime.
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
			}
		]
	},

	devServer: {
		hot: true,
		watchOptions: {
			ignored: /node_modules/,
			aggregateTimeout: 1000,
			poll: 2000
		}
	}
}, baseConfig);