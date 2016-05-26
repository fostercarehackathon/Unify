/* eslint strict:0 */
'use strict';

const gulp = require('gulp');
const htmlreplace = require('gulp-html-replace');

gulp.task('assets:replace', () => {
  // this file will be generated from webpack, so make sure you run that first
  // better yet, just run npm run build and it will work
  const assets = require('./dist/assets.json');

  gulp.src('./index.html')
    .pipe(htmlreplace({
      css: assets.app.css,
      js: assets.app.js,
      vendor: assets.vendor.js
    }))
    .pipe(gulp.dest('dist/'));
});
