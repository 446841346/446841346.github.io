const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
	//开发环境
	devtool:'inline-source-map',
	devServer:{
		compress: true,
		port:3000
	},
	plugins: [
		new ExtractTextPlugin('./style/style.css'),

		new HtmlWebpackPlugin({
			'template' : path.join(__dirname, 'index.html'),
			'files' : {
				'js':['app.bundle.js'],
				'css':['./dist/style/style.css']
			}
		}),
	]
	
}