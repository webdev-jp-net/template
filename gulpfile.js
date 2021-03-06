const gulp = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const rimraf = require('rimraf');
const deleteEmpty = require('delete-empty');

const browserSync = require('browser-sync');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const gulpStylelint = require('gulp-stylelint');

const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

// Server
// --------------------
require('dotenv').config();
const httpsOption =
  process.env.HTTPS_KEY !== undefined
    ? { key: process.env.HTTPS_KEY, cert: process.env.HTTPS_CERT }
    : false;
gulp.task('server', cb => {
  browserSync.init({
    https: httpsOption,
    port: 8080,
    weinre: {
      port: 9090,
    },
    ui: false,
    open: 'external',
    notify: false,
    server: {
      baseDir: `preview`,
      index: [`index.html`],
    },
  });
  cb();
});

// Clean
// --------------------
gulp.task('clean:preview', cb => {
  rimraf(`preview/*`, cb);
});

// Copy
// --------------------
gulp.task('copy:static', () =>
  gulp
    .src([`static/**/*.*`])
    .pipe(gulp.dest(`preview`))
    .pipe(browserSync.stream())
);

// Html
// --------------------
gulp.task('html', () => {
  deleteEmpty.sync(`preview`);
  return gulp
    .src([`src/html/**/*.html`])
    .pipe(gulp.dest(`preview`))
    .pipe(browserSync.stream());
});

// Style
// --------------------
gulp.task('style', () =>
  gulp
    .src(`src/css/**/*.scss`)
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['ie >= 11', 'iOS >= 10', 'Android >= 4.4', 'last 1 versions'],
        cascade: false,
      })
    )
    .pipe(
      gulpStylelint({
        fix: true,
      })
    )
    .pipe(gulp.dest(`preview/assets/css`))
    .pipe(browserSync.stream())
);

// Script
// --------------------
gulp.task('script', () =>
  webpackStream(webpackConfig, webpack)
    .on('error', function handleError() {
      this.emit('end');
    })
    .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
    .pipe(gulp.dest(`preview`))
    .pipe(browserSync.stream())
);

// watch
// --------------------
gulp.task('watch', cb => {
  gulp.watch([`src/css/**/*.scss`], gulp.series('style'));
  gulp.watch([`src/js/**/*.js`], gulp.series('script'));
  gulp.watch([`src/html/**/*.html`], gulp.series('html'));
  cb();
});

// default
// --------------------
gulp.task(
  'default',
  gulp.series(
    'clean:preview',
    gulp.parallel('style', 'script', 'html'),
    gulp.parallel('watch', 'server')
  )
);
