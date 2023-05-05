// path: para trabajar con nuestro sistem fyle local
const path = require('path');

// nodeExternals: para poder hacer luego la transpilacion correctamente.
const nodeExternals = require('webpack-node-externals');

// exportar la configuracion para webpack
module.exports = {
  mode: 'development',
  entry: {
    index: './index.ts',
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: [nodeExternals()],
};
