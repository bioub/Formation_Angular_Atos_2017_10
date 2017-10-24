const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'source-map',
  entry: './src/app/main.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.[hash].js',
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ]
};
