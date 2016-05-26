/**
 *
 *
 *  Common webpack.
 *
 *
 *  Create a function if you need to have something dynamically configured.
 *
 */


 /* eslint strict: 0*/
'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');

const dist = exports.dist = 'dist';

/**
 *
 *
 * Entry config
 *
 *
 */
exports.entry = {
  app: './app/index.js',
  vendor: [
    'es6-promise',
    'lodash',
    'validate.js',
    'moment',
    'classnames',
    'reselect',
    'redux',
    'redux-logger',
    'redux-thunk',
    'redux-promise-middleware',
    'react',
    'react-dom',
    'react-redux',
    'react-router',
    'react-router-redux'
  ]
};


/**
 *
 *
 * Output config
 *
 *
 */
exports.createOutput = (options) => Object.assign({
  path: `./${dist}`,
  filename: '[name].bundle.js',
  publicPath: '/'
}, options);


/**
 *
 *
 * Resolve config
 *
 *
 */
const modulesDirectories = ['node_modules', './app'];
const extensions = ['', '.js', '.jsx'];
exports.resolve = {
  modulesDirectories,
  extensions
};


/**
 *
 *
 * Loaders
 *
 *
 */
exports.createJsLoader = () => ({
  test: /.jsx?$/,
  loader: 'babel',
  exclude: /node_modules/
});

exports.createSassLoader = (config) => {
  const options = Object.assign({
    extract: false
  }, config);
  let loader = 'style!css!postcss!sass';
  if (options.extract) {
    loader = ExtractTextPlugin.extract('style', 'css!postcss!sass');
  }
  return {
    test: /\.scss$/,
    loader,
    exclude: /node_modules/
  };
};

exports.createImagesLoader = (query) => {
  const defaultQuery = {
    limit: 8192,
    name: '[path][name].[ext]'
  };

  return {
    test: /\.(png|jpg|svg)$/,
    loader: 'file',
    query: Object.assign(defaultQuery, query),
    exclude: /node_modules/
  };
};

exports.createFontsLoader = (query) => {
  const defaultQuery = {
    name: '[path][name].[ext]'
  };

  return {
    test: /\.(woff|woff2)$/,
    loader: 'file',
    query: Object.assign(defaultQuery, query),
    exclude: /node_modules/
  };
};

exports.createHtmlLoader = () => ({
  test: /\.html$/,
  loader: 'html',
  exclude: /node_modules/
});

/**
 *
 *
 * Plugins
 *
 *
 */
exports.noErrorPlugin = new webpack.NoErrorsPlugin();

exports.occurenceOrderPlugin = new webpack.optimize.OccurenceOrderPlugin();

exports.dedupePlugin = new webpack.optimize.DedupePlugin();

exports.uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    drop_console: true,
    warnings: false
  }
});

exports.createExtractCSSPlugin = (options) =>
  new ExtractTextPlugin(options);

exports.createDefinePlugin = (options) => (
  new webpack.DefinePlugin(Object.assign({
    // default values
  }, options))
);

exports.createCommonsChunkPlugin = (options) =>
  new webpack.optimize.CommonsChunkPlugin(options);

exports.createAssetsPlugin = (options) =>
  new AssetsPlugin(Object.assign({
    path: `./${dist}`,
    filename: 'assets.json'
  }, options));


/**
 *
 *
 * Dev serve config
 *
 *
 */
exports.devServer = {
  historyApiFallback: true,
  inline: true,
  progress: true,
  colors: true,
  port: 4000
};

/**
 *
 *
 * PostCSS config
 *
 *
 */
exports.postcss = [
  require('autoprefixer')({ browsers: ['last 2 versions'] })
];

exports.API_URL = 'http://localhost';
