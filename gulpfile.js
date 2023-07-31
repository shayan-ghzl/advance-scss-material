'use strict';

const gulp = require('gulp');
const dartSass = require('sass');
const gulpSass = require('gulp-sass');
const rename = require("gulp-rename");
const sass = gulpSass(dartSass);
// ----------------------------------------------
gulp.task('rename', () => {
  return gulp.src('./material/**/*.scss')
    .pipe(rename(function (path) {
      if (path.basename.startsWith('_')) {
        path.basename = path.basename.substr(1);
      }
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.series('rename')); 
// ----------------------------------------------
gulp.task("sass", async function () {
  return gulp.src(['./angular-material/form-field/form-field.scss'])
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist'));
});
// ----------------------------------------------
gulp.task("sass-second", async function () {
  return gulp.src(['./dist/form-field.scss'])
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/second'));
});