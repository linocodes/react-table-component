var gulp = require('gulp');
var webpack = require('gulp-webpack');
var jest = require('gulp-jest');
var eslint = require('gulp-eslint');
require('harmonize')();

gulp.task('jest', function () {
  return gulp.src('__tests__').pipe(jest({
    "scriptPreprocessor": "../node_modules/babel-jest",
    "testFileExtensions": [
      "es6",
      "js",
      "jsx"
    ],
    "moduleFileExtensions": [
      "js",
      "json",
      "es6",
      "jsx"
    ],
    "unmockedModulePathPatterns": [
      "react"
    ]
  }));
});

gulp.task('lint', function(){
  return gulp.src('./src/**/*.js*')
    .pipe(eslint({
      globals: {
      "require": true
      },
      envs: {
        browser: true,
        es6: true
      },
      rules: {
        "quotes": [2, "single", "avoid-escape"],
        "no-console": 0
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
})

gulp.task('watch', function() {
  gulp.watch(['*.jsx', '__tests__/*.js'], ['build', 'jest']);
});
