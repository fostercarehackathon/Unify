const common = require('./common');

const API_URL = 'http://localhost';

module.exports = {
  entry: common.entry,
  output: common.createOutput(),
  module: {
    loaders: [
      common.createJsLoader(),
      common.createSassLoader(),
      common.createImagesLoader(),
      common.createFontsLoader(),
      common.createHtmlLoader()
    ]
  },
  plugins: [
    common.noErrorPlugin,
    common.createCommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].bundle.js'
    }),
    common.createDefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      API_URL
    })
  ],
  resolve: common.resolve,
  postcss: common.postcss,
  devtool: 'inline-source-map',
  devServer: common.devServer
};
