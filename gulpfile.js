var gulp = require('gulp');
var webpack = require('gulp-webpack');
var jest = require('gulp-jest');
require('harmonize')()

gulp.task('build', function() {
  return gulp.src('./src/App.jsx')
    .pipe(
      webpack({
        output: {
          filename: 'bundle.js'
        },
        module: {
          loaders: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loaders: ['jsx-loader?insertPragma=React.DOM&harmony', 'babel']
            }
          ]
        },
        externals: {
          'react': 'React'
        },
        resolve: {
          extensions: ['', '.js', '.jsx']
        }
      }))
    .pipe(gulp.dest('./src/'));
});

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

gulp.task('watch', function() {
  gulp.watch(['*.jsx', '__tests__/*.js'], ['build', 'jest']);
});
