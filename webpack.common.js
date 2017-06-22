const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		"./src/index.tsx",
	],

	node: {
		__dirname: false,
		__filename: false
	},

	output: {
		path: path.join(__dirname, 'dist'),
		filename: "compiled.js",
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",
	target: "electron-renderer",

	plugins: [
		new HtmlWebpackPlugin({
			chunksSortMode: 'dependency',
			template: path.resolve(__dirname, './src/index.html')
		}),
	],

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},

	module: {
		rules: [
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
		]
	},
};