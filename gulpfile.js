// Utilities
const del = require('del');

// Gulp
const gulp = require('gulp');

// Gulp plugins
const concat = require('gulp-concat');
const gutil = require('gulp-util');
const header = require('gulp-header');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

// Misc/global vars
const opts = {
  destPath: './dist',
  concatName: 'ant-design-style-summary.css',
  autoprefixer: {
    browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'],
    cascade: false,
  },
  minRename: {
    suffix: '.min',
  },
};

gulp.task('build', () => {
  return gulp
    .src('./src/**/*.scss')
    .pipe(concat(opts.concatName))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename(opts.minRename))
    .pipe(gulp.dest('./dist'));
});

gulp.task('clear', cb => {
  return del(['dist', 'tmp', '**/*.log'], cb);
});

gulp.task('scss:watch', function() {
  gulp.watch('./src/**/*.scss', ['scss']);
});

gulp.task('default', gulp.series('clear', 'build'));
// gulp.task('build', ['createCSS']);
