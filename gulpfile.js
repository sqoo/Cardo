
var gulp = require('gulp')
var gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();
var connect = require('gulp-connect')
var less = require('gulp-less');
var path = require('path');


gulp.task('connect', function () {
    connect.server({
        root: 'public',
        port: 4000
    })
})

 
gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});


gulp.task('default', ['connect']);