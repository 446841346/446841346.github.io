const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
	output: {
		filename: './js/[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath : '/'
	},
	plugins: [
		//每次打包先清空dist
		new CleanWebpackPlugin(['dist']),

		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.UglifyJsPlugin(),

		//打包css js 到html内（可定义多个html）
		new HtmlWebpackPlugin({
			filename : 'index.html',
			template: path.join(__dirname, 'index.html')
		}),

		new ExtractTextPlugin('./style/style.css'),

		//把公用部分独立打包
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common' // Specify the common bundle's name.
		})
	]
}