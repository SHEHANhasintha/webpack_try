module.exports = {
  entry: {
    app: './src/file.js',
  },
  output: {
    filename: 'webpack_output/webpack.js',
    path: __dirname + '/'
  },
  mode: 'production'
};