import path from 'path';
import NodemonPlugin from 'nodemon-webpack-plugin';

const __dirname = import.meta.dirname;
const mode = process.env.NODE_ENV || 'development';

export default {
  target: 'node20',
  mode,
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
