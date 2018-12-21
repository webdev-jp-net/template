module.exports = {
  mode: 'development',
  entry: {
    script: `./src/js/script.js`,
  },
  output: {
    filename: `assets/js/[name].js`,
    sourceMapFilename: `assets/js/[name].map`,
  },
  externals: {},
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                  },
                ],
              ],
            }
          }
        ]
      },
    ],
  }
};
