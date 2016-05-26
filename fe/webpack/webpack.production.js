const common = require('./common');
const _ = require('lodash');
require('@kalon/k1-config');

module.exports = {
  entry: common.entry,
  output: common.createOutput({
    filename: '[name].bundle-[hash].js',
    publicPath: '/'
  }),
  module: {
    loaders: [
      common.createJsLoader(),
      common.createSassLoader({ extract: true }),
      common.createImagesLoader({ name: '[path][name]-[hash].[ext]' }),
      common.createFontsLoader({ name: '[path][name]-[hash].[ext]' }),
      common.createHtmlLoader()
    ]
  },
  plugins: [
    common.noErrorPlugin,
    common.occurenceOrderPlugin,
    common.dedupePlugin,
    common.uglifyPlugin,
    common.createCommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].bundle-[hash].js'
    }),
    common.createExtractCSSPlugin('[name].bundle-[hash].css'),
    common.createDefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'CONFIG': JSON.stringify(
        _.pick(process.env,
         'API_URL',
         'AUTHORIZATION_SCHEME',
         'TOKEN_HEADER'
       ))
    }),
    common.createAssetsPlugin()
  ],
  resolve: common.resolve,
  postcss: common.postcss
};
