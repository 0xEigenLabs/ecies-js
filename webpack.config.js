const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    /* library: {
      name: 'eciesUtils',
      type: 'umd',
    }, */
    library: 'eciesUtils',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
      }
    ]
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      "stream": require.resolve("stream-browserify")
    },
  },
  /* resolve: {
    // ... rest of the resolve config
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],// other stuff
    fallback: {
      // "crypto": false,
      "path":  require.resolve("crypto-browserify")
    }
  }, */
};