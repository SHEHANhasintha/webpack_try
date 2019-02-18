module.exports = {
  entry: {
    app: './src/js/file.js',
  },
  output: {
    filename: 'webpack_output/webpack.js',
    path: __dirname + '/dist'
  },
  mode: 'production',
  module: {
	    rules: [
	      { test: /\.css$/, use: 'css-loader' },
	      { test: /\.ts$/, use: 'ts-loader' },
	      { test: /\.css$/, use: 'style-loader!css-loader'}
	    ]
	  }
};