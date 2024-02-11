import path from 'path';
import NodemonPlugin from 'nodemon-webpack-plugin';

const __dirname = import.meta.dirname;

export default {
  target: 'node20',
  mode: 'development',
  watch: true,
  entry: './src/app.ts',
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
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'module',
    environment: {
      module: true,
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [new NodemonPlugin()],
};
