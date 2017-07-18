const path = require('path');

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
					use: [
					'style-loader',
					'css-loader'
					]
				},
				{
					test:/\.(png|svg|jpg|gif)$/,
					use:[
						'url-loader?limit=8192&name=[name][chunkhash:8].[ext]'
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