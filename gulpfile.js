var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');

gulp.task('default', ['build'], function () {});

gulp.task('build', function () {
  return gulp.src('static/javascripts/**/*.js')
    .pipe(ngAnnotate())
    .pipe(uglify({
      mangle: false,
      compress:true,
      output: {
        beautify: false
      }
    }))
    .pipe(gulp.dest('dist/static/javascripts/'));
});
