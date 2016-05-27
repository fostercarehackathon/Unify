const common = require('./common');


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
      'CONFIG': JSON.stringify(
        {
          API_URL: common.API_URL,
          TOKEN_HEADER: common.TOKEN_HEADER
        })
    })
  ],
  resolve: common.resolve,
  postcss: common.postcss,
  devtool: 'inline-source-map',
  devServer: common.devServer
};
