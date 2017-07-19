const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
	let config = {
		entry: {
			app : './src/index.js'
		},
		output: {
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, 'dist')
		},
		
		module: {
			rules: [
				{
					test:/\.js$/,
					use:['babel-loader'],
					exclude:'/node_modules'
				},
				{
					test: /\.css$/,
					use: ExtractTextPlugin.extract([
					'style-loader',
					'css-loader'
					])
				},
				{
					test :/\.less$/,
					use:ExtractTextPlugin.extract({fallback:"style-loader",use:["css-loader","less-loader"]})
				},
				{
					test:/\.(png|svg|jpg|gif)$/,
					use:[
						'url-loader?limit=8192&name=[name][chunkhash].[ext]'
					]
				}
			]
		}

	};
	switch (env){
		case 'dev' : extent(require('./webpack.dev.config.js'),config)
		break;
		case 'bulid' : extent(require('./webpack.prod.config.js'),config)
		break;
	}
	return config
};

function extent (o1,o2) {
	for (var i in o1){
		o2[i] = o1[i];
	}
	return o2;
}