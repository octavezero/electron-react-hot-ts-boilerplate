const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.common');

module.exports = merge(baseConfig, {
	plugins: [
		new ExtractTextPlugin('compiled.css')
	],
	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{
				test: /\.tsx?$/,
				loaders: [
					"awesome-typescript-loader"
				],
				exclude: path.resolve(__dirname, 'node_modules'),
				include: path.resolve(__dirname, "src"),
			},
			// This will cause the compiled CSS to be output to a
			// styles.css and a <link rel="stylesheet"> tag to be
			// appended to the index.html HEAD at compile time
			{
				test: /\.(less|css)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'less-loader']
				})
			},
		]
	},
});